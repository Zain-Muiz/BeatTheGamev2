const express = require("express");
const app = express();
const db = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Op, where } = require("sequelize");

module.exports.calculateTeamScores = async (req, res) => {
  const team1 = req.params.team1;
  const team2 = req.params.team2;
  let z = 0;
  await db.players
    .findAll({
      where: {
        [Op.or]: [{ team: team1 }, { team: team2 }],
      },
    })
    .then(async (result) => {
      playernamemap = [];
      playerscoremap = [];
      await result.forEach(async (player) => {
        playernamemap.push(player.name);
        playerscoremap.push(player.score);
      });
    });
  await db.myteams
    .findAll()
    .then((users) => {
      users.forEach(async (user) => {
        const { useremail, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11 } =
          user;
        selectedplayers = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
        let i = 1;
        let tscore = 0;
        selectedplayers.forEach((player) => {
          let index = playernamemap.indexOf(player);
          if (index != -1) {
            let playerscore1 = playerscoremap[index];
            let playerscore = parseInt(playerscore1);
            if (i == 1) {
              tscore += 2 * playerscore;
              i++;
              console.log("i1", tscore);
            } else if (i == 2) {
              tscore += 1.5 * playerscore;
              i++;
              console.log("i2", tscore);
            } else {
              tscore += playerscore;
            }
          }
        });

        await db.myteams
          .update({ tscore }, { where: { useremail } })
          .then(() => {});
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Error occurred while updating user score.",
      });
    });
  res.send("My Team Score updated successfully");
};

module.exports.addPlayerScore = async (req, res) => {
  const username = req.jwtusername;
  const team1 = req.params.team1;
  const team2 = req.params.team2;

  db.players
    .findAll({
      where: {
        [Op.or]: [{ team: team1 }, { team: team2 }],
      },
    })
    .then((result) => res.send(result))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while fetching players.",
      });
    });
};

module.exports.playerScoreSubmission = async (req, res) => {
  const playerScores = req.body;
  console.log(playerScores);
  console.log(Object.keys(playerScores));
  Object.keys(playerScores).forEach((player) => {
    console.log(player);
    let score = playerScores[player].score;
    let name = playerScores[player].name;
    db.players
      .update({ score }, { where: { name } })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            "Error occurred while updating player score. Try Again",
        });
      });
  });
};

module.exports.calculateUserTotalScore = async (req, res) => {
  db.myteams.findAll().then(async (result) => {
    await result.forEach(async (player) => {
      db.userlogins
        .findOne({ where: { useremail: player.useremail } })
        .then(async (user) => {
          if (user) {
            score = user.score + player.tscore;
            user.update({ score });
          }
        });
    });
    res.send("Total Team Score updated successfully");
  });
};

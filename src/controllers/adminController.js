const express = require("express");
const app = express();
const db = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

module.exports.calculateTeamScores = async (req, res) => {
  const team1 = req.params.team1;
  const team2 = req.params.team2;
  let z = 0;
  db.players
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
      console.log(playernamemap.indexOf("p2"));
    });
  db.myteams
    .findAll()
    .then((users) => {
      console.log(users.length);
      users.forEach((user) => {
        const { useremail, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11 } =
          user;
        selectedplayers = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
        let i = 1;
        let tscore = 0;
        selectedplayers.forEach((player) => {
          let index = playernamemap.indexOf(player);
          if (index != -1) {
            let playerscore = playerscoremap[index];
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
        db.myteams.update({ tscore }, { where: { useremail } }).then(() => {});
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Error occurred while updating user score.",
      });
    });
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

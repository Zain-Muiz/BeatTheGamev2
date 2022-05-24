const express = require("express");
const app = express();
const db = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

module.exports.calculateTeamScores = async (req, res) => {
  const team1 = req.params.team1;
  const team2 = req.params.team2;
  db.players
    .findAll({
      where: {
        [Op.or]: [{ team: team1 }, { team: team2 }],
      },
    })
    .then((result) => {
      playersnamelist = result.name;
      playerscorelist = result.score;
    });
  db.myteams
    .findAll()
    .then((users) => {
      users.forEach((user) => {
        const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11 } = user;
        selectedplayers = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
        let tscore = 0;
        selectedplayers.forEach((player) => {
          if (player == result.name) {
            tscore += result.score;
          }
          db.myteams.update(tscore, { where: { name: player } }).then(() => {
            res.send("Scores added successfully");
          });
        });
      });
    })
    .catch((err) => {
      console.log(ValidationErrorItem);
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
  playerScores.forEach((player) => {
    score = player.score;
    db.players
      .update(score, { where: { name: player.name } })
      .then((result) => res.send(result))
      .catch((err) => {
        console.log(ValidationErrorItem);
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            "Error occurred while updating player score. Try Again",
        });
      });
  });
};

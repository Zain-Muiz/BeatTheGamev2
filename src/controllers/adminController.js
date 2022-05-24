const express = require("express");
const app = express();
const db = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.calculateTeamScores = async (req, res) => {
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
        db.myteams
          .update({
            score: 100,
          })
          .then(() => {
            res.send("Migrate successfull");
          });
      });
    })
    .catch((err) => {
      console.log(ValidationErrorItem);
      console.log(err);
      res.status(500).send({
        message: err.message || "Error occurred while creating the User Login.",
      });
    });
};

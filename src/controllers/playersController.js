const express = require("express");
const app = express();
const db = require("../db/models");
const { Op } = require("sequelize");

module.exports.GetAllPlayers = async (req, res) => {
  const username = req.jwtusername;
  const team1 = req.params.team1;
  const team2 = req.params.team2;

  db.myteams.findOne({ where: { username: username } }).then((user) => {
    if (user) {
      res.status(308).send({
        message: "Team already created",
      });
    } else {
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
    }
  });
};

const express = require("express");
const app = express();
const db = require("../db/models");
const { Op } = require("sequelize");

module.exports.GetAllPlayers = async (req, res) => {
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

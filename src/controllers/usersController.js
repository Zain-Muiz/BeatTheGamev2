const express = require("express");
const { ValidationErrorItem } = require("sequelize");
const app = express();
const db = require("../db/models");
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");

//POST USERS

module.exports.createUserLogin = async (req, res) => {
  db.registeredusers
    .findAll()
    .then((users) => {
      users.forEach(async (user) => {
        const { name, username, useremail, batch, phone, favTeam, password } =
          user;
        const hashedPassword = await bcrypt.hash(password, 8);
        db.userlogins
          .create({
            name,
            username,
            useremail,
            batch,
            phone,
            favTeam,
            pass: hashedPassword,
            password,
            flag: 1,
            score: 0,
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

module.exports.createUserTeam = async (req, res) => {
  const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11 } = req.body;
  const useremail = req.jwtemail;
  const username = req.jwtusername;
  console.log(username);

  db.myteams
    .create({
      useremail: useremail,
      username,
      p1: p1,
      p2: p2,
      p3: p3,
      p4: p4,
      p5: p5,
      p6: p6,
      p7: p7,
      p8: p8,
      p9: p9,
      p10: p10,
      p11: p11,
      tscore: 0,
    })
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(ValidationErrorItem);
      console.log(err);
      res.status(500).send({
        message: err.message || "Error occurred while creating Team. Try Again",
      });
    });
};

module.exports.getLeaderboard = async (req, res) => {
  db.userlogins
    .findAll({
      attributes: ["username", "batch", "score"],
      order: [["score", "DESC"]],
      limit: 10,
    })
    .then((leaders) => {
      res.send(leaders);
    })
    .catch((err) => {
      console.log(ValidationErrorItem);
      console.log(err);
      res.status(500).send({
        message: err.message || "Error occurred while fetching leaderboard.",
      });
    });
};

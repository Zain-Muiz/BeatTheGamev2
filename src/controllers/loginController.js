const express = require("express");
const app = express();
const db = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.handleLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "No fields can be empty",
    });
  }

  db.userlogins.findOne({ where: { useremail: email } }).then(async (user) => {
    if (!user) {
      res.status(401).send({
        message: `Invalid Login Credentials.`,
      });
    } else if (!(await bcrypt.compare(password, user.pass))) {
      res.status(401).send({
        message: `Invalid Login Credentials.`,
      });
    } else {
      const username = user.username;
      const score = user.score;
      const token = jwt.sign({ email, username }, process.env.jwtsign, {
        expiresIn: "7d",
      });
      res.json({ token, username, score });
    }
  });
};

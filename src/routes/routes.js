const express = require("express");
const app = express();
const AuthController = require("./controllers/AuthController");
const UsersController = require("./controllers/UsersController");
const jwtVerify = require("./utils/tokenVerification");

const _routes = [["/users", UsersController]];

app.use("/auth", AuthController);
_routes.forEach((route) => {
  const [url, controller] = route;
  app.use(url, jwtVerify, controller);
});

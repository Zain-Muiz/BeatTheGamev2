const express = require("express");
const app = express();
const router = express.Router();
const PlayersController = require("../controllers/playersController");
const verifyJWT = require("../utils/jwtVerify");

//For adding new users
// router.post("/create", verifyJWT, usersController.createUserTeam);

// To get specific user based on id
router.get("/:team1/:team2", verifyJWT, PlayersController.GetAllPlayers);

module.exports = router;

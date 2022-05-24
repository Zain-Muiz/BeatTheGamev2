const express = require("express");
const app = express();
const router = express.Router();
const usersController = require("../controllers/usersController");
const verifyJWT = require("../utils/jwtVerify");

//For adding new users
router.post("/myteam", verifyJWT, usersController.createUserTeam);

router.get("/myteam", verifyJWT, usersController.getUserTeam);

// To get specific user based on id
router.get("/migratetouserlogin", usersController.createUserLogin);

// To get all users .
router.get("/leaderboard", usersController.getLeaderboard);

module.exports = router;

const express = require("express");
const app = express();
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get(
  "/calculateuserscore/:team1/:team2",
  adminController.calculateTeamScores
);
router.get("/addplayerscore/:team1/:team2", adminController.addPlayerScore);
router.put("/submitplayerscore", adminController.playerScoreSubmission);

module.exports = router;

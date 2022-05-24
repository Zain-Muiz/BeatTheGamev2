const express = require("express");
const app = express();
const router = express.Router();
const loginController = require("../controllers/loginController");

//For adding new users
router.post("/", loginController.handleLogin);

module.exports = router;

const express = require("express");
const app = express();
const router = express.Router();
const adminController = require("../controllers/adminController");

//For adding new users
router.post("/", adminController.handleLogin);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  checkToken,
  dataController,
  apiController,
} = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/login", dataController.login, apiController.auth);
router.post("/", dataController.create, apiController.auth);
router.get("/check-token", ensureLoggedIn, checkToken);

module.exports = router;

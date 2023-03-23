// Requirements and Controllers

const express = require("express");
const router = express.Router();

const {
  dataController,
  apiController,
} = require("../../controllers/api/categories");

router.use((req, res, next) => {
  res.locals.data = {};
  next();
});

// Routes:

// Index: api/ideas
router.get("/", dataController.index, apiController.index);

// Show: api/ideas/:id
router.get("/:id", dataController.show, apiController.show);

module.exports = router;

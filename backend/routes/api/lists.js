const express = require("express");
const router = express.Router();

const {
  dataController,
  apiController,
} = require("../../controllers/api/lists");

router.use((req, res, next) => {
  res.locals.data = {};
  next();
});

// Index: api/lists
router.get("/", dataController.index, apiController.index);

// Delete: /api/lists/:id
router.delete("/:id", dataController.destroy, apiController.show);

// Update: /api/lists/:id
router.put("/:id", dataController.update, apiController.show);

// Create /api/lists
router.post("/", dataController.create, apiController.show);

// Show /api/lists/:id
router.get("/:id", dataController.show, apiController.show);

// Update to add ideas: /api/lists/:id
router.put("/:id", dataController.addIdeaToList, apiController.show);

module.exports = router;

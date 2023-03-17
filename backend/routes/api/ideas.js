// Requirements and Controllers

const express = require('express');
const router = express.Router();

const {
    dataController, 
    apiController, 
} = require('../../controllers/api/ideas');

router.use((req, res, next) => {
    res.locals.data = {};
    next();
});

// Routes:

// Index: api/ideas
router.get("/", dataController.index, apiController.index);

// Delete: api/ideas/:id
router.delete("/:id", dataController.destroy, apiController.show);

// Update: api/ideas/:id
router.put("/:id", dataController.update, apiController.show);

// Create: api/ideas
router.post("/", dataController.create, apiController.show);

// Show: api/ideas/:id
router.get("/:id", dataController.show, apiController.show);

module.exports = router;
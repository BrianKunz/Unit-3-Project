const express = require('express');
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


// Update: /api/lists/:id


// Create /api/lists
router.post("/", dataController.create, apiController.show);

// Show /api/lists/:id
router.get("/:id", dataController.show, apiController.show);


module.exports = router
/**
 * Models
 */

const Categories = require("../../models/category");

const dataController = {
  async index(req, res, next) {
    try {
      const foundCats = await Categories.find({});
      res.locals.data.categories = foundCats;
      next();
    } catch (error) {
      res.status(400).send({
        msg: error.message,
      });
    }
  },
  async show(req, res, next) {
    try {
      const foundCat = await Categories.findById(req.params.id);
      res.locals.data.category = foundCat;
      next();
    } catch (error) {
      res.status(400).send({
        msg: error.message,
      });
    }
  },
};

const apiController = {
  index(req, res, next) {
    const foundCategories = res.locals.data.categories;
    res.json(foundCategories);
  },
  show(req, res, next) {
    res.json(res.locals.data.category);
  },
};

module.exports = { dataController, apiController };

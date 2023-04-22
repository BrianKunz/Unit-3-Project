/**
 * Models
 */

const Idea = require("../../models/idea");

const dataController = {
  // Index: Get
  async index(req, res, next) {
    try {
      const foundIdeas = await Idea.find({}).populate("category").exec();
      res.locals.data.ideas = foundIdeas;
      next();
    } catch (error) {
      res.status(400).send({
        msg: error.message,
      });
    }
  },

  // Delete: Delete
  async destroy(req, res, next) {
    try {
      const deletedIdea = await Idea.findByIdAndDelete(req.params.id);
      res.locals.data.idea = deletedIdea;
      next();
    } catch (error) {
      res.status(400).send({
        msg: error.message,
      });
    }
  },

  // Update: Put
  async update(req, res, next) {
    try {
      const updatedIdea = await Idea.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.locals.data.idea = updatedIdea;
      next();
    } catch (error) {
      res.status(400).send({
        msg: error.message,
      });
    }
  },

  // Create: Post
  async create(req, res, next) {
    try {
      req.body.username = req.user.username;
      const createdIdea = await Idea.create(req.body);
      res.locals.data.idea = createdIdea;
      next();
    } catch (error) {
      res.status(400).send({
        msg: error.message,
      });
    }
  },

  // Show: Get
  async show(req, res, next) {
    try {
      const foundIdea = await Idea.findById(req.params.id);
      res.locals.data.idea = foundIdea;
      next();
    } catch (error) {
      res.status(400).send({
        msg: error.message,
        output: "Could not find an idea with that ID",
      });
    }
  },
};
const apiController = {
  index(req, res, next) {
    const foundIdeas = res.locals.data.ideas;
    res.json(foundIdeas);
  },
  show(req, res, next) {
    res.json(res.locals.data.idea);
  },
};

module.exports = { dataController, apiController };

const List = require("../../models/lists");

const dataController = {
  // Index: Get
  async index(req, res, next) {
    try {
      const foundLists = await List.find({}).populate("ideas").exec();
      console.log({ foundLists });
      res.locals.data.lists = foundLists;
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
      const deletedList = await List.findByIdAndDelete(req.params.id);
      res.locals.data.list = deletedList;
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
      const { name, ideas } = req.body;
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        { name, ideas },
        { new: true }
      );
      res.locals.data.list = updatedList;
      next();
    } catch (error) {
      res.status(400).send({
        msg: error.message,
      });
    }
  },

  // Add Idea to List: Put
  async addIdeaToList(req, res, next) {
    try {
      const listId = req.params.id;
      const ideaId = req.body.ideaId;
      const list = await List.findById(listId);
      console.log("list before:", list);
      list.ideas.push(ideaId);
      const updatedList = await list.save();
      console.log("updated list:", updatedList);
      res.locals.data.list = updatedList;
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
      const createList = await List.create(req.body);
      res.locals.data.list = createList;
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
      const foundList = await List.findById(req.params.id)
        .populate("ideas")
        .exec();
      res.locals.data.list = foundList;
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
    res.json(res.locals.data.lists);
  },
  show(req, res, next) {
    res.json(res.locals.data.list);
  },
};

module.exports = { dataController, apiController };

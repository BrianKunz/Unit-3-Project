/**
 * Models
 */
const List = require('../../models/lists');

const dataController = {
    // Index: Get
    async index(req, res, next) {
        try {
          const foundLists = await List.find({});
          console.log({foundLists});
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
            
        } catch (error) {
            
        }
    },
    
    // Update: Put
    async update(req, res, next) {
        try {
            
        } catch (error) {
            
        }
    },

    // Create: Post
    async create(req, res, next) {
        try {
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
          const foundList = await List.findById(req.params.id);
          res.locals.data.list = foundList
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


module.exports = {dataController, apiController}
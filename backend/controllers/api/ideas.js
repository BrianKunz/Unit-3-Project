/**
 * Models
 */

const Idea = require('../../models/idea');

const dataController = {
    // Index: Get
    async index(req, res, next) {
        try {
            const foundIdeas = await Idea.find({})
            console.log({ foundIdeas });
            res.locals.data.ideas = foundIdeas;
        } catch (error) {
            res.status(400).send({
                msg: error.message,
            });
        };
    },

    // Delete: Delete


    // Update: Put


    // Create: Post
    async create(req, res, next) {
        try {
            const createdIdea = await Idea.create(req.body);
            res.locals.data.idea = createdIdea;
            next();
        } catch (error) {
            res.status(400).send({
                msg: error.message, 
            });
        };
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
                output: "Could not find an idea with that ID"
            })
        }
    }

}
const apiController = {
    index(req, res, next) {
        res.json(res.locals.data.ideas);
    }, 
    show(req, res, next) {
        res.json(res.locals.data.idea);
    },
};

module.exports = {dataController, apiController};
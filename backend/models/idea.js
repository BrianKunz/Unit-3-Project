const {model} = require('mongoose');

require('./category');

const ideaSchema = require('./ideaSchema');

module.exports = model("Idea", ideaSchema)
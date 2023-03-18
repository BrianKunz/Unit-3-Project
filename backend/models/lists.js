const ideaSchema = require("./ideaSchema")

const {Schema, model} = require('mongoose');

const listSchema = new Schema({
    name: {
        type: String, 
        maxLength: 30,
        // required: true,
    },
    ideas: [ideaSchema], 
},{
    timestamps: true,
});

const List = model("List", listSchema);

module.exports = List;
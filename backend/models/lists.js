const ideaSchema = require("./ideaSchema")

const {Schema, model} = require('mongoose');

const listSchema = new Schema({
    name: {
        type: String, 
        maxLength: 30,
        // required: true,
    },
    qty: { 
        type: Number, 
        default: 1 
    },
    ideas: ideaSchema, type: Array,
},{
    timestamps: true,
});

const List = model("List", listSchema);

module.exports = List;
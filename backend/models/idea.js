const category = require('./category')

const {Schema, model} = require('mongoose');

const ideaSchema = new Schema({
    title: { 
        type: String, 
        maxLength: 30, 
        required: true, 
    }, 
    img: { type: String },
    description: { type: String, required: true },
    category: {type: Schema.Types.ObjectId, ref: 'Category'}
}, {
    timestamps: true, 
});

const Idea = model('Idea', ideaSchema);

module.exports = Idea;
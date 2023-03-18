const category = require('./category')

const Schema = require('mongoose').Schema;

const ideaSchema = new Schema({
    title: { 
        type: String, 
        maxLength: 30, 
        required: true, 
    }, 
    img: { type: String },
    description: { type: String, required: true },
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    link: {type: String}
}, {
    timestamps: true, 
});



module.exports = ideaSchema;
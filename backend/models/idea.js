const { Schema, model } = require("mongoose");

require("./category");

const ideaSchema = new Schema(
  {
    title: {
      type: String,
      maxLength: 30,
      required: true,
    },
    img: { type: String },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    link: { type: String },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Idea = model("Idea", ideaSchema);

module.exports = Idea;

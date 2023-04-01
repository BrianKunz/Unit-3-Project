require("./idea");

const { Schema, model } = require("mongoose");

const listSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: 30,
      required: true,
    },
    ideas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Idea",
      },
    ],
    username: { type: String, required: true },
  },
  {
    timestamps: true,
    // toJSON: true,
  }
);

const List = model("List", listSchema);

module.exports = List;

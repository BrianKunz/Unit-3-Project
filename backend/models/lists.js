require("./idea");

const { Schema, model } = require("mongoose");

const listSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: 30,
      // required: true,
    },
    ideas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Idea",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const List = model("List", listSchema);

module.exports = List;

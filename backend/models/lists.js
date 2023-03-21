require("./idea");

const { Schema, model } = require("mongoose");

const listSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: 30,
      // required: true,
    },
    // qty: { type: Number, default: 1 },
    ideas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Idea",
      },
    ],
  },
  {
    timestamps: true,
    // toJSON: true,
  }
);

const List = model("List", listSchema);

module.exports = List;

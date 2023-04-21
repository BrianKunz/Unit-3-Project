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

listSchema.methods.addIdeaToList = async function (idea) {
  if (this.ideas.indexOf(idea._id) === -1) {
    this.ideas.push(idea._id);
    await this.save();
  }
};

const List = model("List", listSchema);

module.exports = List;

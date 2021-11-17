const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
// schema
const BoardSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  img: { type: String },
  // comments: [
  //   {
  //     text: { type: String },
  //     postedBy: { type: ObjectId, ref: "User" },
  //   },
  // ],
  postedBy: { type: ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date },
  viewcount: {
    type: Number,
    default: 0,
  },
});

const Board = mongoose.model("post", BoardSchema);
module.exports = Board;

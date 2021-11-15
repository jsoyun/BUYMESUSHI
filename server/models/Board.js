// models/Post.js

var mongoose = require("mongoose");

// schema
var postSchema = mongoose.Schema({
  // 1
  title: { type: String, required: true },
  body: { type: String, required: true },
  comments: [
    {
      text: { type: String },
      postedBy: { type: ObjectId, ref: "User" },
    },
  ], // 2
  postedBy: { type: ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

// model & export
var Post = mongoose.model("post", postSchema);
module.exports = Post;

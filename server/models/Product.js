const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  //유저 연결
  // createdBy: { type: ObjectId, ref: "User" },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  videoID: {
    default: 0,
    type: Number,
  },
  productID: {
    required: true,
    type: Number,
  },
  productUrl: {
    required: true,
    type: String,
  },
  imgUrl: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);

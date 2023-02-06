const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Products", productSchema);

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    type: String,
    required: true,
    // default: "https://placehold.co/600x400/000000/FFFFFF/png",
  },
});

module.exports = mongoose.model("Product", ProductSchema);

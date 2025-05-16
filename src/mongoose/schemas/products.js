import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  item: String,
  src: String,
  contain: String,
  price: Number,
  description: String,
});

export const Product = mongoose.model("Products", ProductSchema)

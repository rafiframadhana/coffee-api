import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Product } from "./schemas/products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
mongoose
  .connect(process.env.MONGO_URI, { dbName: "coffee_shop" })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(`Database Error: ${err}`));

// Middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: "*", methods: ["GET"] }));

// Routes
app.get("/api/coffee", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    res.sendStatus(404);
  }
});

app.get("/api/coffee/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    res.status(200).send(product);
  } catch (err) {
    res.sendStatus(404);
  }
});

app.post("/api/coffee", async (req, res) => {
  const { body } = req;
  const newProduct = new Product(body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    res.sendStatus(400);
  }
});

// SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

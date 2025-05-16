import { Router } from "express";
import { Product } from "../mongoose/schemas/products.js";

const router = Router();

// Routes
router.get("/api/coffee", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    res.sendStatus(404);
  }
});

router.get("/api/coffee/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    res.status(200).send(product);
  } catch (err) {
    res.sendStatus(404);
  }
});

router.post("/api/coffee", async (req, res) => {
  const { body } = req;
  const newProduct = new Product(body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    res.sendStatus(400);
  }
});

export default router;
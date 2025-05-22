import { Router } from "express";
import { Product } from "../mongoose/schemas/products.js";

const router = Router();

// Routes
router.get("/api/coffee", async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) return sendStatus(404);

    res.status(200).send(products);
  } catch (err) {
    res.sendStatus(404);
  }
});

router.get("/api/coffee/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);

    if (!product) return sendStatus(404);

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

router.patch("/api/coffee/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProduct) return res.sendStatus(404);

    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete("/api/coffee/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) return res.sendStatus(404);

    res.status(200).send(deletedProduct);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

export default router;

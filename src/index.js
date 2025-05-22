import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import coffeeRouter from "./routes/coffee.js";

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
app.use(
  cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE", "PATCH"] })
);

// Routes
app.use(coffeeRouter);

// SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

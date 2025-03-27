import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {products} from "./data/products.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.get("/api/coffee", (req, res)=>{
    res.json(products)
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
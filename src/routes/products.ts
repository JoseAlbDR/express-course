import express from "express";
import { products as productsData } from "../data/data";
import { Product } from "../types";
const products: Product[] = productsData as Product[];
const router = express.Router();

router.get("/", (_req, res) => {
  res.json(products);
});

export default router;

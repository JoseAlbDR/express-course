import express from "express";
import { getProducts } from "../services/productService";

const router = express.Router();

router.get("/", (_req, res) => {
  const products = getProducts();
  res.json(products);
});

export default router;

import express from "express";
import { products as productsData } from "./src/data/data";
import { Product } from "./src/types";
const app = express();
app.use(express.json());

const products: Product[] = productsData as Product[];

const PORT = 3000;

app.get("/products", (_req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

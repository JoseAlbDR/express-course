import express from "express";
import productService from "../services/productService";

const router = express.Router();

router.get("/", (_req, res) => {
  const products = productService.getProducts();
  res.json(products);
});

router.get("/:productId", (req, res) => {
  const { productId } = req.params;

  const product = productService.getProduct(+productId);

  product
    ? res.json(product)
    : res
        .status(404)
        .send({
          status: "FAILURE",
          message: `No product with id ${productId}`,
        });
});

export default router;

import express from "express";
import productService from "../services/productService";
import questionController from "../controller/questionController";

const router = express.Router();

router.get("/", questionController.getProducts);

router.get("/:productId", (req, res) => {
  const { productId } = req.params;

  const product = productService.getProduct(+productId);

  product
    ? res.json(product)
    : res.status(404).send({
        status: "FAILURE",
        message: `No product with id ${productId}`,
      });
});

export default router;

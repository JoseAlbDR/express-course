import express from "express";
import productController from "../controller/productController";

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/:productId", productController.getProduct);

router.get("/:productId/reviews/:reviewId", productController.getReview);

export default router;

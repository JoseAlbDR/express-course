import express from "express";
import { Request, Response } from "express";
import productController from "../controller/productController";

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/:productId", productController.getProduct);

router.get("/:productId/reviews/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Complex query");
});

export default router;

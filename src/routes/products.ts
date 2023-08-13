import express from "express";
import questionController from "../controller/questionController";

const router = express.Router();

router.get("/", questionController.getProducts);

router.get("/:productId", questionController.getProduct);

export default router;

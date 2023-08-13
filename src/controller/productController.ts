import { Request, Response } from "express";
import { ProductParams } from "../interfaces/types";
import { errorHandler } from "../utils/error";
import productService from "../services/productService";

const getProducts = (_req: Request, res: Response) => {
  const products = productService.getProducts();
  res.send({ status: "OK", data: products });
};

const getProduct = (req: ProductParams, res: Response) => {
  const { productId } = req.params;

  if (!productId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter 'questionId' can not be empty" },
    });
  }

  try {
    const product = productService.getProduct(+productId);
    res.send({ status: "OK", data: product });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getReview = (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Complex query");
};

export default { getProducts, getProduct, getReview };

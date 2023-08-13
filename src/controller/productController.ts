import { Request, Response } from "express";
import { ProductParams } from "../interfaces/types";
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

  const product = productService.getProduct(+productId);
  res.send({ status: "OK", data: product });
};

export default { getProducts, getProduct };

import express, { Response } from "express";
import { SearchParams } from "../interfaces/types";
import { products } from "../data/data";

const router = express.Router();

router.get("/", (req: SearchParams, res: Response) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }

  if (!sortedProducts.length) {
    // res.status(200).send("No products found");
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json({ success: true, data: sortedProducts });
});

export default router;

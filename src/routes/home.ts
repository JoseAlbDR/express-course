import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

export default router;

import express from "express";

const router = express.Router();

router.get("*", (_req, res) => {
  res.status(404).send("<h1>Page Not Found</h1><a href='/'>Back to Home</a>");
});

export default router;

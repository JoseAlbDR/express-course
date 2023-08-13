import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello world");
});

export default router;

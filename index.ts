import express, { NextFunction, Request, Response } from "express";
import productsRouter from "./src/routes/products";
// import homeRouter from "./src/routes/home";
import notFoundRouter from "./src/routes/notFound";
import queryRouter from "./src/routes/query";

const app = express();
app.use(express.json());

const PORT = 3000;

// app.use("/", homeRouter);

const logger = (req: Request, _res: Response, next: NextFunction) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (_req: Request, res: Response) => {
  res.send("Home");
});
app.get("/about", logger, (_req: Request, res: Response) => {
  res.send("About");
});

app.use("/api/products", productsRouter);
app.use("/api/query", queryRouter);
app.use("*", notFoundRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

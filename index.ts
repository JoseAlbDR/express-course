import express, { Request, Response } from "express";
import productsRouter from "./src/routes/products";
// import homeRouter from "./src/routes/home";
import notFoundRouter from "./src/routes/notFound";
import queryRouter from "./src/routes/query";
import { logger } from "./logger";
import { authorize } from "./authorize";
import morgan from "morgan";

const app = express();
app.use(express.json());

const PORT = 3000;

// app.use("/", homeRouter);

app.use("/api/products", productsRouter);
app.use("/api/query", queryRouter);
app.use("/api/items", authorize, logger);
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(morgan("tiny"));

// static assets

app.use(express.static("./methods-public"));

app.get("/", (_req: Request, res: Response) => {
  res.send("Home");
});

app.get("/about", (_req: Request, res: Response) => {
  res.send("About");
});

app.get("/api/items", (_req: Request, res: Response) => {
  res.send("Items");
});
app.use("*", notFoundRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

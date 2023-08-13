import express from "express";
import productsRouter from "./src/routes/products";
import homeRouter from "./src/routes/home";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/", homeRouter);

app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

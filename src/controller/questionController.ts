import { MinimalProduct } from "../interfaces/types";
import productService from "../services/productService";

const getProducts = (
  _req: unknown,
  res: { send: (arg0: { status: string; data: MinimalProduct[] }) => void }
) => {
  const products = productService.getProducts();
  res.send({ status: "OK", data: products });
};

export default { getProducts };

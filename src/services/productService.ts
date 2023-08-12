import { products as productsData } from "../data/data";
import { Product } from "../interfaces/types";
const products: Product[] = productsData;

const getProducts = (): Product[] => {
  return products;
};

const getProduct = (id: number): Product | undefined => {
  const product: Product | undefined = products.find(
    (product) => product.id === id
  );
  return product;
};

export default { getProducts, getProduct };

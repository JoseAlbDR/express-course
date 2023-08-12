import { products as productsData } from "../data/data";
import { Product } from "../interfaces/types";
const products: Product[] = productsData as Product[];

export const getProducts = (): Product[] => {
  return products;
};

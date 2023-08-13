import { products as productsData } from "../data/data";
import { MinimalProduct, Product } from "../interfaces/types";
const products: Product[] = productsData;

const getProducts = (): MinimalProduct[] => {
  const minimalProducts: MinimalProduct[] = products.map(
    ({ name, image, price }) => ({ name, image, price })
  );
  return minimalProducts;
};

const getProduct = (id: number): Product | undefined => {
  const product: Product | undefined = products.find(
    (product) => product.id === id
  );
  return product;
};

export default { getProducts, getProduct };

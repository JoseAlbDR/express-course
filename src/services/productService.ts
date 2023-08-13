import { products as productsData } from "../data/data";
import { MinimalProduct, Product } from "../interfaces/types";
const products: Product[] = productsData;

const getProducts = (): MinimalProduct[] => {
  const minimalProducts: MinimalProduct[] = products.map(
    ({ id, name, image, price }) => ({ id, name, image, price })
  );
  return minimalProducts;
};

const getProduct = (id: number): Product => {
  const product: Product | undefined = products.find(
    (product) => product.id === id
  );

  if (!product) {
    throw { status: 400, message: `Can't find product with id: ${id}` };
  }

  return product;
};

export default { getProducts, getProduct };

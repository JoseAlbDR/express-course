export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  desc: string;
}

export type NonIdProduct = Omit<Product, "id">;
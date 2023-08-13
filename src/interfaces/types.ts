export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  desc: string;
}

export type MinimalProduct = Omit<Product, "id" | "desc">;

export interface People {
  id: number;
  name: string;
}

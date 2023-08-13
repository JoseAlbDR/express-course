export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  desc: string;
}

export type MinimalProduct = Omit<Product, "desc">;

export interface People {
  id: number;
  name: string;
}

export type ProductParams = {
  params: {
    productId: string;
  };
};

export type SearchParams = {
  query: {
    search?: string;
    limit?: string;
  };
};

export type CustomError = {
  status: number;
  message: string;
};

export interface User {
  name: string;
  id: number;
}
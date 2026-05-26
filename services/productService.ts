import { Product } from "../types/product";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: Product[] = await response.json();

    return data;
  } catch (error) {
    console.error("Product API Error:", error);
    throw error;
  }
};

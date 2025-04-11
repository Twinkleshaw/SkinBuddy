import { createContext, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const getAllProductsByCategory = async (category) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/product/byCategory?category=${category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch products. Status:", response.status);
        return;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getBestsellerProducts = async (bestseller) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/product/bestseller?bestseller=${bestseller}`
      );
      if (!response.ok) {
        console.error(
          "Failed to fetch bestseller products. Status:",
          response.status
        );
        return;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ getAllProductsByCategory, getBestsellerProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

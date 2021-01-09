import React, { useState, createContext, useEffect } from "react";

export const ShopContext = createContext();

export const ShopState = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = async () => {
        const response = await fetch(
          `https://api-movie-my.herokuapp.com/movies`
        );
        const data = await response.json();
        console.log(data)
        setProducts(data);
      };

      useEffect(() => {
        getProducts();
      }, []);

    return (
        <ShopContext.Provider
        value={{
            products,
            setProducts,
            isLoading,
            setIsLoading,
        }}
        >
        {children}
        </ShopContext.Provider>
    )
}
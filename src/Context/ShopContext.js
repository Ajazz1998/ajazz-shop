import React, { useState, createContext, useEffect } from "react";

export const ShopContext = createContext();

export const ShopState = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    const getProducts = async () => {
      setIsLoading(true);
        const response = await fetch(
          `https://api-movie-my.herokuapp.com/movies`
        );
        const data = await response.json();
        console.log(data)
        setProducts(data);
        setIsLoading(false);
      };

      useEffect(() => {
        getProducts();
      }, []);

        // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

     // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <ShopContext.Provider
        value={{
            products,
            setProducts,
            isLoading,
            setIsLoading,
            currentPage, 
            setCurrentPage,
            postsPerPage,
            currentPosts,
            paginate,
        }}
        >
        {children}
        </ShopContext.Provider>
    )
}
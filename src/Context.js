import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState(20);
  const [pageCount, setPageCount] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const apiKey = "oKf3ItP74Z0Ym5rA4n98Yra0VtDeQL0pV10f7oj6M9s";
    const query = `query=${searchQuery}&`;
    const count = `per_page=${perPage}&`;
    const page = `page=${pageCount}&`;

    if (searchQuery === "") {
      fetch(
        `https://api.unsplash.com/photos?${count}${page}client_id=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => setAllProducts(data));
    } else {
      fetch(
        `https://api.unsplash.com/search/photos?${query}${count}${page}client_id=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => setAllProducts(data.results));
    }
  }, [searchQuery, perPage, pageCount, favoriteItems]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("products"));
    setCartItems(storedItems || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    setFavoriteItems(favorites || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  function addToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function toggleFavorited(id) {
    const updatedProducts = allProducts.map((product) => {
      if (product.id === id) {
        return { ...product, liked_by_user: !product.liked_by_user };
      }
      return product;
    });
    setAllProducts(updatedProducts);
  }
  function addToFavorites(product) {
    setFavoriteItems((prevItems) => [...prevItems, product]);
  }

  function removeFromFavorites(id) {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  console.log(allProducts);

  return (
    <Context.Provider
      value={{
        allProducts,
        toggleFavorited,
        setAllProducts,
        currentProduct,
        setCurrentProduct,
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        cartItems,
        addToCart,
        removeFromCart,
        perPage,
        setPerPage,
        searchQuery,
        setSearchQuery,
        pageCount,
        setPageCount,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

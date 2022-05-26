import React, { useContext } from "react";

import { Context } from "../Context";
import Product from "../components/Product";

function Favorites() {
  const { favoriteItems } = useContext(Context);

  const favorites = favoriteItems.map((item) => (
    <Product className="favorite" key={item.id} product={item} />
  ));
  const noFavorites = () => {
    if (favorites.length === 0) {
      return <p>You don't have any favorited photos!</p>;
    }
  };
  console.log(favorites);
  return (
    <div className="favorites page">
      <h1>Your Favorites</h1>
      <div className="favorites-container">
        {noFavorites()}
        {favorites}
      </div>
    </div>
  );
}

export default Favorites;

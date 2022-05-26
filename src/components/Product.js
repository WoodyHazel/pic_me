import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCartPlus,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

function Product({ product, className }) {
  const [hovered, setHovered] = useState(false);
  const {
    favoriteItems,
    toggleFavorited,
    addToFavorites,
    removeFromFavorites,
    setCurrentProduct,
    addToCart,
    cartItems,
    removeFromCart,
  } = useContext(Context);

  function heartIcon() {
    if (
      product.liked_by_user ||
      favoriteItems.find((item) => item.id === product.id)
    ) {
      return (
        <FontAwesomeIcon
          size="2x"
          icon={solidHeart}
          onClick={() => {
            toggleFavorited(product.id);
            removeFromFavorites(product.id);
          }}
          className="icon"
        />
      );
    } else if (hovered) {
      return (
        <FontAwesomeIcon
          size="2x"
          icon={emptyHeart}
          onClick={() => {
            toggleFavorited(product.id);
            addToFavorites(product);
          }}
          className="icon"
        />
      );
    }
  }
  function cartIcon() {
    if (cartItems.some((item) => item.id === product.id)) {
      return (
        <FontAwesomeIcon
          size="2x"
          icon={faCartShopping}
          onClick={() => removeFromCart(product.id)}
          className="icon"
        />
      );
    } else if (hovered) {
      return (
        <FontAwesomeIcon
          size="2x"
          icon={faCartPlus}
          onClick={() => addToCart(product)}
          className="icon"
        />
      );
    }
  }

  return (
    <div
      className={`product ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to="/product">
        <img
          src={product.urls.regular}
          alt=""
          onClick={() => setCurrentProduct(product)}
        />
      </Link>
      {heartIcon()}
      {cartIcon()}
      {hovered && (
        <span className="dimensions">
          {product.width}W x {product.height}H
        </span>
      )}
    </div>
  );
}

export default Product;

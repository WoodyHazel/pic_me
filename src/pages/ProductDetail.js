import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { Context } from "../Context";

function ProductDetail() {
  const { currentProduct, addToCart, toggleFavorited } = useContext(Context);

  function favorited() {
    if (currentProduct.liked_by_user === true) {
      return (
        <h4
          onClick={() => {
            toggleFavorited(currentProduct.id);
            currentProduct.liked_by_user = !currentProduct.liked_by_user;
          }}
        >
          Favorited!
          <FontAwesomeIcon size="lg" icon={faHeart} className="icon px1" />
        </h4>
      );
    } else {
      return (
        <h4
          onClick={() => {
            toggleFavorited(currentProduct.id);
            currentProduct.liked_by_user = !currentProduct.liked_by_user;
          }}
        >
          Favorite?
          <FontAwesomeIcon size="lg" icon={farHeart} className="icon px1" />
        </h4>
      );
    }
  }
  console.log(currentProduct.id);
  return (
    <div className="product-detail page">
      <Link to="/the_perfect_pic">
        <button className="btn">
          <FontAwesomeIcon size="lg" icon={faArrowLeft} className="icon" /> Back
        </button>
      </Link>
      <div className="container">
        <div className="product-imgs">
          <img className="showcase" src={currentProduct.urls.regular} />
          <div>
            <img className="rounded" src={currentProduct.urls.regular} />
            <img className="square" src={currentProduct.urls.regular} />
            <img className="circular" src={currentProduct.urls.regular} />
          </div>
        </div>
        <div className="product-info">
          <div className="creator">
            <h2>
              By:{" "}
              <a target="_blank" href={currentProduct.user.links.html}>
                {currentProduct.user.name}
              </a>
            </h2>
            <h4>
              Original Size:{" "}
              <span>
                {currentProduct.width}W x {currentProduct.height}H
              </span>
            </h4>
          </div>
          <div>{favorited()}</div>
          <div className="download">
            <h3>Digital Download</h3>
            <h4>Price: $8.99</h4>
            <button onClick={() => addToCart(currentProduct)}>
              Add To Cart
            </button>
          </div>
          <div className="print">
            <h3>Printed Copy</h3>
            <label htmlFor="size">Size:</label>
            <select name="" id="size">
              <option value="">--options--</option>
              <option value="">Original</option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
            <br />
            <label htmlFor="shape">Shape:</label>
            <select name="" id="shape">
              <option value="">--options--</option>
              <option value="">Original</option>
              <option value="">Portrait</option>
              <option value="">Landscape</option>
              <option value="">Rounded</option>
              <option value="">Square</option>
              <option value="">Circular</option>
            </select>
            <br />
            <label htmlFor="paper">Paper:</label>
            <select name="" id="paper">
              <option value="">--options--</option>
              <option value="">Stock</option>
              <option value="">High Gloss</option>
            </select>
            <br />
            <label htmlFor="quantity">Quantity:</label>
            <input id="quantity" type="number" placeholder="0" />
            <h4>Price: $0.00</h4>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

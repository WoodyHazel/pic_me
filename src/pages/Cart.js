import React, { useContext } from "react";
import { Context } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const { cartItems, removeFromCart } = useContext(Context);

  const cart = cartItems.map((item) => {
    return (
      <div className="cart-item">
        <FontAwesomeIcon
          className="icon"
          size="2x"
          icon={faXmark}
          onClick={() => removeFromCart(item.id)}
        />
        <img src={item.urls.small} />
        <div>
          <h3>Digital Download</h3>
        </div>
        <p>Price: $5.99</p>
      </div>
    );
  });

  const emptyCart = () => {
    if (cartItems.length === 0) {
      return <p>No items in cart.</p>;
    }
  };

  return (
    <div className="cart page">
      <h1>Your Cart</h1>
      {emptyCart()}
      {cart}
      <button className="clear-cart">Clear Cart</button>
      <div className="checkout">
        <p>{`Total: $${cartItems.length * 5.99}`}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

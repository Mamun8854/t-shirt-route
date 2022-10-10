import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div className="cart-container">
      <h2>Added Product Quantity : {cart.length}</h2>
      {cart.map((tshirt) => (
        <CartItem
          key={tshirt._id}
          tshirt={tshirt}
          handleRemoveItem={handleRemoveItem}
        ></CartItem>
      ))}

      <div></div>
      {cart.length === 0 ? "Please Buy At least One Item" : "Thanks For Buying"}
    </div>
  );
};

export default Cart;

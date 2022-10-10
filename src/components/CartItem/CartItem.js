import React from "react";
import "./CartItem.css";

const CartItem = ({ tshirt, handleRemoveItem }) => {
  const { name, price } = tshirt;

  return (
    <div>
      <div className="cart-item">
        <div>
          <h3>{name}</h3>
        </div>
        <div style={{ color: "tomato", fontWeight: "bold" }}>${price}</div>
        <div className="btn-x">
          <button onClick={() => handleRemoveItem(tshirt)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

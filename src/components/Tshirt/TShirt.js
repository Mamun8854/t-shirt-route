import React from "react";
import { Link } from "react-router-dom";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>
        $ <span className="tshirt-price">{price}</span>
      </p>
      <button onClick={() => handleAddToCart(tshirt)}>Add To Cart</button>
    </div>
  );
};

export default TShirt;

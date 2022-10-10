import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../Tshirt/TShirt";
import "./Home.css";

const Home = () => {
  // get data from json file
  const tshirts = useLoaderData();
  // add to cart t-shirt state
  const [cart, setCart] = useState([]);

  // HandleAddToCart t-shirt
  const handleAddToCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      alert("This t-shirt already added!!");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  // HandleRemoveItem
  const handleRemoveItem = (tshirt) => {
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
      </div>
    </div>
  );
};

export default Home;

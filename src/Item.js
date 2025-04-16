import React from "react";
import "./Item.css";

const Item = ({ item, addToCart }) => {
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default Item;

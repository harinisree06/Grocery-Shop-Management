import React from "react";
import "./Navbar.css";

const Navbar = ({ cartItems, handleCartClick, handleLogout }) => {
  return (
    <div className="navbar">
      <button className="cart-button" onClick={handleCartClick}>
        Cart ({cartItems.length})
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;

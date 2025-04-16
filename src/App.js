import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import Login from "./Login";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    alert(`${item.name} has been added to your cart!`);
  };

  const updateQuantity = (id, amount) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity < 1
    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleCartClick = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Navbar
            cartItems={cartItems}
            handleCartClick={handleCartClick}
            handleLogout={handleLogout}  // Pass handleLogout to Navbar
          />
          {showCart ? (
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ) : (
            <Dashboard addToCart={addToCart} />
          )}
        </>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

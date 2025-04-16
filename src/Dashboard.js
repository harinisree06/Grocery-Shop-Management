import React, { useState } from "react";
import Item from "./Item";
import "./Dashboard.css";

const Dashboard = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const items = [
    { id: 1, name: 'Football', price: 29.99, image: 'https://up.yimg.com/ib/th?id=OIP.vNSYG4fBvP7X5CHXEb6UAgHaE8&pid=Api&rs=1&c=1&qlt=95&w=145&h=97' },
    { id: 2, name: 'Basketball', price: 24.99, image: 'https://up.yimg.com/ib/th?id=OIP.18nJmr1DCT8-1CDxNxLxMAHaGp&pid=Api&rs=1&c=1&qlt=95&w=130&h=116'},
    { id: 3, name: 'Tennis Racket', price: 49.99, image: 'https://tse1.mm.bing.net/th?id=OIP.WoD-9cmzx-0oLXolrHfuoAHaHa&pid=Api&P=0&h=180' },
    { id: 4, name: 'Baseball', price: 39.99, image: 'https://tse2.mm.bing.net/th?id=OIP.nGf6Yr3X4rE49WEsJnkdEAHaE8&pid=Api&P=0&h=180' },
    { id: 5, name: 'Cricket Bat', price: 59.99, image: 'https://tse1.mm.bing.net/th?id=OIP.8u2Bn7djs1ClMBJSpq62EAHaHa&pid=Api&P=0&h=180' },
    { id: 6, name: 'Sports Shoes(White)', price: 74.99, image: 'https://tse3.mm.bing.net/th?id=OIP.C97L8TBBuVYuAwwIhLUBvgHaHa&pid=Api&P=0&h=180' }
];


  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search items..."
        onChange={handleSearch}
        value={searchQuery}
      />
      <div className="items-container">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

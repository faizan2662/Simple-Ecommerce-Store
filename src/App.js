import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './data/products';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 pb-4">Simple E-commerce Store</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
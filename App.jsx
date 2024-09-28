import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ProductCard from './components/ProductCard'
import ShoppingCart from './components/ShoppingCart';
import MenuBar from './components/MenuBar';
import ProductDetail from './components/ProductDetail';

function App() {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.name === product.name);

    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.name === product.name ? {...item, quantity : item.quantity + 1} : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cartItems.find(item => item.name === product.name);

    if (existingProduct.quantity === 1) {
      setCartItems(cartItems.filter(item => item.name !== product.name));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const removeAll = () => {
    setCartItems([]);
  }

  
  
  return (
  <Router>
    <div className='App'>
      <h1>E-commerce Product Showcase</h1>
      <MenuBar />
      <ShoppingCart 
      cartItems={cartItems}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      removeAll={removeAll}
      />
      <ProductCard  addToCart={addToCart}/>
      
      
    </div>
  </Router>
  );
}

export default App;

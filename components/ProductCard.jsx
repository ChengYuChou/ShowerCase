import React from "react";
import CardFlip from "./CardFlip";


function ProductCard({ addToCart }) {

    const product = [

        {
          id: 1,
          image: 'https://via.placeholder.com/150',
          name: 'Product 1',
          description: 'Description for product 1',
          price: 19.99,
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/150',
          name: 'Product 2',
          description: 'Description for product 2',
          price: 39.99,
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/150',
          name: 'Product 3',
          description: 'Description for product 2',
          price: 39.99,
        },
        {
          id: 4,
          image: 'https://via.placeholder.com/150',
          name: 'Product 4',
          description: 'Description for product 2',
          price: 39.99,
        },
        {
          id: 5,
          image: 'https://via.placeholder.com/150',
          name: 'Product 5',
          description: 'Description for product 2',
          price: 39.99,
        },
        {
          id: 6,
          image: 'https://via.placeholder.com/150',
          name: 'Product 6',
          description: 'Description for product 2',
          price: 39.99,
        },
        {
          id: 7,
          image: 'https://via.placeholder.com/150',
          name: 'Product 7',
          description: 'Description for product 2',
          price: 39.99,
        },
        {
          id: 8,
          image: 'https://via.placeholder.com/150',
          name: 'Product 8',
          description: 'Description for product 2',
          price: 39.99,
        },
        {
          id: 9,
          image: 'https://via.placeholder.com/150',
          name: 'Product 9',
          description: 'Description for product 2',
          price: 39.99,
        },
      ];





    return (
        <div className="product-list">
            {product.map((product) => (
                <div key={product.id} className="product-card">
                    <img src= {product.image} alt= {product.name}></img>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>             
                    <button className="AddToCart" onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
            ))} 
        </div>
        
    );
}

export default ProductCard
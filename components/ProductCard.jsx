import React from "react";
import product from "./ProductDatas";
import { Link } from "react-router-dom";


function ProductCard({ addToCart }) {

    const openProductDetail = (id) => {
      // 使用 window.open 來在新窗口打開產品詳情頁面
      
      window.open(`${window.location.origin}/product/${id}`, '_blank');
  };

    
    return (
        <div className="product-list">
            {product.map((product) => (
                <div key={product.id} className="product-card">
                    <img src= {product.image} alt= {product.name}></img>
                    <Link to={`/product/${product.id}`}>
                      <h2>{product.name}</h2>
                      <p>${product.price}</p>
                    </Link>
                                
                    <button className="AddToCart" onClick={() => addToCart(product)}>Add To Cart</button>
                    <button onClick={() => openProductDetail(product.id)}>查看詳情</button>
                </div>
            ))} 
        </div>
        
    );
}

export default ProductCard
// src/components/ProductDetail.jsx
import React from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import product from './ProductDatas'; 

const ProductDetail = ({addToCart}) => {

    const { id } = useParams(); // 獲取 URL 中的產品 ID
    const selectedProduct = product.find(item => item.id === parseInt(id)); // 根據 ID 獲取產品

    if (!selectedProduct) {
        return <p>產品未找到</p>; // 如果產品未找到，顯示提示
    }








  return (
    <div className='Detail'>
      <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <p>價格: ${selectedProduct.price.toFixed(2)}</p>
      <button onClick={() => addToCart(selectedProduct)}>加入購物車</button>
    </div>
  );
};

export default ProductDetail;

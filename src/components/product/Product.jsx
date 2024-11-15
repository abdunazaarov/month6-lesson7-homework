import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ product }) => {
  if (!product || !product.id || !product.imageUrl || !product.name || !product.price) {
    return null; // Agar product yoki kerakli qiymatlar yo'q bo'lsa, component ko'rsatilmaydi
  }

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} />
      </Link>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price} ₽</p>
      </div>
    </div>
  );
};

export default Product;

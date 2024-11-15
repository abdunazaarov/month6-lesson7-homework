import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../mockApi';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price} ₽</p>
        <button className="buy-button">Купить</button>
      </div>
      <div className="product-specs">
        <h3>Характеристика</h3>
        {/* Har xil ma'lumotlar joylashtirilgan jadval */}
        <table>
          <tbody>
            <tr><td>Размер</td><td>100 мм</td></tr>
            <tr><td>Материал</td><td>Металл, Стекло</td></tr>
            {/* Qo'shimcha qatorlar qo'shishingiz mumkin */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;

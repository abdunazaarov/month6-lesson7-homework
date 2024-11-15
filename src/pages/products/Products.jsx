import React from 'react';
import { products } from '../../mockApi';
import Product from '../../components/product/Product';
import './Products.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Products = () => {
    return (
        <>
            <Header />
            <div className="products-page container">
                <h2>Популярные товары</h2>
                <div className="product-list">
                    {products && products.map((product) => (
                        product && <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Products;

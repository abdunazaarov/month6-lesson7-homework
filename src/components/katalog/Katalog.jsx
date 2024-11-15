import React from "react";
import "./Katalog.scss";
import lamp1 from "../../assets/lamp1.png";  // Rasm manzillarini yangilang
import lamp2 from "../../assets/lamp2.png";
import lamp3 from "../../assets/lamp3.png";
import lamp4 from "../../assets/lamp4.png";
import lamp5 from "../../assets/lamp5.png";
import lamp6 from "../../assets/lamp6.png";
import svg1 from "../../assets/svg1.png"

const products = [
    { id: 1, name: "Люстры", price: "от 1549 р", image: lamp1 },
    { id: 2, name: "Светильники", price: "от 1549 р", image: lamp2 },
    { id: 3, name: "Бра", price: "от 1549 р", image: lamp3 },
    { id: 4, name: "Торшеры", price: "от 1549 р", image: lamp4 },
    { id: 5, name: "Настольные лампы", price: "от 1549 р", image: lamp5 },
    { id: 6, name: "Споты", price: "от 1549 р", image: lamp6 },
];

function Katalog() {
    return (
        <div className="catalog">
            <div className="catalog__header">
                <h2>Каталог</h2>
                <button className="catalog__button">Весь каталог</button>
            </div>
            <div className="catalog__products">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-card__image" />
                        <h3 className="product-card__name">{product.name}</h3>
                        <span className="product-card__price">{product.price}</span>
                    </div>
                ))}
            </div>
            <div className="catalog__why">
                <h2>Почему NORNLIGHT?</h2>
                <div className="features">
                    <div className="feature-card">
                        <div className="feature-card__icon"><img src={svg1} alt="" /></div>
                        <h4>Только проверенные бренды</h4>
                        <p>Гарантия качества и долговечности продукции</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card__icon"><img src={svg1} alt="" /></div>
                        <h4>Самые низкие цены</h4>
                        <p>Лучшие предложения для наших клиентов</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card__icon"><img src={svg1} alt="" /></div>
                        <h4>Быстрая доставка</h4>
                        <p>Доставка по всей России за 1–7 дней</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card__icon"><img src={svg1} alt="" /></div>
                        <h4>Большой ассортимент</h4>
                        <p>Более 1000 товаров</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Katalog;

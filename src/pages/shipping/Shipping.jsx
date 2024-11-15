import React from "react";
import "./Shipping.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import map from "../../assets/map.png"

const Shipping = () => {
    return (
        <>
            <Header/>
            <div className="shipping container">
                <div className="breadcrumb">Главная / Доставка</div>
                <h1 className="title">Доставка и оплата</h1>

                <div className="content">
                    <h2>Доставка</h2>
                    <p>
                        Мы осуществляем доставку по всей территории Москвы и Московской области в течение одного рабочего дня. Заказ должен быть оформлен до 17:00 для отправки на следующий день. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quisquam at porro laborum, odit autem cum magnam accusantium, laboriosam accusamus magni? Inventore suscipit minus eius temporibus. Distinctio repudiandae accusantium omnis quia provident. Distinctio inventore expedita aliquam dolor eum! Quam, magni error incidunt iusto dolor mollitia temporibus alias officiis vel quo, voluptatem quibusdam? Odio, sit ipsum.
                    </p>

                    <h3>Курьерская доставка</h3>
                    <p>
                        Доставка по Москве в пределах МКАД: стоимость заказа <span className="highlight">от 500 ₽</span><br />
                        Стоимость доставки за пределами МКАД: <span className="highlight">30 ₽</span> за каждый км.
                    </p>
                    <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat consequatur error dignissimos nisi ullam!</a>

                    <h3>Самовывоз</h3>
                    <p>Головной офис находится по следующему адресу: г. Москва, Декабристов ул. д.2 к.3</p>
                </div>

            <div className="map ">
                <img src={map} alt='' />
            </div>
            </div>
            <Footer/>
        </>
    );
};

export default Shipping;

import React from "react";
import "./Contact.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Contact = () => {
    return (
        <>
            <Header/>
            <div className="contact container">
                <h2 className="contact__title">Контакты</h2>
                <div className="contact__map">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509585!2d144.95373631550402!3d-37.81627974201407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f5c84817%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1614372621010!5m2!1sen!2sau"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="contact__info">
                    <div className="contact__info-item">
                        <h3>Адрес магазина</h3>
                        <p>г. Москва, Дмитровское шоссе д.100А</p>
                    </div>
                    <div className="contact__info-item">
                        <h3>Почта</h3>
                        <p>hello@mail.ru</p>
                    </div>
                    <div className="contact__info-item">
                        <h3>Телефон</h3>
                        <p>8 (800) 890-46-56</p>
                    </div>
                    <button className="contact__button">Оставить заявку</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;

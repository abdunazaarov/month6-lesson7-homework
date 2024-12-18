import React from "react";
import "./Return.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Return = () => {
    return (
        <>
            <Header />
            <div className="garant container">
                <div className="breadcrumb">Главная / Гарантии</div>
                <h1 className="title">Гарантии</h1>

                <div className="content">
                    <div className="return__text">
                        <h2>Обмен и возврат без лишних вопросов</h2>
                        <p>Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.
                        Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                        Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.
                        Привезти товар к нам на склад или отправить его транспортной компанией.
                        После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.
                        Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.
                        Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.</p>
                        <ul>
                            <li>Все товары имеют гарантию – 100% возврат в течение 14 дней.</li>
                            <li>Вам не нужно объяснять причину возврата.</li>
                            <li>Сохраните упаковку и товарный вид товара.</li>
                            <a href="#">Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                        Предоставить чек, накладную или сообщить почту или номер телефона</a>
                            <a href="#">Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                        Предоставить чек, накладную или сообщить почту или номер телефона</a>
                            <a href="#">Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                        Предоставить чек, накладную или сообщить почту или номер телефона</a>
                            <a href="#">Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                        Предоставить чек, накладную или сообщить почту или номер телефона</a>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Return;

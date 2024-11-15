import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const NotFound = () => {
    return (
        <>
            <Header />
            <div className="not-found">
                <h1>404</h1>
                <p>Kechirasiz, siz qidirayotgan sahifa mavjud emas.</p>
                <Link to="/">Bosh sahifaga qaytish</Link>
            </div>
            <Footer/>

        </>
    );
};

export default NotFound;

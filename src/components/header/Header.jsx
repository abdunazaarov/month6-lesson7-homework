import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { RiMenu2Line } from 'react-icons/ri';
import { IoSearch, IoCartOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { BiSignal5 } from 'react-icons/bi';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="topBar container">
        <ul className="topBar__list">
          <li className="topBar__item"><Link to="/about">О компании</Link></li>
          <li className="topBar__item"><Link to="/shipping">Доставка и оплата</Link></li>
          <li className="topBar__item"><Link to="/return">Возврат</Link></li>
          <li className="topBar__item"><Link to="/garant">Гарантии</Link></li>
          <li className="topBar__item"><Link to="/contact">Контакты</Link></li>
          <li className="topBar__item"><Link to="/blog">Блог</Link></li>
        </ul>
        <ul className="topBar__list">
          <li className="topBar__item">8 (800) 890-46-56</li>
          <li className="topBar__item">Заказать звонок</li>
        </ul>
      </div>
      <nav className="navbar container">
        <div className="navbar__top">
          <div className="navbar__logo">
            <img className="navbar__img" src={logo} alt="Logo" />
          </div>
          <div className="navbar__menu">
            <RiMenu2Line /> <span>Каталог</span>
          </div>
          <div className="navbar__icons">
            <div className="navbar__icon">
              <FaRegHeart />
              <p>Избранное</p>
            </div>
            <div className="navbar__icon">
              <BiSignal5 />
              <p>Сравнение</p>
            </div>
            <div className="navbar__icon">
              <IoCartOutline />
              <p>Корзина</p>
            </div>
          </div>
        </div>
        <div className="navbar__input">
          <input type="text" placeholder="Поиск по товарам" />
          <span className="icon">
            <IoSearch />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

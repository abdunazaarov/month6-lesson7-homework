import React from 'react';
import './Footer.scss';
import visaLogo from '../../assets/logo.png'; 
import mirLogo from '../../assets/visaMir.png';
import { FaInstagram,  FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer2">
                <div className="footer__left">
                    <div className="footer__logo">
                        <img src={visaLogo} alt="NornLight" /> 
                        <p className="footer__phone">8 (800) 800-40-56</p>
                        <div className="footer__payment-methods">
                            <img src={mirLogo} alt="Visa" />
                        </div>
                        <p className="footer__text">Secure payment by credit card or cash on delivery</p>
                    </div>
                    <div className="footer__social-icons">
                        <strong><FaInstagram/> Instagram</strong>
                        <strong><FaFacebook/> Facebook</strong>
                        <strong><FaTwitter/> Twitter</strong>
                    </div>
                </div>
                <div className="footer__center">
                    <h4>For Customers</h4>
                    <ul>
                        <li>Contacts</li>
                        <li>Delivery and Payment</li>
                        <li>Guarantee</li>
                        <li>Service</li>
                        <li>Return</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer__right">
                    <h4>Products</h4>
                    <ul>
                        <li>All Products</li>
                        <li>New Arrivals</li>
                        <li>Bestsellers</li>
                        <li>Special Offers</li>
                        <li>Clearance</li>
                        <li>Accessories</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

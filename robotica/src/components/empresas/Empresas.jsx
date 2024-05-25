import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Empresas.css'; 
import Prime from '../../assets/prime_logo.png'; 
import Glovo from '../../assets/glovo_logo.jpg';
import KiwiBot from '../../assets/kiwibot_logo.png';
import Fedex from '../../assets/fedex_logo.jpg';

export default function Empresas() {
  return (
    <div className='container'>
      <Header />
      <h1>Algunas de las empresas que han desarrollado este tipo de robots son</h1>
      <ul>
        <li>
          <div className="logo-container">
            <img src={Prime} alt="Amazon Prime Logo" className="logo" /> {}
            Amazon Prime
          </div>
        </li>
        <li>
          <div className="logo-container">
            <img src={Glovo} alt="Glovo Logo" className="logo" /> {}
            Glovo
          </div>
        </li>
        <li>
          <div className="logo-container">
            <img src={KiwiBot} alt="Kiwibot Logo" className="logo" /> {}
            Kiwibot
          </div>
        </li>
        <li>
          <div className="logo-container">
            <img src={Fedex} alt="Fedex Logo" className="logo" /> {}
            Fedex
          </div>
        </li>
      </ul>
      <Footer />
    </div>
  );
}

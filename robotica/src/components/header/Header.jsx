import React from 'react';
import BannerURL from '../../assets/banner.png';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="banner-container">
      <img src={BannerURL} alt="banner" className="banner" />
      <div className="footer-content">
        <div className="footer-buttons">
         <Link to="/" className='square-button' >Home</Link>
          
          <Link to="/funcionamiento" className='square-button'>Funcionamiento</Link>
          <Link to="/empresas" className='square-button'>Empresas</Link>
          <Link to="/galeria" className='square-button'>Galeria</Link>
        <Link to="/login" className='square-button'>Ingresar</Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import image1 from '../../assets/repartidor1.jpg'; 
import amazon1 from '../../assets/amazon1.jpg';
import imagen2 from '../../assets/repartidor2.jpg';

import './Gallery.css'; 

export default function Gallery() {
 
  const images = [image1, amazon1, imagen2];

  return (
    <div className='container'>
    <Header />
    <div className="gallery-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={'Image ' + (index + 1)} className="gallery-image" />
      ))}
    </div>
    <Footer />
  </div>
  );
}
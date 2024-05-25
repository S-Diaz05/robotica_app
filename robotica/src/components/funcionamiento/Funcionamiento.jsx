import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Video1 from '../../assets/video1.mp4';
import './Funcionamiento.css'
export default function Funcionamiento() {
  return (

    <div className='container'>
      <Header />
      <h1>Funcionamiento de los sensores</h1>
      <div className="video-container">
        <video controls>
          <source src={Video1} type="video/mp4" />
          {}
          Tu navegador no admite la reproducción de video.
        </video>
      </div>
      <Footer />
    </div>
  )
}

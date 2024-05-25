import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import imagen1 from '../../assets/repartidor1.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <div className="contenedor">
        <div className="texto">
          <h2>Bienvenido</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis augue ac nisl interdum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque malesuada quam ac ultricies laoreet. Sed vitae luctus eros. Integer ultricies quam sit amet fermentum consequat. Proin malesuada dolor vel augue fringilla, quis pharetra odio consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum nec posuere magna, at sagittis nisi. Nunc vel arcu ut est aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nec tortor risus. Fusce sed justo ac urna ultricies cursus. Phasellus in mauris bibendum, dapibus arcu sed, finibus leo. Donec nec aliquam enim, ut malesuada tortor. Quisque sed lacus sit amet nulla volutpat facilisis in ac purus. Mauris laoreet nunc sed erat vestibulum vehicula.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis augue ac nisl interdum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque malesuada quam ac ultricies laoreet. Sed vitae luctus eros. Integer ultricies quam sit amet fermentum consequat. Proin malesuada dolor vel augue fringilla, quis pharetra odio consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum nec posuere magna, at sagittis nisi. Nunc vel arcu ut est aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nec tortor risus. Fusce sed justo ac urna ultricies cursus. Phasellus in mauris bibendum, dapibus arcu sed, finibus leo. Donec nec aliquam enim, ut malesuada tortor. Quisque sed lacus sit amet nulla volutpat facilisis in ac purus. Mauris laoreet nunc sed erat vestibulum vehicula.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis augue ac nisl interdum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque malesuada quam ac ultricies laoreet. Sed vitae luctus eros. Integer ultricies quam sit amet fermentum consequat. Proin malesuada dolor vel augue fringilla, quis pharetra odio consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum nec posuere magna, at sagittis nisi. Nunc vel arcu ut est aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nec tortor risus. Fusce sed justo ac urna ultricies cursus. Phasellus in mauris bibendum, dapibus arcu sed, finibus leo. Donec nec aliquam enim, ut malesuada tortor. Quisque sed lacus sit amet nulla volutpat facilisis in ac purus. Mauris laoreet nunc sed erat vestibulum vehicula.
          </p>


        </div>
        <div className="imagen-container">
          <img src={imagen1} alt="Imagen de ejemplo" className='imagen' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

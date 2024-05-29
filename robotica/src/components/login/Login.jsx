import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../index.css';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin") {
      navigate('/admin');
    } else {
      alert("Login incorrecto");
    }
  };

  return (
    <div className='container'>
      <Header />
      <div className='formulario'>
        <form onSubmit={ev => {
          ev.preventDefault();
          const email = ev.target.email.value;
          const password = ev.target.password.value;
          handleLogin(email, password);
        }}>
          <input type='text' name='email' placeholder='Ingrese su correo' className='inputText' />
          <input type='password' name='password' placeholder='Ingrese su contraseña' className='inputText' />
          <button type='submit' className='boton'>Iniciar sesión</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

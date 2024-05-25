import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login';
import Galery from './components/gallery/Gallery';
import Empresas from './components/empresas/Empresas';
import Funcionamiento from './components/funcionamiento/Funcionamiento'; 
import Admin from './components/login/Admin';

const router = createBrowserRouter([
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/galeria',
        element: <Galery />,
      },
      {
        path: '/funcionamiento',
        element: <Funcionamiento />, 
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/empresas',
        element: <Empresas />,
      },
      {
        path: '/admin',
        element: <Admin />,
      }
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  </React.StrictMode>
);


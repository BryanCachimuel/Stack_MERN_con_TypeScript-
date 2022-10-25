import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaVideos from './components/Videos/ListaVideos';
import CrearVideo from './components/Videos/CrearVideo';
import Navbar from './components/Navbar/Navbar'
// esta es una dependencia para notificaciones
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <div className="container p-4">
      <Routes>
        <Route path='/' element={<ListaVideos/>}/>
        <Route path='/crear_video' element={<CrearVideo/>}/>
        <Route path='/editar/:id' element={<CrearVideo/>}/>
      </Routes>
       <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

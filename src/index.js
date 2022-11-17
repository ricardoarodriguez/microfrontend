import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './useEffect/MainApp';
//import { SimpleForm } from './useEffect/Simple-Form';
//import App from './App';
//import { FormWithCustomHook } from './useEffect/FormWithCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import 'jquery'
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'jquery'
import "react-toastify/dist/ReactToastify.css";
import App from './app/app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

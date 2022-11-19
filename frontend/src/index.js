/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'jquery'
import "react-toastify/dist/ReactToastify.css";
import App from './app/app';
import './index.css'
import  {library}  from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";

library.add( faStar);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

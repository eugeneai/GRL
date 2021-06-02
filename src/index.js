import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import './index.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import "../node_modules/bootstrap/scss/bootstrap.scss";
import store from './store'
import RouterWrapper from "./RouterWrapper";

import L from "leaflet";
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.7.1/dist/images/";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

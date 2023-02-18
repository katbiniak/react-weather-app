import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import WeatherApp from './js/WeatherApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);

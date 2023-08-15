import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// quando precisamos usar uma variavel com valores diferente dentro primeiro adicionamos
// dpois adicionamos uma variavel junto do prompt pra dpois poder usar o alert dpois precisamos concatenar os valores juntando os dois pra dpois poder dar um valor diferenciado 
reportWebVitals();

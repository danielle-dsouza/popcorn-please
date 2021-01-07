import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = document.getElementById('root');

ReactDOM.render(app, root);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Context';
import Context2 from './Context2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <Context2>
      <App />
    </Context2>
    </Context>
  </React.StrictMode>
);

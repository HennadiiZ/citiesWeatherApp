import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DataContextProvider } from './_store/data-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DataContextProvider>
);

// reportWebVitals();

// Default installation // npm install @mui/material @emotion/react @emotion/styled
// Icons //  npm install @mui/icons-material

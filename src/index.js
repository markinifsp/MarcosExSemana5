import React from 'react';
import ReactDOM from 'react-dom/client';
import FormTarefa from './Forms';
import './styles.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormTarefa />
  </React.StrictMode>
);

reportWebVitals();
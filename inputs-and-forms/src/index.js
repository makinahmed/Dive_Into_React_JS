import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Inputs from './components/inputs/inputs';


ReactDOM.render(
  <React.StrictMode>
    <Inputs />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

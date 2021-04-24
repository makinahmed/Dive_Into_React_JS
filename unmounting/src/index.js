import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Student from './components/Student';

ReactDOM.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Student />
  
  </React.StrictMode>,
  document.getElementById('stu')
);
ReactDOM.unmountComponentAtNode(document.getElementById("root"))

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Question1 from './CC/Question1.js';
import Question2 from './CC/Question2.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Question2 name='SKCET'/>
<Question1 name='SKCET'/>


    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

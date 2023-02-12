import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Abc from './second';
import App from './App.js';
import Ita from './third';
import {Ita1,Ita2 } from './third';
import Update from './Fourt';
import reportWebVitals from './reportWebVitals';
import ClassbasedExample from './ClassbasedExample';
import $ from 'jquery';  
import Popper from 'popper.js';  
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name='ITA' vlp='CSE'/>
    <App name='ITB'/>
   <Ita name='innocent girl'/>
   <Ita name=' student'/> */}
     {/* <Ita1 /> */}
    {/* <Ita2 />    */}
    <ClassbasedExample></ClassbasedExample>
    <Update />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

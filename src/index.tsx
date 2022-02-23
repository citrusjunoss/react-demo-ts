import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './Page/Home';
import Hoc from './Page/Hoc';
import Redux from './Page/Redux';
import Hooks from './Page/Hooks';
import Component from './Page/Component';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
        <Routes>
        <Route path='/' element={<App />}>
          <Route path="component" element={<Component /> }></Route>
          <Route path="hooks" element={<Hooks /> }></Route>
          <Route path="hoc" element={<Hoc />}></Route>
          <Route path="redux" element={<Redux />}></Route>
        </Route>
      </Routes>  
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

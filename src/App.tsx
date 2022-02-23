import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home';
import Hoc from './Page/Hoc';
import Redux from './Page/Redux';
import Hooks from './Page/Hooks';
import Component from './Page/Component';
import './App.css';


function App() {
  return (
    <div className="App">
      Hello， React
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="component" element={<Component /> }></Route>
          <Route path="hooks" element={<Hooks /> }></Route>
          <Route path="hoc" element={<Hoc />}></Route>
          <Route path="redux" element={<Redux />}></Route>
        </Route>
      </Routes>  
    </div>
  );
}

export default App;

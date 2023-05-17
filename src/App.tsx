import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register-Login/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Register-Login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path='/signup' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

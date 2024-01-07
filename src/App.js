import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import HomePage from './components/Homepage/HomePage';
import Signup from './components/Signup/Signup';
import Cart from './components/MyCart/Cart';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mycart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

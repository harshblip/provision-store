import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

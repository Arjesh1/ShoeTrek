import React from 'react';
import './App.css';
import Login from './pages/home/user/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/home/user/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        

      </Routes>
      
      
    </>
  );
}

export default App;

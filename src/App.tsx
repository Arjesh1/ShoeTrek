import React from 'react';
import './App.css';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        

      </Routes>
      
      
    </>
  );
}

export default App;

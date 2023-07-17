import React from 'react';
import './App.css';
import Login from './pages/user/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/user/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        
      </Routes>
      
      <ToastContainer/>
    </>
  );
}

export default App;

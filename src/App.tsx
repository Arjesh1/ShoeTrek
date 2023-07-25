import React from 'react';
import './App.css';
import Login from './pages/user/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/user/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/contact/Contact';
import ProductOverview from './pages/product/ProductOverview';
import Home from './pages/home/Home';




function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='product/:productName' element={<ProductOverview/>}/>
        
      </Routes>
      
      <ToastContainer/>
    </>
  );
}

export default App;

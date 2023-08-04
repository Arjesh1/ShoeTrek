import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import Login from './pages/user/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/user/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/contact/Contact';
import ProductOverview from './pages/product/ProductOverview';
import Home from './pages/home/Home';
import ProductList from './pages/product/ProductList';
import { getProductsAction } from './pages/product/productAction';
import { AppDispatch } from './store';
import ShopingCart from './pages/product/ShopingCart';
import CheckOut from './pages/checkOut/CheckOut';
import OrderHistory from './pages/order/OrderHistory';




function App() {
  
  
 

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='product/:productName' element={<ProductOverview/>}/>
        <Route path='productList/:parentCat' element={<ProductList/>}/>
        <Route path='checkout' element={<CheckOut/>}/>
        <Route path='order-history' element={<OrderHistory/>}/>
        
      
        
      </Routes>
      
      <ToastContainer/>
    </>
  );
}

export default App;


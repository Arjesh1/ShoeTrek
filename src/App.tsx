import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Login from "./pages/user/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./pages/user/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/contact/Contact";
import ProductOverview from "./pages/product/ProductOverview";
import Home from "./pages/home/Home";
import ProductList from "./pages/product/ProductList";
import { getProductsAction } from "./pages/product/productAction";
import CheckOut from "./pages/checkOut/CheckOut";
import OrderHistory from "./pages/order/OrderHistory";
import UserDetails from "./pages/user/UserDetails";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import { getClientAction } from "./pages/user/userAction";
import { setUser } from "./pages/user/userSlice";
import { PrivateRoute } from "./privateRoute/PrivateRoute";
import { getReviewsAction } from "./components/reviews/reviewsAction";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  onAuthStateChanged(auth, async (userData: any) => {
    if (userData?.uid) {
      const user = await getClientAction({ uid: userData.uid });
      if (user) {
        dispatch(setUser(user)); // Dispatch the action with the user data
      }
    }
  });
  useEffect(() => {
    dispatch(getProductsAction());
    dispatch(getReviewsAction());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:productName" element={<ProductOverview />} />
        <Route path="productList/:parentCat" element={<ProductList />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route
          path="order-history"
          element={
            <PrivateRoute>
              <OrderHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="user-details"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;

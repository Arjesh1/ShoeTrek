import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOrderedProductAction } from "./checkoutAction";
import { setOrderModal } from "../../system/cartSlice";
import OrderStatusModal from "../../components/modal/OrderStatusModal";
import PaymentForm from "./PaymentForm";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import {
  Elements,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckOut = () => {
  const { cart, product } = useSelector((state) => state.product);
  const [totalValue, setTotalValue] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (cart.length > 0) {
      const calculatedTotal = (cart) => {
        return cart?.reduce((total, item) => {
          return total + +item.price * item.quantity;
        }, 0);
      };
      const totalPrice = calculatedTotal(cart) + 5;
      setTotalValue(totalPrice);
    } else {
      navigate("/");
    }
  }, [cart.length, setTotalValue, cart, navigate]);

  useEffect(() => {
    const getSecret = async () => {
      const res = await axios({
        method: "post",
        url: "http://localhost:8000/shoe-trek/payment/create-payment-intent",
        data: {
          amount: 3000,
          currency: "aud",
        },
      });
      setClientSecret(res.data.clientSecret);
    };
    getSecret();
  }, [totalValue]);

  const options = {
    clientSecret,

    appearance: {
      /*...*/
    },
  };

  return (
    <>
      <MainLayout>
        {clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <PaymentForm />
          </Elements>
        )}
      </MainLayout>
    </>
  );
};

export default CheckOut;

import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckOut = () => {
  const { cart } = useSelector((state) => state.product);
  const [totalValue, setTotalValue] = useState();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cart.length > 0) {
      const calculatedTotal = (cart) => {
        return cart?.reduce((total, item) => {
          return total + +item.price * item.quantity;
        }, 0);
      };
      if (user.uid) {
        const totalPrice = calculatedTotal(cart);
        setTotalValue(totalPrice * 100);
      } else {
        const totalPrice = calculatedTotal(cart) + 5;
        setTotalValue(totalPrice * 100);
      }
    } else {
      navigate("/");
    }
  }, [cart.length, setTotalValue, cart, navigate, user.uid]);

  useEffect(() => {
    const getSecret = async () => {
      const res = await axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL,
        data: {
          amount: totalValue * 100,
          currency: "aud",
        },
      });
      setClientSecret(res.data.clientSecret);
      setIsLoading(false);
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
        {isLoading ? (
          <div className="flex h-screen w-full justify-center items-center ">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            {clientSecret && (
              <Elements stripe={stripePromise} options={options}>
                <PaymentForm />
              </Elements>
            )}
          </>
        )}
      </MainLayout>
    </>
  );
};

export default CheckOut;

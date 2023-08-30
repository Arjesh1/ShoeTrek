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
// import {Elements, useElements, useStripe, PaymentElement} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import axios from 'axios'

// const stripePromise = loadStripe(
//   process.env.REACT_APP_STRIPE_PK
//   )

const CheckOut = () => {
  const { cart, product } = useSelector((state) => state.product);
  const [totalValue, setTotalValue] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.user);
  // const [clientSecret, setClientSecret] = useState("");
  // const stripe = useStripe()
  // const elements = useElements();
  // const [message, setMessage] = useState("");
  const [updateProduct, setUpdateProduct] = useState(product);
  const [quantityStatus, setQuantityStatus] = useState(false);

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

  // useEffect(() =>{
  //   const getSecret =   async() =>{
  //     const res = await  axios({
  //       method: "post",
  //       url: "http://localhost:8000/shoe-trek/payment/create-payment-intent",
  //       data: {
  //         amount: 1000,
  //         currency: "aud"
  //       }
  //     })
  //     setClientSecret(res.data.clientSecret)
  //   }
  //   getSecret()
  // }, [])

  // const options = {

  //   clientSecret,

  //   // appearance: {/*...*/},
  // };

  const { uid } = user;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const status = "status";
    const totalPrice = "totalPrice";
    const orderDate = "orderDate";

    setForm({
      ...form,
      [name]: value,
      uid,
      [status]: "Processing",
      [totalPrice]: totalValue,
      [orderDate]: Date.now(),
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    form["product"] = cart;

    //       if (!stripe || elements){
    //         return
    //       }

    //       const { error: submitError } = await elements.submit()
    //   if (submitError) {
    //     return
    //   }

    //   const { data } = await axios({
    //     method: "post",
    //     url: "http://localhost:8001/api/v1/payment/create-payment-intent",
    //     data: {
    //       amount: 30000,
    //       currency: "aud",
    //     },
    //   })

    //   const { clientSecret } = data

    //   const { paymentIntent } = await stripe.confirmPayment({
    //     elements,
    //     clientSecret,
    //     confirmParams: { return_url: "http://localhost:3001" },
    //     redirect: "if_required",
    //   })

    //   if (paymentIntent.status === "succeeded") {
    //     console.log("payment successful");
    //   } else {
    //     console.log("payment successful");
    //   }
    // }

    function generateRandomLetter() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const randomIndex = Math.floor(Math.random() * letters.length);
      return letters.charAt(randomIndex);
    }

    function generateOrderNumber() {
      const timestamp = Date.now().toString();
      let randomLetters = "";
      for (let i = 0; i < 4; i++) {
        randomLetters += generateRandomLetter();
      }
      const orderNum = `${randomLetters}-${timestamp}`;
      return orderNum;
    }

    const generatedOrderNumber = generateOrderNumber();
    const orderNumber = "orderNumber";

    const updatedForm = { ...form, [orderNumber]: generatedOrderNumber };
    console.log(updatedForm);

    // dispatch(addOrderedProductAction(updatedForm));

    //update the quantity at firebase on successful order

    const cartProductId = cart.map((cart) => cart.id);
    const findCartProduct = cartProductId.map((cart) =>
      product.find((item) => item.slug === cart)
    );

    const updatedProducts = updateQuantity(
      findCartProduct,
      cart,
      updateProduct
    );

    setUpdateProduct(updatedProducts);

    function updateQuantity(matchedProduct, cartProduct, products) {
      const updatedProducts = products?.map((item) => {
        const foundCart = cartProduct?.find((cart) => item.slug === cart.id);

        if (foundCart) {
          const quantityAsNumber = parseInt(item.quantity, 10);

          const updatedQuantity =
            quantityAsNumber - parseInt(foundCart.quantity, 10);

          const updatedItem = {
            ...item,
            quantity: updatedQuantity.toString(),
          };

          const { slug, ...rest } = updatedItem;

          try {
            setDoc(doc(db, "product", updatedItem.slug), rest, {
              merge: true,
            });
          } catch (error) {
            toast.error(error.message);
            console.log(error);
          }

          console.log(updatedItem); // Log the updated object
        }
      });
    }
  };

  return (
    <>
      <MainLayout>
        <form action="" onSubmit={handleOnSubmit}>
          <div className="container mx-auto flex flex-col sm:flex-row mt-5 bg-slate-100 p-5 rounded-md">
            <div className="w-full p-3 ">
              <div className="border-b border-gray-900/10 pb-5">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Contact Information
                </h2>

                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required={true}
                        value={user.email}
                        onChange={handleOnChange}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b mt-3 border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Shipping Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use correct details.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required={true}
                        onChange={handleOnChange}
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className="block w-full rounded-md pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required={true}
                        onChange={handleOnChange}
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className="block w-full rounded-md  pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        required={true}
                        onChange={handleOnChange}
                        name="phoneNumber"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm: col-span-full ">
                    <label
                      htmlFor="country"
                      className="block  text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required={true}
                        onChange={handleOnChange}
                        name="country"
                        id="country"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0  pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required={true}
                        onChange={handleOnChange}
                        name="streetAddress"
                        id="streetAddress"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required={true}
                        onChange={handleOnChange}
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required={true}
                        onChange={handleOnChange}
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required={true}
                        onChange={handleOnChange}
                        name="postalCode"
                        id="postalCode"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b mt-3 border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Payment Details
                </h2>
                <div className="grid grid-cols-1">
                  <div className="col-span-full mb-3">
                    <label className="block text-sm  leading-6 text-gray-700">
                      Name on Card
                    </label>
                    <div className="  ">
                      <input
                        type="text"
                        required={true}
                        name="cardName"
                        autoComplete="name"
                        className="block w-full rounded-md pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* <div className="col-span-full ">
          {clientSecret && (
  <Elements stripe={stripePromise} options={options} >
      <PaymentElement />
    </Elements>

)}

</div> */}
                </div>
              </div>
            </div>

            <div className="w-full  p-3  ">
              <div className="flow-root bg-white p-4 rounded-md">
                <ul
                  role="list"
                  className="-my-6 divide-y divide-gray-200 border-b border-gray-200 "
                >
                  {cart?.map((product) => (
                    <Link to={`/product/${product.id}`}>
                      <li
                        key={product.id}
                        className="flex py-6 border-b border-gray-900/10"
                      >
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.img}
                            alt="product img"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <p>{product.name}</p>
                              </h3>

                              <p className="ml-2">
                                ${product.price * product.quantity}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Size: {product.size}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Quantity: {product.quantity}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm"></div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>

                <div className=" mt-8 border-b  pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>${totalValue - 5}</p>
                  </div>

                  <div className="flex justify-between mt-3">
                    <p>Shipping</p>
                    <p>$5</p>
                  </div>
                </div>

                <div className=" mt-8 border-b  pb-4">
                  <div className="flex justify-between text-lg font-medium ">
                    <p>Total</p>
                    <p>${totalValue}</p>
                  </div>
                </div>

                <div className="col-span-full mt-10 py-4">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </MainLayout>
    </>
  );
};

export default CheckOut;

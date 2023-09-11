import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCartShow } from "../../system/cartSlice";
import { decreaseQty, increateQty, setCartProd } from "./productSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CheckOut from "../checkOut/CheckOut";
import { RootState } from "../../store";

const ShopingCart = () => {
  const dispatch = useDispatch();
  const { cartShow } = useSelector((state: RootState) => state.system);
  const { cart } = useSelector((state: RootState) => state.product);
  const [totalValue, settotalValue] = useState();

  const handleOnDelete = (obj: any) => {
    const updatedCart = cart.filter(
      (item: any) => !(item.id === obj.id && item.size === obj.size)
    );
    dispatch(setCartProd(updatedCart));
    toast.success("Item has been removed");
  };

  useEffect(() => {
    if (cart.length > 0) {
      const calculatedTotal = (cart: any) => {
        return cart?.reduce((total: any, item: any) => {
          return total + +item.price * item.quantity;
        }, 0);
      };
      const totalPrice = calculatedTotal(cart);
      settotalValue(totalPrice);
    }
  }, [cart.length, settotalValue, cart]);

  return (
    <>
      <Transition.Root show={cartShow} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => dispatch(setCartShow(false))}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => dispatch(setCartShow(false))}
                            >
                              <span className="sr-only">Close panel</span>
                              <AiOutlineClose
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            {cart.length === 0 ? (
                              <>
                                <h1>Cart empty</h1>
                              </>
                            ) : (
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {cart?.map((product: any) => (
                                  <li key={product.id} className="flex py-6">
                                    <Link
                                      to={`/product/${product.id}`}
                                      onClick={() =>
                                        dispatch(setCartShow(false))
                                      }
                                    >
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={product.img}
                                          alt="product img"
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
                                    </Link>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <p>
                                              {product.name.slice(0, 15)}...
                                            </p>
                                          </h3>

                                          <p className="ml-2">
                                            $ {product.price * product.quantity}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          Size: {product.size}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="flex justify-evenly items-center">
                                          <span>
                                            {" "}
                                            <button
                                              onClick={() => {
                                                dispatch(
                                                  decreaseQty(product.id)
                                                );
                                              }}
                                              className="  text-4xl "
                                            >
                                              -
                                            </button>
                                          </span>
                                          <input
                                            id="quantity"
                                            name="quantity"
                                            type="number"
                                            min={1}
                                            required
                                            value={product.quantity}
                                            className=" block text-center w-3/6 rounded-md border-0 py-1.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                          />
                                          <span>
                                            <button
                                              onClick={() => {
                                                dispatch(
                                                  increateQty(product.id)
                                                );
                                              }}
                                              className=" text-3xl  "
                                            >
                                              +
                                            </button>
                                          </span>
                                        </div>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleOnDelete(product)
                                            }
                                            className="font-medium text-blue-900 hover:text-blue-800"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>

                      {cart.length === 0 ? (
                        <></>
                      ) : (
                        <>
                          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Subtotal</p>
                              <p>${totalValue}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Shipping and taxes calculated at checkout.
                            </p>
                            <div className="mt-6">
                              <Link
                                to="/checkout"
                                className="flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-800"
                                onClick={() => dispatch(setCartShow(false))}
                              >
                                Checkout
                              </Link>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                              <p>
                                or
                                <button
                                  type="button"
                                  className="ml-1 font-medium text-blue-900 hover:text-blue-800"
                                  onClick={() => dispatch(setCartShow(false))}
                                >
                                  Continue Shopping
                                  <span aria-hidden="true"> &rarr;</span>
                                </button>
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ShopingCart;

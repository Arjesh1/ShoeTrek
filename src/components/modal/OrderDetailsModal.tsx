import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderDetailsModal } from "../../system/cartSlice";
import { OrderProductType, OrderType } from "../interfaces/interface";
import { RootState } from "../../store";

const OrderDetailsModal = ({ selectedOrder }: any) => {
  const dispatch = useDispatch();
  const { orderDetailsModal } = useSelector((state: RootState) => state.system);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={orderDetailsModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => dispatch(setOrderDetailsModal(false))}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full min-w-full items-end justify-center p-5 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                  <div className="bg-white px-4 py-9">
                    {/* desktop view */}

                    <div className="flex justify-between  items-start  px-5 hidden md:flex">
                      <div className="flex gap-3">
                        <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-2 ">
                          {selectedOrder?.product.map(
                            (item: OrderProductType) => (
                              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={item.img}
                                  className="h-full w-full object-cover object-center"
                                  alt="product "
                                />
                              </div>
                            )
                          )}
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className=" flex flex-col gap-4 items-center">
                            <p className="  sm:text-lg  leading-8 font-medium text-gray-600">
                              Order Number: <br />
                              <span className="font-normal">
                                {selectedOrder?.orderNumber}
                              </span>
                            </p>
                          </div>
                          <div className="flex flex-col gap-4  hidden sm:flex">
                            <p className=" sm:text-lg leading-8 font-medium text-gray-600">
                              Total:
                              <br />
                              <span className="font-normal">
                                ${selectedOrder?.totalPrice}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className=" flex flex-col  items-center">
                          <p className=" text-sm sm:text-lg  font-semibold text-gray-900">
                            Delivery Address
                          </p>
                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.streetAddress + ","}
                          </p>

                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.city +
                              ", " +
                              selectedOrder?.region +
                              ","}
                          </p>
                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.country +
                              ", " +
                              selectedOrder?.postalCode +
                              ","}
                          </p>
                        </div>
                      </div>

                      <div className="">
                        <div className=" flex flex-col gap-1 items-center">
                          <p className=" text-sm sm:text-lg  font-semibold text-gray-900">
                            Customer Details
                          </p>
                          <p className=" text-sm sm:text-lg leading-8 text-gray-600">
                            {selectedOrder?.firstName +
                              " " +
                              selectedOrder?.lastName}{" "}
                          </p>
                          <p className=" text-sm sm:text-lg leading-8 text-gray-600">
                            {selectedOrder?.email} @
                          </p>
                          <p className=" text-sm sm:text-lg leading-8 text-gray-600">
                            {selectedOrder?.phoneNumber}{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* tablet / mobile view*/}

                    <div className="flex  flex-col items-start  px-5 flex md:hidden w-80">
                      {/* order number , total price */}
                      <div className=" flex  w-full justify-between mb-4">
                        <div className=" flex flex-col gap-4 items-center">
                          <p className=" text-sm sm:text-lg  font-semibold text-gray-900">
                            Order Number
                            <br />
                            <span className="font-normal">
                              {selectedOrder?.orderNumber}
                            </span>
                          </p>
                        </div>

                        <div className="flex flex-col gap-4 items-center flex sm:hidden">
                          <p className=" text-sm sm:text-lg  font-semibold text-gray-900 text-center">
                            Total price
                            <br />
                            <span className="font-normal">
                              ${selectedOrder?.totalPrice}
                            </span>{" "}
                          </p>
                        </div>
                      </div>

                      {/* product img */}
                      <div className="flex justify-center items-center ">
                        <div className=" flex flex-wrap justify-center gap-2  ">
                          {selectedOrder?.product.map(
                            (item: OrderProductType) => (
                              <div className="h-32 w-32 flex-shrink-0 justify-center  overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={item.img}
                                  alt="product img"
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* deliver, customer details */}
                      <div className=" flex justify-between w-full mt-4">
                        <div className=" flex flex-col  items-center">
                          <p className=" text-sm sm:text-lg  font-semibold text-gray-900">
                            Delivery Address
                          </p>
                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.streetAddress + ","}
                          </p>

                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.city +
                              ", " +
                              selectedOrder?.region +
                              ","}
                          </p>
                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.country +
                              ", " +
                              selectedOrder?.postalCode +
                              ","}
                          </p>
                        </div>

                        <div className=" flex flex-col gap-1 items-center">
                          <p className=" text-sm sm:text-lg  font-semibold text-gray-900">
                            Customer Details
                          </p>
                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.firstName +
                              " " +
                              selectedOrder?.lastName}{" "}
                          </p>
                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.email} @
                          </p>
                          <p className=" text-sm sm:text-lg leading-1 text-gray-600">
                            {selectedOrder?.phoneNumber}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default OrderDetailsModal;

import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderAction } from "./orderAction";
import { Link } from "react-router-dom";
import { setOrderDetailsModal, setReviewForm } from "../../system/cartSlice";
import OrderDetailsModal from "../../components/modal/OrderDetailsModal";
import ReviewFormsModal from "../../components/reviews/ReviewForm";
import { deleteReviewAction } from "../../components/reviews/reviewsAction";

const OrderHistory = () => {
  const { user, userOrders } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedOrder, setSelectedOrder] = useState();
  const [selectedProductReview, setSelectedProductReview] = useState();
  const { email, firstName, lastName, uid } = user;
  const orderArray = [...userOrders];
  const sortedOrders = orderArray.sort((a, b) => b.orderDate - a.orderDate);

  useEffect(() => {
    dispatch(getUserOrderAction(uid));
  }, [dispatch, uid]);

  const handleOnSelectedOrderDetails = (item) => {
    setSelectedOrder(item);

    dispatch(setOrderDetailsModal(true));
  };

  const handleOnSelectedProductReview = (productId, orderNumber) => {
    const orderDetails = {
      productId: productId,
      orderNumber: orderNumber,
      firstName: firstName,
      lastName: lastName,
    };
    setSelectedProductReview(orderDetails);
    dispatch(setReviewForm(true));
  };

  const handleOnDeleteSelectedProductReview = (
    productId,
    orderNumber,
    reviewId
  ) => {
    const reviewOrderDetails = {
      productId: productId,
      orderNumber: orderNumber,
      reviewId: reviewId,
    };
    dispatch(deleteReviewAction(reviewOrderDetails));
  };

  return (
    <>
      <ReviewFormsModal orderDetails={selectedProductReview} />
      <OrderDetailsModal selectedOrder={selectedOrder} />
      <MainLayout>
        <div className="container mx-auto mt-5 sm:mt-12 mb-5 sm:mb-12 p-4 sm:p-0">
          <div className=" mb-4">
            <h1 className="text-xl  font-bold tracking-tight text-gray-900 sm:text-4xl">
              Order History
            </h1>

            <p className="text-md sm:text-lg leading-8 mt-2 text-gray-600">
              Check the status of recent orders and discover similar products.
            </p>
          </div>

          {userOrders.length === 0 ? (
            <p className="text-md sm:text-lg leading-8 mt-2 text-gray-600">
              No Order history.
            </p>
          ) : (
            <>
              {sortedOrders?.map((item) => (
                <div className="border border-slate-300 p-3 sm:p-10 rounded-md shadow-xl mt-6">
                  <div className=" flex justify-between items-end sm:items-start border-b border-slate-300 ">
                    <div className=" flex justify-evenly gap-5 sm:gap-16 pb-3 ">
                      <div className=" flex flex-col gap-4 items-center">
                        <p className=" text-sm sm:text-lg  font-semibold text-gray-900">
                          Order Number
                        </p>
                        <p className=" text-sm sm:text-lg leading-8 text-gray-600">
                          {item.orderNumber}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 items-center hidden sm:flex">
                        <p className=" text-sm sm:text-lg  font-semibold text-gray-900">
                          Date Placed
                        </p>
                        <p className=" text-sm sm:text-lg leading-8 text-gray-600">
                          {new Date(item.orderDate)
                            .toLocaleString()
                            .slice(0, 10)
                            .replace(",", "")}{" "}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 items-center">
                        <p className="text-sm sm:text-lg font-semibold text-gray-900">
                          {" "}
                          Total Amount
                        </p>
                        <p className=" text-sm sm:text-lg leading-8 text-gray-600">
                          $ {item.totalPrice}
                        </p>
                      </div>
                    </div>

                    <div className="pb-2">
                      <button className="block rounded-md bg-slate-100 border border-black-200 px-6 py-2.5 text-center text-xs sm:text-base font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">
                        Invoice
                      </button>
                    </div>
                  </div>

                  <div className="  mt-5 ">
                    {item.product?.map((product) => (
                      <div className="">
                        <li className="flex py-6 border-b border-gray-900/10">
                          <div className="h-32 w-32 sm:h-44  sm:w-44 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={product.img}
                              alt="product img"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base sm:text-2xl font-medium text-gray-900">
                                <h3>
                                  <p>{product.name}</p>
                                </h3>

                                <p className="ml-2">${product.price}</p>
                              </div>
                              <p className="mt-1 text-sm sm:text-xl text-gray-500">
                                Size: {product.size}
                              </p>
                              <p className="mt-1 text-sm sm:text-xl text-gray-500">
                                Quantity: {product.quantity}
                              </p>
                            </div>
                            <div className="flex flex-1 gap-2 items-end justify-end text-sm mt-3">
                              <Link to={`/product/${product.id}`}>
                                <button class="sm:text-lg font-semibold leading-6 text-blue-900 hover:text-blue-800 pb-2 text-xs">
                                  View Product
                                </button>
                              </Link>
                              <p className="sm:text-lg font-semibold leading-6 pb-2 text-xs">
                                |
                              </p>

                              {product.reviewId ? (
                                <button
                                  class="sm:text-lg font-semibold leading-6 text-red-500 pb-2 text-xs"
                                  onClick={() =>
                                    handleOnDeleteSelectedProductReview(
                                      product.id,
                                      item.orderNumber,
                                      product.reviewId
                                    )
                                  }
                                >
                                  Delete Review
                                </button>
                              ) : (
                                <button
                                  class="sm:text-lg font-semibold leading-6 text-yellow-500 pb-2 text-xs"
                                  onClick={() =>
                                    handleOnSelectedProductReview(
                                      product.id,
                                      item.orderNumber
                                    )
                                  }
                                >
                                  Give Review
                                </button>
                              )}
                            </div>
                          </div>
                        </li>
                      </div>
                    ))}
                  </div>

                  <div className=" w-full flex justify-between  mt-4 gap-5 py-3 border-b border-slate-500">
                    <p className="text-base flex gap-1 items-center sm:text-xl font-medium text-gray-500">
                      {" "}
                      <span className="text-base sm:text-2xl font-medium text-green-500">
                        <AiFillCheckCircle />
                      </span>{" "}
                      {item.status}
                      {/* order places, processing, shipped, delivered */}
                    </p>

                    <button
                      className="block  rounded-md bg-slate-100 border border-black-200 px-6 py-2.5 text-center text-sm sm:text-base font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                      onClick={() => handleOnSelectedOrderDetails(item)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default OrderHistory;

import React from "react";
import Ratings from "../ratings/Ratings";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface ProductNameProps {
  productName: string;
}

const Reviews = ({ productName }: ProductNameProps) => {
  const { reviews } = useSelector((state: RootState) => state.product);

  const selectedProdReviews = reviews?.filter(
    (item: any) => item.productId === productName
  );

  return (
    <>
      <div className="py-2 border-b border-slate-600 flex justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Reviews
        </h1>
      </div>

      {selectedProdReviews.length === 0 ? (
        <div className="flex  mt-5 text-lg sm:text-xl  p-5 gap-10 ">
          No reviews
        </div>
      ) : (
        <>
          {selectedProdReviews?.map((item: any) => (
            <div className="flex  mt-5 border-b border-slate-200 p-5 gap-10 ">
              <div className=" flex flex-col items-center basis-1/4">
                <div className="flex  justify-center items-center rounded-full">
                  <p className="text-8xl text-gray-400 ">
                    <FaUserCircle />
                  </p>
                </div>
                <p className=" text-md sm:text-lg mb-2 pt-1">
                  {item?.firstName + " " + item?.lastName}
                </p>
                <p className="text-xl">
                  <Ratings rate={item?.rating} />
                </p>
              </div>
              <div className=" flex justify-center gap-3 flex-col">
                <div className="text-md text-gray-700">{item?.description}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Reviews;

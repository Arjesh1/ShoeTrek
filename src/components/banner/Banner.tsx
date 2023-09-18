import React from "react";
import { Link } from "react-router-dom";

interface BannerType {
  banner: string;
  heading: string;
}

const Banner = ({ banner, heading }: BannerType) => {
  return (
    <>
      <div className=" h-4/6 grid grid-row-2 bg-gray-300  my-4    sm:grid-cols-2 pb-2 sm:pb-0">
        <div className="">
          <img src={banner} alt="modal" className="" />
        </div>

        <div className="">
          <div className="mx-auto h-full max-w-2xl  lg:mx-0 text-center flex justify-center items-center ">
            <div className=" h-auto  ">
              <h1 className="text-8xl font-bold tracking-tight text-white sm:text-8xl">
                Shop{" "}
              </h1>
              <h1 className="text-8xl font-bold tracking-tight text-white sm:text-8xl">
                {" "}
                {heading}
              </h1>
              <p className="mt-6 text-xl leading-8 text-white">
                Shop <span>{heading}</span>'s Fashion, Your Way.
              </p>
              <Link to={`/productList/${heading.toLowerCase()}`}>
                <button
                  type="submit"
                  className="rounded-md bg-blue-900 px-16  mt-3 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

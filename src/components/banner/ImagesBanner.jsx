import React from "react";

const ImagesBanner = ({ banner1, banner2 }) => {
  return (
    <>
      <div className=" h-auto grid grid-row-2 bg-gray-300  my-4    sm:grid-cols-2 ">
        <div className="">
          <img src={banner1} alt="modal" className=" " />
        </div>

        <div className="">
          <img src={banner2} alt="modal" className=" " />
        </div>
      </div>
    </>
  );
};

export default ImagesBanner;

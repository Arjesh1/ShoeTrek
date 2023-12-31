import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../interfaces/interface";

interface ProductCardProps {
  product?: ProductType[];
  heading?: string | undefined;
  category?: string | undefined;
  link?: string | undefined;
  icon?: JSX.Element | undefined;
}

const ProductCard = ({
  product,
  heading,
  category,
  link,
  icon,
}: ProductCardProps) => {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 ">
        <div className="mx-auto max-w-2xl px-4 flex justify-between sm:px-6  lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {heading}
          </h2>
          <Link to={`/productList/${category}`} className="flex text-center">
            <h2 className="text-lg  tracking-tight text-blue-900">{link}</h2>{" "}
            {icon}
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          {product?.map((item: ProductType) => (
            <Link to={`/product/${item.slug}`}>
              <div key={item?.slug} className="group relative rounded-lg border-solid p-2 border-2 ">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={item?.thumbnail}
                    alt="product card"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-700">
                      <a href={item?.slug}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item?.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-md text-gray-500">
                      {item.quantity} left!
                    </p>
                  </div>
                  <div>
                    {!item.salesPrice ? (
                      <>
                        <p className="text-md font-medium text-gray-900 ">
                          $ <span className="">{item.price}</span>{" "}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-md font-medium text-gray-600 ">
                          $ <span className="line-through">{item.price}</span>{" "}
                        </p>

                        <p className="text-md font-medium text-red-500 ">
                          $ <span className="">{item.salesPrice}</span>{" "}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;

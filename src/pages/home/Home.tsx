import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import HomeCarousel from "../../components/carousel/Carousel";
import { getProductsAction } from "../product/productAction";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/product/ProductCard";
import MaleBanner from "../../components/assets/images/menbanner.jpg";
import FemaleBanner from "../../components/assets/images/femlebanner.jpg";
import KidsBanner from "../../components/assets/images/kidbanner.jpg";
import Banner from "../../components/banner/Banner";
import sales1Banner from "../../components/assets/images/salesbanner.jpg";
import sales2Banner from "../../components/assets/images/sales2banner.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import BannerRotated from "../../components/banner/BannerRotated";
import OrderStatusModal from "../../components/modal/OrderStatusModal";
import { getReviewsAction } from "../../components/reviews/reviewsAction";
import ImagesBanner from "../../components/banner/ImagesBanner";
import "./home.css";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { ProductType } from "../../components/interfaces/interface";

const Home = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.product);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getProductsAction());
    dispatch(getReviewsAction());
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  //sales product
  const salesProduct = product.filter(
    (item: ProductType) => item.salesPrice !== undefined
  );
  //

  //kids product
  const kidsProduct = product.filter(
    (item: ProductType) => item.parentCat === "kids"
  );

  //men product
  const menProduct = product.filter(
    (item: ProductType) => item.parentCat === "men"
  );

  //women product
  const womenProduct = product.filter(
    (item: ProductType) => item.parentCat === "women"
  );

  return (
    <>
      <OrderStatusModal />
      <MainLayout>
        {isLoading ? (
          <div className="flex h-screen w-full justify-center items-center ">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="">
              <HomeCarousel />
            </div>

            <div className="h-auto flex flex-wrap justify-around items-center my-8">
              <div className="flex justify-center  items-center ">
                <Link to="/productList/trending">
                  <button className="button-home ">Trending</button>
                </Link>
              </div>
              <div className="flex justify-center  items-center">
                <Link to="/productList/sales">
                  <button className="button-home ">Sales</button>
                </Link>
              </div>
              <div className="flex justify-center  items-center hidden md:block">
                <Link to="/productList/men">
                  <button className="button-home ">Men</button>
                </Link>
              </div>
              <div className="flex justify-center  items-center hidden md:block">
                <Link to="/productList/women">
                  <button className="button-home ">Women</button>
                </Link>
              </div>
              <div className="flex justify-center  items-center hidden md:block">
                <Link to="/productList/kids">
                  <button className="button-home ">Kids</button>
                </Link>
              </div>
            </div>

            <div className="">
              <ImagesBanner banner1={sales1Banner} banner2={sales2Banner} />
            </div>

            <div>
              <ProductCard
                product={salesProduct.slice(0, 4)}
                category="sales"
                heading="Sales"
                link="Show more"
                icon={<AiOutlineArrowRight className=" pl-1 mt-2" />}
              />
            </div>

            <div className="">
              <Banner banner={MaleBanner} heading="Men" />
            </div>

            <div>
              <ProductCard
                product={menProduct.slice(0, 4)}
                category="men"
                heading="Men Trending"
                link="Show more"
                icon={<AiOutlineArrowRight className=" pl-1 mt-2" />}
              />
            </div>

            <div className="">
              <BannerRotated banner={FemaleBanner} heading="Women" />
            </div>

            <div>
              <ProductCard
                product={womenProduct.slice(0, 4)}
                category="women"
                heading="Women Trending"
                link="Show more"
                icon={<AiOutlineArrowRight className=" pl-1 mt-2" />}
              />
            </div>

            <div className="">
              <Banner banner={KidsBanner} heading="Kids" />
            </div>

            <div>
              <ProductCard
                product={kidsProduct.slice(0, 4)}
                category="kids"
                heading="Kids Trending"
                link="Show more"
                icon={<AiOutlineArrowRight className=" pl-1 mt-2" />}
              />
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
};

export default Home;

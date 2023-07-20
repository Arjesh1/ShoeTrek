import React, { useEffect } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import HomeCarousel from '../../components/carousel/Carousel'
import { getProductsAction } from '../product/productAction'
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import ProductCard from '../../components/product/ProductCard';
import MaleBanner from '../../components/assets/images/menbanner.jpg'
import FemaleBanner from '../../components/assets/images/femlebanner.jpg'
import Banner from '../../components/banner/Banner';


const Home = () => {
  const dispatch= useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  useEffect(()=>{
    dispatch(getProductsAction())
   }, [dispatch])

   const mBanner = {MaleBanner, heading:"Men"}
   const fBanner = {MaleBanner, heading:"Female"}

   

   
  return (
    <>
    <MainLayout>

        <div className="mb-3">
            <HomeCarousel/>
        </div>

        <div>
          <ProductCard/>
        </div>

        <div className="">
          <Banner banner={mBanner}/>
        </div>

        <div>
          <ProductCard/>
        </div>

        <div className="">
          <Banner banner={fBanner}/>
        </div>

        <div>
          <ProductCard/>
        </div>

        
    </MainLayout>
      
    </>
  )
}

export default Home

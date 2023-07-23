import React, { useEffect } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import HomeCarousel from '../../components/carousel/Carousel'
import { getProductsAction } from '../product/productAction'
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../../components/product/ProductCard';
import MaleBanner from '../../components/assets/images/menbanner.jpg'
import FemaleBanner from '../../components/assets/images/femlebanner.jpg'
import Banner from '../../components/banner/Banner';


const Home = () => {
  const dispatch= useDispatch();
  const { product} = useSelector(state=> state.product);

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
          <ProductCard product={product}/>
        </div>

        <div className="">
          <Banner banner={mBanner}/>
        </div>

        <div>
          <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Trending</h2>
          </div>
         
        <ProductCard product={product}/>
        </div>

        <div className="">
          <Banner banner={fBanner}/>
        </div>

        <div>
        <ProductCard product={product}/>
        </div>

        
    </MainLayout>
      
    </>
  )
}

export default Home

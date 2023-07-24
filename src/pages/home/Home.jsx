import React, { useEffect } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import HomeCarousel from '../../components/carousel/Carousel'
import { getProductsAction } from '../product/productAction'
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../../components/product/ProductCard';
import MaleBanner from '../../components/assets/images/menbanner.jpg'
import FemaleBanner from '../../components/assets/images/femlebanner.jpg'
import KidsBanner from '../../components/assets/images/kidbanner.jpg'
import Banner from '../../components/banner/Banner';


const Home = () => {
  const dispatch= useDispatch();
  const { product} = useSelector(state=> state.product);

  useEffect(()=>{
    dispatch(getProductsAction())
   }, [dispatch])

   

   

   
  return (
    <>
    <MainLayout>

        <div className="mb-3">
            <HomeCarousel/>
        </div>

        <div>
          <ProductCard product={product} heading="Sales"/>
        </div>

        <div className="">
          <Banner banner={MaleBanner} heading="Men"/>
        </div>

        <div>
          
         
        <ProductCard product={product} heading="Trending Men"/>
        </div>

        <div className="">
          <Banner banner={FemaleBanner} heading="Women"/>
        </div>

        <div>
        <ProductCard product={product} heading="Trending Women"/>
        </div>

        <div className="">
          <Banner banner={KidsBanner} heading="Kids"/>
        </div>

        <div>
        <ProductCard product={product} heading="Trending Kids"/>
        </div>



        
    </MainLayout>
      
    </>
  )
}

export default Home

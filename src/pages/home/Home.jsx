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
import { AiOutlineArrowRight } from 'react-icons/ai';


const Home = () => {
  const dispatch= useDispatch();
  const { product} = useSelector(state=> state.product);

  useEffect(()=>{
    dispatch(getProductsAction())
   }, [dispatch])


   //sales product 
   const salesProduct = product.filter(item => item.salesPrice !== undefined  )
  //  

   

//kids product
   const kidsProduct = product.filter(item => item.parentCat === "kids" )
   

   //men product
   const menProduct = product.filter(item => item.parentCat === "men" )
 

   //women product
   const womenProduct = product.filter(item => item.parentCat === "women" )
  

   

   

   
  return (
    <>
    <MainLayout>

        <div className="mb-3">
            <HomeCarousel/>
        </div>

        <div>
          <ProductCard product={salesProduct.slice(0,4)} category="sales" heading="Sales" link= "Show more"/>
        </div>

        <div className="">
          <Banner banner={MaleBanner} heading="Men"/>
        </div>

        <div>
          
        
        <ProductCard product={menProduct.slice(0,4)} category="men" heading="Trending Men"  link="Show more"/>
        
        </div>

        <div className="">
          <Banner banner={FemaleBanner} heading="Women"/>
        </div>

        <div>
        <ProductCard product={womenProduct.slice(0,4)} category="women" heading="Trending Women"  link="Show more"/>
        </div>

        <div className="">
          <Banner banner={KidsBanner} heading="Kids"/>
        </div>

        <div>
        <ProductCard product={kidsProduct.slice(0,4)} category="kids" heading="Trending Kids"  link="Show more"/>
        </div>



        
    </MainLayout>
      
    </>
  )
}

export default Home

import React, { useEffect } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import HomeCarousel from '../../components/carousel/Carousel'
import { getProductsAction } from '../product/productAction'
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import ProductCard from '../../components/product/ProductCard';


const Home = () => {
  const dispatch= useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

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
          <ProductCard/>
        </div>
    </MainLayout>
      
    </>
  )
}

export default Home

import React, { useEffect } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import ProductCard from '../../components/product/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from './productAction'
import { useParams } from 'react-router-dom'


const ProductList = () => {
    const dispatch= useDispatch();
    const { product} = useSelector(state=> state.product);
    const category = useParams()

    console.log();
  
    useEffect(()=>{
      dispatch(getProductsAction())
     }, [dispatch])


     const selectedCatProd = product.filter(item => item.parentCat === `${category.parentCat}` )

     console.log(selectedCatProd);
  return (
    <>
    <MainLayout>


        <ProductCard product={selectedCatProd} heading=""/>
    </MainLayout>
      
    </>
  )
}

export default ProductList

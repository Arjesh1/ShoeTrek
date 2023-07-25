import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import ProductCard from '../../components/product/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from './productAction'
import { useParams } from 'react-router-dom'


const ProductList = () => {
    const [cat, setCat] = useState([])
    const dispatch= useDispatch();
    const { product} = useSelector(state=> state.product);
    const category = useParams()
 console.log(cat);
    
  
 useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  useEffect(() => {
    // Filter the products based on the category after the products have been fetched
    if (category.parentCat === 'sales') {
      const selectedCatProd = product.filter(item => item.salesPrice !== undefined);
      setCat(selectedCatProd);
    } else {
      const selectedCatProd = product.filter(item => item.parentCat === `${category.parentCat}`);
      setCat(selectedCatProd);
    }
  }, [category.parentCat, product]);

   
     
     


     

     
  return (
    <>
    <MainLayout>


        <ProductCard product={cat} />
    </MainLayout>
      
    </>
  )
}

export default ProductList

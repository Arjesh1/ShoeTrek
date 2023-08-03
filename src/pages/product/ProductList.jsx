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
 
    


  useEffect(() => {

    dispatch(getProductsAction());
    // Filter the products based on the category after the products have been fetched
switch(category.parentCat){
  case 'sales' :
    setCat(product.filter(item => item.salesPrice !== undefined))
    break
    case 'women-sales' :
    setCat(product.filter(item => item.salesPrice !== undefined && item.parentCat === `women`))
    break
    case 'men-sales' :
    setCat(product.filter(item => item.salesPrice !== undefined && item.parentCat === `men`))
    break
    case 'kids-sales' :
    setCat(product.filter(item => item.salesPrice !== undefined && item.parentCat === `kids`))
    break
    default:
      setCat(item => item.parentCat === `${category.parentCat}`);



}



    // if (category.parentCat === 'sales') {
    //   const selectedCatProd = product.filter(item => item.salesPrice !== undefined);
    //   setCat(selectedCatProd);
    // }else if(category.parentCat === 'women-sales'){
    //   const selectedCatProd = product.filter(item => item.salesPrice !== undefined && item.parentCat === `women` );
    //   setCat(selectedCatProd);

    // } else if(category.parentCat === 'men-sales'){
    //   const selectedCatProd = product.filter(item => item.salesPrice !== undefined && item.parentCat === `men` );
    //   setCat(selectedCatProd);

    // }  else if(category.parentCat === 'kids-sales'){
    //   const selectedCatProd = product.filter(item => item.salesPrice !== undefined && item.parentCat === `kids` );
    //   setCat(selectedCatProd);

    // }
    // else {
    //   const selectedCatProd = product.filter(item => item.parentCat === `${category.parentCat}` );
    //   setCat(selectedCatProd);
    // }
  }, [category.parentCat, product, dispatch]);

   
 
     
     


     

     
  return (
    <>
    <MainLayout>



        <ProductCard product={cat} heading={category.parentCat.slice(0,1).toUpperCase() + category.parentCat.slice(1)} />
    </MainLayout>
      
    </>
  )
}

export default ProductList

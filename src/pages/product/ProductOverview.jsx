import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { RadioGroup } from '@headlessui/react'
import MainLayout from '../../components/layout/MainLayout';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {IoIosArrowBack} from 'react-icons/io'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getProductsAction } from './productAction';
import { setCartProd } from './productSlice';
import { toast } from 'react-toastify';
import Reviews from '../../components/reviews/Reviews';





const product1 = {
  
  sizes: [
    { size: '4', inStock: false },
    { size: '5', inStock: true },
    { size: '6', inStock: true },
    { size: '7', inStock: true },
    { size: '8', inStock: true },
    { size: '9', inStock: true },
    { size: '10', inStock: true },
    { size: '11', inStock: true },
  ],

};



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductOverview= () => {
  
  const [selectedSize, setSelectedSize] = useState(product1.sizes[2]);
  const {productName} = useParams()
  const {product, cart} = useSelector((state) => state.product)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch= useDispatch();
  const [prodQuantity, setProdQuantity] = useState(1)
  const [prodPrice, setProdPrice] = useState()
  const [cartProduct, setCartProduct] = useState([])
  

  

  useEffect(()=>{
    dispatch(getProductsAction())
    
   }, [dispatch ])


  
  const selectedProduct = product.find(item => item.slug === productName )

  const {name,   thumbnail, quantity, imgUrlList, description, salesPrice, price, slug} = selectedProduct



  // if (!selectedProduct) {
  //   return <div>Loading...</div>;
  // }

  const {size} = selectedSize

  useEffect(()=>{
    
    if(!salesPrice){
      setProdPrice(price)
  
    } else{
      setProdPrice(salesPrice)
    }
   }, [dispatch,price, salesPrice ])

  

  const handleOnClick = (e) =>{
    e.preventDefault()
    const obj = {
      img: thumbnail,
      name: name,
      price: prodPrice,
      id:slug,
      size: size,
      quantity: prodQuantity
    }

    // check for the product index

    const existingProductIndex = cart.findIndex((item) => item.name === obj.name &&  item.size === obj.size)

    if (existingProductIndex !== -1) {
      // If the product with the same name and size exists in the cart, update its quantity
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + obj.quantity }; // Create a deep copy and update the quantity
        }
        return item;
      });

      dispatch(setCartProd(updatedCart));
      
    } else {
      // If the product does not exist in the cart, add it
      const updatedCart = [...cart, obj]; // Create a copy of the cart array with the new object
      
      dispatch(setCartProd(updatedCart));
    }

    
    toast.success("Item has been added.")
  }

  const handleOnDecrease = (e) =>{
e.preventDefault()
if (prodQuantity > 1) {
  setProdQuantity(prodQuantity - 1);
}
  }
  

  const handleOnIncrease = (e) =>{
    e.preventDefault()
    setProdQuantity(prodQuantity + 1)
      }
  

  return (
    <>
    
    <MainLayout>
    <div className="bg-white mb-9 "> 
      <div className="pt-2">

        {/* Image gallery on big screen */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 hidden lg:block" >
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={thumbnail}
              alt="product img"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={imgUrlList[0]}
                alt="product img"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={imgUrlList[1]}
                alt="product img"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={imgUrlList[2]}
              alt="product img"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Image gallery on small screen */}

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 block lg:hidden" >
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={thumbnail} alt='product img' />
        </SwiperSlide>
        <SwiperSlide>
      <img src={imgUrlList[0]} alt='product img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrlList[1]} alt='product img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrlList[2]} alt='product img' />
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-1"
      >
        <SwiperSlide>
          <img src={thumbnail} alt='product img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrlList[0]} alt='product img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrlList[1]} alt='product img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrlList[2]} alt='product img' />
        </SwiperSlide>
        
      </Swiper>
        </div>

        {/* Product1 info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">

            {!salesPrice? (
            <>
              <p className="text-3xl tracking-tight text-gray-900">${price}</p>
              </>
              ):(
                <>
                <div className="flex gap-4">
                <p className="text-3xl tracking-tight text-gray-600 line-through">${price}</p>
              <p className="text-3xl tracking-tight text-red-500">${salesPrice}</p>
                </div>
                
              </>

              )
              }
            
            

           

            <form className="mt-10">
             

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500" alt="size">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product1.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.size}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.size}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* quantity */}
              <div className="mt-10">
                <div className="">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3> 
                <div className="flex items-center justify-evenly mt-3">
                  <div className="flex justify-center items-center rounded-full  p-2 px-5 border border-transparent bg-indigo-600  text-2xl font-bold text-white hover:bg-indigo-700">
                  <button
                onClick={handleOnDecrease}
                className="   " 
              >
                -
              </button>
                  </div>

                  <div className="">
                  <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min={1}
                  required
                  value={prodQuantity}
                  
                  className="block w-full rounded-md border-2 sm:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 sm:ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                />


                  </div>

                  <div className="flex justify-center items-center rounded-full  p-2 px-4 border border-transparent bg-indigo-600  text-2xl font-bold text-white hover:bg-indigo-700 ">
                  <button
                onClick={handleOnIncrease}
                className="  " 
              >
                +
              </button>
                  </div>
                </div>
                  
                </div>

                
              </div>

              <button
                
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleOnClick}
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            

            

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:max-w-7xl  lg:px-8 ">
        <Reviews productName={productName}/>
      </div>
      </div>

      
    </div>


    </MainLayout>
      
    </>
  )
}

export default ProductOverview

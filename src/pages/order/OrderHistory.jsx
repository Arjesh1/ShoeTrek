import React, {useEffect} from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrderAction } from './orderAction'


const OrderHistory = () => {
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const{uid, ...rest} = user
  console.log(user);

  useEffect(()=>{
    dispatch(getUserOrderAction(uid))


  }, [dispatch, uid])
  return (
    <>
     <MainLayout>
        
        <div className="container mx-auto mt-5 sm:mt-12 mb-5 sm:mb-12 p-4 sm:p-0">

            <div className=" mb-4">
                <h1 className='text-xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Order History</h1>

                <p className='text-md sm:text-lg leading-8 mt-2 text-gray-600'>Check the status of recent orders and discover similar products.</p>
            </div>

    

    <div className="border border-slate-300 p-10 rounded-md shadow-2xl mt-6">

        <div className=" flex justify-between items-center border-b border-slate-300">
            <div className=" flex justify-evenly gap-5 sm:gap-16 pb-3 ">
                <div className=" flex flex-col gap-4"> 
                <p className=' text-sm sm:text-lg  font-semibold text-gray-900'>Order Number</p>
                <p className=' text-sm sm:text-lg leading-8 text-gray-600'>DJSD6227</p>
                </div>
                <div className="flex flex-col gap-4 hidden sm:block">
                <p  className=' text-sm sm:text-lg  font-semibold text-gray-900'>Date Placed</p>
                <p className=' text-sm sm:text-lg leading-8 text-gray-600'>Jun 6, 2023 </p>
                </div>
                <div className="flex flex-col gap-4">
                <p  className='text-sm sm:text-lg font-semibold text-gray-900'> Total Amount</p>
                <p className=' text-sm sm:text-lg leading-8 text-gray-600'>$ 1600.00</p>
                </div>

            </div>

            <div className=" ">
            <button
            className="block  rounded-md bg-slate-100 border border-black-200 px-6 py-2.5 text-center text-sm sm:text-base font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            View Invoice
          </button>

            </div>
        </div>

        <div className=" border-b border-slate-500 mt-5 ">

        <li  className="flex py-6 border-b border-gray-900/10">
                                <div className="h-32 w-32 sm:h-44  sm:w-44 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src= 'https://firebasestorage.googleapis.com/v0/b/ecommerce-26906.appspot.com/o/product%2Fimages%2F1690263185095-3j253.w_3j253_w_02_202650.jpeg?alt=media&token=e6f8bcbc-fb54-48a0-803d-c663ce4d657f'
                                    alt="product img"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base sm:text-2xl font-medium text-gray-900">
                                      <h3>
                                        <p>Shoe</p>
                                      </h3>
                                      
                                        <p className="ml-2">$200</p>
                                     
                                      
                                    </div>
                                    <p className="mt-1 text-sm sm:text-xl text-gray-500">Size: 5</p>
                                    <p className="mt-1 text-sm sm:text-xl text-gray-500">Quantity: 4</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    
                                    
                                  </div>
                                </div>
                              </li>
                              <div className=" w-full flex justify-end mt-4 gap-5 py-3">
                                <button class="text-lg font-semibold leading-6 text-indigo-600 pb-2">View Product</button>

                               

                              </div>

                      

        </div>

        <div className=" border-b border-slate-500 mt-5 ">

        <li  className="flex py-6 border-b border-gray-900/10">
                                <div className="h-32 w-32 sm:h-44  sm:w-44 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src= 'https://firebasestorage.googleapis.com/v0/b/ecommerce-26906.appspot.com/o/product%2Fimages%2F1690263185095-3j253.w_3j253_w_02_202650.jpeg?alt=media&token=e6f8bcbc-fb54-48a0-803d-c663ce4d657f'
                                    alt="product img"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base sm:text-2xl font-medium text-gray-900">
                                      <h3>
                                        <p>Shoe</p>
                                      </h3>
                                      
                                        <p className="ml-2">$200</p>
                                     
                                      
                                    </div>
                                    <p className="mt-1 text-sm sm:text-xl text-gray-500">Size: 5</p>
                                    <p className="mt-1 text-sm sm:text-xl text-gray-500">Quantity: 4</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    
                                    
                                  </div>
                                </div>
                              </li>
                              <div className=" w-full flex justify-between mt-4 gap-5 py-3">
                                <p className='text-base flex gap-1 items-center sm:text-xl font-medium text-gray-500'> <span className='text-base sm:text-2xl font-medium text-green-500'><AiFillCheckCircle/></span> Delivered</p>
                                <button class="text-lg font-semibold leading-6 text-indigo-600 pb-2">View Product</button>

                               

                              </div>

                      

        </div>

        

        
        
        



    </div>
        </div>
        </MainLayout> 
    </>
  )
}

export default OrderHistory

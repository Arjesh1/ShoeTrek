import React, { Fragment, useRef, useState, ChangeEvent } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { TiTick } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderDetailsModal } from '../../system/cartSlice'
import { BiSolidErrorCircle } from 'react-icons/bi'


const OrderDetailsModal = () => {
  const dispatch = useDispatch()
  const {orderDetailsModal} = useSelector(state => state.system)
  const cancelButtonRef = useRef(null)
  

  //status comes from the stripe
  const status = "successful"

  
  

  return (
    <>
    <Transition.Root show={orderDetailsModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=> dispatch(setOrderDetailsModal(false))}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full min-w-full items-end justify-center p-5 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
            
                <div className="bg-white px-4 py-9">

                 <div className="flex justify-between  items-start  px-5 n">

                  <div className="flex gap-3">
                  <div class=" grid grid-cols-1 sm:grid-cols-2 gap-0.5 ">
                  
                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/ecommerce-26906.appspot.com/o/product%2Fimages%2F1689756110460-6-10457__94975.jpg?alt=media&token=b49ab852-3043-4384-8c93-f689035d0974"
                                  alt="product img"
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              
                              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/ecommerce-26906.appspot.com/o/product%2Fimages%2F1689756110460-6-10457__94975.jpg?alt=media&token=b49ab852-3043-4384-8c93-f689035d0974"
                                  alt="product img"
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                

                
              </div>
              <div className="">
              <div className=" flex flex-col gap-4 items-center"> 
        
        <p className=' text-sm sm:text-lg leading-8 text-gray-600'>4545</p>
        </div>
        <div className="flex flex-col gap-4 items-center hidden sm:flex">
        
      <p className=' text-sm sm:text-lg leading-8 text-gray-600'>sdsd </p>
        </div>
              
              </div>
                  </div>
                 
                  
                  <div className="">
                  <div className=" flex flex-col  items-center"> 
        <p className=' text-sm sm:text-lg  font-semibold text-gray-900'>Delivery Address</p>
        <p className=' text-sm sm:text-lg leading-8 text-gray-600'>Floyd Miles7363</p>
        <p className=' text-sm sm:text-lg leading-8 text-gray-600'>Floyd Miles7363</p>
        <p className=' text-sm sm:text-lg leading-8 text-gray-600'>Floyd Miles7363</p>
        </div>
                  </div>


                  <div className=""> 
                  <div className=" flex flex-col gap-1 items-center"> 
        <p className=' text-sm sm:text-lg  font-semibold text-gray-900'>Customer Details</p>
        <p className=' text-sm sm:text-lg leading-8 text-gray-600'>a@a.com </p>
        <p className=' text-sm sm:text-lg leading-8 text-gray-600'>11122334 </p>
        </div>
                  </div>
                 </div>

                  
                </div>
               
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
      
    </>
  )
}

export default OrderDetailsModal
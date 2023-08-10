import React, { Fragment, useRef, useState, ChangeEvent } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { TiTick } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderModal } from '../../system/cartSlice'
import { BiSolidErrorCircle } from 'react-icons/bi'


const OrderStatusModal = () => {
  const dispatch = useDispatch()
  const {orderModal} = useSelector(state => state.system)
  const cancelButtonRef = useRef(null)
  

  //status comes from the stripe
  const status = "successful"

  
  

  return (
    <>
    <Transition.Root show={orderModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=> dispatch(setOrderModal(false))}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

                  {status === "successful" ? (
                    <div className="flex flex-col items-center">
                    <div className="mx-auto flex sm:w-48 sm:h-48 w-24 h-24 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <TiTick className="sm:h-24 sm:w-24 w-12 h-12 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-3 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg text-center font-semibold leading-6 text-gray-900">
                        Payment Successful!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-md text-gray-500">
                          Your order number is FGHHG-11221324
                        </p>
                      </div>
                    </div>
                  </div>
                  ):(
                    <div className="flex flex-col items-center">
                    <div className="mx-auto flex sm:w-48 sm:h-48 w-24 h-24 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BiSolidErrorCircle className="sm:h-24 sm:w-24 w-12 h-12 text-red-400" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-3 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg text-center font-semibold leading-6 text-gray-900">
                        Payment Failed
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-md text-gray-500">
                          We couldn't process this payment. Please try another card or payment method. 
                        </p>
                      </div>
                    </div>
                  </div>

                  )}
                  

                  
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

export default OrderStatusModal
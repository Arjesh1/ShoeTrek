import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BiSolidErrorCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setForgetPassword } from '../../system/cartSlice'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../config/firebase-config'
import { toast } from 'react-toastify'


const ForgetPassword = () => {
    const {forgetPassword} = useSelector(state => state.system)
    const [form, setForm] = useState({})
    const dispatch =  useDispatch()

  const cancelButtonRef = useRef(null)

  const handleOnResetPasswordChange = (e) =>{
    const {name, value} = e.target
    setForm({...form, [name]: value})

  }

  const handleOnResetPasswordSubmit = (e) =>{
    e.preventDefault()
    try {
      sendPasswordResetEmail(auth, form.email).then(resp =>{

        toast.success("Password reset link has been send to your email. ")

      })
      
    } catch (error) {
      
    }
  }

  return (
    <>
    <Transition.Root show={forgetPassword} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=> dispatch(setForgetPassword(false))}>
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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
              <form className="space-y-6 w-full  " method="POST" onSubmit={handleOnResetPasswordSubmit}>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BiSolidErrorCircle className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Reset Password
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to reset your account password? You will receive an link to reset your password on your nominated email.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className=" mt-4  ">
                  
            <div className='w-full col-span-full'>
              <label htmlFor="email" className=" w-auto flex justify-center text-center  text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2 w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handleOnResetPasswordChange}
                  className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            

                  </div>

                  
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-yellow-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-400 sm:ml-3 sm:w-auto"
                    
                  >
                    Reset Password
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => dispatch(setForgetPassword(false))}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
      
    </>
  )
}

export default ForgetPassword

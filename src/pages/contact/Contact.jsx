import React, { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import {BsFillBuildingsFill, BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { addMessageAction } from './contactAction'

const Contact = () => {

  const dispatch = useDispatch()

  const [form, setForm] = useState({})

  const handleOnChange = (e) =>{
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  }

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    dispatch(addMessageAction({...form, date: Date.now()} ))
   
      setForm({})
    
  }
  





  return (
    <>
    <MainLayout>
    <div className='bg-slate-100 py-12'>
    <div className="mx-auto max-w-2xl text-center py-4 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Please feel free to reach out to us with any questions, concerns, or inquiries you may have.
        </p>

        <div className="flex flex-col gap-8 text-start px-3 sm:px-0">
        <div className="flex gap-4 text-xl">
            <BsFillBuildingsFill className='text-2xl'/>
            <p className='text-gray-700'>Sydney, NSW, Australia. 2000</p>
        </div>
        <div className="flex gap-4 text-xl">
            <BsFillTelephoneFill className='text-2xl'/>
            <p className='text-gray-700'>01234567</p>
            
        </div>
        <div className="flex gap-4 text-xl">
            <GrMail className='text-2xl'/>
            <p className='text-gray-700'>info@shoetrek.com.au</p>
            
        </div>
      </div>
      </div>

      
    </div>
    <div className="isolate bg-white px-6 py-24 sm:py-3 sm:pb-12 lg:px-8">
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact form</h2>
        
      </div>
      <form onSubmit={handleOnSubmit}  className="mx-auto mt-16 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label  className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
              onChange={handleOnChange}
              required={true}
                type="text"
                name="fName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
              onChange={handleOnChange}
              required={true}
                type="text"
                name="lName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label  className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
              onChange={handleOnChange}
              required={true}
                type="email"
                name="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label  className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className=" mt-2.5">
              
              <input
              onChange={handleOnChange}
              required={true}
                type="number"
                name="phone"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label  className="block text-sm font-semibold leading-6 text-gray-900">
              Subject
            </label>
            <div className=" mt-2.5">
              
              <input
              onChange={handleOnChange}
              required={true}
                type="text"
                name="subject"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label  className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                onChange={handleOnChange}
                as="textarea"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            className="block  rounded-md bg-indigo-600 px-6 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send message
          </button>
        </div>
      </form>
    </div>

    </MainLayout>
      
    </>
  )
}

export default Contact

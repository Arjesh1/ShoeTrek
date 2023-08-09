import React, { useState, useEffect } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { useSelector } from 'react-redux'

const UserDetails = () => {
const [form, setForm] = useState({})
const [editForm, setEditForm] = useState(true)
const {user} = useSelector(state=> state.user)


  useEffect(()=>{
    setForm(user)
  }, [user])

  return (
    <>




      <MainLayout>
        <div className="container mx-auto mt-12 mb-12 p-5">
          

        <div className="border-b border-gray-900/10 pb-12 bg-gray-50 p-10 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
                type="button"
                onClick={()=>setEditForm(false)}
                className={`flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 pb-3text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${editForm === false ? 'hidden': ''}`}
              >
                Edit
              </button>
          </div>

          <h2 className="text-base font-semibold leading-7 text-gray-900">User Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive product.</p>

          <form >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                value={form.firstName}
                disabled={editForm}
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                value={form.lastName}
                disabled={editForm}
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                value={form.email}
                disabled={true}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                value={form.number}
                disabled={editForm}
                  name="number"
                  type="number"
                  autoComplete="number"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
              <input
                value={form?.country}
                disabled={editForm}
                  name="country"
                  type="text"
                  autoComplete="country"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                value={form?.streetAddress}
                disabled={editForm}
                  type="text"
                  name="streetAddress"
                  autoComplete="street-address"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                value={form?.city}
                disabled={editForm}
                  type="text"
                  name="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                value={form?.region}
                disabled={editForm}
                  type="text"
                  name="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                value={form?.postalCode}
                disabled={editForm}
                  type="number"
                  
                  name="postalCode"
                  autoComplete="postal-code"
                  className="block w-full rounded-md text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className=" sm:col-span-full mt-4">
              <div className="flex justify-center">
          <button
          
                type="submit"
                disabled={editForm}
                onClick={()=>{setEditForm(true)}}
                className={`flex w-2/6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 pb-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${editForm ? 'hidden' : ''}`}
              >
                Save
              </button>
              </div>
          </div>
            
          </div>
          </form>
        </div>

        </div>
     




      </MainLayout>
    </>
  )
}

export default UserDetails

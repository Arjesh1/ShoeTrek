import { Disclosure } from '@headlessui/react'
import React from 'react'


const Footer = () => {
  return (
    <>
     <Disclosure as="nav" className="bg-gray-800 h-auto   text-white">
        

<div className=" p-4 py-16 sm:py-24 lg:py-32 flex justify-between flex-wrap">

    <div className="flex flex-col sm:flex-row justify-evenly w-screen gap-4 gap-y-6">
        <div className="">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Want product news and updates?
</h2>
<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
Sign up for our newsletter.</h2>
        </div>
        <div className="max-w-xl w-full lg:max-w-lg">
            
       
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
            <p className="text-lg  mt-2 tracking-tight text-white sm:text-lg">
        We care about your data. Read our privacy policy.</p>
          </div>
    </div>
    
    
</div>
     </Disclosure>
      
    </>
  )
}

export default Footer

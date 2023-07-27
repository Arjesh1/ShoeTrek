import React from 'react'
import { Link } from 'react-router-dom'

const BannerRotated = ({banner, heading}) => {
  
  
  
  return (
    <>

<div className=" h-auto grid grid-row-2 bg-gray-300  my-4    sm:grid-cols-2 ">
  

  
  
 
  <div className=''>

  <div class="mx-auto h-full max-w-2xl  lg:mx-0 text-center flex justify-center items-center  mb-5 sm:mb-0">
    <div className=" h-auto  ">
      <h1 class="text-8xl font-bold tracking-tight text-white sm:text-8xl">Shop </h1>
      <h1 class="text-8xl font-bold tracking-tight text-white sm:text-8xl"> {heading}</h1>
      <p class="mt-6 text-xl leading-8 text-white">Shop <span>{heading}</span>'s Fashion, Your Way.</p>
      <Link to={`/productList/${heading.toLowerCase()}`}>
      <button
          type="submit"
          className="rounded-md bg-indigo-600 px-16  mt-3 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Shop Now
        </button>
        </Link>
    </div>
    </div>
    

  </div>


  <div className='' >
  <img src={banner} alt="modal" className=' ' />
  </div>  
</div>
      
    </>
  )
}

export default BannerRotated

import React from 'react'

const Banner = ({banner}) => {
  
  
  
  return (
    <>

<div className=" h-screen sm:h-96 grid grid-row-2 bg-slate-300  my-4   mx-2 sm:grid-cols-2 ">
  <div className='' style={{
    background:`url(${banner.MaleBanner})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}></div>
 
  <div className=''>

  <div class="mx-auto h-full max-w-2xl  lg:mx-0 text-center justify-center items-center sm:items-start flex  ">
    <div className=" h-3/6 ">
      <h1 class="text-8xl font-bold tracking-tight text-white sm:text-8xl">Shop </h1>
      <h1 class="text-8xl font-bold tracking-tight text-white sm:text-8xl"> {banner.heading}</h1>
      <p class="mt-6 text-xl leading-8 text-white">Shop <span>{banner.heading}</span>'s Fashion, Your Way.</p>
      <button
          type="submit"
          className="rounded-md bg-indigo-600 px-16  mt-3 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {banner.heading}
        </button>
    </div>
    </div>
    

  </div>
</div>
      
    </>
  )
}

export default Banner

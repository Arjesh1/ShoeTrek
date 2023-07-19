import React from 'react'

const Banner = ({Banner}) => {
  return (
    <>

<div className=" h-screen sm:h-96 grid grid-row-2 bg-slate-300  my-4 p-1 sm:p-2 mx-2 sm:grid-cols-2 ">
  <div className='' style={{
    background:`url(${Banner})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}></div>
 
  <div className=''>

  <div class="mx-auto h-full max-w-2xl  lg:mx-0 text-center justify-center flex items-center ">
    <div className=" h-3/6 ">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-7xl">Shop Men</h1>
      <p class="mt-6 text-xl leading-8 text-white">Shop Men's Fashion, Your Way.</p>
      <button
          type="submit"
          className="rounded-md bg-indigo-600 px-8  mt-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Shop Men
        </button>
    </div>
    </div>
    

  </div>
</div>
      
    </>
  )
}

export default Banner

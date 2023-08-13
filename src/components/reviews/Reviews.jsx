import React from 'react'
import Ratings from '../ratings/Ratings'
import { FaUserCircle } from 'react-icons/fa'


const Reviews = () => {
    
  return (
    <>
      <div className="py-2 border-b border-slate-600 flex justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Reviews</h1>
            
          </div>

          <div className="flex  mt-5 border-b border-slate-200 p-5 gap-10 ">
            <div className=" flex flex-col items-center basis-1/4">
                <div className="flex  justify-center items-center rounded-full">
            <p className='text-8xl text-gray-400 '><FaUserCircle/></p>
            </div>
            <p className=' text-md sm:text-lg mb-2 pt-1'>Arjesh Khadka</p>
            <p className='text-xl'><Ratings/></p>
            </div>
            <div className=" flex justify-center gap-3 flex-col"> 
            <div className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum nisi ut non unde, autem quia quibusdam, cumque nostrum quisquam vero delectus quo libero, quae illo? Quos minima laudantium eos?</div>
            
            </div>
          </div>
          
    </>
  )
}

export default Reviews

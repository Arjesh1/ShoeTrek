import { Disclosure } from '@headlessui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
     <Disclosure as="nav" className="bg-gray-800 h-80 mt-96  text-white">

<div className=" p-4 footer-content flex justify-evenly flex-wrap">

    <div className="logo">Shoe-Trek</div>
    <div className='justify-center'> 
    <ul className='grid gap-4'>
    <li>Home</li>
    <li>New Arrivals</li>
    <li>Sale</li>
    <li>Trending</li>
    </ul>
    </div>
    
</div>
     </Disclosure>
      
    </>
  )
}

export default Footer

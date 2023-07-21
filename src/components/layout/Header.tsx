import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  FaCartPlus } from "react-icons/fa";
import {  RxCross1 } from "react-icons/rx"
import { GiHamburgerMenu } from "react-icons/gi"
import Logo from '../assets/images/logo.png'
import { BiSearchAlt } from "react-icons/bi"
import { Link } from "react-router-dom";






function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    console.log(name, ":", value);
    

  }

export const Header = () => {
  return (
  <>
  {/* logo and cart */}
   <Disclosure as="nav" className="bg-gray-800  ">
   
        
          <div className="mx-auto max-w-7xl px-2 py-1 sm:px-6 lg:px-8  ">
            <div className="relative flex h-16 items-center justify-between">
              
            <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white">
                  <Link to="/">
                    <img
                    className="h-44 w-auto"
                    src={Logo}
                    alt="Your Company"
                  />
                  
                  </Link>
                </div>
              </div>

              <div className=" w-96 ">
              <form className='flex '>
              <label className="relative block w-full">

  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300  rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm bg-white text-center " placeholder="Search for anything..." type="text" name="search" onChange={handleOnChange}/>

  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><BiSearchAlt /></svg>
  </span>
</label>
  
    
   
    
    
  
</form>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  
                  <FaCartPlus className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              
            </div>
          </div>

         
        
      
   </Disclosure>

   <Disclosure as="nav" className="bg-gray-800 border-t-2 border-white-500  ">
   {({ open }) => (
        <>
   <div className="absolute inset-x-0 left-0 flex items-center sm:hidden bg-gray-800 mb-auto">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex z-50 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    < RxCross1 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    < GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

   <div className="hidden sm:ml-6 sm:block pt-2 pb-2">
                  <div className="flex justify-center space-x-4 text-white">
                    
                      <div>
                        <Link to="/">Home</Link>

                      </div>
                      <div>
                      <Link to="/login">Login</Link>
                      </div>
                      <div>
                      <Link to="/contact">Contact</Link>
                      
                      
                      
                      </div>
                      <div className="">
                      <Link to="/">Men</Link>
                      </div>
                      <div className="">
                      <Link to="/">Women</Link>
                      </div>
                      <div className="">
                      <Link to="/">Kids</Link>
                      </div>

                      <div className="">
                      <Link to="/">Sale</Link>
                      </div>
                    </div>
                  </div>
               

                <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1  px-2 pb-3 pt-2 mt-9 text-white ">
            <div>
                        <Link to="/">Home</Link>

                      </div>
                      <div>
                      <Link to="/login">Login</Link>
                      </div>
                      <div>
                      <Link to="/contact">Contact</Link>
                      
                      
                      
                      </div>
                      <div className="">
                      <Link to="/">Men</Link>
                      </div>
                      <div className="">
                      <Link to="/">Women</Link>
                      </div>
                      <div className="">
                      <Link to="/">Kids</Link>
                      </div>

                      <div className="">
                      <Link to="/">Sale</Link>
                      </div>
            </div>
          </Disclosure.Panel>
          </>
       
       )}

   </Disclosure>

    </>
  )
}

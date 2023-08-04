import React, {useState, useEffect} from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { Link,  useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CheckOut = () => {
    const {cart} = useSelector(state => state.product)
    const [totalValue, settotalValue] = useState()
    const navigate = useNavigate()



    useEffect(() => {
        if(cart.length > 0){
          const calculatedTotal = (cart) => {
           return cart?.reduce((total, item) => {
             return total + +item.price * item.quantity
             
           }, 0)
          }
          const totalPrice =  calculatedTotal(cart) + 5
          settotalValue(totalPrice)
       
           
        } else{
            navigate("/")
        }


    
      }, [cart.length, settotalValue, cart, navigate ])
    
  return (
    <>
    <MainLayout>
    <div className="container mx-auto flex flex-col sm:flex-row mt-5 bg-slate-100 p-5 rounded-md">

        <div className="w-full p-3 ">
        <div className="border-b border-gray-900/10 pb-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Contact Information</h2>
          

          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
          </div>
        </div>


        <div className="border-b mt-3 border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Shipping Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use correct details.</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           

            <div className="col-span-full ">
              <label htmlFor="country" className="block  text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2 col-span-full ">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="number"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b mt-3 border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Details</h2>
          </div>

        </div>

        <div className="w-full  p-3  ">
        <div className="flow-root bg-white p-4 rounded-md">
                          
                            <ul role="list" className="-my-6 divide-y divide-gray-200 border-b border-gray-200 ">
                            {cart?.map((product) => (
                              <Link to={`/product/${product.id}`}>
                              <li key={product.id} className="flex py-6 border-b border-gray-900/10">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.img}
                                    alt="product img"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <p>{product.name}</p>
                                      </h3>
                                      
                                        <p className="ml-2">${product.price * product.quantity}</p>
                                     
                                      
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">Size: {product.size}</p>
                                    <p className="mt-1 text-sm text-gray-500">Quantity: {product.quantity}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    
                                    
                                  </div>
                                </div>
                              </li>
                              </Link>
                            ))}
                          </ul>

                          <div className=" mt-8 border-b  pb-4">
                            <div className="flex justify-between">
                                <p>Subtotal</p>
                                <p>${totalValue-5}</p>
                            </div>

                            <div className="flex justify-between mt-3">
                                <p>Shipping</p>
                                <p>$5</p>
                            </div>

                          </div>

                          <div className=" mt-8 border-b  pb-4">
                            <div className="flex justify-between text-lg font-medium ">
                                <p>Total</p>
                                <p>${totalValue}</p>
                            </div>

                            

                          </div>

                          <div className="col-span-full mt-10 py-4">
                          <button
                            
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            
                          >
                            Confirm Order
                            
                          </button>


                          </div>
                          
                          
                        </div>
        </div>
    </div>
    </MainLayout>


      
    </>
  )
}

export default CheckOut
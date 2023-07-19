import React from 'react'
import { useSelector } from 'react-redux';




const ProductCard = () => {
    const { product} = useSelector(state=> state.product);
    
    
  return (
    <div>
      <div className="bg-white">
        
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          {product.map((item) => (
            
            
            <div key={item?.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={item?.thumbnail}
                  
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md text-gray-700">
                    <a href={item?.slug}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item?.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-md text-gray-500">kmk</p>
                </div>
                <div>
                <p className="text-md font-medium text-gray-900 ">$ <span className='line-through'>{item.price}</span> </p>
                <p className="text-md font-medium text-gray-900">$ {item?.salesPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCard

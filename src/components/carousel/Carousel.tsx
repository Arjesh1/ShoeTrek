
import React from 'react'
import Slide1 from '../assets/images/whiteshoes.jpg'
import Slide2 from '../assets/images/shoes2.jpg'
import Slide3 from '../assets/images/shoes3.jpg'


const HomeCarousel = () => {

    const slideImg = [Slide1, Slide2, Slide3]
    const [activeIndex, setActiveIndex] = React.useState<number>(0);
    
    React.useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) =>
            prevIndex === slideImg.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
    
        return () => {
          clearInterval(interval);
        };
      }, [slideImg.length]);



   


  return (
    <>
    <div className=" isolate px-6  lg:px-8 h-84" style={{
                // background:`url(${slideImg[activeIndex]})`,
                 background:`url(${Slide1})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 // Adjust the following properties as needed:
                 backfaceVisibility: 'hidden',
              
            }}>
      
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-52">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-black ring-1 text-indigo-600 hover:ring-gray-900/20">
              Fee shipping when you shop above $50.
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Shop <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white-100 sm:text-6xl">
            Discover Your Perfect Pair
            </h1>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop Shoes
              </a>
              <a href="#" className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Shop Sale <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
       
      </div>

   
      
    </>
  )
}

export default HomeCarousel

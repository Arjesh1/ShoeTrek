
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
                 background:`url(${Slide3})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 // Adjust the following properties as needed:
                 backfaceVisibility: 'hidden',
              
            }}>
      
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-52">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white-100 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
       
      </div>

   
      
    </>
  )
}

export default HomeCarousel

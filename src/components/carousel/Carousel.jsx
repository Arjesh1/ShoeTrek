import Slide1 from '../assets/images/whiteshoes.jpg'
import Slide2 from '../assets/images/shoes2.jpg'
import Slide3 from '../assets/images/shoes3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';






const HomeCarousel = () => {

  return (
    <>

    <div className="relative"
    style={{
      height:"60vh"
    }}>

    <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,EffectFade, Pagination, Navigation]}
       
        className="mySwiper bg-white"
      >
        <SwiperSlide className='' style={{
          height:'60vh',
          background:`url(${Slide1})`,
          backgroundSize:"cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
      
        }}></SwiperSlide>
        <SwiperSlide className='' style={{
          height:'60vh',
          background:`url(${Slide2})`,
          backgroundSize:"cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
      
        }}></SwiperSlide>

<SwiperSlide className='' style={{
          height:'60vh',
          background:`url(${Slide3})`,
          backgroundSize:"cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
      
        }}></SwiperSlide>




      
    

      </Swiper>

      <div className="mx-auto max-w-2xl absolute z-50 top-16  right-0 whitespace-normal">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-black hover:ring-gray-900/20">
              Free shipping when toy shop over $50.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900  sm:text-6xl">
            Shoes that Make a Statement
            </h1>
            
            
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default HomeCarousel

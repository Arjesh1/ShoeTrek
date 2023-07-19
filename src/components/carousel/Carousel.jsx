
import React, { useRef, useState } from 'react';
import Slide1 from '../assets/images/whiteshoes.jpg'
import Slide2 from '../assets/images/shoes2.jpg'
import Slide3 from '../assets/images/shoes3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';






const HomeCarousel = () => {

 

  return (
    <>

    <div className=""
    style={{
      height:"60vh"
    }}>

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
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


      </div>
      
    </>
  )
}

export default HomeCarousel

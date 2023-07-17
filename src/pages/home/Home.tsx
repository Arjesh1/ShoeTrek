import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import HomeCarousel from '../../components/carousel/Carousel'

const Home = () => {
  return (
    <>
    <MainLayout>

        <div className="">
            <HomeCarousel/>
        </div>

        <div>hello</div>
    </MainLayout>
      
    </>
  )
}

export default Home

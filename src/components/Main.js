import React from 'react'
import Brands from './Brands'
import ChooseUs from './ChooseUs'
import Footer from './Footer'
import LaptopServices from './LaptopServices'
import Reservation from './Reservation'
import ServicesCompleted from './ServicesCompleted'
import Swiper from './Swiper'


const Main = () => {
  return (
    <div className='h-screen'>
        <Swiper/>
        <ServicesCompleted/>
        <LaptopServices/>
        <ChooseUs/>
        <Brands/>
        <Reservation/>
        <Footer/>
        
    </div>
  )
}

export default Main
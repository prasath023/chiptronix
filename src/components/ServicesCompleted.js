import React from 'react'
import ServicedImages from './ServicedImages'
import "../css/ServicesCompleted.css"


const ServicesCompleted = () => {
  return (
    <div className='flex bg-blue-600 pb-16 flex-col lg:px-10 justify-center items-center'>
        <h1 className='lg:text-5xl text-3xl text-gray-200 px-10 lg:px-0 text-center my-10 lg:my-20 font-bold'>We're here for you whenever you need us</h1>
    <ServicedImages/>
    </div>
  )
}

export default ServicesCompleted
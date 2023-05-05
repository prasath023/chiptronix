import React from 'react'
import Toshiba from "../assets/Toshiba.png"
import Samsung from "../assets/Samsung.png"
import MSI from "../assets/MSI.png"
// import MI from "../assets/MI.png"
import HP from "../assets/HP.png"
import Sony from "../assets/Sony.png"
import MAC from "../assets/MAC.png"
import Lenovo from "../assets/Lenovo.png"
import Acer from "../assets/Acer.png"
import Asus from "../assets/Asus.png"
import Dell from "../assets/Dell.png"


const Brands = () => {
  return (
    <div className='pb-10 lg:pb-0 lg:border-b-0 border-b-2'>
        <h1 className='lg:text-5xl text-3xl text-blue-600  text-center mt-10 lg:mt-24 mb-7 font-bold'>Brands Available</h1>
        <div className='flex flex-wrap lg:px-10 px-5 items-center justify-between'>
        <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-14 h-9' src={Asus} alt="" />
            </div>
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-14 h-9' src={MSI} alt="" />
            </div>
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-14 h-9' src={Lenovo} alt="" />
            </div>
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
              
            <img className='lg:h-14 h-9' src={Sony} alt="" />
            </div>
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-6 h-3' src={Samsung} alt="" />
            </div>
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-16 h-8' src={Toshiba} alt="" />
            </div>
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-14 h-9' src={Dell} alt="" />
            </div>
            {/* <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='h-7' src={MI} alt="" />
            </div> */}
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-14 h-9' src={MAC} alt="" />
            </div>
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-14 h-8' src={HP} alt="" />
            </div>
            <div className='h-12 lg:h-24 hover:shadow-lg hover:border-0 border flex items-center justify-center w-28 lg:w-56 lg:mx-5 my-5 lg:my-10'>
            <img className='lg:h-14 h-9' src={Acer} alt="" />
            </div>
           
        </div>
    </div>
  )
}

export default Brands
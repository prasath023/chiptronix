import React from 'react'
import BR from "../assets/BR.png"
import CLS from "../assets/CLS.png"
import DR from "../assets/DR.png"
import KR from "../assets/KR.png"
import MU from "../assets/MU.png"
import PR from "../assets/PR.png"
import SR from "../assets/SR.png"
import SU from "../assets/SU.png"



const LaptopServices = () => {
  return (
    <div className='flex pb-10 lg:pb-0 lg:border-b-0 border-b-2 flex-col justify-center items-center'>
        <div>
            <h1 className='text-3xl lg:text-5xl text-blue-600  text-center my-10 lg:my-20 font-bold'>Our Laptop Services</h1>
        </div>
        <div className='flex items-center justify-between flex-wrap px-10'>
            <div className="flex items-center justify-center flex-col mx-10 hover:shadow-xl hover:border-0 h-56 w-80 my-5 border">
                <img className="h-16" src={ SR} alt="" />
                <h1 className="font-semibold mt-5 text-lg lg:text-2xl">Screen Replacement </h1>
            </div>
            <div className="flex items-center justify-center flex-col mx-10 hover:shadow-xl hover:border-0 h-56 w-80 my-5 border">
                <img className="h-16" src={BR } alt="" />
                <h1 className="font-semibold mt-5 text-lg lg:text-2xl">Battery Replacement </h1>
            </div>
            <div className="flex items-center justify-center flex-col mx-10 hover:shadow-xl hover:border-0 h-56 w-80 my-5 border">
                <img className="h-16" src={KR } alt="" />
                <h1 className="font-semibold mt-5 text-lg lg:text-2xl">Keyboard Replacement </h1>
            </div>
            <div className="flex items-center justify-center flex-col mx-10 hover:shadow-xl hover:border-0 h-56 w-80 my-5 border">
                <img className="h-16" src={PR } alt="" />
                <h1 className="font-semibold mt-5 text-lg lg:text-2xl"> Panel Replacement</h1>
            </div>
            <div className="flex items-center justify-center flex-col mx-10 hover:shadow-xl hover:border-0 h-56 w-80 my-5 border">
                <img className="h-16" src={SR } alt="" />
                <h1 className="font-semibold mt-5 text-lg lg:text-2xl"> Software Upgradation</h1>
            </div>
            <div className="flex items-center justify-center flex-col mx-10 hover:shadow-xl hover:border-0 h-56 w-80 my-5 border">
                <img className="h-16" src={CLS } alt="" />
                <h1 className="font-semibold mt-5 text-lg lg:text-2xl">Chip Level Services </h1>
            </div>
            <div className="flex items-center justify-center flex-col mx-10 hover:shadow-xl hover:border-0 h-56 w-80 my-5 border">
                <img className="h-16" src={ DR} alt="" />
                <h1 className="font-semibold mt-5 text-lg lg:text-2xl">Data Recovery </h1>
            </div>
            <div className="flex items-center justify-center flex-col mx-10 hover:shadow-xl hover:border-0 h-56 w-80 my-5 border">
                <img className="h-16" src={ MU} alt="" />
                <h1 className="font-semibold mt-5 text-lg lg:text-2xl">Memory Upgrades </h1>
            </div>
            
        </div>
    </div>
  )
}

export default LaptopServices
import React from 'react'
import award from "../assets/award.png"
import clock from "../assets/clock.png"
import competition from "../assets/competition.png"
import handShake from "../assets/hand-shake.png"
import team from "../assets/team.png"
import corporate from "../assets/corporate.jpg"
import "../css/ChooseUs.css"

const ChooseUs = () => {
  return (
    <div className='flex items-center pb-10 lg:pb-0 lg:border-b-0 border-b-2 justify-center flex-col'>
        <h1 className='text-3xl lg:text-5xl text-blue-600  text-center my-10 lg:my-20 font-bold'>Why Choose Us?</h1>
    <div className='hidden lg:flex justify-between w-screen XLH lg:px-20 items-start'>
        <div className='w-1/2 pl-10'>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={team} alt="" />
                <h1 className="font-semibold mt-4 text">Experienced Staffs with more than 7 years Experience </h1>
            </div>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={handShake} alt="" />
                <h1 className="font-semibold mt-4 text">Trust Since 2014 in Erode </h1>
            </div>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={award} alt="" />
                <h1 className="font-semibold mt-4 text">No 1. Service Provider in Erode</h1>
            </div>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={clock} alt="" />
                <h1 className="font-semibold mt-4 text">Faster Services than any other service centers </h1>
            </div>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={competition} alt="" />
                <h1 className="font-semibold mt-4 text">Our Service rates are Competitive </h1>
            </div>
            
        </div>
        <div className='w-1/2 object-cover imgHeight mt-10'>
            <img className='object-cover h-full' src={corporate} alt="" />
        </div>
    </div>

    <div className='flex flex-col justify-center w-screen XLH lg:hidden items-center'>
    <div className='w-screen object-cover '>
            <img className='object-cover h-full' src={corporate} alt="" />
        </div>
        <div className='w-full flex justify-center items-center flex-col'>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={team} alt="" />
                <h1 className="font-semibold mt-4 text">Experienced Staffs with more than 7 years Experience </h1>
            </div>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={handShake} alt="" />
                <h1 className="font-semibold mt-4 text">Trust Since 2014 in Erode </h1>
            </div>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={award} alt="" />
                <h1 className="font-semibold mt-4 text">No 1. Service Provider in Erode</h1>
            </div>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={clock} alt="" />
                <h1 className="font-semibold mt-4 text">Faster Services than any other service centers </h1>
            </div>
            <div className='w-96 flex justify-center items-center flex-col text-center mt-10'>
                <img className='h-14' src={competition} alt="" />
                <h1 className="font-semibold mt-4 text">Our Service rates are Competitive </h1>
            </div>
            
        </div>
        
    </div>
    </div>
  )
}

export default ChooseUs
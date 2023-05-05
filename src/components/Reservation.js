import React from 'react'

const Reservation = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='lg:text-5xl text-3xl text-blue-600  text-center mt-10 mb-8 font-bold'>Reservation</h1>
        <h1 className='lg:text-2xl text-xl font-semibold'>Book a service</h1>
       <div className='flex lg:justify-between lg:w-2/4 lg:flex-row flex-col mt-7'>
        <div className='flex flex-col justify-center '>
            <h1 className='lg:text-lg font-medium mt-5 mb-1'>Date</h1>
            <input className='p-4 outline-none border-2 border-black h-11 lg:h-14 w-72' type="text" />
            <h1 className='lg:text-lg font-medium mt-5 mb-1'>Service</h1>
            <input className='p-4 outline-none border-2 border-black h-11 lg:h-14 w-72' type="text" />
            <h1 className='lg:text-lg font-medium mt-5 mb-1'>Name</h1>
            <input className='p-4 outline-none border-2 border-black h-11 lg:h-14 w-72' type="text" />
        </div>
        <div>
        <h1 className='lg:text-lg font-medium mt-5 mb-1'>Phone</h1>
            <input className='p-4 outline-none border-2 border-black h-11 lg:h-14 w-72' type="text" />
            <h1 className='lg:text-lg font-medium mt-5 mb-1'>Email</h1>
            <input className='p-4 outline-none border-2 border-black h-11 lg:h-14 w-72' type="text" />
            <h1 className='lg:text-lg font-medium mt-5 mb-1'>Complaint</h1>
            <input className='p-4 outline-none border-2 border-black h-11 lg:h-14 w-72' type="text" />
        </div>
        </div>
        <div className='lg:my-14 my-8'>
        <a href="mailto:support@chiptronix.in"> <button className='bg-black outline-none flex justify-center items-center py-1 lg:py-3 px-7 lg:px-12 text-lg lg:text-xl font-semibold text-white'>
                Book
            </button></a>
        </div>
    </div>
  )
}

export default Reservation
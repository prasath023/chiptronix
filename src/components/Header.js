import React, { useEffect, useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({handleOpenMenu,open}) => {
    const [openMenu, setOpenMenu]=useState(false)

useEffect(()=>{
    handleOpenMenu(openMenu)
},[openMenu])

useEffect(()=>{
    setOpenMenu(open)
},[open])

  return (
        <div className='flex relative px-5 py-4 justify-center bg-gray-100'>
            <div className='flex justify-around lg:justify-start items-center w-full lg:w-1/4'>
            <Link className='outline-none cursor-pointer' to="/"><img className="w-2/5 lg:w-72 " src={logo} alt="Chiptronix"></img></Link>
            <div className='w-3/5 flex lg:hidden justify-end'>
            <div onClick={()=>setOpenMenu(true)} className='cursor-pointer'>
            <MenuIcon/>
            </div>
            </div>
            </div>
        <ul className='hidden lg:flex lg:ml-10 justify-between w-2/4 items-center'>
        <Link className='outline-none cursor-pointer' to="/"> <li className='flex justify-center items-center'>
            <HomeOutlinedIcon/>
            <h1 className='ml-1 font-semibold'>Home</h1>
        </li></Link>                   
        <Link className='outline-none cursor-pointer' to="/services"><li className='flex justify-center items-center'>
            <HandymanOutlinedIcon/>
            <h1 className='ml-1 font-semibold'>Services</h1>
        </li></Link>
        <Link className='outline-none cursor-pointer' to="/spares"><li className='flex justify-center items-center'>
            <ExtensionOutlinedIcon/>
            <h1 className='ml-1 font-semibold'>Spares/Accessories</h1>
        </li></Link>
        <Link className='outline-none cursor-pointer' to="/about"><li className='flex justify-center items-center'>
            <InfoOutlinedIcon/>
            <h1 className='ml-1 font-semibold'>About</h1>
        </li></Link>
        </ul>
        
        </div>
  )
}

export default Header
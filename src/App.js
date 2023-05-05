import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Services from './Services';
import logo from "./assets/logo.png"
import Spares from './Spares';
import About from './About';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [openMenu, setOpenMenu]=useState(false)
const handleOpenMenu=(pass)=>{
  setOpenMenu(pass)
}
  return (
    <div className="">
     <BrowserRouter>
     <Header handleOpenMenu={handleOpenMenu} open={openMenu}/>
      <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="services" exact element={<Services />} />
          <Route path="spares" exact element={<Spares />} />
          <Route path="about" exact element={<About />} />
      </Routes>
      {
            openMenu &&
            <div className='absolute flex items-center justify-start flex-col lg:hidden top-0 z-50 w-screen h-screen bg-gray-100'>
              <div className='flex px-5 py-4 justify-around lg:justify-start items-center w-full lg:w-1/4'>
        <Link className='outline-none cursor-pointer' to="/"><img className="w-2/5 lg:w-56 " src={logo} alt="Chiptronix"></img></Link>
        <div className='w-3/5 flex lg:hidden justify-end'>
        <div onClick={()=>setOpenMenu(false)} className='cursor-pointer'>
        <CloseIcon/>
        </div>
        </div>
        </div>
        <div className='h-full'>
        <ul className='flex flex-col mt-28 justify-center items-center'>
        <Link className='outline-none cursor-pointer' to="/"> <li onClick={()=>setOpenMenu(false)} className='mb-5 flex justify-center items-center'>
           
            <h1 className='lg:ml-1 font-semibold'>Home</h1>
        </li></Link>
        <Link className='outline-none cursor-pointer' to="/services"><li onClick={()=>setOpenMenu(false)} className='mb-5 flex justify-center items-center'>
           
            <h1 className='lg:ml-1 font-semibold'>Services</h1>
        </li></Link>
        <Link className='outline-none cursor-pointer' to="/spares"><li onClick={()=>setOpenMenu(false)} className='mb-5 flex justify-center items-center'>
            
            <h1 className='lg:ml-1 font-semibold'>Spares/Accessories</h1>
        </li></Link>
        <Link className='outline-none cursor-pointer' to="/about"><li onClick={()=>setOpenMenu(false)} className='mb-5 flex justify-center items-center'>
           
            <h1 className='lg:ml-1 font-semibold'>About</h1>
        </li></Link>
        </ul>
        </div>
            </div>
        }
     </BrowserRouter>
    </div>
  );
}

export default App;

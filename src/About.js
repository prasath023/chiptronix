import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import award from "./assets/about/light-bulb.png"
import clock from "./assets/about/letter-s.png"
import competition from "./assets/about/menu.png"
import handShake from "./assets/about/phone-call.png"
import corporate from "./assets/about.jpg"
import "./css/ChooseUs.css"
import Reservation from './components/Reservation'
import Footer from './components/Footer'


export default function About() {

    const { isLoaded } = useLoadScript({
        googleeMapsApiKey: "AIzaSyDutdEeO4kiePy_my4IKI3dFueuS6fdP7c"
    })
    const center = useMemo(() => ({ lat: 44, lng: -80 }), [])

    return ( <
        div >
        <
        div >
        <
        div className = 'flex  lg:justify-between lg:flex-row flex-col w-screen XLH lg:px-20 items-center mb-10' >
        <
        div className = 'lg:w-1/2 lg:hidden block object-cover  lg:mt-20' >
        <
        img className = 'object-cover h-full'
        src = { corporate }
        alt = "" / >
        <
        /div> <
        div className = 'lg:w-1/2 pb-10 lg:pb-0 lg:border-b-0 border-b-2 lg:pl-10' >
        <
        div className = 'lg:w-96 px-5 lg:px-0 text-left  flex justify-center items-center flex-col text-sm lg:text-base lg:text-center mt-10' >
        <
        h1 className = 'text-3xl lg:text-5xl text-blue-600  text-center mb-2 lg:mb-7 font-bold' > About Us < /h1> <
        p className = " mt-4" > Chiptronix is a Complete Computer and Accessories Store started in 2016 by a group of Tech Enthutiasists to Deliver excellence in Science and Technology and currently offering solutions and Services all over India < /p> <
        /div> <
        div className = 'lg:w-96 px-5 lg:px-0 text-left  flex justify-center items-center flex-col text-sm lg:text-base lg:text-center mt-10' >
        <
        img className = 'h-10 lg:h-14'
        src = { clock }
        alt = "" / >
        <
        p className = " mt-4" > Chiptronix is a professional Laptop service company specializing in Intel and AMD platform motherboards
        for over 8 years in Erode. < /p> <
        /div> <
        div className = 'lg:w-96 px-5 lg:px-0 text-left  flex justify-center items-center flex-col text-sm lg:text-base lg:text-center mt-10' >
        <
        img className = 'h-10 lg:h-14'
        src = { handShake }
        alt = "" / >
        <
        p className = " mt-4" > Chiptronix provides you with the highest quality support
        for all types of issues in your laptops and offers a wide - variety of services
        for industrials and business customers as well as hardware support. < /p> <
        /div> <
        div className = 'lg:w-96 px-5 lg:px-0 text-left  flex justify-center items-center flex-col text-sm lg:text-base lg:text-center mt-10' >
        <
        img className = 'h-10 lg:h-14'
        src = { competition }
        alt = "" / >
        <
        p className = " mt-4" > Chiptronix has been trained and certified to troubleshoot and fix some of the latest laptop systems. < /p> <
        /div> <
        div className = 'lg:w-96 px-5 lg:px-0 text-left  flex justify-center items-center flex-col text-sm lg:text-base lg:text-center mt-10' >
        <
        img className = 'h-12 lg:h-16'
        src = { award }
        alt = "" / >
        <
        p className = " mt-4" > Innovative solutions and effective solutions to your problems < /p> <
        /div>



        <
        /div> <
        div className = 'lg:w-1/2 imgHeight hidden lg:block object-cover  lg:mt-20' >
        <
        img className = 'object-cover h-full'
        src = { corporate }
        alt = "" / >
        <
        /div>

        <
        /div> <
        /div>

        {
            /* <div >
                    {isLoaded && 
                    <GoogleMap 
                    zoom={10}
                    center={center}
                    mapContainerClassName="map"
                    >
                    <Marker position={{lat:44, lng: -80}} />
                    </GoogleMap>
                    }
                </div> */
        } <
        div >
        <
        div className = " lg:py-8  relative" >
        <
        img src = "https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
        className = "h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden"
        alt = "map" / >
        <
        div className = "xl:mx-auto xl:container  relative " >
        <
        div className = "flex flex-wrap xl:mx-auto xl:container" >
        <
        div className = "w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 " >
        <
        img src = "https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
        className = "h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
        alt = "map" / >
        <
        div className = "w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4" >
        <
        div className = "w-full 2xl:pl-48 xl:pt-1" >
        <
        h1 className = "text-3xl md:text-5xl lg:text-5xl mb-8 font-bold tracking-wider text-blue-600 " > We’ re Here < /h1> <
        div className = "w-full md:w-10/12 mt-3" >
        <
        h2 className = "text-gray-800 text-base md:text-lg leading-8 tracking-wider" > We believe satisfication of customers is the most important aspect of success of every business < /h2> <
        div className = "mt-4 md:mt-8" >
        <
        h2 className = "text-sm md:text-base text-blue-600 font-semibold" > Address < /h2> <
        h2 className = "text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2" > 1 st Floor ARG Complex, Sathy Road(Near BusStand), Erode - 638003 < /h2>

        <
        /div> <
        div className = "mt-4 md:mt-8" >
        <
        h2 className = "text-sm md:text-base text-blue-600 font-semibold" > Contact < /h2> <
        h2 className = "text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2" > +91 9942080813(Phone) < /h2> <
        h2 className = "text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2" > +91 9344563214(Cell) < /h2> <
        /div> <
        div className = "mt-4 md:mt-8" >
        <
        h2 className = "text-sm md:text-base text-blue-600 font-semibold" > Email < /h2> <
        h2 className = "text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2" > support @chiptronix.in < /h2> <
        p className = "text-gray-500 text-base md:text-lg leading-8 tracking-wider mt-2" > Send us your query anytime! < /p>


        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "w-full lg:w-1/2   xl:pt-10 lg:pl-24" >
        <
        div className = "flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4" >
        <
        h1 className = "text-3xl md:text-5xl lg:text-5xl mb-8 font-bold tracking-wider text-blue-600" > Let’ s Talk < /h1> <
        div className = "w-full 2xl:w-8/12 mt-3" >
        <
        h2 className = "text-gray-800 text-base md:text-lg leading-8 tracking-wider" > For enquiries, please email us using the form below < /h2> <
        div className = "mt-4 md:mt-8" >
        <
        p className = "text-gray-800 text-base font-medium" > Name < /p> <
        input className = "mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-2 lg:py-5 pl-4 text-gray-800"
        type = "text"
        placeholder = "Ajay" / >
        <
        /div> <
        div className = "mt-4 md:mt-8" >
        <
        p className = "text-gray-800 text-base font-medium" > Email Address < /p> <
        input className = "mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-2 lg:py-5 pl-4 text-gray-800"
        type = "email"
        placeholder = "example@mail.com" / >
        <
        /div> <
        div className = "mt-4 md:mt-8" >
        <
        p className = "text-gray-800 text-base font-medium" > Message < /p> <
        textarea className = "mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-2 lg:py-5 pl-4 text-gray-800"
        type = "text"
        placeholder = "Write us something..."
        defaultValue = { "" }
        /> <
        /div> <
        div className = "py-5" >
        <
        a href = "mailto:support@chiptronix.in" > < button className = "py-3  px-10 outline-none  bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold" > Send < /button></a >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        Footer / >

        <
        /div>
    )
}

// function Map(){
//   return <div>

//   </div>
// }


// AIzaSyDutdEeO4kiePy_my4IKI3dFueuS6fdP7c
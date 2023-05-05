// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import main1 from "../assets/main/services1.jpg"
import main2 from "../assets/main/services2.jpg"
import main3 from "../assets/main/servises3.webp"
import main4 from "../assets/main/services4.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../css/ServicesCompleted.css"


export default () => {
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={2}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="heightSwiper w-full hidden lg:block"
    >
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center'>
          <img src={main1} className="object-cover w-full h-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center '>
          <img src={main2} className="object-cover w-full h-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center '>
          <img src={main3} className="object-cover w-full h-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center '>
          <img src={main4} className="object-cover w-full h-full" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>


    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={2}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="heightSwiper w-full lg:hidden"
    >
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center'>
                    <img src={main1} className="object-cover w-full h-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center '>
                    <img src={main2} className="object-cover w-full h-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center '>
                    <img src={main3} className="object-cover w-full h-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center '>
                    <img src={main4} className="object-cover w-full h-full" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  );
};

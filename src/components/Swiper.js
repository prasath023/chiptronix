// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import main1 from "../assets/main/laptop5.jpg"
import main2 from "../assets/main/laptop2.jpg"
import main3 from "../assets/main/laptop3.jpg"
import main4 from "../assets/main/main1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation,Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="lg:h-3/4 h-1/2"
    >
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center w-full '>
           <img src={main1} className="object-cover h-full w-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center w-full '>
           <img src={main2} className="object-cover h-full w-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center w-full '>
           <img src={main3} className="object-cover h-full w-full" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full bg-gray-200 flex items-center justify-center w-full '>
           <img src={main4} className="object-cover h-full w-full" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

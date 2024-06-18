'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from 'swiper';

import { Pagination } from 'swiper/modules';
SwiperCore.use([Pagination]);
const SwiperComp = () => {
  return (
    <div className="m-auto flex justify-center items-center lg:w-full  text-black">
      <Swiper
     
       pagination={{ clickable: true }} // Enable pagination dots
       style={{ "--swiper-pagination-color": "white", 
         "--swiper-pagination-bullet-inactive-color": "#999999",
         "--swiper-pagination-bullet-inactive-opacity": "1",
         "--swiper-pagination-bullet-size": "9px", } as any}
        className="  rounded-lg lg:w-9/12 sm:w-full h-96  "
    
       
      >
        <SwiperSlide className="flex items-center justify-center text-center text-3xl bg-white">
            <img src="https://wallpapercave.com/wp/wp1829343.jpg"     className="h-full w-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-center text-3xl bg-white">
        <img src="https://wallpapercave.com/wp/wp3265960.jpg"     className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-center text-3xl bg-white">
          <img src="https://wallpapercave.com/wp/wp3347252.jpg"     className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-center text-3xl bg-white">
          <img src="https://uswalldecor.com/cdn/shop/products/DI0944_73ec5c7a-6d68-4613-a5da-4a32fd26279b.jpg?v=1581370087&width=493"  className="h-full w-full " />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComp;

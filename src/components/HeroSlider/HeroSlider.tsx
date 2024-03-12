"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// styles for swiper
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSlider = () => {
  return (
    <Swiper className=''>
      <SwiperSlide className=''>
        1
      </SwiperSlide>
      <SwiperSlide className=''>
        2
      </SwiperSlide>
      <SwiperSlide className=''>
        3
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider

"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// styles for swiper
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSlider = () => {

  const SlideData = [
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam repellat incidunt? Facere ad, animi quas recusandae fuga commodi iusto officiis consequatur, sed quisquam atque?',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam repellat incidunt? Facere ad, animi quas recusandae fuga commodi iusto officiis consequatur, sed quisquam atque?',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam repellat incidunt? Facere ad, animi quas recusandae fuga commodi iusto officiis consequatur, sed quisquam atque?',
    },
  ];

  return (
    <Swiper className='w-full h-full'>
      {SlideData.map((item, index) => {
        return (
          <SwiperSlide key={index} className=''>
            <div className="w-full">
              <h2 className="">{item.title}</h2>
              <p className="">{item.description}</p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default HeroSlider

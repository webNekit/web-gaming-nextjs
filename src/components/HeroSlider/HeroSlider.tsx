"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomButton from '../CustomButton/CustomButton';

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
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit amet, consectetur adipisicing elit. Provident quisquam repellat incidunt? Facere ad, animi quas recusandae fuga commodi iusto officiis consequatur, sed quisquam atque?',
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
            <div className="w-full md:w-1/2">
              <h2 className="mb-8 text-8xl">{item.title}</h2>
              <p className="text-xl mb-12">{`${item.description.length > 189 ? item.description.slice(0, 189) + '...' : item.description }`}</p>
              <CustomButton containerStyle={'w-[170px] h-[50px]'} text='Подробнее' />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default HeroSlider

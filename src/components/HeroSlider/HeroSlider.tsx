"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/varianstMotion';
import CustomButton from '../CustomButton/CustomButton';

// styles for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import useArticlesBanner from '@/Hooks/useArticlesBanner';

const HeroSlider = () => {

  const articles = useArticlesBanner();

  return (
    <Swiper className='w-full h-full'>
      {articles.map((item, index) => {
        return (
          <SwiperSlide key={index} className=''>
            <div className="w-full md:w-1/2">
              <motion.h2 variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className="mb-8 md:text-8xl">{`${item.attributes?.name.length > 22 ? item.attributes?.name.slice(0, 22) + '...' : item.attributes?.name }`}</motion.h2>
              <motion.p variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className="text-base md:text-xl mb-12">{`${item.attributes?.smallText.length > 189 ? item.attributes?.smallText.slice(0, 189) + '...' : item.attributes?.smallText }`}</motion.p>
              <motion.div variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.2 }}>
                <CustomButton href={'/articles/' + item.attributes?.slug} containerStyle={'w-[170px] h-[50px]'} text='Подробнее' />
              </motion.div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default HeroSlider

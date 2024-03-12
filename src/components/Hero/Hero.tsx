import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';

const Hero = () => {
  return (
    <section className='w-full' id='hero'>
      <div className="container mx-auto">
        <div className="w-full">
          <HeroSlider />
        </div>
      </div>
    </section>
  )
}

export default Hero

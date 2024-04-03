"use client";
import usePriceSection from '@/Hooks/usePriceSection';
import React from 'react';

const Prices = () => {

    const priceSection = usePriceSection();

  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full">
            <h2 className="section-title">{priceSection?.attributes?.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {priceSection?.attributes?.packets.map((packet, index) => {
                    return (
                        <div className="w-full">
                            <h2>{packet.name}</h2>
                            <h3>{packet.price}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Prices

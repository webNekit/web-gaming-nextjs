"use client"
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const usePriceSection = () => {


    const [priceSection, setPriceSection] = useState();
    
    useEffect(() => {
        getPricesSection();
    }, [])

 const getPricesSection = () => {
    GlobalApi.getPricesSection().then(resp => {
        console.log(resp.data.data);
        setPriceSection(resp.data.data);
    });
 }

 return priceSection;

}

export default usePriceSection

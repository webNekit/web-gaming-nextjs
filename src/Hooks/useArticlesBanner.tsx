"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useArticlesBanner = () => {
  
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        getArticlesBanner();
    }, [])

    const getArticlesBanner = () => {
        GlobalApi.getArticlesBanner().then(resp => {
            setArticlesList(resp.data.data);
        });
    }

    return articlesList;

}

export default useArticlesBanner

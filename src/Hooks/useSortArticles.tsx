"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSortArticles = () => {

    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        getArticles();
    }, [])

 const getArticles = () => {
    GlobalApi.getSortArticles().then(resp => {
        setArticlesList(resp.data.data);
    });
 }

 return articlesList;

}

export default useSortArticles

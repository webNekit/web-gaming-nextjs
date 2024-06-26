"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSingleArticle = (id) => {

    const [detailArticle, setDetailArticle] = useState();

    useEffect(() => {
        getSingleArticle();
    },[id])

  const getSingleArticle = () => {
    GlobalApi.getSingleArticle(id).then(resp => {
        setDetailArticle(resp.data.data[0]);
    });
  }

  return detailArticle;
}

export default useSingleArticle

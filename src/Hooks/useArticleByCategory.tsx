"use client";
import GlobalApi from '@/utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const useArticleByCategory = (categoryId) => {

    const [articlesList, setArticlesList] = useState();

    useEffect(() => {
        getArticleByCategory();
    }, [categoryId])

  const getArticleByCategory = () => {
    GlobalApi.getArticlesByCategory(categoryId).then(resp => {
        setArticlesList(resp.data.data);
    });
  }

  return articlesList;
}

export default useArticleByCategory

"use client";
import useArticleByCategory from '@/Hooks/useArticleByCategory';
import React from 'react';

export default function page({params}) {

    const getArticles = useArticleByCategory(params.categoryId);

  return (
    <div>
      
    </div>
  )
}

"use client";
import useArticles from '@/Hooks/useArticles';
import Articles from '@/components/Articles/Articles';
import React from 'react';

export default function page() {

  const getArticles = useArticles();

  return (
    <>
      <Articles getArticles={getArticles} />
    </>
  )
}

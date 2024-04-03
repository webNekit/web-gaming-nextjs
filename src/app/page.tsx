"use client";
import useSortArticles from "@/Hooks/useSortArticles";
import About from "@/components/About/About";
import Articles from "@/components/Articles/Articles";
import Hero from "@/components/Hero/Hero";
import Prices from "@/components/Prices/Prices";

export default function Home() {

  const getArticles = useSortArticles();

  return (
    <>
    <Hero />
    <About />
    <Articles getArticles={getArticles} />
    <Prices />
    </>
  );
}

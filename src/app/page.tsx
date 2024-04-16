"use client";
import useGames from "@/Hooks/useGames";
import useSortArticles from "@/Hooks/useSortArticles";
import About from "@/components/About/About";
import Articles from "@/components/Articles/Articles";
import Contacts from "@/components/Contacts/Contacts";
import Games from "@/components/Games/Games";
import Hero from "@/components/Hero/Hero";
import Prices from "@/components/Prices/Prices";

export default function Home() {

  const getArticles = useSortArticles();
  const getGames = useGames();

  return (
    <>
    <Hero />
    <About />
    <Articles getArticles={getArticles} />
    <Prices />
    <Games getData={getGames} />
    <Contacts />
    </>
  );
}

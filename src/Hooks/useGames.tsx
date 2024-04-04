"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useGames = () => {

    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        getGames();
    }, [])

 const getGames = () => {
    GlobalApi.getGames().then(resp => {
        setGamesList(resp.data.data)
        console.log(resp.data.data)
    });
 } 

 return gamesList;

}

export default useGames

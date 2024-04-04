const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

// API - запросы
const getBenefists = () => axiosClient.get('/benefits?populate=*');
// API - запрос на получение статьей
const getArticles = () => axiosClient.get('/articles?sort[]=id:desc&populate=*');
// API - запрос на получение статьей для баннера
const getArticlesBanner = () => axiosClient.get('/articles?filters[isBanner][$eq]=true&populate=*');
// API - запрос на получение ограниченного кол-ва записей
const getSortArticles = () => axiosClient.get('/articles?pagination[pageSize]=4&sort[]=id:desc&populate=*');
// API - запрос на получение конкретной статьи
const getSingleArticle = (id) => axiosClient.get('/articles?filters[slug][$eqi]=' + id + '&populate=*');
// API - запрос для получения записей по категориям
const getArticlesByCategory = (categoryId) => axiosClient.get('/articles?filters[category][id][$in]=' + categoryId + '&populate=*');
const getPricesSection = () => axiosClient.get('/price?populate[0]=packets.image');

// API - запросы на получение игры
const getGames = () => axiosClient.get('games?sort[]=id:desc&populate=*');

export default {
    getBenefists,
    getArticles,
    getArticlesBanner,
    getSortArticles,
    getSingleArticle,
    getArticlesByCategory,
    getPricesSection,
    getGames
}
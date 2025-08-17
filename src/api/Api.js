import axios from "axios";
import queryString from "query-string";

const URL = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "4a5da1dbc0fce6c6a7484d5b450d9046",
    // full resolution img,  for hero banners, backgrounds.
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    // medium size img, for posters, cards, grid thumbnails.
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

const API = axios.create({
    baseURL: URL.baseUrl,
    headers: {
        accept: "application/json",
    },
    //everytime pass params & convert the objects into querystring
    paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: URL.apiKey }),
});

//runs after response is received, return data
API.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export {URL, API};
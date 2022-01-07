import axiosClient from "./axios";
import apiConfig from "./apiConfig";

export const category = {
    movie: 'movie',
    tv: 'tv'
}
export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (type, params, page = 1) => {
        const url = 'movie/' + `${movieType[type]}?api_key=${apiConfig.apiKey}&page=${page}`;
        return axiosClient.get(url, params);
    },
    getTvList: (type, params, page = 1) => {
        const url = 'tv/' + `${tvType[type]}?api_key=${apiConfig.apiKey}&page=${page}`;
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos' + `?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, { params: {} });
    },
    search: (cate, params, q, page = 1) => {
        const url = `search/${category[cate]}?api_key=${apiConfig.apiKey}&query=${q}&page=${page}`;
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id + `?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits' + `?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, { params: {} });
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar' + `?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, { params: {} });
    },
}

export default tmdbApi;
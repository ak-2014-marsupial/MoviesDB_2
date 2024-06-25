import {axiosService} from "./axiosService";

import {IMovie, IPagination} from "../interfaces";
import {IRes} from "../types";
import {urls} from "../constants";
import {IActor} from "../interfaces/actorInterface";
import {initLocale} from "../constants/appConstants";

const movieService = {
    getAll: (page: string, language: string = initLocale): IRes<IPagination<IMovie>> =>
        axiosService.get(urls.movie.base, {
            params: {page, language}
        }),

    getByGenreId: (page: string, with_genres: string, language: string = initLocale): IRes<IPagination<IMovie>> =>
        axiosService.get(urls.movie.base, {
            params: {with_genres, language, page}
        }),

    getById: (id: string, language: string = initLocale): IRes<IMovie> =>
        axiosService.get(urls.movie.details(id), {params: {language}}),

    searchByName: (page: string, query: string, language: string = initLocale): IRes<IPagination<IMovie>> =>
        axiosService.get(urls.movie.search,        {params: {page, query, language}}),

    getActorsById: (id: string, language: string = initLocale): IRes<IActor> =>
        axiosService.get(urls.movie.actors(id), {params: {language}})
}

export {
    movieService
}


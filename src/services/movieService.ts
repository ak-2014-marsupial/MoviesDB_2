import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovie, IPagination} from "../interfaces";
import {IRes} from "../types";

const movieService={
    getAll:(page:string,language:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.base,{params:{page,language}}),
    getByGenreId:(page:string, genreId:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.base, {params:{page,genreId}}),
    getById:(id:string): IRes<IMovie> => axiosService.get(urls.movie.details(id)),
    searchByName:(page:string,query:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.search,
        {params:{page:`${page}`,query:`${query}`}}),
}

export {
    movieService
}
import {axiosService} from "./axiosService";
import {IMovie, IPagination} from "../interfaces";
import {IRes} from "../types";
import { urls } from "../constants";
import {IActor} from "../interfaces/actorInterface";

const movieService={
    getAll:(page:string,language:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.base,{params:{page,language}}),
    getByGenreId:(page:string,with_genres:string,language:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.base, {params:{page,with_genres,language}}),
    getById:(id:string,language:string): IRes<IMovie> => axiosService.get(urls.movie.details(id),{params:{language}}),
    searchByName:(page:string,query:string,language:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.search,
        {params:{page,query,language}}),
    getActorsById:(id:string,language:string):IRes<IActor>=>axiosService.get(urls.movie.actors(id),{params:{language}})
}

export {
    movieService
}


import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovie, IPagination} from "../interfaces";
import {IRes} from "../types";

const movieService={
    getAll:(page:string,language:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.base,{params:{page,language}}),
    getByGenreId:(page:string, genreId:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.byGenreId(genreId), {params:{page}}),
    getById:(id:string,language:string): IRes<IMovie> => axiosService.get(urls.movie.details(id),{params:{language}}),
    searchByName:(page:string,query:string,language:string):IRes<IPagination<IMovie>> => axiosService.get(urls.movie.search,
        {params:{page,query,language}}),
}

export {
    movieService
}
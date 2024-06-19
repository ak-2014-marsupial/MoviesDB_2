import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IGenre} from "../interfaces";
import {IRes} from "../types";

const genreService = {
    getAll: ():IRes<IGenre[]> => axiosService.get(urls.genre.base)
}
export {
    genreService
}
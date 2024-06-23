import {tokenDefault} from "./appConstants";

const baseURL: string = 'https://api.themoviedb.org/3';
const posterBaseUrl: string = "https://image.tmdb.org/t/p/w500";
const token: string = process.env.REACT_APP_TOKEN || tokenDefault;

const movie = "/movie";
const genre ="/genre"
const urls = {
    movie: {
        base: `discover${movie}`,
        search: `/search${movie}`,
        details: (id: string): string => `${movie}/${id}`,
        actors: (id: string) => `${movie}/${id}/credits`
    },
    genre: {
        base: `${genre}/list`,
    }
}


export {
    baseURL,
    posterBaseUrl,
    urls,
    token

}
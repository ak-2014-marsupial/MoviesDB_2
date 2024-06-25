import {LOCAL_STORAGE_LOCALE_KEY} from "./localStorage";

export const initLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) || process.env.REACT_APP_INIT_LOCALE || "uk-UK"

export const tokenDefault='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Q4Y2VhYWU3M2YzZjQ4NTAwY2NhZjg1OWQ1NDI1YiIsInN1YiI6IjY1NDYyNjUzZmQ0ZjgwMDExZWQwYmM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4jBQWaAXNNpvH4sunbMKJ2qogMHoPnQd5Lng0EOi_i4';

export const initialSearchParams = {
    page: "1",
    language: initLocale
}

export enum KeyArgs{
    ID="id",
    PAGE="page",
    QUERY="query",
    FILTER="filter",
    WITH_GENRES="with_genres",
    LANGUAGE="language",
}

export type IArgs = Record<KeyArgs, string>
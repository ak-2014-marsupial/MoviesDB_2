import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer, themeReducer} from "./slices";
import {movieInfoReducer} from "./slices/movieInfoSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        movies:movieReducer,
        genre:genreReducer,
        movieInfo:movieInfoReducer
    }
});

export {
    store
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

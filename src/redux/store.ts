import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        movies:movieReducer,
        genre:genreReducer
    }
});

export {
    store
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

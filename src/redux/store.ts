import {configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        theme: themeReducer,

    }
});

export {
    store
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

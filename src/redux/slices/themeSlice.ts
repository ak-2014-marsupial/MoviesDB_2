import {createSlice} from "@reduxjs/toolkit";
import {LOCAL_STORAGE_THEME_KEY, nextTheme, Theme} from "../../constants";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const initialState: { currentTheme: Theme } = {
    currentTheme: defaultTheme || Theme.LIGHT
}


const themeSlice = createSlice(
    {
        name: "themeSlice",
        initialState,
        reducers: {
            toggleTheme: (state) => {
                const newTheme=nextTheme[state.currentTheme] || Theme.LIGHT;
                state.currentTheme =  newTheme;
                localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
            }
        }
    }
)


const {reducer: themeReducer, actions} = themeSlice;
const themeActions = {
    ...actions,
}

export {
    themeReducer,
    themeActions
}

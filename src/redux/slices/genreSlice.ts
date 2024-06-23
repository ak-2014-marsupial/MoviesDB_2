import {AsyncThunk, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {genreService} from "../../services/genreService";
import {IGenre} from "../../interfaces";

interface IState {
    genreList: IGenre[],
    isLoading: boolean,
    errors: boolean
};

const initialState: IState = {
    genreList: [],
    isLoading: false,
    errors: false,
};

type IParams = Record<string, string>;

const getAll: AsyncThunk<IGenre[], IParams, any> =
    createAsyncThunk<IGenre[], IParams>(
        "genreSlice",
        async (args: IParams, {rejectWithValue}) => {
            const {language} = args
            try {
                const {data} = await genreService.getAll(language);
                return data.genres;
            } catch (e) {
                const err = e as AxiosError;
                return rejectWithValue(err.response.data)
            }
        }
    )

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, {payload}) => {
                state.genreList = payload;
                state.isLoading = false;
                state.errors = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = true;
                state.isLoading = false;
            })
            .addCase(getAll.pending, state => {
                state.isLoading = true;
            })
});

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll
}

export {
    genreActions,
    genreReducer
}

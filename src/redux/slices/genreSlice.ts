import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
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

const getAll = createAsyncThunk<IGenre[], void>(
    "genreSlice",
    async (_, {rejectWithValue}) => {
        console.log("from genreSlice");
        try {
            const {data} = await genreService.getAll();

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
                console.log(">>>>>>>",payload);
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

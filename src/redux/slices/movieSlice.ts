import {AsyncThunk, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {IMovie, IPagination} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";

interface IState extends IPagination<IMovie> {
    errors: boolean,
    isLoading: boolean
}

const initialState: IState = {
    page: 1,
    results: [],
    total_pages: 0,
    errors: false,
    isLoading: false,
    total_results:0
}


const getAll:AsyncThunk<IPagination<IMovie>, any, any> = createAsyncThunk<IPagination<IMovie>, { page: string }>(
    "movieSlice/getAll",
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const searchByName = createAsyncThunk<IPagination<IMovie>, { page: string, query: string }>(
    "movieSlice/searchByName",
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchByName(page, query);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getAllByGenreId = createAsyncThunk<IPagination<IMovie>, { page: string, genreId: string }>(
    "movieSlice/getAllByGenreId",
    async ({page, genreId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(page, genreId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }

    }
)


const movieSlice = createSlice(
    {
        name: "movieSlice",
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addMatcher(isFulfilled(getAll, getAllByGenreId, searchByName), (state, action) => {
                    const {total_pages, results, page, total_results} = action.payload;
                    state.results = results;
                    state.total_pages = total_pages;
                    state.page = page;
                    state.total_results = total_results;
                    state.isLoading = false;
                    state.errors = false;
                })
                .addMatcher(isPending(getAll, getAllByGenreId, searchByName), (state) => {
                    state.isLoading = true;
                })
                .addMatcher(isRejected(getAll, getAllByGenreId, searchByName), (state) => {
                    state.isLoading = false;
                    state.errors = true;

                })
    }
)

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getAllByGenreId,
    searchByName
};

export {movieReducer, movieActions}
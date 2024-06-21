import {AsyncThunk, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {IMovie, IPagination} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";
import {IArgs} from "../../components/movieContainer";

// interface IState extends IPagination<IMovie> {
//     errors: boolean,
//     isLoading: boolean
// }
//
// const initialState: IState = {
//     page: 1,
//     results: [],
//     total_pages: 0,
//     total_results: 0,
//     errors: false,
//     isLoading: false
// }

interface IState {
    singleMovie: IMovie | null,
    movieList: IPagination<IMovie>
    isLoading: boolean,
    errors: boolean,
}

const initialState: IState = {
    singleMovie: null,
    movieList: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    errors: false,
    isLoading: false
}



const getAll: AsyncThunk<IPagination<IMovie>, IArgs, any> =
    createAsyncThunk<IPagination<IMovie>, IArgs>(
        "movieSlice/getAll",
        async (args, {rejectWithValue}) => {
            const {page, language = "uk-UK"} = args
            try {
                const {data} = await movieService.getAll(page, language);
                return data;
            } catch (e) {
                const err = e as AxiosError;
                return rejectWithValue(err.response.data)
            }
        }
    )


const getById: AsyncThunk<IMovie, { id: string, args: IArgs }, any> =
    createAsyncThunk<IMovie, { id: string, args: IArgs }>(
        "movieSlice/getById",
        async ({id, args}, {rejectWithValue}) => {
            const {language = "uk-UK"} = args;
            try {
                const {data} = await movieService.getById(id, language);
                return data;
            } catch (e) {
                const err = e as AxiosError;
                return rejectWithValue(err.response.data)
            }
        }
    )


const searchByName: AsyncThunk<IPagination<IMovie>, IArgs, any> =
    createAsyncThunk<IPagination<IMovie>, IArgs>(
        "movieSlice/searchByName",
        async (args, {rejectWithValue}) => {
            const {page, language = "uk-UK", query} = args
            try {
                const {data} = await movieService.searchByName(page, query, language);
                return data;
            } catch (e) {
                const err = e as AxiosError;
                return rejectWithValue(err.response.data)
            }
        }
    )

const getAllByGenreId: AsyncThunk<IPagination<IMovie>,  IArgs , any> =
    createAsyncThunk<IPagination<IMovie>,   IArgs >(
        "movieSlice/getAllByGenreId",
        async (args, {rejectWithValue}) => {
            const {page, language = "uk-UK",genreId} = args;

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
                .addCase(getById.fulfilled, (state, action) => {
                    state.singleMovie = action.payload
                    state.isLoading = false
                })
                .addMatcher(isFulfilled(getAll, getAllByGenreId, searchByName), (state, action) => {
                    const {total_pages, results, page, total_results} = action.payload;
                    state.movieList.results = results;
                    state.movieList.total_pages = total_pages;
                    state.movieList.page = page;
                    state.movieList.total_results = total_results;
                    state.isLoading = false;
                    state.errors = false;
                })
                .addMatcher(isPending(getById, getAll, getAllByGenreId, searchByName), (state) => {
                    state.isLoading = true;
                })
                .addMatcher(isRejected(getById, getAll, getAllByGenreId, searchByName), (state) => {
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
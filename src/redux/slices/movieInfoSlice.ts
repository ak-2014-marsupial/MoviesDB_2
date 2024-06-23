import {IMovie} from "../../interfaces";
import {IActor, ICast} from "../../interfaces/actorInterface";
import {AsyncThunk, createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {IArgs} from "../../components/movieContainer";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";

interface IState {
    singleMovie: IMovie | null,
    actors: ICast[],
    isActorLoading: boolean,
    isMovieLoading: boolean,
    errors: boolean
}

const initialState: IState = {
    singleMovie: null,
    actors: [],
    isActorLoading: false,
    isMovieLoading: false,
    errors: false
}

interface IMovieInfoArgs {
    id: string,
    args: IArgs
}

const getActors: AsyncThunk<IActor, IMovieInfoArgs, any> =
    createAsyncThunk<IActor, IMovieInfoArgs>(
        "movieInfoSlice/getActors",
        async ({id, args}, {rejectWithValue}) => {
            const {language} = args;
            try {
                const {data} = await movieService.getActorsById(id, language);
                return data;
            } catch (e) {
                const err = e as AxiosError;
                return rejectWithValue(err.response.data)
            }
        }
    )

const getById: AsyncThunk<IMovie, { id: string, args: IArgs }, any> =
    createAsyncThunk<IMovie, { id: string, args: IArgs }>(
        "movieInfoSlice/getById",
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

const movieInfoSlice = createSlice(
    {
        name: "movieInfoSlice",
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getById.fulfilled, (state, action) => {
                    state.singleMovie = action.payload
                    state.isMovieLoading = false
                })
                .addCase(getActors.fulfilled, (state, action) => {
                    state.actors = action.payload.cast
                    state.isActorLoading = false
                })
                .addCase(getById.pending, state => {
                    state.isMovieLoading = true
                })
                .addCase(getActors.pending, state => {
                    state.isActorLoading = true
                })

                .addMatcher(isRejected(getById, getActors), (state) => {
                    state.isMovieLoading = false;
                    state.isActorLoading = false;
                    state.errors = true;

                })

    }
)
const {reducer: movieInfoReducer, actions} = movieInfoSlice;

const movieInfoActions ={
    ...actions,
    getActors,
    getById
}

export {movieInfoReducer,movieInfoActions}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {genreService} from "../../services/genreService";
import {IGenre} from "../../interfaces";

interface IState{
    genres:IGenre[]
};
const initialState:IState={
    genres:[]
};

const getAll=createAsyncThunk<IGenre[],void>(
    "genreSlice",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();

            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const genreSlice=createSlice({
    name:"genreSlice",
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,{payload})=>{
                state.genres=payload;
            })
});

const {reducer:genreReducer,actions}=genreSlice;

const genreActions={
    ...actions,
    getAll
}

export {
    genreActions,
    genreReducer
}

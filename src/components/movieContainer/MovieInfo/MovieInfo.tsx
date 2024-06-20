import React from 'react';
import {useAppLocation} from "../../../hooks/useAppLocation";
import {IMovie} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {Poster} from "../../Poster";
import {Movie} from "../Movie";

const MovieInfo = () => {
    const {state: currentMovie} = useAppLocation<IMovie>();
    useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();
    if(!currentMovie) {
        // todo зробити запит на отримання по movieId
        throw new Error("currentMovie is Empty")
    }
    console.log(currentMovie);
    const {poster_path, title, release_date, vote_average, overview} = currentMovie;

    return (
        <div>

           <Movie movie={currentMovie}/>
            <div>
                {currentMovie.overview}
            </div>

        </div>
    );
};

export {MovieInfo};
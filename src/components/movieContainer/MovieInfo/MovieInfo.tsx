import React, {useEffect} from 'react';
import {useAppLocation} from "../../../hooks/useAppLocation";
import {IMovie} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";

import css from "./MovieInfo.module.css"
import {StarsRatingComponent} from "../../StarsRating";
import {PosterPreview} from "../../PosterPreview";

const MovieInfo = () => {
    const {state: currentMovie} = useAppLocation<IMovie>();
    useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();

    useEffect(()=>{

        // dispatch(movieActions.getAllByGenreId(args))
    },[])

    if (!currentMovie) {
        // todo зробити запит на отримання по movieId
        throw new Error("currentMovie is Empty")
    }
    const {poster_path, title, release_date, vote_average, overview} = currentMovie;

    return (
        <div className={css.movie_info}>
            <div className={css.poster_container}>
                <PosterPreview path={poster_path} title={title}/>
            </div>
            <div className={css.content_container}>
                <div className={css.title}> {title}</div>
                <div className={css.rating}>
                    <StarsRatingComponent rating={vote_average} starDimension="1.4em"/>
                </div>
                <div className={css.date}>{new Date(release_date).getFullYear()}</div>
                <div className={css.overview}>

                    {currentMovie.overview}
                </div>
            </div>

        </div>
    );
};

export {MovieInfo};
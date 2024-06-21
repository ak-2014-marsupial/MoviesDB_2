import React, {useEffect} from 'react';
import {useAppLocation} from "../../../hooks/useAppLocation";
import {IMovie} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {Poster} from "../../Poster";

import css from "./MovieInfo.module.css"
import StarRatings from "react-star-ratings";

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
    console.log(currentMovie);
    const {poster_path, title, release_date, vote_average, overview} = currentMovie;

    return (
        <div className={css.movie_info}>
            <div className={css.poster_container}>

                <Poster path={poster_path} title={title}/>
            </div>
            <div className={css.content_container}>
                <div className={css.title}> {title}</div>
                <div className={css.rating}>
                    <StarRatings starRatedColor='var(--star-primary)'
                                 starEmptyColor='var(--star-secondary)'
                                 numberOfStars={10}
                                 starDimension='18px'
                                 starSpacing='1px'
                                 rating={vote_average}
                    />
                    <div className={css.title}> {title}</div>
                </div>
                <div className={css.date}>{new Date(release_date).getFullYear()}</div>
                {currentMovie.overview}
            </div>

        </div>
    );
};

export {MovieInfo};
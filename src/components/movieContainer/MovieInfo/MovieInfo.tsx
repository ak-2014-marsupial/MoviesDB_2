import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";

import css from "./MovieInfo.module.css"
import {StarsRatingComponent} from "../../StarsRating";
import {PosterPreview} from "../../PosterPreview";
import {movieInfoActions} from "../../../redux/slices/movieInfoSlice";
import {initialSearchParams} from "../../../constants/appConstants";
import {getObjFromQueryString} from "../../../utils/getSearchParamsAsObject";
import {Loader} from "../../Loader";
import {ErrorPage} from "../../../pages";
import {ActorList} from "../../actorContainer";
import {useTranslation} from "react-i18next";

const MovieInfo = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams(initialSearchParams);
    // const queryString = searchParams.toString();
    const queryString = useMemo(() => searchParams.toString(), [searchParams]);
    const objSearchParams: Record<string, string> = useMemo(
        () => getObjFromQueryString(queryString), [queryString]
    )
    const {t} = useTranslation()


    // const fetchMovieInfo = useCallback(() => {
    //     const id = objSearchParams.id;
    //     dispatch(movieInfoActions.getById({ id, args: objSearchParams }));
    //     dispatch(movieInfoActions.getActors({ id, args: objSearchParams }));
    // }, [objSearchParams, dispatch]);
    //
    // useEffect(() => {
    //     fetchMovieInfo()
    // }, [fetchMovieInfo]);

    useEffect(() => {
        const id = objSearchParams.id
        dispatch(movieInfoActions.getById({id, args: objSearchParams}));
        dispatch(movieInfoActions.getActors({id, args: objSearchParams}))
    }, [objSearchParams, dispatch])

    const {errors, isMovieLoading, singleMovie} = useAppSelector(state => state.movieInfo);


    if (!singleMovie) return <Loader/>;
    if (isMovieLoading) return <Loader/>;
    if (errors) return <ErrorPage/>;
    // const {poster_path, title,genres, release_date, vote_average, overview} = singleMovie;

    console.log("MovieInfo>>>>>>");

    return (
        <div className={css.movie_info}>
            <div className={css.movie_container}>

                <div className={css.poster_container}>
                    <PosterPreview path={singleMovie.poster_path} title={singleMovie.title}/>
                </div>
                <div className={css.content_container}>
                    <div className={css.title}> {singleMovie.title}</div>
                    <div className={css.rating}>
                        <StarsRatingComponent rating={singleMovie.vote_average} starDimension="1.4em"/>
                    </div>
                    <div className={css.date}>{new Date(singleMovie.release_date).getFullYear()}</div>
                    <div className={css.overview}>
                        {singleMovie.overview}
                    </div>

                </div>
                <div>
                    {/*{genres && genres.map(item=><Genres key={item.id} genres={genres}></Genres>)}*/}
                    {singleMovie?.genres && singleMovie.genres.map(item => <div key={item.id}>{item.name}</div>)}
                </div>


            </div>
            <h2>{t("actorlist.title")}</h2>
            <ActorList/>
        </div>


    );
};

export {MovieInfo};
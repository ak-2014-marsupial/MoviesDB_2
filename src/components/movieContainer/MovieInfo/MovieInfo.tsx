import React, {useEffect, useMemo} from 'react';
import {useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";

import {movieInfoActions} from "../../../redux/slices/movieInfoSlice";
import css from "./MovieInfo.module.css"
import {StarsRatingComponent} from "../../StarsRating";
import {PosterPreview} from "../../PosterPreview";
import {IArgs, initialSearchParams} from "../../../constants/appConstants";
import {getObjFromQueryString} from "../../../utils/getSearchParamsAsObject";
import {Loader} from "../../Loader";
import {ErrorPage} from "../../../pages";
import {ActorList} from "../../actorContainer";
import {GenreListCard} from "../../genreContainer";
import {IGenre} from "../../../interfaces";
import {useAppNavigateWithNewParams} from "../../../hooks/useAppNavigateWithNewParams";

const MovieInfo = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams(initialSearchParams);
    const queryString = useMemo(() => searchParams.toString(), [searchParams]);
    const objSearchParams: IArgs = useMemo(
        () => getObjFromQueryString(queryString), [queryString]
    )
    const {t} = useTranslation()
    const {navigateWithParams} = useAppNavigateWithNewParams()


    useEffect(() => {
        const id = objSearchParams.id
        dispatch(movieInfoActions.getById({id, args: objSearchParams}));
        dispatch(movieInfoActions.getActors({id, args: objSearchParams}))
    }, [objSearchParams, dispatch])

    const {errors, isMovieLoading, singleMovie} = useAppSelector(state => state.movieInfo);

    if (!singleMovie) return <Loader/>;
    if (isMovieLoading) return <Loader/>;
    if (errors) return <ErrorPage/>;
    const {poster_path, title,genres, release_date, vote_average, overview} = singleMovie;

    const cb = (genre:IGenre) => {
        navigateWithParams(`/genres/${genre.id}`, {"with_genres": `${genre.id}`,"page":"1"}, {state: {"display_info": `${genre.name}`}})
    }

    return (
        <div className={css.movie_info}>
            <div className={css.movie_container}>

                <div className={css.poster_container}>
                    <PosterPreview path={poster_path} title={title}/>
                </div>
                <div className={css.content_container}>

                    <div className={css.title}> {title}</div>
                    <div className={css.rating}>
                        <StarsRatingComponent rating={vote_average} starDimension="1.4em"/>
                    </div>
                    <div className={css.genres}>
                        {genres && genres
                            .map(item => <GenreListCard key={item.id} genre={item} cb={cb}/>)}
                    </div>
                    <div className={css.date}>{new Date(release_date).getFullYear()}</div>
                    <div className={css.overview}>
                        {overview}
                    </div>
                </div>

            </div>
            <div className={css.title}>{t("actorlist.title")}</div>
            <div className={css.actors}>
                <ActorList/>
            </div>
        </div>

    );
};

export {MovieInfo};
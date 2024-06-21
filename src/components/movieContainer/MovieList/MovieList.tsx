import React, {FC, useEffect, useMemo} from 'react';
import css from "./MovieList.module.css"
import {IMovie, IPagination} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {AsyncThunk} from "@reduxjs/toolkit";
import {Movie} from "../Movie";
import {useSearchParams} from "react-router-dom";
import {Loader} from "../../Loader";
import {ErrorPage} from "../../../pages";
import {PaginationComponent} from "../../Pagination";
import {getObjFromQueryString} from "../../../utils/getSearchParamsAsObject";


interface IProps {
    cb: AsyncThunk<IPagination<IMovie>, any, any>
}

export interface IArgs {
    page: string,
    query?: string,
    filter?: string,
    language?: string,
}

const MovieList: FC<IProps> = ({cb}) => {
    const {movieList:{results}, isLoading, errors} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const initialSearchParams = {
        page: "1",
        genreId: "",
        query: "",
        filter: "",
        lang: "uk-UK"
    }
    const [searchParams] = useSearchParams(initialSearchParams);
    const queryString = searchParams.toString()

    const objSearchParams: Record<string, string> = useMemo(
        () => getObjFromQueryString(queryString), [queryString]
    )

    useEffect(() => {
        dispatch(cb({...objSearchParams}))
    }, [dispatch, cb, objSearchParams])

    if (isLoading) return <Loader/>
    if (errors) return <ErrorPage/>;


    return (
        <>
            <div className={css.movie_list}>
                {results && results.map(movie =>
                    <div key={movie.id} className={css.movie_container}>
                        <Movie  movie={movie}/>
                    </div>
                )}
            </div>
            <div className={css.footer}></div>
            <div className={css.pagination}>
                <PaginationComponent/>
            </div>
        </>


    );
};

export {MovieList};

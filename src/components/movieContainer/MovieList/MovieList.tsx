import React, {FC, useEffect, useMemo, useState} from 'react';
import {AsyncThunk} from "@reduxjs/toolkit";
import {useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import css from "./MovieList.module.css"
import {IMovie, IPagination} from "../../../interfaces";
import {Movie} from "../Movie";
import {Loader} from "../../Loader";
import {ErrorPage} from "../../../pages";
import {PaginationComponent} from "../../Pagination";
import {getObjFromQueryString} from "../../../utils/getSearchParamsAsObject";
import {initialSearchParams} from "../../../constants/appConstants";

interface IProps {
    cb: AsyncThunk<IPagination<IMovie>, any, any>
}

export interface IArgs {
    page?: string,
    query?: string,
    filter?: string,
    with_genres?: string,
    language?: string,
}

// todo implement enum IArgs<enum,string>
const MovieList: FC<IProps> = ({cb}) => {
    const dispatch = useAppDispatch();
    const {state} = useLocation();
    const [info, setInfo] = useState<string | null>(null)
    const [searchParams] = useSearchParams(initialSearchParams);
    const queryString = searchParams.toString()
    const {movieList: {results}, isLoading, errors} = useAppSelector(state => state.movies);

    const objSearchParams: Record<string, string> = useMemo(
        () => getObjFromQueryString(queryString), [queryString]
    )
    useEffect(() => {
        if (state) {
            setInfo(state["display_info"])
        }
    }, [state]);

    useEffect(() => {
        dispatch(cb({...objSearchParams}))
    }, [dispatch, cb, objSearchParams])

    if (isLoading) return <Loader/>
    if (errors) return <ErrorPage/>;

    return (
        <div className={css.container}>
            {info && <div className={css.display_info}>{info}</div>}

            <div className={css.movie_list}>
                {results && results.map(movie =>
                    <div key={movie.id} className={css.movie_container}>
                        <Movie movie={movie}/>
                    </div>
                )}
            </div>
            <div className={css.footer}>

            </div>
            <div className={css.pagination}>
                <PaginationComponent/>
            </div>
        </div>
    );
};

export {MovieList};

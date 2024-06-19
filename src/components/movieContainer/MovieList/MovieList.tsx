import React, {FC, useEffect} from 'react';
import css from "./MovieList.module.css"
import {IMovie, IPagination} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {AsyncThunk} from "@reduxjs/toolkit";
import {Movie} from "../Movie";
import {PaginationComponent} from "../../pagination";
import {useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";


interface IProps {
    cb: AsyncThunk<IPagination<IMovie>, any, any>
}

export interface IArgs {
    page: string,
    genreId?: string,
    search?: string,
    filter?: string,
    language?: string
}

const MovieList: FC<IProps> = ({cb}) => {
    const {results, total_pages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams({page:'1',lang:"uk-UK"});
    const page = searchParams.get("page") ;
    const genreId = searchParams.get("genreId") || "";
    const search = searchParams.get("query") || "";
    const filter = searchParams.get("filter") || "";
    const language = searchParams.get("lang")  ;

    const {i18n} = useTranslation();
    console.log(i18n.resolvedLanguage,language);

    useEffect(() => {
        const args: IArgs = {page: `${page}`, genreId, search, language, filter};
        dispatch(cb({...args}))
    }, [dispatch, cb, page, language, search, filter, genreId])

    const handleClick = () => {
        setSearchParams({page: `${page + 5}`})
    }

    return (
        <div className={css.movie_list}>
            {results && results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            {total_pages > 1 && <PaginationComponent/>}
            {/*<PaginationComponent/>*/}

            <button onClick={handleClick}>setSearchParams</button>
        </div>
    );
};

export {MovieList};

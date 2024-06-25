import React from 'react';

import css from "./Cenres.module.css"
import {useAppGenres} from "../../../hooks/useAppGenres";
import {useAppNavigateWithNewParams} from "../../../hooks/useAppNavigateWithNewParams";
import {IGenre} from "../../../interfaces";
import {GenreListCard} from "../GenreListCard";
import {KeyArgs} from "../../../constants/appConstants";

const GenreList = () => {

    const {genreList: sourceData} = useAppGenres();
    const {navigateWithParams} = useAppNavigateWithNewParams()

    const cb = (genre: IGenre) => {
        navigateWithParams("/movies/genre",
            {
                [KeyArgs.ID]: "",
                [KeyArgs.PAGE]: "1",
                [KeyArgs.WITH_GENRES]: `${genre.id}`,
                [KeyArgs.QUERY]: "",
                [KeyArgs.FILTER]: "",
            },
            {state: {"display_info": `${genre.name}`}})
    }
    return (
        <div className={css.genres}>
            {sourceData && sourceData?.map(
                genre => <GenreListCard key={genre.id} genre={genre} cb={cb}/>
            )
            }
        </div>
    );
};

export {GenreList};
import React from 'react';

import css from "./Cenres.module.css"
import {Button} from "../Button";
import {useAppGenres} from "../../hooks/useAppGenres";
import {useAppNavigateWithNewParams} from "../../hooks/useAppNavigateWithNewParams";
import {IGenre} from "../../interfaces";

const Genres= () => {

    const { genreList:sourceData} = useAppGenres();
    const {navigateWithParams}=useAppNavigateWithNewParams()

    const handleClick=(genre:IGenre)=>{
        navigateWithParams(`${genre.id}`,{ "width_genre": `${genre.id}` },{state:{"display_info":`${genre.name}`}})
    }
    return (
        <div className={css.genres}>
            {sourceData && sourceData?.map(genre =>
                <Button
                    key={genre.id}
                    onClick={()=>handleClick(genre)}
                    className={css.single_genre}
                >
                    {genre.name}
                </Button>)}
        </div>
    );
};

export {Genres};
import React, {FC} from 'react';

import css from "./GenreListCard.module.css";
import {Badge} from "../../Badge";
import {IGenre} from "../../../interfaces";

interface IProps {
    key:number,
    genre: IGenre,
    cb: (genre: IGenre) => void,
}

const GenreListCard: FC<IProps> = ({genre, cb}) => {
    return (
        <Badge
            key={genre.id}
            onClick={() => cb(genre)}
            className={css.single_genre}
        >
            {genre.name}
        </Badge>)
}


export {GenreListCard};
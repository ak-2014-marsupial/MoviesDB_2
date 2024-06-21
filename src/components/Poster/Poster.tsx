import React, {FC} from 'react';

import css from "./Poster.module.css";
import notFoundImg from "../../assets/images/notFound.png";
import {IEvent} from "../../types";
import {posterBaseUrl} from "../../constants";

interface IProps {
    path: string,
    title: string,
}

const handleImgError = (event: IEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    target.src = notFoundImg;
}

const Poster: FC<IProps> = ({path, title}) => {
    return (
        <div className={css.poster}>
            <img src={`${posterBaseUrl}${path}`} alt={title} onError={handleImgError}/>
         </div>
    );
};

export {Poster};
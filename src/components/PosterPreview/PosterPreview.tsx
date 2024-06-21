import React, {FC} from 'react';
import {IEvent} from "../../types";

import notFoundImg from "../../assets/images/notFound.png";
import {posterBaseUrl} from "../../constants";
import css from "./PosterPreview.module.css"


interface IProps {
    path: string,
    title: string,
}
const handleImgError = (event: IEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    target.src = notFoundImg;
}
const PosterPreview:FC<IProps> = ({path,title}) => {
    return (
        <div className={css.poster_preview}>
            <img src={`${posterBaseUrl}${path}`} alt={title} onError={handleImgError}/>
        </div>
    );
};

export {PosterPreview};
import React, {FC} from 'react';

import {IMovie} from "../../../interfaces";


import css from "./Movie.module.css";
import {posterBaseUrl} from "../../../constants";
import {StarsRatingComponent} from "../../StarsRating";
import {PosterPreview} from "../../PosterPreview";
import {useAppNavigateWithNewParams} from "../../../hooks/useAppNavigateWithNewParams";
import {KeyArgs} from "../../../constants/appConstants";


interface IProps {
    movie: IMovie
}


const Movie: FC<IProps> = ({movie}) => {
    const {backdrop_path, id, title, release_date, vote_average} = movie;
    const imgPath = backdrop_path ? `${posterBaseUrl}${backdrop_path}` : '';

    const {navigateWithParams} = useAppNavigateWithNewParams();

    const handleClick = () => {
        navigateWithParams(`/movies/single`,
            {
                [KeyArgs.ID]: `${id}`,
                [KeyArgs.PAGE]: "",
                [KeyArgs.WITH_GENRES]: "",
                [KeyArgs.QUERY]: "",
                [KeyArgs.FILTER]: "",
            },
            {})
    }

    return (
        <div
            className={css.movie}
            onClick={handleClick}
        >
            <div className={css.img_container}>
                <PosterPreview path={imgPath} title={title}/>
            </div>
            <div className={css.content}>

                <div className={css.rating}>
                    <StarsRatingComponent rating={vote_average}/>
                    <div className={css.title}> {title}</div>
                </div>


                {release_date && <div className={css.date}>{new Date(release_date).getFullYear()}</div>}
            </div>
        </div>
    );
};

export {Movie};
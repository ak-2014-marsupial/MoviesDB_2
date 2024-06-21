import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {IMovie} from "../../../interfaces";


import css from "./Movie.module.css";
import {posterBaseUrl} from "../../../constants";
import {StarsRatingComponent} from "../../StarsRating";
import {PosterPreview} from "../../PosterPreview";


interface IProps {
    movie: IMovie
}


const Movie: FC<IProps> = ({movie}) => {
    const {backdrop_path, id, title, release_date, vote_average} = movie;
    const navigate = useNavigate();
    const imgPath = backdrop_path ? `${posterBaseUrl}${backdrop_path}` : '';
    const getInfo = () => {
        navigate(`/movies/${id}`,{state:movie})
    }
    return (
        <div className={css.movie} onClick={getInfo}>
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
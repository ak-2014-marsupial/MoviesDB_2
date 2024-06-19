import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';

import {Rating} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import StarRatings from "react-star-ratings";
import {IMovie} from "../../../interfaces";


import css from "./Movie.module.css";
import {posterBaseUrl} from "../../../constants";
import {Poster} from "../../Poster";


interface IProps{
    movie:IMovie
}



const Movie:FC<IProps> = ({movie}) => {
    const {backdrop_path, id, title, release_date, vote_average} = movie;
    const navigate = useNavigate();
    const imgPath = backdrop_path ? `${posterBaseUrl}${backdrop_path}` : '';
    console.log(title);
    const getInfo = () => {
        navigate(`/movies/${id}`)
    }
    return (
        <div className={css.movie} onClick={getInfo}>
            <div className={css.img_container}>
                <Poster path={imgPath} title={title}/>
            </div>
            <div className={css.content}>

                <div className={css.rating}>
                    <StarRatings starRatedColor='var(--star-primary)'
                                 starEmptyColor='var(--star-secondary)'
                                 numberOfStars={10}
                                 starDimension='18px'
                                 starSpacing='1px'
                                 rating={vote_average}
                    />
                </div>


                <div className={css.rating}>
                <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="medium"
                        emptyIcon={<StarIcon style={{opacity: 1, color: 'var(--star-secondary)'}} fontSize="inherit"/>}
                        readOnly/>

                </div>
                <div className={css.title}> {title}</div>
                {release_date && <div className={css.date}>{new Date(release_date).getFullYear()}</div>}
            </div>
        </div>
    );
};

export {Movie};
import React, {FC} from 'react';
import StarRatings from "react-star-ratings";

interface IProps{
    rating:number,
    starDimension?:string
}
const StarsRatingComponent:FC<IProps> = ({rating,starDimension="1em"}) => {
    return (
        <StarRatings starRatedColor='var(--star-primary)'
                     starEmptyColor='var(--star-secondary)'
                     numberOfStars={10}
                     starDimension={starDimension}
                     starSpacing='1px'
                     rating={rating}
        />
    );
};

export  {StarsRatingComponent};
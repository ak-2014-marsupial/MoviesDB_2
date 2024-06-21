import React, {useEffect} from 'react';

import css from "./Cenres.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices";
import {Button} from "../Button";
import {useNavigate} from "react-router-dom";
import {useAppMergeParamsWithSearchParams} from "../../hooks/useAppMergeParamsWithSearchParams";

const Genres = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {genreList} = useAppSelector(state => state.genre);

    const {mergeParamsWithSearchParams} = useAppMergeParamsWithSearchParams();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [])

    const handleClick=(genreId:string)=>{
        console.log(genreId);

        navigate(genreId);
        mergeParamsWithSearchParams({genreId})
        // navigate(`/genres/${genreId}`)
    }
    return (
        <div className={css.genres}>
            {genreList && genreList?.map(genre =>
                <Button
                    key={genre.id}
                    onClick={()=>handleClick(`${genre.id}`) }
                    className={css.single_genre}
                >
                    {genre.name}
                </Button>)}
        </div>
    );
};

export {Genres};
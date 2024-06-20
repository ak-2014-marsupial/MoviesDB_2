import React from 'react';
import {useTranslation} from "react-i18next";
import {MovieInfo} from "../components/movieContainer/MovieInfo";


const MovieInfoPage = () => {


    const {t}=useTranslation()
    return (
        <div>
            <h1>{t("header.movieInfo")}</h1>
            <MovieInfo/>


        </div>
    );
};

export  {MovieInfoPage};
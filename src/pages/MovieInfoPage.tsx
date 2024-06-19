import React from 'react';
import {useTranslation} from "react-i18next";


const MovieInfoPage = () => {


    const {t}=useTranslation()
    return (
        <div>
            <h1>{t("header.movieInfo")}</h1>


        </div>
    );
};

export  {MovieInfoPage};
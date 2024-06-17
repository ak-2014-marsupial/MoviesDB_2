import React from 'react';
import {useTranslation} from "react-i18next";

const MoviesPage = () => {
    const {t}=useTranslation()

    return (
        <div >
            <h1>{t("header.movies")}</h1>
        </div>
    );
};

export {MoviesPage};
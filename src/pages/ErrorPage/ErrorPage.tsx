import React from 'react';

import {useTranslation} from "react-i18next";

import image from "../../assets/images/somethinWentWrong.png";
import css from "./Error.module.css";

const ErrorPage = () => {
    const {t} = useTranslation()
    return (
        <div className={css.error}>
            <div>
                <img src={image} alt="Something went wrong"/>
            </div>
            <h1>{t("errorPage.oops")}</h1>
            <h3>{t("errorPage.sorry")}</h3>

        </div>
    );
};

export {ErrorPage};
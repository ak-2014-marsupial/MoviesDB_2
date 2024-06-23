import React from 'react';

import image from "../../assets/images/somethinWentWrong.png";
import css from "./Error.module.css";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Badge} from "../../components/Badge";

const ErrorPage = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    return (
        <div className={css.error}>
            <Badge onClick={()=>navigate(-1)}>Back</Badge>
            <div>
                <img src={image} alt="Something went wrong"/>
            </div>
            <h1>{t("errorPage.oops")}</h1>
            <h3>{t("errorPage.sorry")}</h3>

        </div>
    );
};

export {ErrorPage};
import React from 'react';

import image from "../../assets/images/somethinWentWrong.png";
import css from "./Error.module.css";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Button} from "../../components/Button";

const ErrorPage = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    return (
        <div className={css.error}>
            <Button onClick={()=>navigate(-1)}>Back</Button>
            <div>
                <img src={image} alt="Something went wrong"/>
            </div>
            <h1>{t("errorPage.oops")}</h1>
            <h3>{t("errorPage.sorry")}</h3>

        </div>
    );
};

export {ErrorPage};
import React from 'react';

import avatar from  "../../assets/images/astronautpissing.png"
import css from "./UserInfo.module.css"
import {useTranslation} from "react-i18next";

const UserInfo = () => {
    const {t} = useTranslation();
    return (
        <div className={css.user_info}>
            <div className={css.img_container}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div >{t("user")}</div>
        </div>
    );
};

export {UserInfo};
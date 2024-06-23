import React, { FC} from 'react';

import {useTranslation} from "react-i18next";

import css from "./ThemeSwitcher.module.css"
import {useAppDispatch} from "../../hooks/reduxHooks";
import {themeActions} from "../../redux/slices";
import {Badge} from "../Badge";

const ThemeSwitcher: FC = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    return (
        <div className={css.theme_switcher}>
            <Badge onClick={() => dispatch(themeActions.toggleTheme())}>
                <div>{t("themeSwitcher.theme")}</div>
                <div className={css.color}></div>
            </Badge>
        </div>

    );
};

export {ThemeSwitcher};
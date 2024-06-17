import React, { FC} from 'react';
import css from "./ThemeSwitcher.module.css"
import {useAppDispatch} from "../../hooks/reduxHooks";
import {themeActions} from "../../redux/slices";
import {useTranslation} from "react-i18next";
import {Button} from "../Button";

const ThemeSwitcher: FC = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();


    return (
        <div className={css.theme_switcher}>
            {/*<button onClick={() => dispatch(themeActions.toggleTheme())}>*/}
            {/*    {t("themeSwitcher.theme")}*/}
            {/*    <div className={css.color}></div>*/}
            {/*</button>*/}
            <Button onClick={() => dispatch(themeActions.toggleTheme())}>
                {t("themeSwitcher.theme")}
                <div className={css.color}></div>
            </Button>
        </div>

    );
};

export {ThemeSwitcher};
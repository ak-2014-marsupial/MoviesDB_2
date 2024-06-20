import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

import css from "./LangSwitcher.module.css"
import {Button} from "../Button";
import {useAppMergeParamsWithSearchParams} from "../../hooks/useAppMergeParamsWithSearchParams";


const locales: Record<string, { value: string, title: string, next: string }> = {
    "en-US": {value: "en-US", title: "En", next: "uk-UK"},
    "uk-UK": {value: "uk-UK", title: "Uk", next: "en-US"},
}


const LangSwitcher = () => {
    const {mergeParamsWithSearchParams} = useAppMergeParamsWithSearchParams();
    const initLocale = localStorage.getItem("locale") || "uk-UK";
    const [locale, setLocale] = useState(initLocale);
    const {i18n, t} = useTranslation();

    if (i18n.resolvedLanguage !== locale) {
        i18n.changeLanguage(locale);
    }

    const handleClick = () => {
        const nextLocale=locales[locale].next;
        mergeParamsWithSearchParams({"lang": nextLocale})
        i18n.changeLanguage(nextLocale);
        setLocale(nextLocale);
    }

    return (
        <div className={css.lang_switcher}>
            <Button onClick={handleClick} className={css.btn}>{locales[locale].title}</Button>
        </div>


    );
};

export {LangSwitcher};
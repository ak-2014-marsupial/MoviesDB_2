import React from 'react';
import {useTranslation} from "react-i18next";

import css from "./LangSwitcher.module.css"
import {Button} from "../Button";
import {useSearchParams} from "react-router-dom";

const locales: Record<string, { title: string }> = {
    "en-US": {title: "En"},
    "uk-UK": {title: "Укр"},
}
const LangSwitcher = () => {
    const [_, setSearchParams] = useSearchParams();

    const {i18n, t} = useTranslation();

    const handleClick = (locale: string) => {
        setSearchParams({"lang": locale})
        i18n.changeLanguage(locale)
    }

    return (
        <div className={css.dropdown}>
            {t("lang")}
            <div className={css.dropdown_content}>
                {Object.keys(locales).map((locale: string) => (
                    <Button key={locale}
                            className={css.langSwitcher}
                        // style={{fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}}
                            type="submit"
                            onClick={() => handleClick(locale)}>
                        {locales[locale].title}
                    </Button>
                ))

                }
            </div>
        </div>


    );
};

export {LangSwitcher};
import React from 'react';
import {useTranslation} from "react-i18next";

import css from "./LangSwitcher.module.css"
import {Button} from "../Button";

const locales: Record<string, { title: string }> = {
    en: {title: "En"},
    uk: {title: "Укр"},
}
const LangSwitcher = () => {
    const {i18n,t} = useTranslation();

    return (
        <div className={css.dropdown}>
            {t("lang")}
            <div className={css.dropdown_content}>
                {Object.keys(locales).map((locale: string) => (
                    <Button key={locale}
                            className={css.langSwitcher}
                        // style={{fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}}
                            type="submit"
                            onClick={() => i18n.changeLanguage(locale)}>
                        {locales[locale].title}
                    </Button>
                ))

                }
            </div>
        </div>


    );
};

export {LangSwitcher};
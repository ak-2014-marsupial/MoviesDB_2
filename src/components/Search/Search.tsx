import React, {useRef, useState} from 'react';

import css from "./Search.module.css"
import {useTranslation} from "react-i18next";
import {useAppNavigateWithNewParams} from "../../hooks/useAppNavigateWithNewParams";
import {ImSearch} from "react-icons/im";
import {Badge} from "../Badge";


const Search = () => {
    const {t} = useTranslation();
    const [query, setQuery] = useState<string>("")
    const [isInputVisible, setIsInputVisible] = useState<boolean>(false)

    const inputRef=useRef(null);

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            handleClick()
        }
    }
    const {navigateWithParams} = useAppNavigateWithNewParams()

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value)
    }

    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(0, 0)
        if (query.trim().length > 3) {
            navigateWithParams(`/movies/search?`,
                {"query": `${query}`,"page":"1"},
                {state: {"display_info": `${t("search.placeholder")}: ${query}`}})
        }
        setIsInputVisible((prev) => !prev);
        setQuery("");

    }
    return (
        <div className={css.search}>
            <input
                className={isInputVisible ? [css.input, css.input_visible].join(" ") : css.input}
                type="text"
                placeholder={t("search.placeholder")}
                onKeyPress={onKeyPressHandler}
                value={query}
                onChange={onChangeHandler}
                ref={inputRef}
            />

            <Badge className={css.search_btn}
                onClick={handleClick}>
                <ImSearch/>
            </Badge>
        </div>
    );
};

export {Search};
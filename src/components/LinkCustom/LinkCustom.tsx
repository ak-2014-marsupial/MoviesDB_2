import React, {FC} from 'react';
import {useAppNavigateWithNewParams} from "../../hooks/useAppNavigateWithNewParams";

import css from "./LinkCutom.module.css"
import {KeyArgs} from "../../constants/appConstants";

interface IProps {
    to: string,
    title: string,
}

const LinkCustom: FC<IProps> = ({to, title}) => {
    const {navigateWithParams} = useAppNavigateWithNewParams();

    const handleClick = () => {
        navigateWithParams(to,
            {
                [KeyArgs.ID]: "",
                [KeyArgs.PAGE]: "1",
                [KeyArgs.WITH_GENRES]: "",
                [KeyArgs.QUERY]: "",
                [KeyArgs.FILTER]: "",
            },
            {})
    }

    return (
        <button className={css.link_custom}
                onClick={handleClick}>{title}
        </button>
    );
};

export {LinkCustom};
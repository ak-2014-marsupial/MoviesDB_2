import React, {FC} from 'react';
import {useAppNavigateWithNewParams} from "../../hooks/useAppNavigateWithNewParams";

import css from "./LinkCutom.module.css"
interface IProps {
    to: string,
    title: string,
}

const LinkCustom: FC<IProps> = ({to, title}) => {
    const {navigateWithParams} = useAppNavigateWithNewParams()

    return (
        <button className={css.link_custom}
            onClick={() => navigateWithParams(to, {"page":"1"}, {"display_info":"1"})}>{title}
        </button>
    );
};

export {LinkCustom};
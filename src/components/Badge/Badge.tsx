import React, {ButtonHTMLAttributes, FC} from 'react';

import css from "./Badge.module.css"
import {classNames} from "../../utils/classNames";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:React.ReactNode
}
const Badge:FC<IProps> = ({children,className,...otherProps}) => {
    return (
        <button
            className={classNames(css.Button,{},[className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export  {Badge};
import React from 'react';
import {Theme} from "../../constants";

import css from "./ThemeSwitcherDropDown.module.css"

const ThemeSwitcherDropDown = () => {
    const themeList = Object.keys(Theme);
    return (
        <div className={css.dropdown}>
            Theme
            <div className={css.dropdown_content}>
                {themeList.map(item=>
                <button
                    className={css.btn}
                    key={item}
                    onClick={()=>{}}
                >{item}</button>)}

            </div>
        </div>
    );
};

export  {ThemeSwitcherDropDown};
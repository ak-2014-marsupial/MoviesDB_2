import React, {FC} from 'react';

import css from "./NavBar.module.css";
import {navBarLinks} from "../../providers";
import {useTranslation} from "react-i18next";
import {LinkCustom} from "../LinkCustom/LinkCustom";


interface IProps {
    children: React.ReactNode;
    isOpen?:boolean
}

interface ILiElementProps {
    goTo: string,
    title: string
}



const NavBar: FC<IProps> = ({children,isOpen}) => {

    const LiElement: FC<ILiElementProps> = ({goTo, title}) => {
        const {t} = useTranslation();
        return (
            <li className={css.nav_item}>
                {/*<NavLink  to={goTo}>{t(title)}</NavLink>*/}
                <LinkCustom to={goTo} title={t(title)}/>
            </li>
        )
    }

    return (
        <div className={isOpen? [css.navBar,css.nav_active].join(" "):css.navBar}>
            <nav>
                <ul className={css.nav_list}>
                    {navBarLinks.map(item => <LiElement key={item.goTo} {...item}/>)}
                </ul>
            </nav>
            {children}

        </div>
    );
};

export {NavBar};
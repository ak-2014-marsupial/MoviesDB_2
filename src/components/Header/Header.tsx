import React, { useState} from 'react';
import css from "./Header.module.css";
import {NavBar} from "../NavBar";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {LangSwitcher} from "../LangSwitcher";
import {BurgerMenu} from "../BurgerMenu";
import {UserInfo} from "../UserInfo/UserInfo";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={css.header}>
            <NavBar isOpen={isOpen}>
                <ThemeSwitcher/>
                <LangSwitcher/>
                <UserInfo/>
            </NavBar>
            <div className={css.burger}>
                <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>

        </div>
    );
};

export {Header};
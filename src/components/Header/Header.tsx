import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import css from "./Header.module.css";
import {NavBar} from "../NavBar";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {LangSwitcher} from "../LangSwitcher";
import {BurgerMenu} from "../BurgerMenu";
import {UserInfo} from "../UserInfo/UserInfo";
import {Search} from "../Search";
import {Badge} from "../Badge";
import {BsChevronDoubleLeft} from "react-icons/bs"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    let navigate = useNavigate();
    return (
        <div className={css.header}>

            <NavBar isOpen={isOpen}>
                <ThemeSwitcher/>
                <LangSwitcher/>
                <UserInfo/>
            </NavBar>
            <Badge className={css.shevron} onClick={() => navigate(-1)}><BsChevronDoubleLeft/></Badge>
            <Search/>

            <div className={css.burger}>
                <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>

        </div>
    );
};

export {Header};
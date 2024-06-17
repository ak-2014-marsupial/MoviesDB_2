import React, {FC} from 'react';

import css from "./BurgerMenu.module.css";
interface IProps{
    isOpen:boolean,
    setIsOpen: (b: boolean)=>void
}
const BurgerMenu:FC<IProps> = ({isOpen=false,setIsOpen}) => {
    return (
        <div className={css.border} onClick={() => setIsOpen(!isOpen)}>
            <div className={[css.burger, isOpen ? css.active : ""].join(" ")}>
                <span></span>
            </div>
        </div>
    );
};

export {BurgerMenu};
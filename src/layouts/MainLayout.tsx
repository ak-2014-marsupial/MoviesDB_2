import React from 'react';
import {Outlet} from 'react-router-dom';
import {classNames} from "../utils/classNames";
import {useAppSelector} from "../hooks/reduxHooks";
import {Header} from "../components/Header";

const MainLayout = () => {
    const {currentTheme} = useAppSelector(state => state.theme);

    return (
        <div className={classNames("app", {}, [currentTheme])}>

            <Header/>
            <div className="container">

                <Outlet/>
            </div>

        </div>
    );
};

export {MainLayout};

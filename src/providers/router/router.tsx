import {createHashRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../../layouts/MainLayout";
import React from "react";
import {MovieInfoPage, MoviesPage} from "../../pages";


const router = createHashRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: "movies", element: <MoviesPage/>},
            {path: 'movies/:id', element: <MovieInfoPage/>},
            {path: "*", element: <div>NoPage</div>}
        ]
    }
])

export {router};

export const navBarLinks=[
    {title:"header.movies",goTo:"/movies"},
    {title:"header.movieInfo",goTo:"/movies/12"}
]

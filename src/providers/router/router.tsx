import {createHashRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../../layouts/MainLayout";
import React from "react";
import {MovieInfoPage} from "../../pages";
import {MovieList} from "../../components/movieContainer";
import {movieActions} from "../../redux/slices";

const router = createHashRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: "movies", element: <MovieList cb={movieActions.getAll}/>},
            {path: "movies/:id", element: <MovieInfoPage/>},
            {path: "movies/:genreId", element: <MovieList cb={movieActions.getAllByGenreId}/>},

            {path: "*", element: <div>NoPage</div>}
        ]
    }
])

export {router};

export const navBarLinks = [
    {title: "header.movies", goTo: "/movies"},
    {title: "header.movieInfo", goTo: "/movies/12"}
]

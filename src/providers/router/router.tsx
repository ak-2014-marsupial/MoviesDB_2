import {createHashRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../../layouts/MainLayout";
import React from "react";
import {MovieInfoPage} from "../../pages";
import {MovieList} from "../../components/movieContainer";
import {movieActions} from "../../redux/slices";
import {GenresPage} from "../../pages/GenresPage";

const router = createHashRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: "movies", element: <MovieList cb={movieActions.getAll}/>},
            {path: "movies/search", element: <MovieList cb={movieActions.searchByName}/>},
            {path: "movies/single", element: <MovieInfoPage/>},
            {path: "genres/:genreId", element: <MovieList cb={movieActions.getAllByGenreId}/>},
            {path: "movies/genre", element: <MovieList cb={movieActions.getAllByGenreId}/>},

            {path: "genres", element: <GenresPage/>},

            {path: "*", element: <div>NoPage</div>}
        ]
    }
])

export {router};

export const navBarLinks = [
    {title: "header.movies", goTo: "/movies"},
    {title: "header.genres", goTo: "/genres"}
]

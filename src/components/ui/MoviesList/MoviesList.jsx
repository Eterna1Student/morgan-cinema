import React from "react"
import {Stack} from "@mui/material";
import MovieCard from "../MovieCard/MovieCard.jsx";

export default function MoviesList({movies, totalPages, page, setPage}) {
    console.log(movies)
    return (
        <Stack direction='row' justifyContent='center' flexWrap='wrap'>
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.kinopoiskId}/>
            ))}
        </Stack>
    )
}
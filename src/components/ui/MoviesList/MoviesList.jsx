import React from "react"
import {Link, Stack, Typography} from "@mui/material";

export default function MoviesList({movies, totalPages, page, setPage}) {
    console.log(movies)
    return (
        <>
            <Stack>
                {movies.map((movie) => (
                    <Stack key={movie.kinopoiskId}>
                        <Link to={`/movie/${movie.kinopoiskId}`}>
                            <img src={movie.posterUrlPreview} alt={movie.nameRu}/>
                        </Link>
                        <Typography>
                            {movie.nameRu ? movie.nameRu : movie.nameEn}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </>
    )
}
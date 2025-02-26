import React from "react"
import {Box, Link, Rating, Stack, Tooltip, Typography} from "@mui/material";

import styles from './MovieCard.module.css'

export default function MovieCard({movie}) {
    return (
        <Stack>
            <Link to={`/movie/${movie.kinopoiskId}`}>
                <img className={styles.img} src={movie.posterUrlPreview} alt={movie.nameRu}/>
                <Typography textAlign='center'>
                    {movie.nameRu ? movie.nameRu : movie.nameEn}
                </Typography>
            </Link>
            {movie.ratingKinopoisk && (
                <Stack alignItems='center'>
                    <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
                        <Box>
                            <Rating name='read-only'
                                    value={movie.ratingKinopoisk / 2}
                                    readOnly
                                    precision={0.1}
                            />
                        </Box>
                    </Tooltip>
                </Stack>
            )}
        </Stack>
    )
}
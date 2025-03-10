import React, {useState} from "react"
import {useGetFilmsTopQuery} from "../../../services/kinopoiskApi.js";
import {TOP_LISTS} from '../../../constants.js'
import {useLocation} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";
import MoviesList from "../../ui/MoviesList/MoviesList.jsx";

export default function MoviesListTop() {
    const location = useLocation();
    const [page, setPage] = useState(1);

    const movieType = TOP_LISTS.find(el => el.url === location.pathname)

    const { data, error, isLoading} = useGetFilmsTopQuery({
        type: movieType.value,
        page
    });

    if (error) return <p>Some error</p>
    if (isLoading) return <p>Loading...</p>


    return (
        <>
            <Stack flexDirection={'row'}>
                <Button>Назад</Button>
                <Typography>{movieType.title}</Typography>
            </Stack>
            <MoviesList movies={data.items}
                        totalPages={data.totalPages}
                        page={page}
                        setPage={setPage}
            />
        </>
    )
}

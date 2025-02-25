import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from "@reduxjs/toolkit/query/react";

const kinopoiskApiKey = import.meta.env.VITE_KINOPOISK_KEY;

export const kinopoiskApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api',
        prepareHeaders: headers => {
            headers.set('X-API-KEY', kinopoiskApiKey)
            headers.set('Content-Type', 'application/json')
        }
    }),
    endpoints: (builder) => ({
        getFilmsTop: builder.query({
            query: ({ type, page }) => `/v2.2/films/collections?type=${type}&page=${page}`,
        }),
    }),
})

export const {useGetFilmsTopQuery} = kinopoiskApi;
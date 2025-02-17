import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Movies from "./components/pages/Movies/Movies.jsx";
import MovieDetail from "./components/pages/MovieDetail/MovieDetail.jsx";
import ActorDetail from "./components/pages/ActorDetail/ActorDetail.jsx";
import {MOVIE_LISTS, TOP_LISTS} from "./constants.js";
import MoviesListTop from "./components/pages/MoviesListTop/MoviesListTop.jsx";
import MoviesListMain from "./components/pages/MoviesListMain/MoviesListMain.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Movies/>,
        },
          ...TOP_LISTS.map(el => ({
            path: el.url,
            element: <MoviesListTop />
          })),
        ...MOVIE_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListMain />
        })),
        {
          path: "/movie/:id",
          element: <MovieDetail/>,
        },
        {
          path: "/actor/:id",
          element: <ActorDetail/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

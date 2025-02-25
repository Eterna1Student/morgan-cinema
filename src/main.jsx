import React from "react";
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById('root')).render(
    <>
        <CssBaseline />
        <Provider store={store}>
            <App/>
        </Provider>
    </>
)

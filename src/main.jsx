import React from "react";
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById('root')).render(
    <>
        <CssBaseline />
        <App />
    </>
)

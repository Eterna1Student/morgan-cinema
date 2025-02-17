import React from "react"
import {Stack, Typography} from "@mui/material";

export default function Footer() {

    return (
        <Stack component='footer' sx={{
            marginTop: 'auto',
            paddingTop: 4,
            paddingBottom: 4,
            flexDirection: {sm: 'row'},
            justifyContent: {sm: 'space-between'},
            alignItems: {sm: 'center'}
        }}>
            <Typography variant='body2' color='text.secondary'>
                &copy; {new Date().getFullYear()} &laquo;MCinema&raquo; 18+ <br/>
                Данный сайт создан исключительно в развлекательных целях. <br/>
                Все права давно нарушены.
            </Typography>

            <Typography variant="h6" color="primary.main">
                MCinema
            </Typography>
        </Stack>
    )
}

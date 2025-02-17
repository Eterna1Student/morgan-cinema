import React, {useState} from "react"
import {
    AppBar, Box,
    Container, Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Slide,
    Toolbar, Typography,
    useScrollTrigger,
    Link, Divider
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink } from "react-router-dom"

import {iconComponents, MOVIE_LISTS, TOP_LISTS} from "../../../constants.js";

const Icon = ({iconName}) => {
    const IconComponent = iconComponents[iconName]
    return <IconComponent />
}


export default function Navbar() {

    const [isOpen, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen((prevState) => !prevState);
    };

    const trigger = useScrollTrigger({
        target: window,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            open={isOpen}
                            onClose={handleDrawerToggle}
                        >
                            <Box sx={{width: 250}} onClick={handleDrawerToggle}>
                                <List>
                                    {TOP_LISTS.map(item => (
                                        <Link component={RouterLink} to={item.url} key={item.title}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <Icon iconName={item.icon} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.title}/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                                <Divider />
                                <List>
                                    {MOVIE_LISTS.map(item => (
                                        <Link component={RouterLink} to={item.url} key={item.title}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <Icon iconName={item.icon} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.title}/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                        <Typography sx={{color: 'white', textDecoration: 'none'}}
                                    component={RouterLink}
                                    variant="h6"
                                    to="/">
                            MCinema
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    )
}

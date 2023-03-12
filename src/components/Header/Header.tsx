import React, {FC,useState} from 'react';
import {ChevronLeft} from "@mui/icons-material";
import {
    Drawer,
    IconButton,
    Box,
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider, ListItemButton, ListItemIcon
} from '@mui/material'

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import style from '../../styles/Home.module.css'
import {
    SearchIconWrapper,
    Search,
    StyledInputBase,
    DrawerHeader
} from "@/components/Header/styledComponent";

import {useRouter} from "next/router";


const Header:FC = () => {
    const [open,setOpen] = useState<boolean>(false)
    const siderOpen = ()=>setOpen(true)
    const siderClose = ()=>setOpen(false)

    const router = useRouter()

    return (
    <Box display='flex'>
        <AppBar position="static" >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={siderOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' },cursor:'pointer' }}
                    onClick={()=>{router.push('/')}}
                >
                    IMDB
                </Typography>
                    <Search className={style.search}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={siderClose}>
                    <ChevronLeft />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {["Главная","Фильмы","Сериалы"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>

    </Box>)
}

export default Header
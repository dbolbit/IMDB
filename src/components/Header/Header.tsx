import React, {FC} from 'react';
import {InputBase,Menu,MenuItem,IconButton,Badge,Box,AppBar,Toolbar,Typography} from '@mui/material'

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import style from '../../styles/Home.module.css'
import {SearchIconWrapper,Search,StyledInputBase} from "@/components/Header/styledComponent";


const Header:FC = () => {


return (
    <Box >
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
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
    </Box>)
}

export default Header
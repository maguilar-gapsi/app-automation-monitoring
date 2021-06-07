import React from 'react';
import { Search, Menu } from '@material-ui/icons';
import useStyles from './styles/Header.style'; 
import logo from './img/logoBlanco.png';
import { 
    AppBar, 
    Toolbar,
    InputBase,
    IconButton
} from '@material-ui/core';

const View = () => {
    const {
        root,
        imgLogo,
        search,
        searchIcon,
        inputRoot,
        inputInput
    } = useStyles();
    
    return(
        <div className={root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                    <img src={logo} className={imgLogo} />
                    <div className={search}>
                        <div className={searchIcon}>
                        <Search />
                        </div>
                        <InputBase
                            placeholder="Buscar..."
                            classes={{
                                root: inputRoot,
                                input: inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default View;
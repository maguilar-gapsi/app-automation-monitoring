/**
 * Copyright (c) 2021 - Liverpool. All rights reserved
 * 
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2021
 *
 * @author: Mauricio Aguilar [03/06/2021]
 * @updated: -
 * @description: Vista del componente Login.
**/

import React from 'react';
import PropTypes from 'prop-types';
import { AccountCircle } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from './styles/Login.theme';
import useStyles from './styles/Login.style';
import {
    Container,
    Grid,
    Paper, 
    Button,
    TextField 
} from '@material-ui/core';

const View = (props) => {
    const { 
        paperContainer, 
        sizeAccount,
        textCenter,
        mt10,
        br20
    } = useStyles();

    const { handleLogin } = props;

    return(
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xs">
                <Paper className={paperContainer} p={10} elevation={3}>
                    <Grid container spacing={3}>
                        <Grid item className={textCenter} xs={12}>                    
                            <AccountCircle
                                className={sizeAccount}
                            />
                            <form onSubmit={handleLogin}>
                                <TextField
                                    className={mt10}
                                    id="user" 
                                    label="Usuario" 
                                    fullWidth
                                />
                                <TextField
                                    className={mt10} 
                                    id="pass"  
                                    label="Contraseña"
                                    type="password" 
                                    fullWidth 
                                />
                                <Button
                                    className={`${mt10} ${br20}`}
                                    type="submit"
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                >
                                    Iniciar Sesión
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

View.propTypes = {
    handleLogin: PropTypes.func.isRequired
};

export default View;
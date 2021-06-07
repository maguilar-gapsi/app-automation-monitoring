/**
 * Copyright (c) 2021 - Liverpool. All rights reserved
 * 
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2021
 *
 * @author: Mauricio Aguilar [03/06/2021]
 * @updated: -
 * @description: Archivo de importación de componentes y configuración de rutas.
**/

import React from 'react';
import Login from '../../../Login/business/Login';
import Dashboard from '../../../Dashboard/business/Dashboard';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from '../../views/styles/App.theme';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
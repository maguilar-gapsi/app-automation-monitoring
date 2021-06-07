/**
 * Copyright (c) 2021 - Liverpool. All rights reserved
 * 
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2021
 *
 * @author: Mauricio Aguilar [03/06/2021]
 * @updated: -
 * @description: Archivo para renderizar los componentes.
**/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App.routes';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

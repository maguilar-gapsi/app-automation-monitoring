/**
 * Copyright (c) 2021 - Liverpool. All rights reserved
 * 
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2021
 *
 * @author: Mauricio Aguilar [03/06/2021]
 * @updated: -
 * @description: Componente Login.
**/

import React from 'react';
import View from '../views/Login';

const Login = () => {
    const handleLogin = async (e) => {
        e.preventDefault();

        const user = e.target[0].value;
        const pass = e.target[1].value;
    };

    return(
        <>
            <View handleLogin={handleLogin} />
        </>
    );
};

export default Login;
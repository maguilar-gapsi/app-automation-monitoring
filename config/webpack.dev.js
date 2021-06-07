/**
 * Copyright (c) 2021 - Liverpool. All rights reserved
 * 
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2021
 *
 * @author: Mauricio Aguilar [03/06/2021]
 * @updated: -
 * @description: Webpack Development Configuration.
**/

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: 'chrome'
    },
    devtool: 'eval-source-map'
};

module.exports = merge(common, devConfig);
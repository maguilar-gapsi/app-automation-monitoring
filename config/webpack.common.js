/**
 * Copyright (c) 2021 - Liverpool. All rights reserved
 * 
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2021
 *
 * @author: Mauricio Aguilar [03/06/2021]
 * @updated: -
 * @description: Webpack Common Configuration.
**/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/App/business/App.js',
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
          }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/App/views/index.html'
        }),
        new CopyPlugin({
          patterns: [
            { from: "./src/App/views/img", to: "img" },
            { from: "./src/Header/views/img", to: "img" }
          ]
        })
    ]
};
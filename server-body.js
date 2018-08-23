
//N   N  OOO  DDDD  EEEEE       &&        EEEEE X   X PPPP  RRRR  EEEEE  SSSS  SSSS
//NN  N O   O D   D E          &  &       E      X X  P   P R   R E     S     S
//N N N O   O D   D EEE         && &      EEE     X   PPPP  RRRR  EEE    SSS   SSS
//N  NN O   O D   D E          &  &       E      X X  P     R   R E         S     S
//N   N  OOO  DDDD  EEEEE       && &      EEEEE X   X P     R   R EEEEE SSSS  SSSS

import express from 'express';
const app = express();

//RRRR  EEEEE  AAA   CCCC TTTTT
//R   R E     A   A C       T
//RRRR  EEE   AAAAA C       T
//R   R E     A   A C       T
//R   R EEEEE A   A  CCCC   T

import React from 'react';
import { renderToString } from 'react-dom/server';

//RRRR  EEEEE DDDD  U   U X   X
//R   R E     D   D U   U  X X
//RRRR  EEE   D   D U   U   X
//R   R E     D   D U   U  X X
//R   R EEEEE DDDD   UUU  X   X
/*
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import info from './src/reducers/reducers';
*/

// SSSS TTTTT Y   Y L     EEEEE DDDD
//S       T    Y Y  L     E     D   D
// SSS    T     Y   L     EEE   D   D
//    S   T     Y   L     E     D   D
//SSSS    T    YYY  LLLLL EEEEE DDDD

import { ServerStyleSheet } from 'styled-components';

//W   W EEEEE BBBB  PPPP   AAA   CCCC K   K
//W   W E     B   B P   P A   A C     K  K
//W W W EEE   BBBB  PPPP  AAAAA C     KKK
//WW WW E     B   B P     A   A C     K  K
//W   W EEEEE BBBB  P     A   A  CCCC K   K

//Paso 1: Se crea y configura el compilador de webpack.
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

//Paso 2: Se adjunta el middleware de desarrollo al compilador y al servidor.
app.use(require("webpack-dev-middleware")(compiler, {
    logLevel: 'warn', publicPath: webpackConfig.output.publicPath
}));

//Paso 3: Se adjunto el middleware "hot" al compilador y al servidor.
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use(function(request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

//U   U  SSSS EEEEE
//U   U S     E
//U   U  SSS  EEE
//U   U     S E
// UUU  SSSS  EEEEE

app.use('/src', express.static(__dirname + '/src'));
app.use('/bin', express.static(__dirname + '/bin'));

app.use((request, response, next) => {
    //Sitios a los que se desea dar acceso.
    response.setHeader('Access-Control-Allow-Origin', '*');
    //Tipo de solicitudes que se van a permitir.
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //Encabezados de solicitudes permitidas.
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');
    //Ajustar a 'True' si se desea que el sitio incluya cookies en las solicitudes enviadas al sitio a través del API.
    //P. ej.: si se usan sesiones.
    response.setHeader('Access-Control-Allow-Credentials', true);
    //Continuamos con el siguiente middleware.
    next();
});

//RRRR   OOO  U   U TTTTT EEEEE RRRR
//R   R O   O U   U   T   E     R   R
//RRRR  O   O U   U   T   EEE   RRRR
//R   R O   O U   U   T   E     R   R
//R   R  OOO   UUU    T   EEEEE R   R

import { StaticRouter } from 'react-router-dom';

import App from './src/app';

app.use((request, response) => {
    const context={};
    
    //const store = createStore(info);
    /*
        <Provider store={store}>
            <StaticRouter location={request.url} context={context}>
                <App/>
            </StaticRouter>
        </Provider>
    */

    //Pasos para generar las hojas de estilos a partir de componentes estilizados.
    //https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
    //1. Se crea la hoja de estilos.
    const sheet = new ServerStyleSheet();
    //2. Se genera el HTML a partir de la función 'renderToString'.
    //   En este paso se deben recolectar los estilos.
    const html = renderToString(sheet.collectStyles(
        <StaticRouter location={request.url} context={context}>
            <App/>
        </StaticRouter>
    ));
    //3. Se obtienen los 'tags' de estilos.
    const styles = sheet.getStyleTags();
    //4. Se devuelve el HTML al cliente.
    if(context.url) {
        response.redirect(302, context.url);
        response.end();
    } else {
        response.write(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale = 1.0"/>${styles}</head><body style='margin: 0px;'><div id='root'>${html}</div><script src="/bin/main.bundle.js"></script></body></html>`);
        response.end();
    }
});

app.listen(3001, function() {
    console.log('La aplicación está funcionando en el puerto 3001.');
});

//░░░░░░░░░░▄▄█▀▀▄░░░░
//░░░░░░░░▄█████▄▄█▄░░░░
//░░░░░▄▄▄▀██████▄▄██░░░░
//░░▄██░░█░█▀░░▄▄▀█░█░░░▄▄▄▄
//▄█████░░██░░░▀▀░▀░█▀▀██▀▀▀█▀▄
//█████░█░░▀█░▀▀▀▀▄▀░░░███████▀
//░▀▀█▄░██▄▄░▀▀▀▀█▀▀▀▀▀░▀▀▀▀
//░▄████████▀▀▀▄▀░░░░
//██████░▀▀█▄░░░█▄░░░░
//░▀▀▀▀█▄▄▀░██████▄░░░░
//░░░░░░░░░█████████░░░░
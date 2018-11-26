
//N   N  OOO  DDDD  EEEEE       &&        EEEEE X   X PPPP  RRRR  EEEEE  SSSS  SSSS
//NN  N O   O D   D E          &  &       E      X X  P   P R   R E     S     S
//N N N O   O D   D EEE         && &      EEE     X   PPPP  RRRR  EEE    SSS   SSS
//N  NN O   O D   D E          &  &       E      X X  P     R   R E         S     S
//N   N  OOO  DDDD  EEEEE       && &      EEEEE X   X P     R   R EEEEE SSSS  SSSS

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fs from 'fs';
let app = express();

//RRRR  EEEEE  AAA   CCCC TTTTT
//R   R E     A   A C       T
//RRRR  EEE   AAAAA C       T
//R   R E     A   A C       T
//R   R EEEEE A   A  CCCC   T

import React from 'react';
import { renderToString } from 'react-dom/server';

//RRRR   OOO  U   U TTTTT EEEEE RRRR
//R   R O   O U   U   T   E     R   R
//RRRR  O   O U   U   T   EEE   RRRR
//R   R O   O U   U   T   E     R   R
//R   R  OOO   UUU    T   EEEEE R   R

import { matchPath, StaticRouter } from 'react-router-dom';
import Routes from './src/routes';

//RRRR  EEEEE DDDD  U   U X   X
//R   R E     D   D U   U  X X
//RRRR  EEE   D   D U   U   X
//R   R E     D   D U   U  X X
//R   R EEEEE DDDD   UUU  X   X

//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import Store from './src/reducers/reducers';

// SSSS TTTTT Y   Y L     EEEEE DDDD
//S       T    Y Y  L     E     D   D
// SSS    T     Y   L     EEE   D   D
//    S   T     Y   L     E     D   D
//SSSS    T    YYY  LLLLL EEEEE DDDD

import { ServerStyleSheet } from 'styled-components';

//U   U TTTTT IIIII L
//U   U   T     I   L
//U   U   T     I   L
//U   U   T     I   L
// UUU    T   IIIII LLLLL

import util from 'util';

//W   W EEEEE BBBB  PPPP   AAA   CCCC K   K
//W   W E     B   B P   P A   A C     K  K
//W W W EEE   BBBB  PPPP  AAAAA C     KKK
//WW WW E     B   B P     A   A C     K  K
//W   W EEEEE BBBB  P     A   A  CCCC K   K

console.log('ENVIRONMENT: ', process.env.NODE_ENV);
if(process.env.NODE_ENV.trim().toLowerCase() === 'development') {
    //Paso 1: Se crea y configura el compilador de webpack.
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.dev.config');
    const compiler = webpack(webpackConfig);

    //Paso 2: Se adjunta el middleware de desarrollo al compilador y al servidor.
    const webpackDevMiddleware = require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(compiler, {
        logLevel: 'warn', 
        publicPath: webpackConfig.output.publicPath
    }));

    //Paso 3: Se adjunto el middleware "hot" al compilador y al servidor.
    const webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(compiler, {
        log: console.log, 
        path: '/__webpack_hmr', 
        heartbeat: 10 * 1000
    }));
}

//U   U  SSSS EEEEE
//U   U S     E
//U   U  SSS  EEE
//U   U     S E
// UUU  SSSS  EEEEE

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname + '/views'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

//U   U N   N H   H  AAA  N   N DDDD  L     EEEEE DDDD
//U   U NN  N H   H A   A NN  N D   D L     E     D   D
//U   U N N N HHHHH AAAAA N N N D   D L     EEE   D   D
//U   U N  NN H   H A   A N  NN D   D L     E     D   D
// UUU  N   N H   H A   A N   N DDDD  LLLLL EEEEE DDDD

process.on('unhandledRejection', (reason, p) => {
	console.log('[SERVER][Unhandled Rejection] At:', p, 'reason:', reason);
});

//EEEEE N   N  CCCC  OOO  DDDD  IIIII N   N  GGGG
//E     NN  N C     O   O D   D   I   NN  N G
//EEE   N N N C     O   O D   D   I   N N N G  GG
//E     N  NN C     O   O D   D   I   N  NN G   G
//EEEEE N   N  CCCC  OOO  DDDD  IIIII N   N  GGGG

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// GGGG EEEEE TTTTT
//G     E       T
//G  GG EEE     T
//G   G E       T
// GGGG EEEEE   T

app.get('/splitIcons', (request, response) => {
    //let icons = require(`./src/icons/icons-lib-solid`);
    //let icons = require(`./src/icons/icons-lib-normal`);
    let icons = require(`./src/icons/icons-lib-brands`);
    //
    for (let icon in icons) {
        if (icons.hasOwnProperty(icon)) {
            //
            let content = `export const icon = { p: \`${icons[icon].p}\`, v: '${icons[icon].v}' };`;
            fs.writeFile(`./tmp/icons/${icon}.js`, content, (error) => {
                if(error) {
                    return console.error(error);
                }    
                console.log(`Archivo guardado: ${icon}.js`);
            }); 
        }
    }
    //
    response.status(200).end("LISTO!");
});

//RRRR  EEEEE  SSSS PPPP  U   U EEEEE  SSSS TTTTT  AAA
//R   R E     S     P   P U   U E     S       T   A   A
//RRRR  EEE    SSS  PPPP  U   U EEE    SSS    T   AAAAA
//R   R E         S P     U   U E         S   T   A   A
//R   R EEEEE SSSS  P      UUU  EEEEE SSSS    T   A   A

//NOTA: Para poder hacer uso de la variable __CLIENT__ se debe inicializar/definir de la siguiente manera:
global.__CLIENT__ = false;
global.__SERVER__ = true;

import App from './src/app';

app.use((request, response) => {
    if(process.env.NODE_ENV.trim().toLowerCase() === 'development') {
        //NOTA: En mode "desarrollo" no se utiliza el ROUTER aquí, se resuelve a través de WEBPACK.
        //Se devuelve la pagina.
        response.status(200).render('index.dev.ejs');
    } else if(process.env.NODE_ENV.trim().toLowerCase() === 'production') {
        //NOTA: Router utiliza el objeto "context" para devolver la URL solicitada, sólo en el caso de usar "StatucRouter" como en el servidor.
        //https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/StaticRouter.md
        const context={};
        if(context.url) {
            response.redirect(302, context.url);
            response.end();
        } else {
            //1. Se crea y configura el store.
            //const store = createStore(Store);
            //2. Se crean las promesas, cada pagina (tal vez) tenga una función para obtener la información inicial necesaria para "pintarse" de manera correcta.
            const promises = [];
            //Se revisa si existe alguna función tipo "fetch" en las rutas.
            Routes.some(route => {
                const match = matchPath(request.path, route);
                if(match) {
                    //Se obtiene la función tipo "fetch" o en su defecto, una promes "dummy".
                    const loadData = route.componentToRender.loadData || (() => Promise.resolve());
                    //Si se encontró alguna ruta, se deben obtener los parámetros necesarios (posibles).
                    //En este caso: a) store, b) location, c) params y d) query.
                    //STORE.
                    //Está más abajo... hay que subirlo.
                    //LOCATION.
                    const location = request.path; //sanitizeText(req.path);
                    //PARAMS.
                    let params = {};
                    for(let key in match.params) {
                        let obj = match.params[key];
                        params[key] = obj; //sanitizeText(obj);
                    }
                    //QUERY.
                    const query = request.query;
                    //Finalmente se agrega la promesa al arreglo.
                    promises.push(loadData({ store, location, params, query }));
                }
                //Se debe devolver la ruta encontrada ya que así lo requiere la función "some".
                return match;
            });
            //3. Se ejecutan las promesas pendientes y con el resultado se "pinta" la pagina solicitada.
            Promise.all(promises)
            .then(result => {
                //ÉXITO.
                //Pasos para generar las hojas de estilos a partir de componentes estilizados.
                //https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
                //4. Se crea la hoja de estilos.
                const sheet = new ServerStyleSheet();
                //5. Se genera el HTML a partir de la función 'renderToString'.
                //   En este paso se deben recolectar los estilos.
                const html = renderToString(sheet.collectStyles(
                    <StaticRouter location={request.url} context={context}>
                        <App />
                    </StaticRouter>
                ));
                //6. Se obtienen los 'tags' de estilos.
                const styles = sheet.getStyleTags();
                //7. Se "sanitiza" la información a almacenar en el store.
                //Opción #1 - Utilizar la función 'escape' de JavaScript.
                //https://www.w3schools.com/jsref/jsref_escape.asp
                //Opción #2 - Utilizar el módulo 'serialize-javascript' de Yahoo.
                //https://github.com/yahoo/serialize-javascript
                /*
                let newStore;
                let reduxState;
                try {
                    newStore = util.inspect(store.getState(), true, null).replace(/\s\[length\]\:\s\d+\s/gim, '');
                    newStore = JSON.parse(JSON.stringify(eval("(" + newStore + ")")));
                    reduxState = escape(JSON.stringify(newStore));
                } catch(e) {
                    newStore={};
                    reduxState='';
                }
                */
                //8. Se devuelve la pagina.
                response.status(200).render('index', {
                    root: html,
                    styles: (styles !== undefined ? styles : ''),
                    //reduxState
                });
            })
            .catch(error => {
                //ERROR.
                console.error('[NODE][SERVER][ROUTER] ERROR', error);
                response.status(500).end();
            });
        }
    }
});

app.listen(3003, () => {
    console.log('La aplicación está corriendo en el puerto 3003.');
})

/*
░░░░░░░░▄▄█▀▀▄░░░░░░░ 
░░░░░░▄█████▄▄█▄░░░░░ 
░░░░░▄▀██████▄▄██░░░░ 
░░░░░█░█▀░░▄▄▀█░█░░░░ 
░░░░░▄██░░░▀▀░▀░█░░░░ 
░░▄█▀░░▀█░▀▀▀▀▄▀▀█▄░░ 
░▄███░▄░░▀▀▀▀▀▄░███▄░ 
░██████░░░░░░░██████░ 
░▀███▀█████████▀███▀░ 
░░░░▄█▄░▀▀█▀░░░█▄░░░░ 
░▄▄█████▄▀░▀▄█████▄▄░ 
█████████░░░█████████
*/
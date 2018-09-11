//Módulos generales.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/*
import { Provider } from 'react-redux';
import { createStore } from 'redux';
*/
import WebFont from 'webfontloader';

import App from './app';

//const store = createStore(info);
/*
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
*/

WebFont.load({
    google: {
        families: ['Open Sans', 'sans-serif']
    }
});

//NOTA: Para poder hacer uso de la variable __CLIENT__ se debe inicializar/definir de la siguiente manera:
global.__CLIENT__ = true;
global.__SERVER__ = false;

class Routes extends Component {
    render() {
        return(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Routes/>, document.getElementById('root'));

if(process.env.NODE_ENV.trim().toLowerCase() === 'development' && module.hot) {
    module.hot.accept();
}
//Módulos generales.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/*
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import info from './reducers/reducers';
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

if (module.hot) {
    module.hot.accept();
}

//export default Routes;
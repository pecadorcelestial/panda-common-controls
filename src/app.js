//Módulos generales.
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

//Rutas.
import Routes from './routes';

//Componentes locales.
import { IconButton} from './buttons/buttons';
import { MenuWithBlur } from './menus/menus';

class App extends Component {
    //*** FUNCIONES DEL CICLO DE VIDA DE LA PAGINA ***
    componentDidMount() {
        if(__CLIENT__) {
            //Se utiliza el evento "BeforeUnload" de la ventana para guardar el estado actual.
            window.addEventListener('beforeunload', this.handleWindowOnBeforeUnload);
        }
    }
    componentWillUnmount() {
        if(__CLIENT__) {
            //Se remueve el evento "BeforeUnload".
            window.addEventListener('beforeunload', this.handleWindowOnBeforeUnload);
        }
    }
    //*** HANDLERS ***
    handleWindowOnBeforeUnload = () => {
        //Se intenta guardar el estado actual en el localStorage.
        try {
            localStorage.setItem('reduxStore', JSON.stringify(this.props.store));
        } catch(exception) {
            //No tiene caso "loggear" información del lado del cliente, ya que la pagina se va a actualizar y esta información podría perderse.
        }
    }
    handleAppSuccess = (message) => {
        /*
        Operaciones a ralizar cuando una operación fue exitosa.
        */
       console.log('[APP][handleAppSuccess]');
    }
    handleAppError = (error) => {
        /*
        Operaciones a ralizar cuando una operación falló.
        */
       console.log('[APP][handleAppError]');
    }
    handleAppWorking = (working) => {
        /*
        Operaciones a ralizar cuando una operación está en proceso.
        */
       console.log('[APP][handleAppWorking]');
    }
    //*** RESULTADO ***
    render() {

        //V   V  AAA  L      OOO  RRRR  EEEEE  SSSS
        //V   V A   A L     O   O R   R E     S
        //V   V AAAAA L     O   O RRRR  EEE    SSS
        // V V  A   A L     O   O R   R E         S
        //  V   A   A LLLLL  OOO  R   R EEEEE SSSS

        const menuOptions = [];
        menuOptions.push(<Link to='/storybook-vol1' style={{ display: 'inline-block', textDecoration: 'none', width: '100%' }}><IconButton icon='solidTerminal' theme='blue' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Storybook vol. 1</IconButton></Link>);
        menuOptions.push(<Link to='/storybook-vol2' style={{ display: 'inline-block', textDecoration: 'none', width: '100%' }}><IconButton icon='solidSpinner' theme='green' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Storybook vol. 2</IconButton></Link>);
        menuOptions.push(<Link to='/storybook-vol3' style={{ display: 'inline-block', textDecoration: 'none', width: '100%' }}><IconButton icon='solidPalette' theme='red' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Storybook vol. 3</IconButton></Link>);
        menuOptions.push(<Link to='/storybook-vol4' style={{ display: 'inline-block', textDecoration: 'none', width: '100%' }}><IconButton icon='chartBar' theme='orange' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Storybook vol. 4</IconButton></Link>);

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
        return(
            <MenuWithBlur title='A very very very long title (A very very very long subtitle)' options={menuOptions} theme='IENTC'>
                <Switch>
                    {
                        Routes.map((route, index) => {
                            //Propiedades compartidas entre TODAS las rutas.
                            let routeProps = {
                                onSuccess: (message) => this.handleAppSuccess(message),
                                onError: (error) => this.handleAppError(error),
                                onWorking: (working) => this.handleAppWorking(working)
                            };
                            //Se devuelve la ruta.
                            return <Route key={`route-${index}`} {...route} render={() => <route.componentToRender {...routeProps}/>}/>
                        })
                    }
                </Switch>
            </MenuWithBlur>
        );
    }
}

export default App;
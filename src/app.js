//Módulos generales.
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

//Componentes locales.
import TextboxStorybook from './textboxes/textboxes.storybook';

const Home = (props) => {
    return(<div>¡Hola mundo!</div>);
};

const SecondPage = (props) => {
    return(<div>Segunda página.</div>);
};

class App extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/secondpage'>Información de usuario</Link>
                    </li>
                    <li>
                        <Link to='/meta-storybook'>Meta Storybook</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/secondpage' component={SecondPage}/>
                    <Route exact path='/meta-storybook' component={TextboxStorybook}/>
                </Switch>
            </div>            
        );
    }
}

export default App;
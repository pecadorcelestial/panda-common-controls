//Módulos generales.
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

//Componentes locales.
import StorybookVol1 from './storybooks/storybook-vol1';
import StorybookVol2 from './storybooks/storybook-vol2';

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
                        <Link to='/storybook-vol1'>Storybook vol. 1</Link>
                    </li>
                    <li>
                        <Link to='/storybook-vol2'>Storybook vol. 2</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/secondpage' component={SecondPage}/>
                    <Route exact path='/storybook-vol1' component={StorybookVol1}/>
                    <Route exact path='/storybook-vol2' component={StorybookVol2}/>
                </Switch>
            </div>            
        );
    }
}

export default App;
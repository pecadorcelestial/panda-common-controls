//Módulos generales.
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

//Componentes locales.
import { IconButton} from './buttons/buttons';
import { MenuWithBlur } from './menus/menus';
import StorybookVol1 from './storybooks/storybook-vol1';
import StorybookVol2 from './storybooks/storybook-vol2';
import StorybookVol3 from './storybooks/storybook-vol3';

const Home = (props) => {
    return(<div>¡Hola mundo!</div>);
};

const SecondPage = (props) => {
    return(<div>Segunda página.</div>);
};

class App extends Component {
    
    render() {

        //V   V  AAA  L      OOO  RRRR  EEEEE  SSSS
        //V   V A   A L     O   O R   R E     S
        //V   V AAAAA L     O   O RRRR  EEE    SSS
        // V V  A   A L     O   O R   R E         S
        //  V   A   A LLLLL  OOO  R   R EEEEE SSSS

        const menuOptions = [];
        menuOptions.push(<Link to='/' style={{ textDecoration: 'none' }}><IconButton icon='earth' theme='blue' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Inicio</IconButton></Link>);
        menuOptions.push(<Link to='/secondpage' style={{ textDecoration: 'none' }}><IconButton icon='blankFile' theme='green' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Información de usuario</IconButton></Link>);
        menuOptions.push(<Link to='/storybook-vol1' style={{ textDecoration: 'none' }}><IconButton icon='magnifyingGlass' theme='yellow' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Storybook vol. 1</IconButton></Link>);
        menuOptions.push(<Link to='/storybook-vol2' style={{ textDecoration: 'none' }}><IconButton icon='calendar' theme='gray' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Storybook vol. 2</IconButton></Link>);
        menuOptions.push(<Link to='/storybook-vol3' style={{ textDecoration: 'none' }}><IconButton icon='android' theme='red' size='medium' style={{ borderRadius: '0px', width: '100%' }}>Storybook vol. 3</IconButton></Link>);

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
        return(
            <MenuWithBlur title='Title' options={menuOptions}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/secondpage' component={SecondPage}/>
                    <Route exact path='/storybook-vol1' component={StorybookVol1}/>
                    <Route exact path='/storybook-vol2' component={StorybookVol2}/>
                    <Route exact path='/storybook-vol3' component={StorybookVol3}/>
                </Switch>
            </MenuWithBlur>
        );
    }
}

export default App;
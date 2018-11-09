
//RRRR  EEEEE  AAA   CCCC TTTTT
//R   R E     A   A C       T
//RRRR  EEE   AAAAA C       T
//R   R E     A   A C       T
//R   R EEEEE A   A  CCCC   T

import React from 'react';
import renderer from 'react-test-renderer';

//EEEEE N   N ZZZZZ Y   Y M   M EEEEE
//E     NN  N    Z   Y Y  MM MM E
//EEE   N N N   Z     Y   M M M EEE
//E     N  NN  Z      Y   M   M E
//EEEEE N   N ZZZZZ  YYY  M   M EEEEE

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

//JJJJJ EEEEE  SSSS TTTTT
//    J E     S       T
//    J EEE    SSS    T
//J   J E         S   T
// JJJ  EEEEE SSSS    T

//NOTA: Éste módulo ayuda a que los errores en componentes estilizados se vean de manera correcta:
//https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b
import 'jest-enzyme';
import 'jest-styled-components';

// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT EEEEE  SSSS
//C     O   O MM MM P   P O   O NN  N E     NN  N   T   E     S
//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   EEE    SSS
//C     O   O M   M P     O   O N  NN E     N  NN   T   E         S
// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   EEEEE SSSS

import { Button, IconButton, RoundButton } from './buttons';

//Snapshots (Temas: red, secondaryRed, flatRed, blue, flatBlue, green, flatGreen, yellow, flatYellow, gray, flatGray).
describe('[SNAPSHOT][Componentes][Common][Button] - Boton con los siguientes temas: red, secondaryRed, flatRed, blue, flatBlue, green, flatGreen, yellow, flatYellow, gray, flatGray.', () => {
	//Tema: red.
	it('Debe pintar el componente con el tema "red" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [red][small].
        let component = renderer.create(<Button theme='red' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [red][medium].
        component = renderer.create(<Button theme='red' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [red][big].
        component = renderer.create(<Button theme='red' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: secondaryRed.
	it('Debe pintar el componente con el tema "secondaryRed" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [secondaryRed][small].
        let component = renderer.create(<Button theme='secondaryRed' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryRed][medium].
        component = renderer.create(<Button theme='secondaryRed' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryRed][big].
        component = renderer.create(<Button theme='secondaryRed' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flatRed.
	it('Debe pintar el componente con el tema "flatRed" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatRed][small].
        let component = renderer.create(<Button theme='flatRed' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatRed][medium].
        component = renderer.create(<Button theme='flatRed' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatRed][big].
        component = renderer.create(<Button theme='flatRed' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: blue.
	it('Debe pintar el componente con el tema "blue" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [blue][small].
        let component = renderer.create(<Button theme='blue' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [blue][medium].
        component = renderer.create(<Button theme='blue' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [blue][big].
        component = renderer.create(<Button theme='blue' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: secondaryBlue.
	it('Debe pintar el componente con el tema "secondaryBlue" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [secondaryBlue][small].
        let component = renderer.create(<Button theme='secondaryBlue' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryBlue][medium].
        component = renderer.create(<Button theme='secondaryBlue' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryBlue][big].
        component = renderer.create(<Button theme='secondaryBlue' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flatBlue.
	it('Debe pintar el componente con el tema "flatBlue" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatBlue][small].
        let component = renderer.create(<Button theme='flatBlue' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatBlue][medium].
        component = renderer.create(<Button theme='flatBlue' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatBlue][big].
        component = renderer.create(<Button theme='flatBlue' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: green.
	it('Debe pintar el componente con el tema "green" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [green][small].
        let component = renderer.create(<Button theme='green' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [green][medium].
        component = renderer.create(<Button theme='green' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [green][big].
        component = renderer.create(<Button theme='green' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: secondaryGreen.
	it('Debe pintar el componente con el tema "secondaryGreen" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [secondaryGreen][small].
        let component = renderer.create(<Button theme='secondaryGreen' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryGreen][medium].
        component = renderer.create(<Button theme='secondaryGreen' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryGreen][big].
        component = renderer.create(<Button theme='secondaryGreen' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flatGreen.
	it('Debe pintar el componente con el tema "flatGreen" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatGreen][small].
        let component = renderer.create(<Button theme='flatGreen' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatGreen][medium].
        component = renderer.create(<Button theme='flatGreen' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatGreen][big].
        component = renderer.create(<Button theme='flatGreen' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: yellow.
	it('Debe pintar el componente con el tema "yellow" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [yellow][small].
        let component = renderer.create(<Button theme='yellow' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [yellow][medium].
        component = renderer.create(<Button theme='yellow' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [yellow][big].
        component = renderer.create(<Button theme='yellow' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: secondaryYellow.
	it('Debe pintar el componente con el tema "secondaryYellow" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [secondaryYellow][small].
        let component = renderer.create(<Button theme='secondaryYellow' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryYellow][medium].
        component = renderer.create(<Button theme='secondaryYellow' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryYellow][big].
        component = renderer.create(<Button theme='secondaryYellow' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flatYellow.
	it('Debe pintar el componente con el tema "flatYellow" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatYellow][small].
        let component = renderer.create(<Button theme='flatYellow' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatYellow][medium].
        component = renderer.create(<Button theme='flatYellow' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatYellow][big].
        component = renderer.create(<Button theme='flatYellow' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: gray.
	it('Debe pintar el componente con el tema "gray" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [gray][small].
        let component = renderer.create(<Button theme='gray' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [gray][medium].
        component = renderer.create(<Button theme='gray' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [gray][big].
        component = renderer.create(<Button theme='gray' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: secondaryGray.
	it('Debe pintar el componente con el tema "secondaryGray" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [secondaryGray][small].
        let component = renderer.create(<Button theme='secondaryGray' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryGray][medium].
        component = renderer.create(<Button theme='secondaryGray' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryGray][big].
        component = renderer.create(<Button theme='secondaryGray' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flatGray.
	it('Debe pintar el componente con el tema "flatGray" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatGray][small].
        let component = renderer.create(<Button theme='flatGray' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatGray][medium].
        component = renderer.create(<Button theme='flatGray' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatGray][big].
        component = renderer.create(<Button theme='flatGray' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: flatWhite.
	it('Debe pintar el componente con el tema "flatWhite" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatWhite][small].
        let component = renderer.create(<Button theme='flatWhite' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatWhite][medium].
        component = renderer.create(<Button theme='flatWhite' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatWhite][big].
        component = renderer.create(<Button theme='flatWhite' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: orange.
	it('Debe pintar el componente con el tema "orange" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [orange][small].
        let component = renderer.create(<Button theme='orange' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [orange][medium].
        component = renderer.create(<Button theme='orange' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [orange][big].
        component = renderer.create(<Button theme='orange' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: secondaryOrange.
	it('Debe pintar el componente con el tema "secondaryOrange" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [secondaryOrange][small].
        let component = renderer.create(<Button theme='secondaryOrange' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryOrange][medium].
        component = renderer.create(<Button theme='secondaryOrange' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryOrange][big].
        component = renderer.create(<Button theme='secondaryOrange' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flatOrange.
	it('Debe pintar el componente con el tema "flatOrange" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatOrange][small].
        let component = renderer.create(<Button theme='flatOrange' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatOrange][medium].
        component = renderer.create(<Button theme='flatOrange' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatOrange][big].
        component = renderer.create(<Button theme='flatOrange' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: black.
	it('Debe pintar el componente con el tema "black" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [black][small].
        let component = renderer.create(<Button theme='black' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [black][medium].
        component = renderer.create(<Button theme='black' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [black][big].
        component = renderer.create(<Button theme='black' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: secondaryBlack.
	it('Debe pintar el componente con el tema "secondaryBlack" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [secondaryBlack][small].
        let component = renderer.create(<Button theme='secondaryBlack' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryBlack][medium].
        component = renderer.create(<Button theme='secondaryBlack' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryBlack][big].
        component = renderer.create(<Button theme='secondaryBlack' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flatBlack.
	it('Debe pintar el componente con el tema "flatBlack" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatBlack][small].
        let component = renderer.create(<Button theme='flatBlack' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatBlack][medium].
        component = renderer.create(<Button theme='flatBlack' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatBlack][big].
        component = renderer.create(<Button theme='flatBlack' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: IENTC.
	it('Debe pintar el componente con el tema "IENTC" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [IENTC][small].
        let component = renderer.create(<Button theme='IENTC' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [IENTC][medium].
        component = renderer.create(<Button theme='IENTC' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [IENTC][big].
        component = renderer.create(<Button theme='IENTC' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: secondaryIENTC.
	it('Debe pintar el componente con el tema "secondaryIENTC" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [secondaryIENTC][small].
        let component = renderer.create(<Button theme='secondaryIENTC' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryIENTC][medium].
        component = renderer.create(<Button theme='secondaryIENTC' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondaryIENTC][big].
        component = renderer.create(<Button theme='secondaryIENTC' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flatIENTC.
	it('Debe pintar el componente con el tema "flatIENTC" y los tamaños "small", "medium" y "big".', () => {
        //Snapshot [flatIENTC][small].
        let component = renderer.create(<Button theme='flatIENTC' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatIENTC][medium].
        component = renderer.create(<Button theme='flatIENTC' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flatIENTC][big].
        component = renderer.create(<Button theme='flatIENTC' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: red (cons "float" y "width" asignados).
	it('Debe pintar el componente con el tema "red" con estilo para "float" y "width".', () => {
        //Snapshot [red][small].
        let component = renderer.create(<Button theme='red' size='small' style={{ float: 'left', width: '100%' }}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Snapshots (Con icono).
describe('[SNAPSHOT][Componentes][Common][IconButton] - Boton con los siguientes temas: red (usando un icono).', () => {
	//Tema: red.
	it('Debe pintar el componente con el tema "red", tamaño "small" y con el icono "plus".', () => {
        
        //M   M  AAA  IIIII N   N
        //MM MM A   A   I   NN  N
        //M M M AAAAA   I   N N N
        //M   M A   A   I   N  NN
        //M   M A   A IIIII N   N

        //Snapshot [red][small].
        let component = renderer.create(<IconButton theme='red' size='small' icon='solidPlusCircle'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Snapshots (Redondo con icono).
describe('[SNAPSHOT][Componentes][Common][RoundButton] - Boton con los siguientes temas: red (usando un icono).', () => {
	it('Debe pintar el componente con el tema "red", tamaño "small" y con el icono "plus".', () => {
        //Snapshot [red][small].
        let component = renderer.create(<RoundButton theme='red' size='small' icon='solidPlusCircle'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
	it('Debe pintar el componente con el tema "red", tamaño "medium" y con el icono "plus".', () => {
        //Snapshot [red][medium].
        let component = renderer.create(<RoundButton theme='red' size='medium' icon='solidPlusCircle'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
	it('Debe pintar el componente con el tema "red", tamaño "big" y con el icono "plus".', () => {
        //Snapshot [red][big].
        let component = renderer.create(<RoundButton theme='red' size='big' icon='solidPlusCircle'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});


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
        
        //M   M  AAA  IIIII N   N
        //MM MM A   A   I   NN  N
        //M M M AAAAA   I   N N N
        //M   M A   A   I   N  NN
        //M   M A   A IIIII N   N

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
        
        // SSSS EEEEE  CCCC  OOO  N   N DDDD   AAA  RRRR  Y   Y
        //S     E     C     O   O NN  N D   D A   A R   R  Y Y
        // SSS  EEE   C     O   O N N N D   D AAAAA RRRR    Y
        //    S E     C     O   O N  NN D   D A   A R   R   Y
        //SSSS  EEEEE  CCCC  OOO  N   N DDDD  A   A R   R  YYY

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
        
        //FFFFF L      AAA  TTTTT
        //F     L     A   A   T
        //FFF   L     AAAAA   T
        //F     L     A   A   T
        //F     LLLLL A   A   T

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
        
        //BBBB  L     U   U EEEEE
        //B   B L     U   U E
        //BBBB  L     U   U EEE
        //B   B L     U   U E
        //BBBB  LLLLL  UUU  EEEEE

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
    //Tema: flatBlue.
	it('Debe pintar el componente con el tema "flatBlue" y los tamaños "small", "medium" y "big".', () => {
        
        //FFFFF L      AAA  TTTTT BBBB  L     U   U EEEEE
        //F     L     A   A   T   B   B L     U   U E
        //FFF   L     AAAAA   T   BBBB  L     U   U EEE
        //F     L     A   A   T   B   B L     U   U E
        //F     LLLLL A   A   T   BBBB  LLLLL  UUU  EEEEE

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
        
        // GGGG RRRR  EEEEE EEEEE N   N
        //G     R   R E     E     NN  N
        //G  GG RRRR  EEE   EEE   N N N
        //G   G R   R E     E     N  NN
        // GGGG R   R EEEEE EEEEE N   N

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
    //Tema: flatGreen.
	it('Debe pintar el componente con el tema "flatGreen" y los tamaños "small", "medium" y "big".', () => {
        
        //FFFFF L      AAA  TTTTT  GGGG RRRR  EEEEE EEEEE N   N
        //F     L     A   A   T   G     R   R E     E     NN  N
        //FFF   L     AAAAA   T   G  GG RRRR  EEE   EEE   N N N
        //F     L     A   A   T   G   G R   R E     E     N  NN
        //F     LLLLL A   A   T    GGGG R   R EEEEE EEEEE N   N

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
        
        //Y   Y EEEEE L     L      OOO  W   W
        // Y Y  E     L     L     O   O W   W
        //  Y   EEE   L     L     O   O W W W
        //  Y   E     L     L     O   O WW WW
        // YYY  EEEEE LLLLL LLLLL  OOO  W   W

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
    //Tema: flatYellow.
	it('Debe pintar el componente con el tema "flatYellow" y los tamaños "small", "medium" y "big".', () => {
        
        //FFFFF L      AAA  TTTTT Y   Y EEEEE L     L      OOO  W   W
        //F     L     A   A   T    Y Y  E     L     L     O   O W   W
        //FFF   L     AAAAA   T     Y   EEE   L     L     O   O W W W
        //F     L     A   A   T     Y   E     L     L     O   O WW WW
        //F     LLLLL A   A   T    YYY  EEEEE LLLLL LLLLL  OOO  W   W

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
        
        // GGGG RRRR   AAA  Y   Y
        //G     R   R A   A  Y Y
        //G  GG RRRR  AAAAA   Y
        //G   G R   R A   A   Y
        // GGGG R   R A   A  YYY

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
    //Tema: flatGray.
	it('Debe pintar el componente con el tema "flatGray" y los tamaños "small", "medium" y "big".', () => {
        
        //FFFFF L      AAA  TTTTT  GGGG RRRR   AAA  Y   Y
        //F     L     A   A   T   G     R   R A   A  Y Y
        //FFF   L     AAAAA   T   G  GG RRRR  AAAAA   Y
        //F     L     A   A   T   G   G R   R A   A   Y
        //F     LLLLL A   A   T    GGGG R   R A   A  YYY

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
    //Tema: flatGray.
	it('Debe pintar el componente con el tema "flatWhite" y los tamaños "small", "medium" y "big".', () => {
        
        //FFFFF L      AAA  TTTTT W   W H   H IIIII TTTTT EEEEE
        //F     L     A   A   T   W   W H   H   I     T   E
        //FFF   L     AAAAA   T   W W W HHHHH   I     T   EEE
        //F     L     A   A   T   WW WW H   H   I     T   E
        //F     LLLLL A   A   T   W   W H   H IIIII   T   EEEEE

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
    //Tema: red (cons "float" y "width" asignados).
	it('Debe pintar el componente con el tema "red" con estilo para "float" y "width".', () => {
        
        //M   M  AAA  IIIII N   N
        //MM MM A   A   I   NN  N
        //M M M AAAAA   I   N N N
        //M   M A   A   I   N  NN
        //M   M A   A IIIII N   N

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
        let component = renderer.create(<IconButton theme='red' size='small' icon='plus'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Snapshots (Redondo con icono).
describe('[SNAPSHOT][Componentes][Common][RoundButton] - Boton con los siguientes temas: red (usando un icono).', () => {
	it('Debe pintar el componente con el tema "red", tamaño "small" y con el icono "plus".', () => {
        //Snapshot [red][small].
        let component = renderer.create(<RoundButton theme='red' size='small' icon='plus'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
	it('Debe pintar el componente con el tema "red", tamaño "medium" y con el icono "plus".', () => {
        //Snapshot [red][medium].
        let component = renderer.create(<RoundButton theme='red' size='medium' icon='plus'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
	it('Debe pintar el componente con el tema "red", tamaño "big" y con el icono "plus".', () => {
        //Snapshot [red][big].
        let component = renderer.create(<RoundButton theme='red' size='big' icon='plus'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

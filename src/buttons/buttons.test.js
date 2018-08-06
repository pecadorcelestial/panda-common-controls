
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

import { Button, IconButton } from './buttons';

//Snapshots (Temas: main, secondary, flat, blue, flatBlue).
describe('[SNAPSHOT][Componentes][Common][Button] - Boton con los siguientes temas: main, secondary, flat, blue, flatBlue.', () => {
	//Tema: main.
	it('Debe pintar el componente con el tema "main" y los tamaños "small", "medium" y "big".', () => {
        
        //M   M  AAA  IIIII N   N
        //MM MM A   A   I   NN  N
        //M M M AAAAA   I   N N N
        //M   M A   A   I   N  NN
        //M   M A   A IIIII N   N

        //Snapshot [main][small].
        let component = renderer.create(<Button theme='main' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [main][medium].
        component = renderer.create(<Button theme='main' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [main][big].
        component = renderer.create(<Button theme='main' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: secondary.
	it('Debe pintar el componente con el tema "secondary" y los tamaños "small", "medium" y "big".', () => {
        
        // SSSS EEEEE  CCCC  OOO  N   N DDDD   AAA  RRRR  Y   Y
        //S     E     C     O   O NN  N D   D A   A R   R  Y Y
        // SSS  EEE   C     O   O N N N D   D AAAAA RRRR    Y
        //    S E     C     O   O N  NN D   D A   A R   R   Y
        //SSSS  EEEEE  CCCC  OOO  N   N DDDD  A   A R   R  YYY

        //Snapshot [secondary][small].
        let component = renderer.create(<Button theme='secondary' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondary][medium].
        component = renderer.create(<Button theme='secondary' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [secondary][big].
        component = renderer.create(<Button theme='secondary' size='big'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: flat.
	it('Debe pintar el componente con el tema "flat" y los tamaños "small", "medium" y "big".', () => {
        
        //FFFFF L      AAA  TTTTT
        //F     L     A   A   T
        //FFF   L     AAAAA   T
        //F     L     A   A   T
        //F     LLLLL A   A   T

        //Snapshot [flat][small].
        let component = renderer.create(<Button theme='flat' size='small'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flat][medium].
        component = renderer.create(<Button theme='flat' size='medium'/>).toJSON();
		expect(component).toMatchSnapshot();
        //Snapshot [flat][big].
        component = renderer.create(<Button theme='flat' size='big'/>).toJSON();
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
    //Tema: main (cons "float" y "width" asignados).
	it('Debe pintar el componente con el tema "main" con estilo para "float" y "width".', () => {
        
        //M   M  AAA  IIIII N   N
        //MM MM A   A   I   NN  N
        //M M M AAAAA   I   N N N
        //M   M A   A   I   N  NN
        //M   M A   A IIIII N   N

        //Snapshot [main][small].
        let component = renderer.create(<Button theme='main' size='small' style={{ float: 'left', width: '100%' }}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Snapshots (Con icono).
describe('[SNAPSHOT][Componentes][Common][Button] - Boton con los siguientes temas: main (usando un icono).', () => {
	//Tema: main.
	it('Debe pintar el componente con el tema "main", tamaño "small" y con el icono "plus".', () => {
        
        //M   M  AAA  IIIII N   N
        //MM MM A   A   I   NN  N
        //M M M AAAAA   I   N N N
        //M   M A   A   I   N  NN
        //M   M A   A IIIII N   N

        //Snapshot [main][small].
        let component = renderer.create(<IconButton theme='main' size='small' icon='plus'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});


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

import { CircularGraph } from './graphs';

//Snapshots (Temas: red, secondaryRed, flatRed, blue, flatBlue, green, flatGreen, yellow, flatYellow, gray, flatGray).
describe('[SNAPSHOT][Componentes][Common][CircularGraph] - Gráfica de círculo con los siguientes temas: red, blue, green, yellow, gray, orange y black.', () => {
	//Tema: red.
	it('Debe pintar el componente con el tema "red".', () => {
        //Snapshot [red].
        let component = renderer.create(<CircularGraph theme='red' percent={100}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: blue.
	it('Debe pintar el componente con el tema "blue".', () => {
        //Snapshot [blue].
        let component = renderer.create(<CircularGraph theme='blue' percent={100}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: green.
	it('Debe pintar el componente con el tema "green".', () => {
        //Snapshot [green].
        let component = renderer.create(<CircularGraph theme='green' percent={100}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: yellow.
	it('Debe pintar el componente con el tema "yellow".', () => {
        //Snapshot [yellow].
        let component = renderer.create(<CircularGraph theme='yellow' percent={100}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: gray.
	it('Debe pintar el componente con el tema "gray".', () => {
        //Snapshot [gray].
        let component = renderer.create(<CircularGraph theme='gray' percent={100}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: orange.
	it('Debe pintar el componente con el tema "orange".', () => {
        //Snapshot [orange].
        let component = renderer.create(<CircularGraph theme='orange' percent={100}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: black.
	it('Debe pintar el componente con el tema "black".', () => {
        //Snapshot [black].
        let component = renderer.create(<CircularGraph theme='black' percent={100}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Tema: ientc.
	it('Debe pintar el componente con el tema "ientc".', () => {
        //Snapshot [ientc].
        let component = renderer.create(<CircularGraph theme='ientc' percent={100}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});
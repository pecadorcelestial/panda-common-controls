
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

import { BasicCard } from './cards';

//Snapshots.
describe('[SNAPSHOT][Componentes][Common][Card] - Tarjeta con 7 tipos diferentes de elevacion en la sombra.', () => {
	//Elevación: 4.
	it('Debe pintar el componente con una elevación en la sombra de 4.', () => {
        //Snapshot [4].
        let component = renderer.create(<BasicCard elevation={4} width='100%'/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Elevación: 8.
	it('Debe pintar el componente con una elevación en la sombra de 8.', () => {
        //Snapshot [8].
        let component = renderer.create(<BasicCard elevation={8}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Elevación: 10.
	it('Debe pintar el componente con una elevación en la sombra de 10.', () => {
        //Snapshot [10].
        let component = renderer.create(<BasicCard elevation={10}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Elevación: 14.
	it('Debe pintar el componente con una elevación en la sombra de 14.', () => {
        //Snapshot [14].
        let component = renderer.create(<BasicCard elevation={14}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Elevación: 18.
	it('Debe pintar el componente con una elevación en la sombra de 18.', () => {
        //Snapshot [18].
        let component = renderer.create(<BasicCard elevation={18}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Elevación: 32.
	it('Debe pintar el componente con una elevación en la sombra de 32.', () => {
        //Snapshot [32].
        let component = renderer.create(<BasicCard elevation={32}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Elevación: N/A.
	it('Debe pintar el componente sin elevación en la sombra.', () => {
        //Snapshot [N/A].
        let component = renderer.create(<BasicCard/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

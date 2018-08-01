
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

import Months from './months';

//Snapshot #1.
describe('[SNAPSHOT][Componentes][Common][Months] - Meses.', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Tema: default)(Fecha: 15/08/1981).', () => {
		//Funciones 'dummy'.
		const handleYearOnClick = event => {
			//Nada que hacer aquí.
        };
        const handleOnChange = date => {
			//Nada que hacer aquí.
        };
        //Variables.
        let selectedDate = new Date('08/15/1981');
        let minDate = new Date('08/10/1981');
		//Propiedades.
        const monthsProps = {
            //Obligatorios.
            selectedDate,
            innerDate: selectedDate,
            //Opcionales.
            language: 'es-MX',
            minDate,
            //Funciones.
            yearOnClick: handleYearOnClick,
            onChange: handleOnChange
        };
        //Se crea el componente.
        
        //N   N  OOO  RRRR  M   M  AAA  L
        //NN  N O   O R   R MM MM A   A L
        //N N N O   O RRRR  M M M AAAAA L
        //N  NN O   O R   R M   M A   A L
        //N   N  OOO  R   R M   M A   A LLLLL

        //Snapshot inicial.
        const component = renderer.create(<Months {...monthsProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo #1.
describe('[FLUJO][Componentes][Common][Months] - Meses.', () => {
	//Funciones 'dummy'.
	const handleYearOnClick = jest.fn(event => {
        //Nada que hacer aquí.
	});
	const handleOnChange = jest.fn(date => {
		//Nada que hacer aquí.
	});
    //Variables.
    let selectedDate = new Date('08/15/1981');
    let minDate = new Date('08/10/1981');
    //Propiedades.
    const monthsProps = {
        //Obligatorios.
        selectedDate,
        innerDate: selectedDate,
        //Opcionales.
        language: 'es-MX',
        minDate,
        //Funciones.
        yearOnClick: handleYearOnClick,
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Months {...monthsProps}/>);

    //Y   Y EEEEE  AAA  RRRR   OOO  N   N  CCCC L     IIIII  CCCC K   K
    // Y Y  E     A   A R   R O   O NN  N C     L       I   C     K  K
    //  Y   EEE   AAAAA RRRR  O   O N N N C     L       I   C     KKK
    //  Y   E     A   A R   R O   O N  NN C     L       I   C     K  K
    // YYY  EEEEE A   A R   R  OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    let yearButton = component.find('button#btn-years');
    it('Se revisa que exista 1 objeto tipo "button" con identificador "btn-years".', () => {
        expect(yearButton).toHaveLength(1);
    });
	it('Debe mandar llamar la función "handleYearOnClick" que se pasa como propiedad.', () => {
		//Simulación.
        yearButton.prop('onClick')();
		//Expectativa.
		expect(handleYearOnClick).toHaveBeenCalled();
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE
    
    let monthButtons = component.findWhere(node => {
        let regEx = /month-\d{1,2}-\d{1,2}/gi;
        return node.key() && node.key().match(regEx);
    });
    let bdMonthButton = component.findWhere(node => node.key() && node.key() === 'month-8-8');
    it('Se revisa que existan 42 objetos tipo "button" con displayName "Day".', () => {
        expect(monthButtons).toHaveLength(12);
        expect(bdMonthButton).toHaveLength(1);
    });
	it('Debe mandar llamar la función "handleOnChange" que se pasa como propiedad.', () => {
        //Simulación.
        bdMonthButton.prop('onClick')();
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
    });
});

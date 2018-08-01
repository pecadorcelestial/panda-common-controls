
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

import Years from './years';

//Snapshot #1.
describe('[SNAPSHOT][Componentes][Common][Years] - Años.', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Tema: default)(Fecha: 15/08/2018).', () => {
		//Funciones 'dummy'.
        const handleOnChange = date => {
			//Nada que hacer aquí.
        };
        //Variables.
        let selectedDate = new Date('08/15/2018');
        let minDate = new Date('08/10/2018');
		//Propiedades.
        const yearsProps = {
            //Obligatorios.
            selectedDate,
            innerDate: selectedDate,
            //Opcionales.
            language: 'es-MX',
            minDate,
            //Funciones.
            onChange: handleOnChange
        };
        //Se crea el componente.
        
        //N   N  OOO  RRRR  M   M  AAA  L
        //NN  N O   O R   R MM MM A   A L
        //N N N O   O RRRR  M M M AAAAA L
        //N  NN O   O R   R M   M A   A L
        //N   N  OOO  R   R M   M A   A LLLLL

        //Snapshot inicial.
        const component = renderer.create(<Years {...yearsProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo #1.
describe('[FLUJO][Componentes][Common][Months] - Meses.', () => {
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(date => {
		//Nada que hacer aquí.
	});
    //Variables.
    let selectedDate = new Date('08/15/2018');
    let minDate = new Date('08/10/2018');
    //Propiedades.
    const yearsProps = {
        //Obligatorios.
        selectedDate,
        innerDate: selectedDate,
        //Opcionales.
        language: 'es-MX',
        minDate,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Years {...yearsProps}/>);

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE
    
    let yearButtons = component.findWhere(node => {
        let regEx = /year-\d{4}-\d{1,2}/gi;
        return node.key() && node.key().match(regEx);
    });
    let currentYearButton = component.findWhere(node => node.key() && node.key() === 'year-2018-8');
    it('Se revisa que existan 10 objetos tipo "button" con displayName "Year".', () => {
        expect(yearButtons).toHaveLength(10);
        expect(currentYearButton).toHaveLength(1);
    });
	it('Debe mandar llamar la función "handleOnChange" que se pasa como propiedad.', () => {
        //Simulación.
        currentYearButton.prop('onClick')();
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
    });

    //H   H  AAA  N   N DDDD  L     EEEEE RRRR   SSSS
    //H   H A   A NN  N D   D L     E     R   R S
    //HHHHH AAAAA N N N D   D L     EEE   RRRR   SSS
    //H   H A   A N  NN D   D L     E     R   R     S
    //H   H A   A N   N DDDD  LLLLL EEEEE R   R SSSS

    let previousButton = component.find('button#btn-previous-years-range');
    let nextButton = component.find('button#btn-next-years-range');
    it('Se revisa que exista 1 objeto tipo "button" con identificador "btn-previous-years-range".', () => {
        expect(previousButton).toHaveLength(1);
    });
    it('Se revisa que exista 1 objeto tipo "button" con identificador "btn-next-years-range".', () => {
        expect(nextButton).toHaveLength(1);
    });
	it('Debe mandar llamar la función interna "handlePreviousYearsRangeOnClick".', () => {
		//Simulación.
        previousButton.prop('onClick')();
	});
	it('Debe mandar llamar la función interna "handleNextYearsRangeOnClick".', () => {
		//Simulación.
        nextButton.prop('onClick')();
	});
});

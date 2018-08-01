
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

import Month from './month';

//Snapshot #1.
describe('[SNAPSHOT][Componentes][Common][Month] - Mes.', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Tema: default)(Fecha: 15/08/1981).', () => {
		//Funciones 'dummy'.
		const handleMonthOnClick = event => {
			//Nada que hacer aquí.
        };
        const handleOnChange = date => {
			//Nada que hacer aquí.
        };
        const handleInnerOnChange = date => {
			//Nada que hacer aquí.
        };
        //Variables.
        let selectedDate = new Date('08/15/1981');
        let minDate = new Date('08/10/1981');
		//Propiedades.
        const monthProps = {
            //Obligatorios.
            selectedDate,
            innerDate: selectedDate,
            //Opcionales.
            language: 'es-MX',
            minDate,
            //Funciones.
            monthOnClick: handleMonthOnClick,
            onChange: handleOnChange,
            onInnerChange: handleInnerOnChange
        };
        //Se crea el componente.
        
        //N   N  OOO  RRRR  M   M  AAA  L
        //NN  N O   O R   R MM MM A   A L
        //N N N O   O RRRR  M M M AAAAA L
        //N  NN O   O R   R M   M A   A L
        //N   N  OOO  R   R M   M A   A LLLLL

        //Snapshot inicial.
        const component = renderer.create(<Month {...monthProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #2 (ERROR).
describe('[SNAPSHOT][Componentes][Common][Month] - Mes (fecha incorrecta).', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Tema: default)(Fecha: 31/02/2018).', () => {
		//Funciones 'dummy'.
		const handleMonthOnClick = event => {
			//Nada que hacer aquí.
        };
        const handleOnChange = date => {
			//Nada que hacer aquí.
        };
        const handleInnerOnChange = date => {
			//Nada que hacer aquí.
        };
        //Variables.
        let selectedDate = new Date('02/31/2018');
		//Propiedades.
        const monthProps = {
            //Obligatorios.
            selectedDate,
            innerDate: selectedDate,
            //Opcionales.
            language: 'es-MX',
            //Funciones.
            monthOnClick: handleMonthOnClick,
            onChange: handleOnChange,
            onInnerChange: handleInnerOnChange
        };
        //Se crea el componente.
        
        //N   N  OOO  RRRR  M   M  AAA  L
        //NN  N O   O R   R MM MM A   A L
        //N N N O   O RRRR  M M M AAAAA L
        //N  NN O   O R   R M   M A   A L
        //N   N  OOO  R   R M   M A   A LLLLL

        //Snapshot inicial.
        const component = renderer.create(<Month {...monthProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo #1.
describe('[FLUJO][Componentes][Common][Month] - Mes.', () => {
	//Funciones 'dummy'.
	const handleMonthOnClick = jest.fn(event => {
        //Nada que hacer aquí.
	});
	const handleOnChange = jest.fn(date => {
		//Nada que hacer aquí.
	});
	const handleInnerOnChange = jest.fn(date => {
		//Nada que hacer aquí.
	});
    //Variables.
    let selectedDate = new Date('08/15/1981');
    let minDate = new Date('08/10/1981');
    //Propiedades.
    const monthProps = {
        //Obligatorios.
        selectedDate,
        innerDate: selectedDate,
        //Opcionales.
        language: 'es-MX',
        minDate,
        //Funciones.
        monthOnClick: handleMonthOnClick,
        onChange: handleOnChange,
        onInnerChange: handleInnerOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Month {...monthProps}/>);

    //M   M  OOO  N   N TTTTT H   H  OOO  N   N  CCCC L     IIIII  CCCC K   K
    //MM MM O   O NN  N   T   H   H O   O NN  N C     L       I   C     K  K
    //M M M O   O N N N   T   HHHHH O   O N N N C     L       I   C     KKK
    //M   M O   O N  NN   T   H   H O   O N  NN C     L       I   C     K  K
    //M   M  OOO  N   N   T   H   H  OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    let monthButton = component.find('button#btn-month-year');
    it('Se revisa que exista 1 objeto tipo "button" con identificador "btn-month-year".', () => {
        expect(monthButton).toHaveLength(1);
    });
	it('Debe mandar llamar la función "handleMonthOnClick" que se pasa como propiedad.', () => {
		//Simulación.
        //monthButton.simulate('click');
        monthButton.prop('onClick')();
		//Expectativa.
		expect(handleMonthOnClick).toHaveBeenCalled();
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    let dayButtons = component.findWhere(node => {
        let regEx = /day-\d{1,2}-\d{1,2}/gi;
        return node.key() && node.key().match(regEx);
    });
    let bdButton = component.findWhere(node => node.key() && node.key() === 'day-15-20');
    it('Se revisa que existan 42 objetos tipo "button" con displayName "Day".', () => {
        expect(dayButtons).toHaveLength(42);
        expect(bdButton).toHaveLength(1);
    });
	it('Debe mandar llamar la función "handleOnChange" que se pasa como propiedad.', () => {
        //Simulación.
        bdButton.prop('onClick')();
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
    });

    //IIIII N   N N   N EEEEE RRRR   OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
    //  I   NN  N NN  N E     R   R O   O NN  N C     H   H A   A NN  N G     E
    //  I   N N N N N N EEE   RRRR  O   O N N N C     HHHHH AAAAA N N N G  GG EEE
    //  I   N  NN N  NN E     R   R O   O N  NN C     H   H A   A N  NN G   G E
    //IIIII N   N N   N EEEEE R   R  OOO  N   N  CCCC H   H A   A N   N  GGGG EEEE

    let previousMonthButton = component.find('button#btn-previous-month');
    let nextMonthButton = component.find('button#btn-next-month');
    it('Se revisa que exista 1 objeto tipo "button" con identificador "btn-month-year".', () => {
        expect(previousMonthButton).toHaveLength(1);
        expect(nextMonthButton).toHaveLength(1);
    });
	it('Debe mandar llamar la función "handleMonthOnClick" que se pasa como propiedad.', () => {
		//Simulación.
        previousMonthButton.prop('onClick')();
		//Expectativa.
		expect(handleInnerOnChange).toHaveBeenCalled();
	});
	it('Debe mandar llamar la función "handleMonthOnClick" que se pasa como propiedad.', () => {
		//Simulación.
        nextMonthButton.prop('onClick')();
		//Expectativa.
		expect(handleInnerOnChange).toHaveBeenCalled();
	});
});

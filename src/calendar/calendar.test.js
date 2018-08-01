
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

import { Calendar } from './calendar';
import Month from './month';
import Months from './months';
import Years from './years';

//Snapshot #1 (MES).
describe('[SNAPSHOT][Componentes][Common][Calendar] - Mes.', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Tema: default)(Fecha: 15/08/2018)(Modo: month).', () => {
		//Funciones 'dummy'.
        const handleOnChange = date => {
			//Nada que hacer aquí.
        };
		//Propiedades.
        const calendarProps = {
            //Opcionales.
            language: 'es-MX',
            minDate: '08/10/2018',
            mode: 'month',
            selectedDate: '08/15/2018',
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
        const component = renderer.create(<Calendar {...calendarProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #2 (MESES).
describe('[SNAPSHOT][Componentes][Common][Calendar] - Meses.', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Tema: default)(Fecha: 45/13/2018)(Modo: months).', () => {
		//Funciones 'dummy'.
        const handleOnChange = date => {
			//Nada que hacer aquí.
        };
		//Propiedades.
        const calendarProps = {
            //Opcionales.
            language: 'es-MX',
            mode: 'months',
            selectedDate: '45/13/2018',
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
        const component = renderer.create(<Calendar {...calendarProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #3 (AÑOS).
describe('[SNAPSHOT][Componentes][Common][Calendar] - Años.', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Tema: default)(Fecha: 15/08/2018)(Modo: years).', () => {
		//Funciones 'dummy'.
        const handleOnChange = date => {
			//Nada que hacer aquí.
        };
		//Propiedades.
        const calendarProps = {
            //Opcionales.
            language: 'es-MX',
            minDate: '08/10/2018',
            mode: 'years',
            selectedDate: '08/15/2018',
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
        const component = renderer.create(<Calendar {...calendarProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo #1 (Mes).
describe('[FLUJO][Componentes][Common][Calendar] - Mes.', () => {
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(date => {
		//Nada que hacer aquí.
	});
    //Propiedades.
    const calendarProps = {
        //Opcionales.
        language: 'es-MX',
        minDate: '08/10/2018',
        mode: 'month',
        selectedDate: '08/15/2018',
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
    const component = enzyme.shallow(<Calendar {...calendarProps}/>);

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE
    
    let month = component.find(Month);
    it('Se revisa que existan 1 objeto tipo "Month".', () => {
        expect(month).toHaveLength(1);
    });
	it('Debe mandar llamar la función "onChange" que se pasa como propiedad.', () => {
        //Simulación.
        let date = new Date('08/16/2018');
        month.prop('onChange')(date);
        //Expectativas.
        expect(component.state().selectedDate).toEqual(date);
        expect(component.state().innerDate).toEqual(date);
		expect(handleOnChange).toHaveBeenCalled();
    });

    //H   H  AAA  N   N DDDD  L     EEEEE RRRR   SSSS
    //H   H A   A NN  N D   D L     E     R   R S
    //HHHHH AAAAA N N N D   D L     EEE   RRRR   SSS
    //H   H A   A N  NN D   D L     E     R   R     S
    //H   H A   A N   N DDDD  LLLLL EEEEE R   R SSSS

    it('Debe mandar llamar la función "onInnerChange" que ejecuta el componente "Month".', () => {
        //Simulación.
        let date = new Date('09/16/2018');
        month.prop('onInnerChange')(date);
        //Expectativas.
        expect(component.state().innerDate).toEqual(date);
    });
    it('Debe mandar llamar la función "monthOnClick" que ejecuta el componente "Month".', () => {
        //Simulación.
        month.prop('monthOnClick')();
        //Expectativas.
        expect(component.state().mode).toEqual('months');
    });
});

//Flujo #1 (Meses).
describe('[FLUJO][Componentes][Common][Calendar] - Meses.', () => {
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(date => {
		//Nada que hacer aquí.
	});
    //Propiedades.
    const calendarProps = {
        //Opcionales.
        language: 'es-MX',
        minDate: '08/10/2018',
        mode: 'months',
        selectedDate: '08/15/2018',
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
    const component = enzyme.shallow(<Calendar {...calendarProps}/>);

    //H   H  AAA  N   N DDDD  L     EEEEE RRRR   SSSS
    //H   H A   A NN  N D   D L     E     R   R S
    //HHHHH AAAAA N N N D   D L     EEE   RRRR   SSS
    //H   H A   A N  NN D   D L     E     R   R     S
    //H   H A   A N   N DDDD  LLLLL EEEEE R   R SSSS

    let months = component.find(Months);
    it('Se revisa que existan 1 objeto tipo "Months".', () => {
        expect(months).toHaveLength(1);
    });
    it('Debe mandar llamar la función "yearOnClick" que ejecuta el componente "Months".', () => {
        //Simulación.
        months.prop('yearOnClick')();
        //Expectativas.
        expect(component.state().mode).toEqual('years');
    });
    it('Debe mandar llamar la función "onChange" que ejecuta el componente "Months".', () => {
        //Simulación.
        let date = new Date('09/16/2018');
        months.prop('onChange')(date);
        //Expectativas.
        expect(component.state().innerDate).toEqual(date);
        expect(component.state().mode).toEqual('month');
    });
});

//Flujo #1 (Años).
describe('[FLUJO][Componentes][Common][Calendar] - Años.', () => {
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(date => {
		//Nada que hacer aquí.
	});
    //Propiedades.
    const calendarProps = {
        //Opcionales.
        language: 'es-MX',
        minDate: '08/10/2018',
        mode: 'years',
        selectedDate: '08/15/2018',
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
    const component = enzyme.shallow(<Calendar {...calendarProps}/>);

    //H   H  AAA  N   N DDDD  L     EEEEE RRRR   SSSS
    //H   H A   A NN  N D   D L     E     R   R S
    //HHHHH AAAAA N N N D   D L     EEE   RRRR   SSS
    //H   H A   A N  NN D   D L     E     R   R     S
    //H   H A   A N   N DDDD  LLLLL EEEEE R   R SSSS

    let years = component.find(Years);
    it('Se revisa que existan 1 objeto tipo "Years".', () => {
        expect(years).toHaveLength(1);
    });
    it('Debe mandar llamar la función "onChange" que ejecuta el componente "Years".', () => {
        //Simulación.
        let date = new Date('09/16/2018');
        years.prop('onChange')(date);
        //Expectativas.
        expect(component.state().innerDate).toEqual(date);
        expect(component.state().mode).toEqual('months');
    });
});


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

import { CheckBox } from './checkboxes';

//Snapshots.
describe('[SNAPSHOT][Componentes][Common][CheckBox] - Checkbox normal.', () => {
	//UNCHECKED.
	it('Debe pintar el componente con los siguientes modificadores: (Checked: false).', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
		//Propiedades.		
        const checkboxProps = {
            //Opcionales.
            disabled: false,
            checked: false,
            //Funciones.
            onChange: handleOnChange
        };
        //Se crea el componente.
        
        //U   U N   N  CCCC H   H EEEEE  CCCC K   K EEEEE DDDD
        //U   U NN  N C     H   H E     C     K  K  E     D   D
        //U   U N N N C     HHHHH EEE   C     KKK   EEE   D   D
        //U   U N  NN C     H   H E     C     K  K  E     D   D
        // UUU  N   N  CCCC H   H EEEEE  CCCC K   K EEEEE DDDD

        //Snapshot.
        const component = renderer.create(<CheckBox {...checkboxProps}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //CHECKED.
	it('Debe pintar el componente con los siguientes modificadores: (Checked: false).', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
		//Propiedades.		
        const checkboxProps = {
            //Opcionales.
            disabled: false,
            checked: true,
            //Funciones.
            onChange: handleOnChange
        };
        //Se crea el componente.
        
        // CCCC H   H EEEEE  CCCC K   K EEEEE DDDD
        //C     H   H E     C     K  K  E     D   D
        //C     HHHHH EEE   C     KKK   EEE   D   D
        //C     H   H E     C     K  K  E     D   D
        // CCCC H   H EEEEE  CCCC K   K EEEEE DDDD

        //Snapshot.
        const component = renderer.create(<CheckBox {...checkboxProps}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Flujo #1 (2 clics).
describe('[FLUJO][Componentes][Common][CheckBox] - Valida el cambio de estado al dar clic sobre el componente.', () => {
    //Funciones 'dummy'.
    const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const checkboxProps = {
        //Opcionales.
        checked: false,
        disabled: false,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<CheckBox {...checkboxProps}/>);

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
        expect(component.state().checked).toBe(false);
	});

	// OOO  N   N  CCCC L     IIIII  CCCC K   K
	//O   O NN  N C     L       I   C     K  K
	//O   O N N N C     L       I   C     KKK
	//O   O N  NN C     L       I   C     K  K
	// OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

	it('Debe mandar llamar la función "onChange" que se pasa como propiedad, y cambiar el valor "checked" a true.', () => {
		//Simulación.
		component.simulate('click');
		//Expectativa.
        expect(handleOnChange).toHaveBeenCalled();
        expect(component.state().checked).toBe(true);
	});
	it('Debe mandar llamar la función "onChange" que se pasa como propiedad, y cambiar el valor "checked" a false.', () => {
		//Simulación.
		component.simulate('click');
		//Expectativa.
        expect(handleOnChange).toHaveBeenCalled();
        expect(component.state().checked).toBe(false);
    });
});

//Flujo #2 (2 clics con referencia nula).
describe('[FLUJO][Componentes][Common][CheckBox] - Valida el cambio de estado al dar clic sobre el componente.', () => {
    //Funciones 'dummy'.
    const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const checkboxProps = {
        //Opcionales.
        checked: false,
        disabled: false,
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<CheckBox {...checkboxProps}/>);

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
        expect(component.state().checked).toBe(false);
	});

	// OOO  N   N  CCCC L     IIIII  CCCC K   K
	//O   O NN  N C     L       I   C     K  K
	//O   O N N N C     L       I   C     KKK
	//O   O N  NN C     L       I   C     K  K
	// OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

	it('No debe mandar llamar la función "onChange" que se pasa como propiedad, y cambiar el valor "checked" a true.', () => {
		//Simulación.
		component.simulate('click');
		//Expectativa.
        expect(handleOnChange).not.toHaveBeenCalled();
        expect(component.state().checked).toBe(true);
	});
	it('No debe mandar llamar la función "onChange" que se pasa como propiedad, y cambiar el valor "checked" a false.', () => {
		//Simulación.
		component.simulate('click');
		//Expectativa.
        expect(handleOnChange).not.toHaveBeenCalled();
        expect(component.state().checked).toBe(false);
    });
});

//Métodos.
describe("[MÉTODOS][Componentes][Common][CheckBox] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Propiedades.		
    const checkboxProps = {
        //Opcionales.
        checked: false,
        disabled: false
    };
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
	//NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
	const component = enzyme.mount(<CheckBox {...checkboxProps}/>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().checked).toBe(false);
	});

    //V   V  AAA  L      OOO  RRRR
    //V   V A   A L     O   O R   R
    //V   V AAAAA L     O   O RRRR
    // V V  A   A L     O   O R   R
    //  V   A   A LLLLL  OOO  R   R

	it('Debe asignar el valor enviado en el control.', () => {
		//Simulación.
		component.instance().setValue(true);
		//Expectativa.
		expect(component.state().checked).toBe(true);
    });
    it('Debe obtener el valor asignado al control.', () => {
        //Simulación.
        let value = component.instance().getValue();
        //Expectativa.
        expect(value).toBe(true);
    });
});

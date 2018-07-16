
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

import { BasicSelect } from './dropdownlists';

//Snapshots.
describe('[SNAPSHOT][Componentes][Common][BasicSelect] - Lista desplegable.', () => {
	//Deshabilitado: falso.
	it('Debe pintar el componente con los siguientes modificadores: (Deshabilitado: falso)(ID: numérico).', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
        //Valores:
        const options = [
            {
                id: 1,
                description: 'Opción #1'
            },
            {
                id: 2,
                description: 'Opción #2'
            },
            {
                id: 3,
                description: 'Opción #3'
            },
            {
                id: 4,
                description: 'Opción #4'
            },
            {
                id: 5,
                description: 'Opción #5'
            }
        ];
		//Propiedades.		
        const dropdownlistProps = {
            //Obligatorios.
            title: 'Estado: normal',
            error: 'El campo debe saber lo que quiero.',
            options,
            selectedOption: 1,
            //Opcionales.
            disabled: false,
            id: 'options',
            placeHolder: 'Seleccione una opción',
            //Validación.
            isRequired: true,
            idIsNumeric: true,
            //Funciones.
            onChange: handleOnChange
        };
        //Se crea el componente.
        const component = renderer.create(<BasicSelect {...dropdownlistProps}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //Deshabilitado: cierto.
	it('Debe pintar el componente con los siguientes modificadores: (Deshabilitado: cierto)(ID: numérico).', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
        //Valores:
        const options = [
            {
                id: 1,
                description: 'Opción #1'
            },
            {
                id: 2,
                description: 'Opción #2'
            },
            {
                id: 3,
                description: 'Opción #3'
            },
            {
                id: 4,
                description: 'Opción #4'
            },
            {
                id: 5,
                description: 'Opción #5'
            }
        ];
		//Propiedades.		
        const dropdownlistProps = {
            //Obligatorios.
            title: 'Estado: normal',
            error: 'El campo debe saber lo que quiero.',
            options,
            selectedOption: 1,
            //Opcionales.
            disabled: true,
            id: 'options',
            placeHolder: 'Seleccione una opción',
            //Validación.
            isRequired: true,
            idIsNumeric: true,
            //Funciones.
            onChange: handleOnChange
        };
        //Se crea el componente.
        const component = renderer.create(<BasicSelect {...dropdownlistProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo #1 (Requerido con identificador numérico).
describe("[FLUJO][Componentes][Common][BasicSelect] - Validar campo al ser requerido (identificador numérico).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//4. onChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Valores:
    const options = [
        {
            id: 1,
            description: 'Opción #1'
        },
        {
            id: 2,
            description: 'Opción #2'
        },
        {
            id: 3,
            description: 'Opción #3'
        },
        {
            id: 4,
            description: 'Opción #4'
        },
        {
            id: 5,
            description: 'Opción #5'
        }
    ];
    //Propiedades.		
    const dropdownlistProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: 'El campo debe saber lo que quiero.',
        options,
        selectedOption: 1,
        //Opcionales.
        disabled: false,
        id: 'options',
        placeHolder: 'Seleccione una opción',
        //Validación.
        isRequired: true,
        idIsNumeric: true,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<BasicSelect {...dropdownlistProps}/>);
    const select = component.find('select');
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
        expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 1, description: 'Opción #1' }));
        expect(component.state().selectedOption).toBe(1);
	});

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT W   W IIIII L     L     RRRR  EEEEE  CCCC EEEEE IIIII V   V EEEEE PPPP  RRRR   OOO  PPPP   SSSS
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   W   W   I   L     L     R   R E     C     E       I   V   V E     P   P R   R O   O P   P S
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   W W W   I   L     L     RRRR  EEE   C     EEE     I   V   V EEE   PPPP  RRRR  O   O PPPP   SSS
	//C     O   O M   M P     O   O N  NN E     N  NN   T   WW WW   I   L     L     R   R E     C     E       I    V V  E     P     R   R O   O P         S
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   W   W IIIII LLLLL LLLLL R   R EEEEE  CCCC EEEEE IIIII   V   EEEEE P     R   R  OOO  P     SSSS

	it('Se modifica el elemento seleccionado y el estado debe cambiar.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: -1 });
		//Expectativas.
		expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe(-1);
        //Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: 2 });
		//Expectativas.
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 2, description: 'Opción #2' }));
        expect(component.state().selectedOption).toBe(2);
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onChange" [CORRECTO].', () => {
		//Simulación.
        select.instance().value = 5;
        select.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 5, description: 'Opción #5' }));
        expect(component.state().selectedOption).toBe(5);
	});
    
	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el elemento seleccionado [CORRECTO].', () => {
		//Simulación.
		select.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(true);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onChange" [ERROR].', () => {
		//Simulación.
        select.instance().value = -1;
        select.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe(-1);
	});
    
	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el elemento seleccionado [ERROR].', () => {
		//Simulación.
		select.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
    });
});

//Flujo #2 (Requerido con identificador NO numérico).
describe("[FLUJO][Componentes][Common][BasicSelect] - Validar campo al ser requerido (identificador NO numérico).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//4. onChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Valores:
    const options = [
        {
            id: 'No1',
            description: 'Opción #1'
        },
        {
            id: 'No2',
            description: 'Opción #2'
        },
        {
            id: 'No3',
            description: 'Opción #3'
        },
        {
            id: 'No4',
            description: 'Opción #4'
        },
        {
            id: 'No5',
            description: 'Opción #5'
        }
    ];
    //Propiedades.		
    const dropdownlistProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: 'El campo debe saber lo que quiero.',
        options,
        selectedOption: 'No1',
        //Opcionales.
        disabled: false,
        id: 'options',
        placeHolder: 'Seleccione una opción',
        //Validación.
        isRequired: true,
        idIsNumeric: false,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<BasicSelect {...dropdownlistProps}/>);
    const select = component.find('select');
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
        expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 'No1', description: 'Opción #1' }));
        expect(component.state().selectedOption).toBe('No1');
	});

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT W   W IIIII L     L     RRRR  EEEEE  CCCC EEEEE IIIII V   V EEEEE PPPP  RRRR   OOO  PPPP   SSSS
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   W   W   I   L     L     R   R E     C     E       I   V   V E     P   P R   R O   O P   P S
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   W W W   I   L     L     RRRR  EEE   C     EEE     I   V   V EEE   PPPP  RRRR  O   O PPPP   SSS
	//C     O   O M   M P     O   O N  NN E     N  NN   T   WW WW   I   L     L     R   R E     C     E       I    V V  E     P     R   R O   O P         S
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   W   W IIIII LLLLL LLLLL R   R EEEEE  CCCC EEEEE IIIII   V   EEEEE P     R   R  OOO  P     SSSS

	it('Se modifica el elemento seleccionado y el estado debe cambiar.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: '' });
		//Expectativas.
		expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe('');
        //Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: 'No2' });
		//Expectativas.
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 'No2', description: 'Opción #2' }));
        expect(component.state().selectedOption).toBe('No2');
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onChange" [CORRECTO].', () => {
		//Simulación.
        select.instance().value = 'No5';
        select.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 'No5', description: 'Opción #5' }));
        expect(component.state().selectedOption).toBe('No5');
	});
    
	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el elemento seleccionado [CORRECTO].', () => {
		//Simulación.
		select.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(true);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onChange" [ERROR].', () => {
		//Simulación.
        select.instance().value = '';
        select.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe('');
	});
    
	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el elemento seleccionado [ERROR].', () => {
		//Simulación.
		select.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
    });
});

//Flujo #3 (Completo con identificador numérico).
//Opciones adicionales:
//El elemento seleccionado es nulo.
//Sin "placeholder".
describe("[FLUJO][Componentes][Common][BasicSelect] - Validar campo al no ser requerido (identificador numérico).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//4. onChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Valores:
    const options = [
        {
            id: 1,
            description: 'Opción #1'
        },
        {
            id: 2,
            description: 'Opción #2'
        },
        {
            id: 3,
            description: 'Opción #3'
        },
        {
            id: 4,
            description: 'Opción #4'
        },
        {
            id: 5,
            description: 'Opción #5'
        }
    ];
    //Propiedades.		
    const dropdownlistProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: 'El campo debe saber lo que quiero.',
        options,
        selectedOption: -1,
        //Opcionales.
        disabled: false,
        id: 'options',
        placeHolder: '',
        //Validación.
        isRequired: false,
        idIsNumeric: true,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<BasicSelect {...dropdownlistProps}/>);
    const select = component.find('select');
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
        expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe(-1);
	});

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT W   W IIIII L     L     RRRR  EEEEE  CCCC EEEEE IIIII V   V EEEEE PPPP  RRRR   OOO  PPPP   SSSS
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   W   W   I   L     L     R   R E     C     E       I   V   V E     P   P R   R O   O P   P S
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   W W W   I   L     L     RRRR  EEE   C     EEE     I   V   V EEE   PPPP  RRRR  O   O PPPP   SSS
	//C     O   O M   M P     O   O N  NN E     N  NN   T   WW WW   I   L     L     R   R E     C     E       I    V V  E     P     R   R O   O P         S
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   W   W IIIII LLLLL LLLLL R   R EEEEE  CCCC EEEEE IIIII   V   EEEEE P     R   R  OOO  P     SSSS

	it('Se modifica el elemento seleccionado y el estado debe cambiar.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: -1 });
		//Expectativas.
		expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe(-1);
        //Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: 2 });
		//Expectativas.
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 2, description: 'Opción #2' }));
        expect(component.state().selectedOption).toBe(2);
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onChange" [CORRECTO].', () => {
		//Simulación.
        select.instance().value = 5;
        select.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 5, description: 'Opción #5' }));
        expect(component.state().selectedOption).toBe(5);
	});
    
	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el elemento seleccionado [CORRECTO].', () => {
		//Simulación.
		select.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(true);
		expect(component.state().errors.isEmpty).toBe(false);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onChange" [ERROR].', () => {
		//Simulación.
        select.instance().value = -1;
        select.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe(-1);
	});
    
	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el elemento seleccionado [ERROR].', () => {
		//Simulación.
		select.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
    });
});

//Flujo #4 (Requerido con identificador NO numérico).
describe("[FLUJO][Componentes][Common][BasicSelect] - Validar campo al no ser requerido (identificador NO numérico).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//4. onChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Valores:
    const options = [
        {
            id: 'No1',
            description: 'Opción #1'
        },
        {
            id: 'No2',
            description: 'Opción #2'
        },
        {
            id: 'No3',
            description: 'Opción #3'
        },
        {
            id: 'No4',
            description: 'Opción #4'
        },
        {
            id: 'No5',
            description: 'Opción #5'
        }
    ];
    //Propiedades.		
    const dropdownlistProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: 'El campo debe saber lo que quiero.',
        options,
        selectedOption: 'No1',
        //Opcionales.
        disabled: false,
        id: 'options',
        placeHolder: 'Seleccione una opción',
        //Validación.
        isRequired: false,
        idIsNumeric: false,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<BasicSelect {...dropdownlistProps}/>);
    const select = component.find('select');
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
        expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 'No1', description: 'Opción #1' }));
        expect(component.state().selectedOption).toBe('No1');
	});

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT W   W IIIII L     L     RRRR  EEEEE  CCCC EEEEE IIIII V   V EEEEE PPPP  RRRR   OOO  PPPP   SSSS
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   W   W   I   L     L     R   R E     C     E       I   V   V E     P   P R   R O   O P   P S
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   W W W   I   L     L     RRRR  EEE   C     EEE     I   V   V EEE   PPPP  RRRR  O   O PPPP   SSS
	//C     O   O M   M P     O   O N  NN E     N  NN   T   WW WW   I   L     L     R   R E     C     E       I    V V  E     P     R   R O   O P         S
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   W   W IIIII LLLLL LLLLL R   R EEEEE  CCCC EEEEE IIIII   V   EEEEE P     R   R  OOO  P     SSSS

	it('Se modifica el elemento seleccionado y el estado debe cambiar.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: '' });
		//Expectativas.
		expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe('');
        //Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: 'No2' });
		//Expectativas.
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 'No2', description: 'Opción #2' }));
        expect(component.state().selectedOption).toBe('No2');
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onChange" [CORRECTO].', () => {
		//Simulación.
        select.instance().value = 'No5';
        select.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 'No5', description: 'Opción #5' }));
        expect(component.state().selectedOption).toBe('No5');
	});
    
	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el elemento seleccionado [CORRECTO].', () => {
		//Simulación.
		select.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(true);
		expect(component.state().errors.isEmpty).toBe(false);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onChange" [ERROR].', () => {
		//Simulación.
        select.instance().value = '';
        select.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toBe(undefined);
        expect(component.state().selectedOption).toBe('');
	});
    
	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el elemento seleccionado [ERROR].', () => {
		//Simulación.
		select.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
    });
});

//Métodos.
describe("[MÉTODOS][Componentes][Common][BasicSelect] - Valida las llamadas a los métodos dentro del componente.", () => {
    //Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
   //Valores:
    const options = [
        {
            id: 1,
            description: 'Opción #1'
        },
        {
            id: 2,
            description: 'Opción #2'
        },
        {
            id: 3,
            description: 'Opción #3'
        },
        {
            id: 4,
            description: 'Opción #4'
        },
        {
            id: 5,
            description: 'Opción #5'
        }
    ];
    //Propiedades.		
    const dropdownlistProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: 'El campo debe saber lo que quiero.',
        options,
        selectedOption: 1,
        //Opcionales.
        disabled: false,
        id: 'options',
        placeHolder: 'Seleccione una opción',
        //Validación.
        isRequired: true,
        idIsNumeric: true,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
	//NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
	const component = enzyme.mount(<BasicSelect {...dropdownlistProps}/>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 1, description: 'Opción #1' }));
        expect(component.state().selectedOption).toBe(1);
	});

    //V   V  AAA  L      OOO  RRRR
    //V   V A   A L     O   O R   R
    //V   V AAAAA L     O   O RRRR
    // V V  A   A L     O   O R   R
    //  V   A   A LLLLL  OOO  R   R

	it('Debe asignar el valor enviado en el control.', () => {
		//Simulación.
		component.instance().setValue({ id: 2, description: 'Opción #2' });
		//Expectativa.
		expect(JSON.stringify(component.state().item)).toEqual(JSON.stringify({ id: 2, description: 'Opción #2' }));
        expect(component.state().selectedOption).toBe(2);
    });
    it('Debe obtener el valor asignado al control.', () => {
        //Simulación.
        let value = component.instance().getValue();
        //Expectativa.
        expect(JSON.stringify(value)).toEqual(JSON.stringify({ id: 2, description: 'Opción #2' }));
    });
});

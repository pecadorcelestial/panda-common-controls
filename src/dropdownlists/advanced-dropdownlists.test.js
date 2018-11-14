
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

import { AdvancedSelect } from './dropdownlists';

//Snapshots.
describe('[SNAPSHOT][Componentes][Common][AdvancedSelect] - Lista desplegable (avanzada).', () => {
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
				description: 'Opción #4',
				disabled: true
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
            onOptionChange: handleOnChange
        };
        //Se crea el componente.
        const component = renderer.create(<AdvancedSelect {...dropdownlistProps}/>).toJSON();
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
            itemsType: 'simple',
            placeHolder: 'Seleccione una opción',
            //Validación.
            isRequired: true,
            idIsNumeric: true,
            //Funciones.
            onOptionChange: handleOnChange
        };
        //Se crea el componente.
        const component = renderer.create(<AdvancedSelect {...dropdownlistProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo #1 (Requerido con identificador numérico)(lista simple).
//Opciones adicionales:
//El elemento seleccionado es nulo.
//Sin "placeholder".
describe("[FLUJO][Componentes][Common][AdvancedSelect] - Validar campo al ser requerido (identificador numérico)(lista simple).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//4. onOptionChange
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
            description: 'Opción #2',
            disabled: true
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
        selectedOption: 9,
        //Opcionales.
        disabled: false,
        id: 'options',
        itemsType: 'simple',
        //placeHolder: 'Seleccione una opción',
        //Validación.
        isRequired: true,
        idIsNumeric: true,
        //Funciones.
        onOptionChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<AdvancedSelect {...dropdownlistProps}/>);
    let button = component.find('button');
    it('Se revisa que exista sólo 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
        expect(component.state().item).toEqual({ id: -1, description: 'Selecciona una opción' });
        expect(component.state().selectedOption).toBe(-1);
        expect(component.state().show).toBe(false);
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
		expect(component.state().item).toEqual({ id: -1, description: 'Selecciona una opción' });
        expect(component.state().selectedOption).toBe(-1);
        //Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: 2 });
		//Expectativas.
		expect(component.state().item).toEqual({ id: 2, description: 'Opción #2', disabled: true });
        expect(component.state().selectedOption).toBe(2);
    });
    
    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    it('Debe mostrar la lista desplegable.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toEqual(true);
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    //Se deben obtener primero los elementos disponibles.
    let listItems = component.find('li');
    it('Se revisa que existan 6 objetos tipo "li".', () => {
        expect(listItems).toHaveLength(6);
    });

	//Se cambia el elemento seleccionado (correcto).
	it('Debe modificar el elemento seleccionado y llamar la función "onOptionChange" [CORRECTO].', () => {
        //Simulación.
        listItems.at(5).simulate('click', {});
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toEqual({ id: 5, description: 'Opción #5' });
        expect(component.state().selectedOption).toBe(5);
        expect(component.state().show).toEqual(false);
        //Expectativas (cont...).
		expect(component.state().correct).toBe(true);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});
    
    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    it('Debe mostrar la lista desplegable.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toEqual(true);
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    //Se deben obtener primero los elementos disponibles.
    listItems = component.find('li');
    it('Se revisa que existan 6 objetos tipo "li".', () => {
        expect(listItems).toHaveLength(6);
    });

	//Se cambia el elemento seleccionado (error).
	it('Debe modificar el elemento seleccionado y llamar la función "onOptionChange" [CORRECTO].', () => {
        //Simulación.
        listItems.at(0).simulate('click', {});
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toEqual({ id: -1, description: 'Selecciona una opción' });
        expect(component.state().selectedOption).toBe(-1);
        expect(component.state().show).toEqual(false);
        //Expectativas (cont...).
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
	});
    
	//U   U N   N M   M  OOO  U   U N   N TTTTT
	//U   U NN  N MM MM O   O U   U NN  N   T
	//U   U N N N M M M O   O U   U N N N   T
	//U   U N  NN M   M O   O U   U N  NN   T
	// UUU  N   N M   M  OOO   UUU  N   N   T
    
    it('Se desmonta el componente.', () => {
        component.unmount();
    });
});

//Flujo #2 (Requerido con identificador NO numérico)(lista simple).
describe("[FLUJO][Componentes][Common][AdvancedSelect] - Validar campo al ser requerido (identificador NO numérico)(lista simple).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//4. onOptionChange
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
            description: 'Opción #2',
            disabled: true
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
        itemsType: 'simple',
        placeHolder: 'Seleccione una opción',
        //Validación.
        isRequired: true,
        idIsNumeric: false,
        //Funciones.
        onOptionChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<AdvancedSelect {...dropdownlistProps}/>);
    let button = component.find('button');
    it('Se revisa que exista sólo 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
        expect(component.state().item).toEqual({ id: 'No1', description: 'Opción #1' });
        expect(component.state().selectedOption).toBe('No1');
        expect(component.state().show).toBe(false);
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
		expect(component.state().item).toEqual({ id: '', description: 'Seleccione una opción' });
        expect(component.state().selectedOption).toBe('');
        //Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: 'No2' });
		//Expectativas.
		expect(component.state().item).toEqual({ id: 'No2', description: 'Opción #2', disabled: true });
        expect(component.state().selectedOption).toBe('No2');
    });
    
    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    it('Debe mostrar la lista desplegable.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toEqual(true);
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    //Se deben obtener primero los elementos disponibles.
    let listItems = component.find('li');
    it('Se revisa que existan 6 objetos tipo "li".', () => {
        expect(listItems).toHaveLength(6);
    });

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onOptionChange" [CORRECTO].', () => {
        //Simulación.
        listItems.at(5).simulate('click', {});
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toEqual({ id: 'No5', description: 'Opción #5' });
        expect(component.state().selectedOption).toBe('No5');
        expect(component.state().show).toEqual(false);
        //Expectativas (cont...).
		expect(component.state().correct).toBe(true);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});
    
    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    it('Debe mostrar la lista desplegable.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toEqual(true);
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    //Se deben obtener primero los elementos disponibles.
    listItems = component.find('li');
    it('Se revisa que existan 6 objetos tipo "li".', () => {
        expect(listItems).toHaveLength(6);
    });

	//Se cambia el elemento seleccionado (error).
	it('Debe modificar el elemento seleccionado y llamar la función "onOptionChange" [CORRECTO].', () => {
        //Simulación.
        listItems.at(0).simulate('click', {});
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toEqual({ id: '', description: 'Seleccione una opción' });
        expect(component.state().selectedOption).toBe('');
        expect(component.state().show).toEqual(false);
        //Expectativas (cont...).
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
	});
    
	//U   U N   N M   M  OOO  U   U N   N TTTTT
	//U   U NN  N MM MM O   O U   U NN  N   T
	//U   U N N N M M M O   O U   U N N N   T
	//U   U N  NN M   M O   O U   U N  NN   T
	// UUU  N   N M   M  OOO   UUU  N   N   T
    
    it('Se desmonta el componente.', () => {
        component.unmount();
    });
});

//Flujo #3 (Completo con identificador numérico)(lista con icono, título y descripción).
//Opciones adicionales:
//El elemento seleccionado es nulo.
//Sin "placeholder".
describe("[FLUJO][Componentes][Common][AdvancedSelect] - Validar campo al no ser requerido (identificador numérico)(lista con icono, título y descripción).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//4. onOptionChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Valores:
    const options = [
        {
            id: 1,
            description: 'Opción #1',
            icon: 'brandReact',
            title: 'Título #1',
        },
        {
            id: 2,
            description: 'Opción #2',
            disabled: true,
            icon: 'brandReact',
            title: 'Título #2',
        },
        {
            id: 3,
            description: 'Opción #3',
            icon: 'brandReact',
            title: 'Título #3',
        },
        {
            id: 4,
            description: 'Opción #4',
            icon: 'brandReact',
            title: 'Título #4',
        },
        {
            id: 5,
            description: 'Opción #5',
            //icon: 'brandReact',
            title: 'Título #5',
        }
    ];
    const placeHolderItem = {
        id: -1,
        icon: 'solidUndoAlt',
        title: 'Selecciona una opción',
        description: '(Opción no válida)'
    };
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
        itemsType: 'image-title-description',
        placeHolder: '',
        //Validación.
        isRequired: false,
        idIsNumeric: true,
        //Funciones.
        //onOptionChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<AdvancedSelect {...dropdownlistProps}/>);
    let button = component.find('button');
    it('Se revisa que exista sólo 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
        expect(component.state().item).toEqual(options[0]);
        expect(component.state().selectedOption).toBe(1);
        expect(component.state().show).toBe(false);
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
		expect(component.state().item).toEqual(placeHolderItem);
        expect(component.state().selectedOption).toBe(-1);
        //Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: 2 });
		//Expectativas.
		expect(component.state().item).toEqual(options[1]);
        expect(component.state().selectedOption).toBe(2);
    });
    
    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    it('Debe mostrar la lista desplegable.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toEqual(true);
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    //Se deben obtener primero los elementos disponibles.
    let listItems = component.find('li');
    it('Se revisa que existan 6 objetos tipo "li".', () => {
        expect(listItems).toHaveLength(6);
    });

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onOptionChange" [CORRECTO].', () => {
        //Simulación.
        listItems.at(5).simulate('click', {});
		//Expectativas.
		expect(handleOnChange).not.toHaveBeenCalled();
		expect(component.state().item).toEqual(options[4]);
        expect(component.state().selectedOption).toBe(5);
        expect(component.state().show).toEqual(false);
        //Expectativas (cont...).
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(true);
		expect(component.state().errors.isEmpty).toBe(false);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});
    
    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    it('Debe mostrar la lista desplegable.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toEqual(true);
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    //Se deben obtener primero los elementos disponibles.
    listItems = component.find('li');
    it('Se revisa que existan 6 objetos tipo "li".', () => {
        expect(listItems).toHaveLength(6);
    });

	//Se cambia el elemento seleccionado (error).
	it('Debe modificar el elemento seleccionado y llamar la función "onOptionChange" [CORRECTO].', () => {
        //Simulación.
        listItems.at(0).simulate('click', {});
		//Expectativas.
		expect(handleOnChange).not.toHaveBeenCalled();
		expect(component.state().item).toEqual(placeHolderItem);
        expect(component.state().selectedOption).toBe(-1);
        expect(component.state().show).toEqual(false);
        //Expectativas (cont...).
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
	});
    
	//U   U N   N M   M  OOO  U   U N   N TTTTT
	//U   U NN  N MM MM O   O U   U NN  N   T
	//U   U N N N M M M O   O U   U N N N   T
	//U   U N  NN M   M O   O U   U N  NN   T
	// UUU  N   N M   M  OOO   UUU  N   N   T
    
    it('Se desmonta el componente.', () => {
        component.unmount();
    });
});

//Flujo #4 (Requerido con identificador NO numérico)(lista con icono, título y descripción).
describe("[FLUJO][Componentes][Common][AdvancedSelect] - Validar campo al no ser requerido (identificador NO numérico)(lista con icono, título y descripción).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//4. onOptionChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Valores:
    const options = [
        {
            id: 'No1',
            description: 'Opción #1',
            icon: 'brandReact',
            title: 'Título #1',
        },
        {
            id: 'No2',
            description: 'Opción #2',
            disabled: true,
            icon: 'brandReact',
            title: 'Título #2',
        },
        {
            id: 'No3',
            description: 'Opción #3',
            icon: 'brandReact',
            title: 'Título #3',
        },
        {
            id: 'No4',
            description: 'Opción #4',
            icon: 'brandReact',
            title: 'Título #4',
        },
        {
            id: 'No5',
            description: 'Opción #5',
            icon: 'brandReact',
            title: 'Título #5',
        }
    ];
    const placeHolderItem = {
        id: '',
        icon: 'solidUndoAlt',
        title: 'Selecciona una opción',
        description: '(Opción no válida)'
    };
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
        itemsType: 'image-title-description',
        placeHolder: 'Selecciona una opción',
        //Validación.
        isRequired: false,
        idIsNumeric: false,
        //Funciones.
        onOptionChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<AdvancedSelect {...dropdownlistProps}/>);
    let button = component.find('button');
    it('Se revisa que exista sólo 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
        expect(component.state().item).toEqual(options[0]);
        expect(component.state().selectedOption).toBe('No1');
        expect(component.state().show).toBe(false);
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
		expect(component.state().item).toEqual(placeHolderItem);
        expect(component.state().selectedOption).toBe('');
        //Se cambian las propiedades configuradas.
		component.setProps({ selectedOption: 'No2' });
		//Expectativas.
		expect(component.state().item).toEqual(options[1]);
        expect(component.state().selectedOption).toBe('No2');
    });
    
    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    it('Debe mostrar la lista desplegable.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toEqual(true);
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    //Se deben obtener primero los elementos disponibles.
    let listItems = component.find('li');
    it('Se revisa que existan 6 objetos tipo "li".', () => {
        expect(listItems).toHaveLength(6);
    });

	//Se cambia el texto.
	it('Debe modificar el elemento seleccionado y llamar la función "onOptionChange" [CORRECTO].', () => {
        //Simulación.
        listItems.at(5).simulate('click', {});
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toEqual(options[4]);
        expect(component.state().selectedOption).toBe('No5');
        expect(component.state().show).toEqual(false);
        //Expectativas (cont...).
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(true);
		expect(component.state().errors.isEmpty).toBe(false);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});
    
    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

    it('Debe mostrar la lista desplegable.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toEqual(true);
    });

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

    //Se deben obtener primero los elementos disponibles.
    listItems = component.find('li');
    it('Se revisa que existan 6 objetos tipo "li".', () => {
        expect(listItems).toHaveLength(6);
    });

	//Se cambia el elemento seleccionado (error).
	it('Debe modificar el elemento seleccionado y llamar la función "onOptionChange" [CORRECTO].', () => {
        //Simulación.
        listItems.at(0).simulate('click', {});
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().item).toEqual(placeHolderItem);
        expect(component.state().selectedOption).toBe('');
        expect(component.state().show).toEqual(false);
        //Expectativas (cont...).
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
	});
    
	//U   U N   N M   M  OOO  U   U N   N TTTTT
	//U   U NN  N MM MM O   O U   U NN  N   T
	//U   U N N N M M M O   O U   U N N N   T
	//U   U N  NN M   M O   O U   U N  NN   T
	// UUU  N   N M   M  OOO   UUU  N   N   T
    
    it('Se desmonta el componente.', () => {
        component.unmount();
    });
});

//Flujo #5.
describe('[FLUJO][Componentes][Common][AdvancedSelect] - Se muestra el listado y se debe ocultar dando click afuera.', () => {
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
            description: 'Opción #2',
            disabled: true
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
        selectedOption: 9,
        //Opcionales.
        disabled: false,
        id: 'options',
        itemsType: 'simple',
        //placeHolder: 'Seleccione una opción',
        //Validación.
        isRequired: true,
        idIsNumeric: true,
        //Funciones.
        onOptionChange: handleOnChange
    };
    //Se crea el componente.
    //NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const dummyPage = <div><input type='text' id='txt-anchor'/><AdvancedSelect {...dropdownlistProps}/></div>;
    //NOTA: Si el componente hace uso de "cocument.getElementById" (o simplemente de "document"), el componente debe "adjuntarse" a este:
    //https://airbnb.io/enzyme/docs/api/mount.html#arguments
    //NOTA: El problema con esto es el siguiente warning:
    /*
    Warning: render(): Rendering components directly into document.body is discouraged, since its children are often manipulated 
    by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container 
    element created for your app.
    */
   
    // AAA  N   N TTTTT EEEEE  SSSS      /  DDDD  EEEEE  SSSS PPPP  U   U EEEEE  SSSS
    //A   A NN  N   T   E     S         /   D   D E     S     P   P U   U E     S
    //AAAAA N N N   T   EEE    SSS     /    D   D EEE    SSS  PPPP  U   U EEE    SSS
    //A   A N  NN   T   E         S   /     D   D E         S P     U   U E         S
    //A   A N   N   T   EEEEE SSSS   /      DDDD  EEEEE SSSS  P      UUU  EEEEE SSSS

    let component;
    beforeEach(() => {
        component = enzyme.mount(dummyPage, { attachTo: document.getElementById('root') });
    });
    afterEach(() => {
        component.unmount();
    });

    // SSSS IIIII M   M U   U L      AAA   CCCC IIIII  OOO  N   N EEEEE  SSSS
    //S       I   MM MM U   U L     A   A C       I   O   O NN  N E     S
    // SSS    I   M M M U   U L     AAAAA C       I   O   O N N N EEE    SSS
    //    S   I   M   M U   U L     A   A C       I   O   O N  NN E         S
    //SSSS  IIIII M   M  UUU  LLLLL A   A  CCCC IIIII  OOO  N   N EEEEE SSSS

    it('Se revisa que exista 1 objeto tipo "button" y un objeto tipo "AdvancedSelect".', () => {
        let outsideInput = component.find('#txt-anchor');
        let select = component.find('AdvancedSelect');
        let button = component.find('button');
        let insideItems = component.find('li');
        //Expectativas.
        expect(outsideInput).toHaveLength(1);
        expect(select).toHaveLength(1);
        expect(button).toHaveLength(1);
        expect(insideItems).toHaveLength(6);
    });
    it('Debe mostrar el componente y se debe ocultar al hacer clic fuera de este.', () => {
        //Variables.
        let outsideInput = component.find('#txt-anchor');
        let select = component.find('AdvancedSelect');
        let button = component.find('button');
        let insideLabels = component.find('label');
        //La última etiqueta es el título.
        //console.log('ETIQUETA: ', insideLabels.at(6).instance())
        
        //M   M  OOO   SSSS TTTTT RRRR   AAA  RRRR
        //MM MM O   O S       T   R   R A   A R   R
        //M M M O   O  SSS    T   RRRR  AAAAA RRRR
        //M   M O   O     S   T   R   R A   A R   R
        //M   M  OOO  SSSS    T   R   R A   A R   R
        
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(select.instance().state.show).toBe(true);
        
        //M   M  OOO  U   U  SSSS EEEEE DDDD   OOO  W   W N   N
        //MM MM O   O U   U S     E     D   D O   O W   W NN  N
        //M M M O   O U   U  SSS  EEE   D   D O   O W W W N N N
        //M   M O   O U   U     S E     D   D O   O WW WW N  NN
        //M   M  OOO   UUU  SSSS  EEEEE DDDD   OOO  W   W N   N
        
        //Simulación.
        let event = {
            target: insideLabels.at(6).instance()
        }
        select.instance().handleMouseDown(event);
        //Expectativa.
        expect(select.instance().state.show).toBe(true);

        // OOO   CCCC U   U L     TTTTT  AAA  RRRR
        //O   O C     U   U L       T   A   A R   R
        //O   O C     U   U L       T   AAAAA RRRR
        //O   O C     U   U L       T   A   A R   R
        // OOO   CCCC  UUU  LLLLL   T   A   A R   R
        
        //M   M  OOO  U   U  SSSS EEEEE DDDD   OOO  W   W N   N
        //MM MM O   O U   U S     E     D   D O   O W   W NN  N
        //M M M O   O U   U  SSS  EEE   D   D O   O W W W N N N
        //M   M O   O U   U     S E     D   D O   O WW WW N  NN
        //M   M  OOO   UUU  SSSS  EEEEE DDDD   OOO  W   W N   N
        
        //Simulación.
        event = {
            target: outsideInput.instance()
        }
        select.instance().handleMouseDown(event);
        //Expectativa.
        expect(select.instance().state.show).toBe(false);        
    });
});

//Métodos (lista simple).
describe("[MÉTODOS][Componentes][Common][AdvancedSelect] - Valida las llamadas a los métodos dentro del componente.", () => {
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
        itemsType: 'simple',
        placeHolder: 'Selecciona una opción',
        //Validación.
        isRequired: true,
        idIsNumeric: true,
        //Funciones.
        onOptionChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
	//NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
	const component = enzyme.mount(<AdvancedSelect {...dropdownlistProps}/>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().item).toEqual(options[0]);
        expect(component.state().selectedOption).toBe(1);
	});

    //V   V  AAA  L      OOO  RRRR
    //V   V A   A L     O   O R   R
    //V   V AAAAA L     O   O RRRR
    // V V  A   A L     O   O R   R
    //  V   A   A LLLLL  OOO  R   R

	it('Debe asignar el valor enviado en el control.', () => {
		//Simulación.
		component.instance().setValue(2);
		//Expectativa.
		expect(component.state().item).toEqual(options[1]);
        expect(component.state().selectedOption).toBe(2);
    });
    it('Debe obtener el valor asignado al control.', () => {
        //Simulación.
        let value = component.instance().getValue();
        //Expectativa.
        expect(value).toEqual(options[1]);
    });
});
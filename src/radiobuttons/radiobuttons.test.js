
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

import { RadioButton, RadioButtonsGroup } from './radiobuttons';

//Snapshots.
describe('[SNAPSHOT][Componentes][Common][RadioButton] - RadioButton normal.', () => {
	//UNCHECKED.
	it('Debe pintar el componente con los siguientes modificadores: (Checked: false).', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
		//Propiedades.		
        const radiobuttonProps = {
            //Obligatorios.
            value: 1,
            //Opcionales.
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
        const component = renderer.create(<RadioButton {...radiobuttonProps}>Opción #1</RadioButton>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //CHECKED.
	it('Debe pintar el componente con los siguientes modificadores: (Checked: false).', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
		//Propiedades.		
        const radiobuttonProps = {
            //Obligatorios.
            value: 1,
            //Opcionales.
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
        const component = renderer.create(<RadioButton {...radiobuttonProps}>Opción #1</RadioButton>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Flujo #1 (Con función onChange existente).
describe('[FLUJO][Componentes][Common][RadioButton] - Valida que la función "onChange" sea llamada.', () => {
    //Funciones 'dummy'.
    const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const radiobuttonProps = {
        //Obligatorios.
        value: 1,
        //Opcionales.
        checked: false,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<RadioButton {...radiobuttonProps}>Opción #1</RadioButton>);

	// OOO  N   N  CCCC L     IIIII  CCCC K   K
	//O   O NN  N C     L       I   C     K  K
	//O   O N N N C     L       I   C     KKK
	//O   O N  NN C     L       I   C     K  K
	// OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

	it('Debe mandar llamar la función "onChange" que se pasa como propiedad.', () => {
		//Simulación.
		component.simulate('click');
		//Expectativa.
        expect(handleOnChange).toHaveBeenCalled();
	});
});

//Flujo #2 (Con función onChange inexistente).
describe('[FLUJO][Componentes][Common][RadioButton] - Valida que la función "onChange" NO sea llamada.', () => {
    //Funciones 'dummy'.
    const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const radiobuttonProps = {
        //Obligatorios.
        value: 1,
        //Opcionales.
        checked: false
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<RadioButton {...radiobuttonProps}>Opción #1</RadioButton>);

	// OOO  N   N  CCCC L     IIIII  CCCC K   K
	//O   O NN  N C     L       I   C     K  K
	//O   O N N N C     L       I   C     KKK
	//O   O N  NN C     L       I   C     K  K
	// OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

	it('Debe mandar llamar la función "onChange" que se pasa como propiedad.', () => {
		//Simulación.
		component.simulate('click');
		//Expectativa.
        expect(handleOnChange).not.toHaveBeenCalled();
	});
});

//Snapshots.
describe('[SNAPSHOT][Componentes][Common][RadioButtonsGroup] - RadioButtonsGroup normal.', () => {
	//UNCHECKED.
	it('Debe pintar el componente con un grupo de componentes tipo "RadioButton".', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
        //Opcions.        
        const radioButtons = [
            {
                name: 'Option #1',
                value: 1
            },
            {
                name: 'Option #2',
                value: 2
            },
            {
                name: 'Option #3',
                value: 3
            }
        ];
		//Propiedades.		
        const radiobuttonsGroupProps = {
            //Obligatorios.
            options: radioButtons,
            //Opcionales.
            selectedValue: 2,
            //Funciones.
            onChange: handleOnChange
        };
        //Se crea el componente.
        //Snapshot.
        const component = renderer.create(<RadioButtonsGroup {...radiobuttonsGroupProps}/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Flujo #1 + Métodos.
describe('[FLUJO][Componentes][Common][RadioButtonsGroup] - Valida el cambio de estado al dar clic sobre el componente.', () => {
    //Funciones 'dummy'.
    const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Opcions.        
    const radioButtons = [
        {
            name: 'Option #1',
            value: 1
        },
        {
            name: 'Option #2',
            value: 2
        },
        {
            name: 'Option #3',
            value: 3
        }
    ];
    //Propiedades.		
    const radiobuttonsGroupProps = {
        //Obligatorios.
        options: radioButtons,
        //Opcionales.
        selectedValue: 2,
        //Funciones.
        onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<RadioButtonsGroup {...radiobuttonsGroupProps}/>);
    //NOTA: La función "find" devuelve la cantidad de elementos del tipo seleccionado, aunque por alguna razón no se pueden tratar como un arreglo.
    let radioButtonArray = component.find('RadioButton');
    //NOTA: Por otro lado, esta función también devuelve el componente completo, por lo que devuelve también todos los componentes dentro:
    /*
        ┌──────────────────────────────────────────────────┐
        │ RADIOBUTTON                      key='rbt-opt-0' │
        │    ┌───────────────────────────────────────────┐ │
        │    │ INPUT                                     │ │
        │    │   ┌─────────────────────────────────────┐ │ │
        │    │   │ DIV                                 │ │ │
        │    │   │   ┌───────────────────────────────┐ │ │ │
        │    │   │   │ {CHILDREN}                    │ │ │ │
        │    │   │   └───────────────────────────────┘ │ │ │
        │    │   └─────────────────────────────────────┘ │ │
        │    └───────────────────────────────────────────┘ │
        └──────────────────────────────────────────────────┘
    */
    //Es decir que por cada búsqueda, suponiendo que se hiciera por la propiedad key, el resultado serían 4 componentes por cada wrapper y sólo 1 contendría
    //dicha propiedad.
    let radioButton = radioButtonArray.findWhere(node => node.key() && node.key() === 'rbt-opt-0');
    it('Se verifica que se hayan pintado 3 componentes tipo "RadioButton".', () => {
        expect(radioButtonArray).toHaveLength(3);
        expect(radioButton).toHaveLength(1);
    });

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
        expect(component.state().selectedValue).toBe(2);
	});

	// OOO  N   N  CCCC L     IIIII  CCCC K   K
	//O   O NN  N C     L       I   C     K  K
	//O   O N N N C     L       I   C     KKK
	//O   O N  NN C     L       I   C     K  K
	// OOO  N   N  CCCC LLLLL IIIII  CCCC K   K
    
	it('No debe mandar llamar la función "onChange" que se pasa como propiedad, y cambiar el valor "checked" a true.', () => {
		//Simulación.
        radioButton.prop('onChange')(1);
		//Expectativa.
        expect(handleOnChange).toHaveBeenCalled();
        expect(component.state().selectedValue).toBe(1);
    });
    
    //V   V  AAA  L      OOO  RRRR
    //V   V A   A L     O   O R   R
    //V   V AAAAA L     O   O RRRR
    // V V  A   A L     O   O R   R
    //  V   A   A LLLLL  OOO  R   R
    
	it('Debe asignar el valor enviado en el control.', () => {
		//Simulación.
		component.instance().setValue(3);
		//Expectativa.
		expect(component.state().selectedValue).toBe(3);
    });
    it('Debe obtener el valor asignado al control.', () => {
        //Simulación.
        let value = component.instance().getValue();
        //Expectativa.
        expect(value).toBe(3);
    });
});

//Flujo #2 (Con función onChange inexistente).
describe('[FLUJO][Componentes][Common][RadioButtonsGroup] - Valida el cambio de estado al dar clic sobre el componente.', () => {
    //Funciones 'dummy'.
    const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Opcions.        
    const radioButtons = [
        {
            name: 'Option #1',
            value: 1
        },
        {
            name: 'Option #2',
            value: 2
        },
        {
            name: 'Option #3',
            value: 3
        }
    ];
    //Propiedades.		
    const radiobuttonsGroupProps = {
        //Obligatorios.
        options: radioButtons,
        //Opcionales.
        selectedValue: 2,
        //Funciones.
        //onChange: handleOnChange
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<RadioButtonsGroup {...radiobuttonsGroupProps}/>);
    //NOTA: La función "find" devuelve la cantidad de elementos del tipo seleccionado, aunque por alguna razón no se pueden tratar como un arreglo.
    let radioButtonArray = component.find('RadioButton');
    //NOTA: Por otro lado, esta función también devuelve el componente completo, por lo que devuelve también todos los componentes dentro:
    /*
        ┌──────────────────────────────────────────────────┐
        │ RADIOBUTTON                      key='rbt-opt-0' │
        │    ┌───────────────────────────────────────────┐ │
        │    │ INPUT                                     │ │
        │    │   ┌─────────────────────────────────────┐ │ │
        │    │   │ DIV                                 │ │ │
        │    │   │   ┌───────────────────────────────┐ │ │ │
        │    │   │   │ {CHILDREN}                    │ │ │ │
        │    │   │   └───────────────────────────────┘ │ │ │
        │    │   └─────────────────────────────────────┘ │ │
        │    └───────────────────────────────────────────┘ │
        └──────────────────────────────────────────────────┘
    */
    //Es decir que por cada búsqueda, suponiendo que se hiciera por la propiedad key, el resultado serían 4 componentes por cada wrapper y sólo 1 contendría
    //dicha propiedad.
    let radioButton = radioButtonArray.findWhere(node => node.key() && node.key() === 'rbt-opt-0');
    it('Se verifica que se hayan pintado 3 componentes tipo "RadioButton".', () => {
        expect(radioButtonArray).toHaveLength(3);
        expect(radioButton).toHaveLength(1);
    });

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
        expect(component.state().selectedValue).toBe(2);
	});

	// OOO  N   N  CCCC L     IIIII  CCCC K   K
	//O   O NN  N C     L       I   C     K  K
	//O   O N N N C     L       I   C     KKK
	//O   O N  NN C     L       I   C     K  K
	// OOO  N   N  CCCC LLLLL IIIII  CCCC K   K
    
	it('No debe mandar llamar la función "onChange" que se pasa como propiedad, y cambiar el valor "checked" a true.', () => {
		//Simulación.
        radioButton.prop('onChange')(1);
		//Expectativa.
        expect(handleOnChange).not.toHaveBeenCalled();
        expect(component.state().selectedValue).toBe(1);
    });
});

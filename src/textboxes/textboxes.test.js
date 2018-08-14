
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

import { BasicTextBox } from './textboxes';

//Snapshot #1 (Normal).
describe('[SNAPSHOT][Componentes][Common][BasicTextBox] - Campo de texto normal.', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Estado: normal)(Tipo: correo electrónico).', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
        const handleOnFocus = () => {
			//Nada que hacer aquí.
        };
        const handleOnKeyPress = event => {
			//Nada que hacer aquí.
        };
		//Propiedades.		
        const textboxProps = {
            //Obligatorios.
            title: 'Estado: normal',
            error: 'El campo debe saber lo que quiero.',
            maxLength: 500,
            //Opcionales.
            disabled: false,
            id: 'email',
            inputType: 'email',
            valueType: 'text',
            //Validación.
            isRequired: true,
            validRegEx: '^[a-zA-Z0-9_\\-\\.]+@[a-zA-Z0-9_\\-]+(.[a-zA-Z]{2,4})+$',
            //Funciones.
            onChange: handleOnChange,
            onFocus: handleOnFocus,
            onKeyPress: handleOnKeyPress
        };
        //Se crea el componente.
        
        //N   N  OOO  RRRR  M   M  AAA  L
        //NN  N O   O R   R MM MM A   A L
        //N N N O   O RRRR  M M M AAAAA L
        //N  NN O   O R   R M   M A   A L
        //N   N  OOO  R   R M   M A   A LLLLL

        //Snapshot inicial.
        //OPCIÓN #1 - Con ENZYME.
        //const component = enzyme.shallow(<BasicTextBox {...textboxProps}/>);
        //OPCIÓN #2 - Con RENDERER.
        //NOTA: Este es el método recomendado para los componentes estilizados.
        //https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b
        const component = renderer.create(<BasicTextBox {...textboxProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #2 (Deshabilitado).
describe('[SNAPSHOT][Componentes][Common][BasicTextBox] - Campo de texto deshabilidato.', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Estado: deshabilitado)(Tipo: correo electrónido).', () => {
		//Funciones 'dummy'.
		const handleOnChange = event => {
			//Nada que hacer aquí.
        };
        const handleOnFocus = () => {
			//Nada que hacer aquí.
        };
        const handleOnKeyPress = event => {
			//Nada que hacer aquí.
        };
		//Propiedades.		
        const textboxProps = {
            //Obligatorios.
            title: 'Estado: normal',
            error: 'El campo debe saber lo que quiero.',
            maxLength: 500,
            //Opcionales.
            disabled: true,
            id: 'email',
            inputType: 'email',
            valueType: 'text',
            //Validación.
            isRequired: true,
            validRegEx: '^[a-zA-Z0-9_\\-\\.]+@[a-zA-Z0-9_\\-]+(.[a-zA-Z]{2,4})+$',
            //Funciones.
            onChange: handleOnChange,
            onFocus: handleOnFocus,
            onKeyPress: handleOnKeyPress
        };
        //Se crea el componente.
        
        //DDDD  EEEEE  SSSS H   H  AAA  BBBB  IIIII L     IIIII TTTTT  AAA  DDDD   OOO
        //D   D E     S     H   H A   A B   B   I   L       I     T   A   A D   D O   O
        //D   D EEE    SSS  HHHHH AAAAA BBBB    I   L       I     T   AAAAA D   D O   O
        //D   D E         S H   H A   A B   B   I   L       I     T   A   A D   D O   O
        //DDDD  EEEEE SSSS  H   H A   A BBBB  IIIII LLLLL IIIII   T   A   A DDDD   OOO

        //Snapshot inicial.
        //OPCIÓN #1 - Con ENZYME.
        //const component = enzyme.shallow(<BasicTextBox {...textboxProps}/>);
        //OPCIÓN #2 - Con RENDERER.
        //NOTA: Este es el método recomendado para los componentes estilizados.
        //https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b
        const component = renderer.create(<BasicTextBox {...textboxProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo #1 (RegEx).
describe('[FLUJO][Componentes][Common][BasicTextBox] - Validar campo por expresión regular.', () => {
    //Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//3. onFocus
	//4. onChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
        //Nada que hacer aquí.
        //console.log('[FLUJO][Componentes][Common][BasicTextBox] Event.Target: ', event.target);
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: 'El correo electrónico no tiene un formato válido.',
        maxLength: 100,
        //Opcionales.
        disabled: false,
        id: 'email',
        inputType: 'text',
        valueType: 'text',
        //Validación.
        isRequired: true,
        validRegEx: '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)\\.([a-zA-Z]{2,4})+$',
        //Funciones.
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    let input = component.find('input[type="text"]');
    it('Se revisa que exista 1 objeto tipo "input".', () => {
        expect(input).toHaveLength(1);
    });

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
		expect(component.state().text).toEqual('');
		expect(component.state().inputType).toEqual('text');
		expect(input.instance().value).toEqual('');
	});

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT W   W IIIII L     L     RRRR  EEEEE  CCCC EEEEE IIIII V   V EEEEE PPPP  RRRR   OOO  PPPP   SSSS
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   W   W   I   L     L     R   R E     C     E       I   V   V E     P   P R   R O   O P   P S
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   W W W   I   L     L     RRRR  EEE   C     EEE     I   V   V EEE   PPPP  RRRR  O   O PPPP   SSS
	//C     O   O M   M P     O   O N  NN E     N  NN   T   WW WW   I   L     L     R   R E     C     E       I    V V  E     P     R   R O   O P         S
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   W   W IIIII LLLLL LLLLL R   R EEEEE  CCCC EEEEE IIIII   V   EEEEE P     R   R  OOO  P     SSSS

	it('Se modifica el tipo de input y el estado debe cambiar.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ inputType: 'email' });
		//Expectativas.
		expect(component.state().inputType).toEqual('email');
		input = component.find('input[type="email"]');
		expect(input).toHaveLength(1);
	});

	// OOO  N   N FFFFF  OOO   CCCC U   U  SSSS
	//O   O NN  N F     O   O C     U   U S
	//O   O N N N FFF   O   O C     U   U  SSS
	//O   O N  NN F     O   O C     U   U     S
	// OOO  N   N F      OOO   CCCC  UUU  SSSS

	//Al seleccionar el control se detonan una serie de cambios estéticos.
	//NOTA: los estilos cambian desde el archivo CSS (p. ej.: .occ-textbox:focus).
	it('Debe mandar llamar la función "onFocus" que se pasa como propiedad [ERROR].', () => {
		//Simulación.
		input.simulate('focus');
		//Expectativa.
		expect(handleOnFocus).toHaveBeenCalled();
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el texto dentro del control y llamar la función "onChange" [ERROR].', () => {
        //Simulación.
        //OPCIÓN #1 - No está haciendo el cambio en el valor.
        //input.simulate('change', { target: { value: 'unit_zero@hotmail' } });
        //OPCIÓN #2 - De ésta manera si se refleja el cambio.
        input.instance().value = 'unit_zero@hotmail';
        input.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
        expect(component.state().text).toEqual('unit_zero@hotmail');
		expect(input.instance().value).toEqual('unit_zero@hotmail');
	});

	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el valor dentro de este. [ERROR]', () => {
		//Simulación.
		input.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(true);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
		expect(component.instance().ErrorRef.props.children).toEqual('El correo electrónico no tiene un formato válido.');
	});

	//Ahora se vuelve con 'foco' al control y se cambia el valor por uno válido.

	// OOO  N   N FFFFF  OOO   CCCC U   U  SSSS
	//O   O NN  N F     O   O C     U   U S
	//O   O N N N FFF   O   O C     U   U  SSS
	//O   O N  NN F     O   O C     U   U     S
	// OOO  N   N F      OOO   CCCC  UUU  SSSS

	//Al seleccionar el control se detonan una serie de cambios estéticos.
	//NOTA: los estilos cambian desde el archivo CSS (p. ej.: .occ-textbox:focus).
	it('Debe mandar llamar la función "onFocus" que se pasa como propiedad [CORRECTO].', () => {
		//Simulación.
		input.simulate('focus');
		//Expectativa.
		expect(handleOnFocus).toHaveBeenCalled();
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el texto dentro del control y llamar la función "onChange" [CORRECTO].', () => {
		//Simulación.
        input.instance().value = 'unit_zero@hotmail.com';
        input.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().text).toEqual('unit_zero@hotmail.com');
		expect(input.instance().value).toEqual('unit_zero@hotmail.com');
	});

	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el valor dentro de este [CORRECTO].', () => {
		//Simulación.
		input.simulate('blur');
		//Expectativas.
		//correct: true, complete: false, errorEmpty: false, errorRegEx: false
		expect(component.state().correct).toBe(true);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});
});

//Flujo #2 (Requerido).
describe("[FLUJO][Componentes][Common][BasicTextBox] - Validar campo al ser requerido.", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//3. onFocus
	//4. onChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: 'El campo es requerido.',
        maxLength: 100,
        //Opcionales.
        disabled: false,
        id: 'name',
        inputType: 'text',
        valueType: 'text',
        //Validación.
        isRequired: true,
        validRegEx: '',
        //Funciones.
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    const input = component.find('input[type="text"]');
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
		expect(component.state().text).toEqual('');
		expect(input.instance().value).toEqual('');
	});

	// OOO  N   N FFFFF  OOO   CCCC U   U  SSSS
	//O   O NN  N F     O   O C     U   U S
	//O   O N N N FFF   O   O C     U   U  SSS
	//O   O N  NN F     O   O C     U   U     S
	// OOO  N   N F      OOO   CCCC  UUU  SSSS

	//Al seleccionar el control se detonan una serie de cambios estéticos.
	//NOTA: los estilos cambian desde el archivo CSS (p. ej.: .occ-textbox:focus).
	it('Debe mandar llamar la función "onFocus" que se pasa como propiedad [ERROR].', () => {
		//Simulación.
		input.simulate('focus');
		//Expectativa.
		expect(handleOnFocus).toHaveBeenCalled();
	});

	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el valor dentro de este. [ERROR]', () => {
		//Simulación.
		input.simulate('blur');
		//Expectativas.
		//correct: true, complete: false, errorEmpty: false, errorRegEx: false
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(true);
		expect(component.state().errors.invalidRegEx).toBe(false);
		expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
        //Se buscan todas las etiquetas dentro del control.
        expect(component.instance().ErrorRef).toBeTruthy();
		expect(component.instance().ErrorRef.props.children).toEqual('El campo es requerido.');
	});

	//Ahora se devuelve con 'foco' al control y se cambia el valor por uno válido.

	// OOO  N   N FFFFF  OOO   CCCC U   U  SSSS
	//O   O NN  N F     O   O C     U   U S
	//O   O N N N FFF   O   O C     U   U  SSS
	//O   O N  NN F     O   O C     U   U     S
	// OOO  N   N F      OOO   CCCC  UUU  SSSS

	//Al seleccionar el control se detonan una serie de cambios estéticos.
	//NOTA: los estilos cambian desde el archivo CSS (p. ej.: .occ-textbox:focus).
	it('Debe mandar llamar la función "onFocus" que se pasa como propiedad [CORRECTO].', () => {
		//Simulación.
		input.simulate('focus');
		//Expectativa.
		expect(handleOnFocus).toHaveBeenCalled();
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el texto dentro del control y llamar la función "onChange" [CORRECTO].', () => {
		//Simulación.
        input.instance().value = 'Francisco Rodríguez';
        input.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().text).toEqual('Francisco Rodríguez');
		expect(input.instance().value).toEqual('Francisco Rodríguez');
	});

	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el valor dentro de este [CORRECTO].', () => {
		//Simulación.
		input.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(true);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});
});

//Flujo #3 (Completo).
describe("[FLUJO][Componentes][Common][BasicTextBox] - No se valida el campo, sólo se completa.", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//3. onFocus
	//4. onChange
	//5. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: '',
        maxLength: 100,
        //Opcionales.
        disabled: false,
        id: 'comments',
        inputType: 'text',
        valueType: 'text',
        //Validación.
        isRequired: false,
        validRegEx: '',
        //Funciones.
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    const input = component.find('input[type="text"]');

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
		expect(component.state().text).toEqual('');
		expect(input.instance().value).toEqual('');
	});

	// OOO  N   N FFFFF  OOO   CCCC U   U  SSSS
	//O   O NN  N F     O   O C     U   U S
	//O   O N N N FFF   O   O C     U   U  SSS
	//O   O N  NN F     O   O C     U   U     S
	// OOO  N   N F      OOO   CCCC  UUU  SSSS

	//Al seleccionar el control se detonan una serie de cambios estéticos.
	//NOTA: los estilos cambian desde el archivo CSS (p. ej.: .occ-textbox:focus).
	it('Debe mandar llamar la función "onFocus" que se pasa como propiedad [VACÍO].', () => {
		//Simulación.
		input.simulate('focus');
		//Expectativa.
		expect(handleOnFocus).toHaveBeenCalled();
	});

	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el valor dentro de este. [VACÍO]', () => {
		//Simulación.
		input.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});

	//Ahora se devuelve con 'foco' al control y se cambia el valor por uno válido.

	// OOO  N   N FFFFF  OOO   CCCC U   U  SSSS
	//O   O NN  N F     O   O C     U   U S
	//O   O N N N FFF   O   O C     U   U  SSS
	//O   O N  NN F     O   O C     U   U     S
	// OOO  N   N F      OOO   CCCC  UUU  SSSS

	//Al seleccionar el control se detonan una serie de cambios estéticos.
	//NOTA: los estilos cambian desde el archivo CSS (p. ej.: .occ-textbox:focus).
	it('Debe mandar llamar la función "onFocus" que se pasa como propiedad [CON UN VALOR X].', () => {
		//Simulación.
		input.simulate('focus');
		//Expectativa.
		expect(handleOnFocus).toHaveBeenCalled();
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el texto dentro del control y llamar la función "onChange" [CON UN VALOR X].', () => {
		//Simulación.
        input.instance().value = 'Un comentario X.';
        input.simulate('change');
		//Expectativas.
		expect(handleOnChange).toHaveBeenCalled();
		expect(component.state().text).toEqual('Un comentario X.');
		expect(input.instance().value).toEqual('Un comentario X.');
	});

	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el valor dentro de este [CON UN VALOR X].', () => {
		//Simulación.
		input.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(true);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});
});

//Flujo #4 (KeyPress).
describe('[FLUJO][Componentes][Common][BasicTextBox] - Validar el evento "KeyPress" en un tipo de campo "decimal".', () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//3. onFocus
	//4. onKeyPress
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Revisar que la tecla enviada sea la misma que la recibida.
		//expect(event.which).toEqual(46);
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: 'El campo debe contener sólo números.',
        maxLength: 100,
        //Opcionales.
        disabled: false,
        id: 'keypress',
        inputType: 'text',
        valueType: 'decimal',
        //Validación.
        isRequired: false,
        validRegEx: '',
        //Funciones.
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona la función "componentDidMount".
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    const input = component.find('input[type="text"]');

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
		expect(component.state().text).toEqual('');
		expect(input.instance().value).toEqual('');
	});

	// OOO  N   N FFFFF  OOO   CCCC U   U  SSSS
	//O   O NN  N F     O   O C     U   U S
	//O   O N N N FFF   O   O C     U   U  SSS
	//O   O N  NN F     O   O C     U   U     S
	// OOO  N   N F      OOO   CCCC  UUU  SSSS

	//Al seleccionar el control se detonan una serie de cambios estéticos.
	//NOTA: los estilos cambian desde el archivo CSS (p. ej.: .occ-textbox:focus).
	it('Debe mandar llamar la función "onFocus" que se pasa como propiedad [VACÍO].', () => {
		//Simulación.
		input.simulate('focus');
		//Expectativa.
		expect(handleOnFocus).toHaveBeenCalled();
	});

	// OOO  N   N K   K EEEEE Y   Y PPPP  RRRR  EEEEE  SSSS  SSSS
	//O   O NN  N K  K  E      Y Y  P   P R   R E     S     S
	//O   O N N N KKK   EEE     Y   PPPP  RRRR  EEE    SSS   SSS
	//O   O N  NN K  K  E       Y   P     R   R E         S     S
	// OOO  N   N K   K EEEEE  YYY  P     R   R EEEEE SSSS  SSSS

	it('Debe realizar 2 llamadas al método "onKeyPress" con una tecla válida y otra no.', () => {
		//Simulación #1 (ACEPTADA).
		input.simulate('keypress', { which: 46 });
		//Expectativa.
		expect(handleOnKeyPress).toHaveBeenCalled();
		//Simulación #2 (NO ACEPTADA).
		input.simulate('keypress', { which: 65 });
	});
});

//Flujo #5 (Mostrar/Ocultar Contraseña)(Habilitado).
describe("[FLUJO][Componentes][Common][BasicTextBox] - Validar el flujo de mostrar / ocultar contraseña (habilitado).", () => {
	//Eventos (por pasos):
	//1. onMouseDown - para mostrar la contraseña.
	//2. onMouseUp   - para ocultarla.
	//3. onMouseDown - para volver a mostrarla.
	//4. onMouseOut  - para ocultarla nuevamente.
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Contraseña',
        error: 'El campo es requerido.',
        maxLength: 50,
        //Opcionales.
        disabled: false,
        id: 'pwd',
        inputType: 'password',
        valueType: 'text',
        //Validación.
        isRequired: true,
        validRegEx: '',
        //Funciones.
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
	//NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    let input = component.find('input[type="password"]');
    let svgButton = component.find('svg');
    //Expectativas.
    it('Se revisa que el tipo el "input" sea contraseña.', () => {
        expect(input.instance().type).toEqual('password');
    });
    it('Se revisa que exista 1 objeto tipo "input".', () => {
		expect(svgButton).toHaveLength(1);
		expect(svgButton.props().disabled).toBe(false);
	});
	
	//EEEEE N   N  AAA  BBBB  L     EEEEE DDDD
	//E     NN  N A   A B   B L     E     D   D
	//EEE   N N N AAAAA BBBB  L     EEE   D   D
	//E     N  NN A   A B   B L     E     D   D
	//EEEEE N   N A   A BBBB  LLLLL EEEEE DDDD
	
	// OOO  N   N M   M  OOO  U   U  SSSS EEEEE DDDD   OOO  W   W N   N
	//O   O NN  N MM MM O   O U   U S     E     D   D O   O W   W NN  N
	//O   O N N N M M M O   O U   U  SSS  EEE   D   D O   O W W W N N N
	//O   O N  NN M   M O   O U   U     S E     D   D O   O WW WW N  NN
	// OOO  N   N M   M  OOO   UUU  SSSS  EEEEE DDDD   OOO  W   W N   N

	it('Debe cambiar el tipo del componente "input" a texto [onMouseDown].', () => {
		//Simulación.
		svgButton.simulate('mousedown', {});
		//Expectativa #2.
		expect(input.instance().type).toEqual('text');
	});

	// OOO  N   N M   M  OOO  U   U  SSSS EEEEE U   U PPPP
	//O   O NN  N MM MM O   O U   U S     E     U   U P   P
	//O   O N N N M M M O   O U   U  SSS  EEE   U   U PPPP
	//O   O N  NN M   M O   O U   U     S E     U   U P
	// OOO  N   N M   M  OOO   UUU  SSSS  EEEEE  UUU  P

	it('Debe cambiar el tipo del componente "input" a contraseña [onMouseUp].', () => {
		//Simulación.
		svgButton.simulate('mouseup', {});
		//Expectativa.
		expect(input.instance().type).toEqual('password');
	});

	// OOO  N   N M   M  OOO  U   U  SSSS EEEEE DDDD   OOO  W   W N   N
	//O   O NN  N MM MM O   O U   U S     E     D   D O   O W   W NN  N
	//O   O N N N M M M O   O U   U  SSS  EEE   D   D O   O W W W N N N
	//O   O N  NN M   M O   O U   U     S E     D   D O   O WW WW N  NN
	// OOO  N   N M   M  OOO   UUU  SSSS  EEEEE DDDD   OOO  W   W N   N

	it('Debe cambiar el tipo del componente "input" a texto otra vez [onMouseDown].', () => {
		//Simulación.
		svgButton.simulate('mousedown', {});
		//Expectativa.
		expect(input.instance().type).toEqual('text');
	});

	// OOO  N   N M   M  OOO  U   U  SSSS EEEEE  OOO  U   U TTTTT
	//O   O NN  N MM MM O   O U   U S     E     O   O U   U   T
	//O   O N N N M M M O   O U   U  SSS  EEE   O   O U   U   T
	//O   O N  NN M   M O   O U   U     S E     O   O U   U   T
	// OOO  N   N M   M  OOO   UUU  SSSS  EEEEE  OOO   UUU    T

	it('Debe cambiar el tipo del componente "input" a contraseña otra vez [onMouseLeave].', () => {
		//Simulación.
		svgButton.simulate('mouseleave', {});
		//Expectativa.
		expect(input.instance().type).toEqual('password');
    });
    
    //M   M  OOO  V   V IIIII L
    //MM MM O   O V   V   I   L
    //M M M O   O V   V   I   L
    //M   M O   O  V V    I   L
    //M   M  OOO    V   IIIII LLLLL

    // OOO  N   N TTTTT  OOO  U   U  CCCC H   H  SSSS TTTTT  AAA  RRRR  TTTTT
    //O   O NN  N   T   O   O U   U C     H   H S       T   A   A R   R   T
    //O   O N N N   T   O   O U   U C     HHHHH  SSS    T   AAAAA RRRR    T
    //O   O N  NN   T   O   O U   U C     H   H     S   T   A   A R   R   T
    // OOO  N   N   T    OOO   UUU   CCCC H   H SSSS    T   A   A R   R   T

	it('Debe cambiar el tipo del componente "input" a texto [onTouchStart].', () => {
		//Simulación.
		svgButton.simulate('touchstart', {});
		//Expectativa #2.
		expect(input.instance().type).toEqual('text');
	});

    // OOO  N   N TTTTT  OOO  U   U  CCCC H   H EEEEE N   N DDDD
    //O   O NN  N   T   O   O U   U C     H   H E     NN  N D   D
    //O   O N N N   T   O   O U   U C     HHHHH EEE   N N N D   D
    //O   O N  NN   T   O   O U   U C     H   H E     N  NN D   D
    // OOO  N   N   T    OOO   UUU   CCCC H   H EEEEE N   N DDDD

	it('Debe cambiar el tipo del componente "input" a contraseña otra vez [onTouchEnd].', () => {
		//Simulación.
		svgButton.simulate('touchend', {});
		//Expectativa.
		expect(input.instance().type).toEqual('password');
    });
});

//Flujo #6 (Mostrar/Ocultar Contraseña)(Deshabilitado).
describe("[FLUJO][Componentes][Common][BasicTextBox] - Validar el flujo de mostrar / ocultar contraseña (deshabilitado).", () => {
	//Eventos (por pasos):
	//1. onMouseDown - para mostrar la contraseña.
	//2. onMouseUp   - para ocultarla.
	//3. onMouseDown - para volver a mostrarla.
	//4. onMouseOut  - para ocultarla nuevamente.
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Contraseña',
        error: 'El campo es requerido.',
        maxLength: 50,
        //Opcionales.
        disabled: true,
        id: 'pwd',
        inputType: 'password',
        valueType: 'text',
        //Validación.
        isRequired: true,
        validRegEx: '',
        //Funciones.
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
	//NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    let input = component.find('input[type="password"]');
    let svgButton = component.find('svg');
    //Expectativas.
    it('Se revisa que el tipo el "input" sea contraseña.', () => {
        expect(input.instance().type).toEqual('password');
    });
    it('Se revisa que exista 1 objeto tipo "input".', () => {
		expect(svgButton).toHaveLength(1);
		expect(svgButton.props().disabled).toBe(true);
	});
});

//Flujo #7 (Completo con referencias nulas a las funciones).
describe("[FLUJO][Componentes][Common][BasicTextBox] - No se valida el campo, sólo se completa (referencias nulas).", () => {
	//Eventos (por pasos):
	//1. componentDidMount
	//2. componentWillReceiveProps
	//3. onFocus
    //4. onChange
    //5. onKeyPress
	//6. onBlur
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Estado: normal',
        error: '',
        maxLength: 100,
        //Opcionales.
        disabled: false,
        id: 'comments',
        inputType: 'text',
        valueType: 'text',
        //Validación.
        isRequired: false,
        validRegEx: '',
        //Funciones.
        //onChange: handleOnChange,
        //onFocus: handleOnFocus,
        //onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función "mount" se detona las siguientes funciones: constructor, componentDidMount y render.
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    const input = component.find('input[type="text"]');

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
		expect(component.state().text).toEqual('');
		expect(input.instance().value).toEqual('');
	});

	// OOO  N   N FFFFF  OOO   CCCC U   U  SSSS
	//O   O NN  N F     O   O C     U   U S
	//O   O N N N FFF   O   O C     U   U  SSS
	//O   O N  NN F     O   O C     U   U     S
	// OOO  N   N F      OOO   CCCC  UUU  SSSS

	//Al seleccionar el control se detonan una serie de cambios estéticos.
	//NOTA: los estilos cambian desde el archivo CSS (p. ej.: .occ-textbox:focus).
	it('NO debe mandar llamar la función "onFocus" que se pasa como propiedad [VACÍO].', () => {
		//Simulación.
		input.simulate('focus');
		//Expectativa.
		expect(handleOnFocus).not.toHaveBeenCalled();
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	//Se cambia el texto.
	it('Debe modificar el texto dentro del control y no mandar llamar la función "onChange" [CON UN VALOR X].', () => {
		//Simulación.
        input.instance().value = 'Un comentario X.';
        input.simulate('change');
		//Expectativas.
		expect(handleOnChange).not.toHaveBeenCalled();
		expect(component.state().text).toEqual('Un comentario X.');
		expect(input.instance().value).toEqual('Un comentario X.');
    });
    
	// OOO  N   N K   K EEEEE Y   Y PPPP  RRRR  EEEEE  SSSS  SSSS
	//O   O NN  N K  K  E      Y Y  P   P R   R E     S     S
	//O   O N N N KKK   EEE     Y   PPPP  RRRR  EEE    SSS   SSS
	//O   O N  NN K  K  E       Y   P     R   R E         S     S
	// OOO  N   N K   K EEEEE  YYY  P     R   R EEEEE SSSS  SSSS

	it('Debe realizar 2 llamadas al método "onKeyPress" con una tecla válida y otra no.', () => {
		//Simulación #1 (ACEPTADA).
        input.simulate('keypress', { which: 65 });
		//Expectativa.
        expect(handleOnKeyPress).not.toHaveBeenCalled();
	});

	// OOO  N   N BBBB  L     U   U RRRR
	//O   O NN  N B   B L     U   U R   R
	//O   O N N N BBBB  L     U   U RRRR
	//O   O N  NN B   B L     U   U R   R
	// OOO  N   N BBBB  LLLLL  UUU  R   R

	it('Debe quitar la selección del control y evaluar el valor dentro de este [CON UN VALOR X].', () => {
		//Simulación.
		input.simulate('blur');
		//Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(true);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
	});
});

//Flujo #8 + Métodos (Calendario)(Habilitado / Deshabilitado).
describe("[FLUJO][Componentes][Common][BasicTextBox] - Validar el flujo de mostrar calendario / seleccionar fecha (habilitado / deshabilitado).", () => {
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Fecha',
        error: 'El campo es requerido.',
        maxLength: 50,
        //Opcionales.
        disabled: false,
        id: 'date',
        inputType: 'date',
        valueType: 'text',
        //Validación.
        isRequired: true,
		validRegEx: '',
		//Tipo: Fecha.
		language: 'es-MX',
		minDate: '08/10/2018',
		dateFormat: 'dd/mm/yyyy',
        //Funciones.
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
	//NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    let input = component.find('input[type="text"]');
	let svgButton = component.find('svg');
	let calendar;
    //Expectativas.
    it('Se revisa que el tipo el "input" sea texto.', () => {
        expect(input.instance().type).toEqual('text');
    });
    it('Se revisa que exista 1 objeto tipo "input".', () => {
		expect(svgButton).toHaveLength(1);
		expect(svgButton.props().disabled).toBe(false);
	});
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT W   W IIIII L     L     RRRR  EEEEE  CCCC EEEEE IIIII V   V EEEEE PPPP  RRRR   OOO  PPPP   SSSS
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   W   W   I   L     L     R   R E     C     E       I   V   V E     P   P R   R O   O P   P S
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   W W W   I   L     L     RRRR  EEE   C     EEE     I   V   V EEE   PPPP  RRRR  O   O PPPP   SSS
	//C     O   O M   M P     O   O N  NN E     N  NN   T   WW WW   I   L     L     R   R E     C     E       I    V V  E     P     R   R O   O P         S
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   W   W IIIII LLLLL LLLLL R   R EEEEE  CCCC EEEEE IIIII   V   EEEEE P     R   R  OOO  P     SSSS

	it('Se modifica el estado del componente a "deshabilitado".', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ disabled: true });
	});
	it('Se modifica el tipo de input y el estado debe cambiar.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ inputType: 'text' });
		//Expectativas.
		expect(component.state().inputType).toEqual('text');
		input = component.find('input[type="text"]');
		expect(input).toHaveLength(1);
	});
	it('Se regresan las propiedades a sus valores originales.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ disabled: false, inputType: 'date' });
		//Expectativas.
		expect(component.state().inputType).toEqual('text');
		input = component.find('input[type="text"]');
		expect(input).toHaveLength(1);
	});

	//EEEEE N   N  AAA  BBBB  L     EEEEE DDDD
	//E     NN  N A   A B   B L     E     D   D
	//EEE   N N N AAAAA BBBB  L     EEE   D   D
	//E     N  NN A   A B   B L     E     D   D
	//EEEEE N   N A   A BBBB  LLLLL EEEEE DDDD
	
	// OOO  N   N  CCCC L     IIIII  CCCC K   K
	//O   O NN  N C     L       I   C     K  K
	//O   O N N N C     L       I   C     KKK
	//O   O N  NN C     L       I   C     K  K
	// OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

	it('Debe mostrar el calendario.', () => {
		//Simulación.
		svgButton.simulate('click', {});
		//Expectativa #2.
		calendar = component.find('Calendar');
		expect(calendar).toHaveLength(1);
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	it('Debe cambiar el texto y el valor del estado al seleccionar una fecha.', () => {
		//Simulación.
		let date = new Date('08/15/2018');
		//calendar.simulate('change', date);
		calendar.props().onChange(date);
		//Expectativa.
		expect(component.state().text).toEqual('15/08/2018');
		expect(input.instance().value).toEqual('15/08/2018');
        expect(handleOnChange).toHaveBeenCalled();
	});
	
    //V   V  AAA  L     IIIII DDDD   AAA   CCCC IIIII  OOO  N   N
    //V   V A   A L       I   D   D A   A C       I   O   O NN  N
    //V   V AAAAA L       I   D   D AAAAA C       I   O   O N N N
    // V V  A   A L       I   D   D A   A C       I   O   O N  NN
    //  V   A   A LLLLL IIIII DDDD  A   A  CCCC IIIII  OOO  N   N

    it('Debe validar la información dentro del componente, en éste caso estará sólo "completo".', () => {
        //Simulación.
        component.instance().validate();
        //Expectativas.
        expect(component.state().correct).toBe(true);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
    });
    
    //RRRR  EEEEE IIIII N   N IIIII  CCCC IIIII  AAA  RRRR
    //R   R E       I   NN  N   I   C       I   A   A R   R
    //RRRR  EEE     I   N N N   I   C       I   AAAAA RRRR
    //R   R E       I   N  NN   I   C       I   A   A R   R
    //R   R EEEEE IIIII N   N IIIII  CCCC IIIII A   A R   R

    it('Debe regresar el componente a su estado inicial.', () => {
        //Simulación.
        component.instance().reset();
        //Expectativas.
        /*
        correct: false,
        complete: false,
        errors: {
            isEmpty: false,
            invalidRegEx: false,
            error: false,
            errorMessage: ''
        },
        text: ''
        */
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
		expect(component.state().errors.errorMessage).toEqual('');
		expect(component.state().inputType).toEqual('text');
        expect(component.state().text).toEqual('');
        expect(input.instance().value).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
    });
});

//Flujo #9 (Calendario)(Con referencias nulas a las funciones).
describe("[FLUJO][Componentes][Common][BasicTextBox] - Validar el flujo de mostrar calendario / seleccionar fecha (habilitado / deshabilitado).", () => {
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Fecha',
        error: 'El campo es requerido.',
        maxLength: 50,
        //Opcionales.
        disabled: false,
        id: 'date',
        inputType: 'date',
        valueType: 'text',
        //Validación.
        isRequired: true,
		validRegEx: '',
		//Tipo: Fecha.
		language: 'es-MX',
		minDate: '08/10/2018',
		dateFormat: 'dd/mm/yyyy',
        //Funciones.
        //onChange: handleOnChange,
        //onFocus: handleOnFocus,
        //onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
	//NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    let input = component.find('input[type="text"]');
	let svgButton = component.find('svg');
	let calendar;
    //Expectativas.
    it('Se revisa que el tipo el "input" sea texto.', () => {
        expect(input.instance().type).toEqual('text');
    });
    it('Se revisa que exista 1 objeto tipo "input".', () => {
		expect(svgButton).toHaveLength(1);
		expect(svgButton.props().disabled).toBe(false);
	});
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT W   W IIIII L     L     RRRR  EEEEE  CCCC EEEEE IIIII V   V EEEEE PPPP  RRRR   OOO  PPPP   SSSS
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   W   W   I   L     L     R   R E     C     E       I   V   V E     P   P R   R O   O P   P S
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   W W W   I   L     L     RRRR  EEE   C     EEE     I   V   V EEE   PPPP  RRRR  O   O PPPP   SSS
	//C     O   O M   M P     O   O N  NN E     N  NN   T   WW WW   I   L     L     R   R E     C     E       I    V V  E     P     R   R O   O P         S
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   W   W IIIII LLLLL LLLLL R   R EEEEE  CCCC EEEEE IIIII   V   EEEEE P     R   R  OOO  P     SSSS

	it('Se modifica el estado del componente a "deshabilitado".', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ disabled: true });
	});
	it('Se modifica el tipo de input y el estado debe cambiar.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ inputType: 'text' });
		//Expectativas.
		expect(component.state().inputType).toEqual('text');
		input = component.find('input[type="text"]');
		expect(input).toHaveLength(1);
	});
	it('Se regresan las propiedades a sus valores originales.', () => {
		//Se cambian las propiedades configuradas.
		component.setProps({ disabled: false, inputType: 'date' });
		//Expectativas.
		expect(component.state().inputType).toEqual('text');
		input = component.find('input[type="text"]');
		expect(input).toHaveLength(1);
	});

	//EEEEE N   N  AAA  BBBB  L     EEEEE DDDD
	//E     NN  N A   A B   B L     E     D   D
	//EEE   N N N AAAAA BBBB  L     EEE   D   D
	//E     N  NN A   A B   B L     E     D   D
	//EEEEE N   N A   A BBBB  LLLLL EEEEE DDDD
	
	// OOO  N   N  CCCC L     IIIII  CCCC K   K
	//O   O NN  N C     L       I   C     K  K
	//O   O N N N C     L       I   C     KKK
	//O   O N  NN C     L       I   C     K  K
	// OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

	it('Debe mostrar el calendario.', () => {
		//Simulación.
		svgButton.simulate('click', {});
		//Expectativa #2.
		calendar = component.find('Calendar');
		expect(calendar).toHaveLength(1);
	});

	// OOO  N   N  CCCC H   H  AAA  N   N  GGGG EEEEE
	//O   O NN  N C     H   H A   A NN  N G     E
	//O   O N N N C     HHHHH AAAAA N N N G  GG EEE
	//O   O N  NN C     H   H A   A N  NN G   G E
	// OOO  N   N  CCCC H   H A   A N   N  GGGG EEEEE

	it('Debe cambiar el texto y el valor del estado al seleccionar una fecha.', () => {
		//Simulación.
		let date = new Date('08/15/2018');
		//calendar.simulate('change', date);
		calendar.props().onChange(date);
		//Expectativa.
		expect(component.state().text).toEqual('15/08/2018');
		expect(input.instance().value).toEqual('15/08/2018');
        expect(handleOnChange).not.toHaveBeenCalled();
	});
});

//Métodos.
describe("[MÉTODOS][Componentes][Common][BasicTextBox] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Funciones 'dummy'.
	const handleOnChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	const handleOnFocus = jest.fn(() => {
		//Nada que hacer aquí.
	});
	const handleOnKeyPress = jest.fn(event => {
		//Nada que hacer aquí.
	});
    //Propiedades.		
    const textboxProps = {
        //Obligatorios.
        title: 'Métodos',
        error: 'Error genérico.',
        maxLength: 50,
        //Opcionales.
        disabled: false,
        id: 'methods',
        inputType: 'text',
        valueType: 'text',
        //Validación.
        isRequired: false,
        validRegEx: '',
        //Funciones.
        onChange: handleOnChange,
        //onFocus: handleOnFocus,
        onKeyPress: handleOnKeyPress
    };
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
	//NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
	const component = enzyme.mount(<BasicTextBox {...textboxProps}/>);
    const input = component.find('input[type="text"]');
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté vacía.', () => {
		//Expectativas.
		expect(component.state().text).toEqual('');
		expect(input.instance().value).toEqual('');
	});

    //EEEEE RRRR  RRRR   OOO  RRRR
    //E     R   R R   R O   O R   R
    //EEE   RRRR  RRRR  O   O RRRR
    //E     R   R R   R O   O R   R
    //EEEEE R   R R   R  OOO  R   R

    it('Debe asignar un estado de error y el texto del mismo al componente.', () => {
        //Simulación.
        component.instance().setError('Error configurado por método.');
        //Expectativas.
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(true);
        expect(component.state().errors.errorMessage).toEqual('Error configurado por método.');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeTruthy();
    });
    
    //RRRR  EEEEE IIIII N   N IIIII  CCCC IIIII  AAA  RRRR
    //R   R E       I   NN  N   I   C       I   A   A R   R
    //RRRR  EEE     I   N N N   I   C       I   AAAAA RRRR
    //R   R E       I   N  NN   I   C       I   A   A R   R
    //R   R EEEEE IIIII N   N IIIII  CCCC IIIII A   A R   R

    it('Debe regresar el componente a su estado inicial.', () => {
        //Simulación.
        component.instance().reset();
        //Expectativas.
        /*
        correct: false,
        complete: false,
        errors: {
            isEmpty: false,
            invalidRegEx: false,
            error: false,
            errorMessage: ''
        },
        text: ''
        */
		expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(false);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
        expect(component.state().text).toEqual('');
        expect(input.instance().value).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
    });

    //V   V  AAA  L      OOO  RRRR
    //V   V A   A L     O   O R   R
    //V   V AAAAA L     O   O RRRR
    // V V  A   A L     O   O R   R
    //  V   A   A LLLLL  OOO  R   R

	it('Debe asignar el valor enviado en el control y en el estado.', () => {
		//Simulación.
		component.instance().setValue('Some text.');
		//Expectativa.
		expect(component.state().text).toEqual('Some text.');
        expect(input.instance().value).toEqual('Some text.');
    });
    it('Debe obtener el valor asignado al control.', () => {
        //Simulación.
        let value = component.instance().getValue();
        //Expectativa.
        expect(value).toBe('Some text.');
    });

    //V   V  AAA  L     IIIII DDDD   AAA   CCCC IIIII  OOO  N   N
    //V   V A   A L       I   D   D A   A C       I   O   O NN  N
    //V   V AAAAA L       I   D   D AAAAA C       I   O   O N N N
    // V V  A   A L       I   D   D A   A C       I   O   O N  NN
    //  V   A   A LLLLL IIIII DDDD  A   A  CCCC IIIII  OOO  N   N

    it('Debe validar la información dentro del componente, en éste caso estará sólo "completo".', () => {
        //Simulación.
        component.instance().validate();
        //Expectativas.
        expect(component.state().correct).toBe(false);
		expect(component.state().complete).toBe(true);
		expect(component.state().errors.isEmpty).toBe(false);
        expect(component.state().errors.invalidRegEx).toBe(false);
        expect(component.state().errors.error).toBe(false);
        expect(component.state().errors.errorMessage).toEqual('');
		//Se buscan todas las etiquetas dentro del control.
		expect(component.instance().ErrorRef).toBeFalsy();
    });
    
	//FFFFF  OOO   CCCC U   U  SSSS
	//F     O   O C     U   U S
	//FFF   O   O C     U   U  SSS
	//F     O   O C     U   U     S
	//F      OOO   CCCC  UUU  SSSS

    it('Debe enviar el "foco" al control input y no llamar al evento "handleOnFocus".', () => {
        //Simulaclión.
        component.instance().focus();
        //Expectativas.
        expect(handleOnFocus).not.toHaveBeenCalled();
    });
    //Se agrega la referencia ala función "onFocus".
    it('Debe enviar el "foco" al control input y llamar al evento "handleOnFocus".', () => {
        component.setProps({ onFocus: handleOnFocus });
        //Simulación.
        component.instance().focus();
        //Expectativas.
        expect(handleOnFocus).toHaveBeenCalled();
    });
});

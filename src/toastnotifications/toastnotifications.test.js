
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

import { ToastNotifiaction } from './toastnotifications';

//Snapshot #1 (Éxito).
describe('[SNAPSHOT][Componentes][Common][ToastNotifications] - Notificación (éxito).', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Tipo: Éxito)(Origen: abajo-izquierda).', () => {
		//Propiedades.		
        const notificactionProps = {
            //Obligatorios.
            notificationType: 'success',
            title: 'Notificación tipo "tostada".',
            //Opcionales.
            from: 'bottom',
            message: 'Si, es una notificación tipo "tostada".',
            side: 'left',
            timeout: 5
        };
        //Se crea el componente.
        const component = renderer.create(<ToastNotifiaction {...notificactionProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #2 (Error)(Con efecto "bouncing").
describe('[SNAPSHOT][Componentes][Common][ToastNotifications] - Notificación (error).', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Tipo: Error)(Origen: abajo-derecha).', () => {
		//Propiedades.		
        const notificactionProps = {
            //Obligatorios.
            notificationType: 'error',
            title: 'Notificación tipo "tostada".',
            //Opcionales.
            from: 'bottom',
            message: 'Si, es una notificación tipo "tostada".',
            showWithBounce: true,
            side: 'right',
            timeout: 5
        };
        //Se crea el componente.
        const component = renderer.create(<ToastNotifiaction {...notificactionProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #3 (Advertencia)(Sin mensaje).
describe('[SNAPSHOT][Componentes][Common][ToastNotifications] - Notificación (advertencia).', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Tipo: Advertencia)(Origen: arriba-izquierda).', () => {
		//Propiedades.		
        const notificactionProps = {
            //Obligatorios.
            notificationType: 'warning',
            title: 'Notificación tipo "tostada".',
            //Opcionales.
            from: 'top',
            //message: 'Si, es una notificación tipo "tostada".',
            side: 'left',
            timeout: 5
        };
        //Se crea el componente.
        const component = renderer.create(<ToastNotifiaction {...notificactionProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #4 (Información)(Con objeto por mensaje).
describe('[SNAPSHOT][Componentes][Common][ToastNotifications] - Notificación (información).', () => {
	//Tipo: Texto.
	it('Debe pintar el componente con los siguientes modificadores: (Tipo: Información)(Origen: arriba-derecha).', () => {
		//Propiedades.		
        const notificactionProps = {
            //Obligatorios.
            notificationType: 'information',
            title: 'Notificación tipo "tostada".',
            //Opcionales.
            from: 'top',
            message: <label>Si, es una notificación tipo "tostada".</label>,
            side: 'right',
            timeout: 5
        };
        //Se crea el componente.
        const component = renderer.create(<ToastNotifiaction {...notificactionProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo + Métodos #1 (Con efecto "bouncing").
describe('[FLUJO][Componentes][Common][ToastNotifications] - Se muestra la notificación y se debe ocultar automáticamente.', () => {
    //Propiedades.
    const notificactionProps = {
        //Obligatorios.
        notificationType: 'success',
        title: 'Notificación tipo "tostada".',
        //Opcionales.
        from: 'bottom',
        message: 'Si, es una notificación tipo "tostada".',
        showWithBounce: true,
        side: 'left',
        timeout: 3
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<ToastNotifiaction {...notificactionProps}/>);
    let button = component.find('button');
    it('Se revisa que exista 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });

    // SSSS H   H  OOO  W   W
    //S     H   H O   O W   W
    // SSS  HHHHH O   O W W W
    //    S H   H O   O WW WW
    //SSSS  H   H  OOO  W   W

	it('Debe mostrar la notificación.', () => {
		//Simulación.
		component.instance().show();
		//Expectativa.
        expect(component.state().show).toBe(true);
        expect(component.state().hide).toBe(false);
	});

    //H   H IIIII DDDD  EEEEE
    //H   H   I   D   D E
    //HHHHH   I   D   D EEE
    //H   H   I   D   D E
    //H   H IIIII DDDD  EEEEE

	//Se cambia el texto.
	it('Se espera a que la notificación se oculte por tiempo.', (done) => {
        //Simulación.
        setTimeout(() => {
            done();
            //Expectativa.
            expect(component.state().show).toBe(false);
            expect(component.state().hide).toBe(true);
        }, 4000);
	});
});

//Flujo + Métodos #2.
describe('[FLUJO][Componentes][Common][ToastNotifications] - Se muestra la notificación y se debe ocultar usando el botón dentro de la "tostada".', () => {
    //Propiedades.
    const notificactionProps = {
        //Obligatorios.
        notificationType: 'success',
        title: 'Notificación tipo "tostada".',
        //Opcionales.
        from: 'bottom',
        message: 'Si, es una notificación tipo "tostada".',
        side: 'left',
        timeout: 0
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<ToastNotifiaction {...notificactionProps}/>);
    let button = component.find('button');
    it('Se revisa que exista 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });

    // SSSS H   H  OOO  W   W
    //S     H   H O   O W   W
    // SSS  HHHHH O   O W W W
    //    S H   H O   O WW WW
    //SSSS  H   H  OOO  W   W

	it('Debe mostrar la notificación.', () => {
		//Simulación.
		component.instance().show();
		//Expectativa.
        expect(component.state().show).toBe(true);
        expect(component.state().hide).toBe(false);
	});

    //H   H IIIII DDDD  EEEEE
    //H   H   I   D   D E
    //HHHHH   I   D   D EEE
    //H   H   I   D   D E
    //H   H IIIII DDDD  EEEEE

	//Se cambia el texto.
	it('Se espera a que la notificación se oculte la presionar el botón dentro de la "tostada".', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toBe(false);
        expect(component.state().hide).toBe(true);
	});
});

//Flujo + Métodos #3.
describe('[FLUJO][Componentes][Common][ToastNotifications] - Se muestra la notificación y se debe ocultar usando el método expuesto.', () => {
    //Propiedades.
    const notificactionProps = {
        //Obligatorios.
        notificationType: 'success',
        title: 'Notificación tipo "tostada".',
        //Opcionales.
        from: 'bottom',
        message: 'Si, es una notificación tipo "tostada".',
        side: 'left',
        timeout: 0
    };
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<ToastNotifiaction {...notificactionProps}/>);
    let button = component.find('button');
    it('Se revisa que exista 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });

    // SSSS H   H  OOO  W   W
    //S     H   H O   O W   W
    // SSS  HHHHH O   O W W W
    //    S H   H O   O WW WW
    //SSSS  H   H  OOO  W   W

	it('Debe mostrar la notificación.', () => {
		//Simulación.
		component.instance().show();
		//Expectativa.
        expect(component.state().show).toBe(true);
        expect(component.state().hide).toBe(false);
	});

    //H   H IIIII DDDD  EEEEE
    //H   H   I   D   D E
    //HHHHH   I   D   D EEE
    //H   H   I   D   D E
    //H   H IIIII DDDD  EEEEE

	//Se cambia el texto.
	it('Se espera a que la notificación se oculte al hacer la llamada al método expuesto.', () => {
        //Simulación.
        component.instance().hide();
        //Expectativa.
        expect(component.state().show).toBe(false);
        expect(component.state().hide).toBe(true);
	});
});

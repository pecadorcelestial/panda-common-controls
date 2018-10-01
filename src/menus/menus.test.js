
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

import { MenuWithBlur } from './menus';

//Snapshots (MENÚ CON BLUR)(Tema: default).
describe('[SNAPSHOT][Componentes][Common][MenuWithBlur] - Menú con efecto "blur" sobre el contenido.', () => {
    it('Debe pintar correctamente el menú con las opciones configuradas.', () => {
        const options = [];
        options.push(<label>Inicio</label>);
        options.push(<label>Información de usuario</label>);
        options.push(<label>Storybook vol. 1</label>);
        options.push(<label>Storybook vol. 2</label>);
        options.push(<label>Storybook vol. 3</label>);
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<MenuWithBlur title='Title' options={options}>{child}</MenuWithBlur>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Snapshots (MENÚ CON BLUR)(Tema: IENTC... (¬_¬')).
describe('[SNAPSHOT][Componentes][Common][MenuWithBlur] - Menú con efecto "blur" y tema "IENTC" sobre el contenido.', () => {
    it('Debe pintar correctamente el menú con las opciones configuradas.', () => {
        const options = [];
        options.push(<label>Inicio</label>);
        options.push(<label>Información de usuario</label>);
        options.push(<label>Storybook vol. 1</label>);
        options.push(<label>Storybook vol. 2</label>);
        options.push(<label>Storybook vol. 3</label>);
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<MenuWithBlur title='Title' options={options} theme='ientc'>{child}</MenuWithBlur>).toJSON();
		expect(component).toMatchSnapshot();
    });
});

//Métodos.
describe("[MÉTODOS][Componentes][Common][MenuWithBlur] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
    //NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
    const options = [];
    options.push(<label>Inicio</label>);
    options.push(<label>Información de usuario</label>);
    options.push(<label>Storybook vol. 1</label>);
    options.push(<label>Storybook vol. 2</label>);
    options.push(<label>Storybook vol. 3</label>);
    const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
    const component = enzyme.mount(<MenuWithBlur title='Title' options={options}>{child}</MenuWithBlur>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	it('Se verifica que la información inicial sea correcta.', () => {
		//Expectativas.
        expect(component.state().show).toBe(false);
        expect(component.state().hide).toBe(false);
	});

    // SSSS H   H  OOO  W   W
    //S     H   H O   O W   W
    // SSS  HHHHH O   O W W W
    //    S H   H O   O WW WW
    //SSSS  H   H  OOO  W   W

    it('Debe detonar la animación de entrada.', () => {
        //Simulación.
        component.instance().show();
        //Expectativas.
		expect(component.state().show).toBe(true);
        expect(component.state().hide).toBe(false);
    });

    //H   H IIIII DDDD  EEEEE
    //H   H   I   D   D E
    //HHHHH   I   D   D EEE
    //H   H   I   D   D E
    //H   H IIIII DDDD  EEEEE

    it('Debe detonar la animación de salida.', (done) => {
        //Simulación.
        component.instance().hide();
        //Expectativas.
        setTimeout(() => {
            done();
            //Expectativa.
            expect(component.state().show).toBe(false);
            expect(component.state().hide).toBe(true);
        }, 1500);
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

//Eventos (clics).
describe("[MÉTODOS][Componentes][Common][MenuWithBlur] - Valida los eventos dentro del componente.", () => {
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
    //NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
    const options = [];
    options.push(<label>Inicio</label>);
    options.push(<label>Información de usuario</label>);
    options.push(<label>Storybook vol. 1</label>);
    options.push(<label>Storybook vol. 2</label>);
    options.push(<label>Storybook vol. 3</label>);
    const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
	//Se crea el componente.
    //NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const dummyPage = <div><button type='button' id='btn-anchor'/><MenuWithBlur title='Title' options={options}>{child}</MenuWithBlur></div>;
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

    it('Se revisa que exista 1 objeto tipo "button" y un objeto tipo "MenuWithBlur".', () => {
        let outsideButton = component.find('#btn-anchor');
        let menu = component.find('MenuWithBlur');
        //let insideButton = component.find('#btn-menu-options');
        let insideButton = component.find('#btn-menu-options').hostNodes();
        expect(outsideButton).toHaveLength(1);
        expect(menu).toHaveLength(1);
        expect(insideButton).toHaveLength(1);
    });
	it('Debe mostrar el componente, intentarlo nuevamente y ajustar el tamaño y la posición del documento.', () => {
        //Variables.
        let outsideButton = component.find('#btn-anchor');
        let menu = component.find('MenuWithBlur');
        let insideButton = component.find('#btn-menu-options').hostNodes();
        let label = component.find('label').first();
        
        // SSSS H   H  OOO  W   W
        //S     H   H O   O W   W
        // SSS  HHHHH O   O W W W
        //    S H   H O   O WW WW
        //SSSS  H   H  OOO  W   W
        /*
		//Simulación.
        menu.instance().show();
		//Expectativa.
        expect(menu.instance().state.show).toBe(true);
        expect(menu.instance().state.hide).toBe(false);
        */

        // CCCC L     IIIII  CCCC K   K
        //C     L       I   C     K  K
        //C     L       I   C     KKK
        //C     L       I   C     K  K
        // CCCC LLLLL IIIII  CCCC K   K

        //Simulación.
        insideButton.simulate('click', {});
		//Expectativa.
        expect(menu.instance().state.show).toBe(true);
        expect(menu.instance().state.hide).toBe(false);

        //M   M  OOO  U   U  SSSS EEEEE DDDD   OOO  W   W N   N
        //MM MM O   O U   U S     E     D   D O   O W   W NN  N
        //M M M O   O U   U  SSS  EEE   D   D O   O W W W N N N
        //M   M O   O U   U     S E     D   D O   O WW WW N  NN
        //M   M  OOO   UUU  SSSS  EEEEE DDDD   OOO  W   W N   N
        
        //1ro. Se hace click en el mismo componente.
        let event = {
            target: insideButton.instance()
        }
        menu.instance().handleMouseDown(event);
		//Expectativa.
        //expect(menu.instance().state.show).toBe(true);
        //expect(menu.instance().state.hide).toBe(false);
        //2do. Se hace click fuera del componente para cerrarlo.
        event = {
            target: outsideButton.instance()
        }
        menu.instance().handleMouseDown(event);
		//Expectativa.
        //expect(menu.instance().state.show).toBe(false);
        //expect(menu.instance().state.hide).toBe(true);

        //H   H IIIII DDDD  EEEEE
        //H   H   I   D   D E
        //HHHHH   I   D   D EEE
        //H   H   I   D   D E
        //H   H IIIII DDDD  EEEEE
        
        //Al emular un click fuera del componente, la función para ocultarlo se manda llamar.

        // OOO  PPPP   CCCC IIIII  OOO  N   N
        //O   O P   P C       I   O   O NN  N
        //O   O PPPP  C       I   O   O N N N
        //O   O P     C       I   O   O N  NN
        // OOO  P      CCCC IIIII  OOO  N   N

        //Simulación
        label.simulate('click', {});
		//Expectativa.
        //expect(menu.instance().state.show).toBe(false);
        //expect(menu.instance().state.hide).toBe(true);
	});
});
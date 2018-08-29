
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

import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from './modals';

//Snapshot #1.
describe('[SNAPSHOT][Componentes][Common][Modal] - Modal (normal).', () => {
	//Tipo: Normal.
	it('Debe pintar el componente correctamente.', () => {
        //Se crea el componente.
        const modal = <Modal>
            <ModalHeader>
                <ModalTitle>Título del modal</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <label>Cuerpo del modal</label>
            </ModalBody>
            <ModalFooter>
                <label>&#9400; Panda Corp. all rights reserved.</label>
            </ModalFooter>
        </Modal>;
        const component = renderer.create(modal).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo + Métodos #1.
describe('[FLUJO][Componentes][Common][Modal] - Se muestra la ventana modal y se debe ocultar usando el botón dentro del mismo.', () => {
    //Se crea el componente.
    //NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const modal = <Modal>
            <ModalHeader>
                <ModalTitle>Título del modal</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <label>Cuerpo del modal</label>
            </ModalBody>
            <ModalFooter>
                <label>&#9400; Panda Corp. all rights reserved.</label>
            </ModalFooter>
        </Modal>;
    const component = enzyme.mount(modal);
    let button = component.find('button');
    it('Se revisa que exista 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });

    // SSSS H   H  OOO  W   W
    //S     H   H O   O W   W
    // SSS  HHHHH O   O W W W
    //    S H   H O   O WW WW
    //SSSS  H   H  OOO  W   W

	it('Debe mostrar la ventana modal.', () => {
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
	it('Se espera a que la ventana modal se oculte la presionar el botón dentro.', () => {
        //Simulación.
        button.simulate('click', {});
        //Expectativa.
        expect(component.state().show).toBe(false);
        expect(component.state().hide).toBe(true);
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

//Flujo + Métodos #2.
describe('[FLUJO][Componentes][Common][Modal] - Se muestra la ventana modal y se debe ocultar usando el método expuesto.', () => {
    //Se crea el componente.
    //NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const modal = <Modal>
            <ModalHeader>
                <ModalTitle>Título del modal</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <label>Cuerpo del modal</label>
            </ModalBody>
            <ModalFooter>
                <label>&#9400; Panda Corp. all rights reserved.</label>
            </ModalFooter>
        </Modal>;
    const component = enzyme.mount(modal);
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
	it('Se espera a que la notificación se oculte al hacer la llamada al método expuesto.', (done) => {
        //Simulación.
        component.instance().hide();
        //Expectativa.
        expect(component.state().show).toBe(false);
        expect(component.state().hide).toBe(true);
        setTimeout(() => {
            done();
            expect(component.state().lock).toBe(false);
        }, 700);
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

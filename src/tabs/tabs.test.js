
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

import { Tabs } from './tabs';

//Snapshot #1.
describe('[SNAPSHOT][Componentes][Common][Tabs] - Pestañas.', () => {
    //Tema: "red".
	it('Debe pintar el componente con 3 pestañas correctamente (Tema: "red").', () => {
        //Valores.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Se crea el componente.
        const component = renderer.create(<Tabs tabs={tabs} theme='red'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: "blue".
	it('Debe pintar el componente con 3 pestañas correctamente (Tema: "blue").', () => {
        //Valores.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Se crea el componente.
        const component = renderer.create(<Tabs tabs={tabs} theme='blue'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: "green".
	it('Debe pintar el componente con 3 pestañas correctamente (Tema: "green").', () => {
        //Valores.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Se crea el componente.
        const component = renderer.create(<Tabs tabs={tabs} theme='green'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: "yellow".
	it('Debe pintar el componente con 3 pestañas correctamente (Tema: "yellow").', () => {
        //Valores.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Se crea el componente.
        const component = renderer.create(<Tabs tabs={tabs} theme='yellow'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: "gray".
	it('Debe pintar el componente con 3 pestañas correctamente (Tema: "gray").', () => {
        //Valores.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Se crea el componente.
        const component = renderer.create(<Tabs tabs={tabs} theme='gray'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: "orange".
	it('Debe pintar el componente con 3 pestañas correctamente (Tema: "orange").', () => {
        //Valores.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Se crea el componente.
        const component = renderer.create(<Tabs tabs={tabs} theme='orange'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: "black".
	it('Debe pintar el componente con 3 pestañas correctamente (Tema: "black").', () => {
        //Valores.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Se crea el componente.
        const component = renderer.create(<Tabs tabs={tabs} theme='black'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //Tema: "IENTC".
	it('Debe pintar el componente con 3 pestañas correctamente (Tema: "IENTC").', () => {
        //Valores.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Se crea el componente.
        const component = renderer.create(<Tabs tabs={[]} theme='IENTC'/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo #1 (con función no definida).
describe('[FLUJO][Componentes][Common][Tabs] - Se realiza el cambio de pestaña (con función no definida).', () => {
    //Valores.
    let tabs = [
        {
            id: 'tab-1',
            title: 'Tab #1',
            icon: 'brandWhatsappSquare',
            content: <div>Whatsapp</div>
        },
        {
            id: 'tab-2',
            title: 'Tab #2',
            icon: 'brandFacebookSquare',
            content: <div>Facebook</div>
        },
        {
            id: 'tab-3',
            title: 'Tab #3',
            icon: 'brandReact',
            content: <div>React</div>
        }
    ];    
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Tabs tabs={tabs} theme='red'/>);
    let button = component.find('button');
    it('Se revisa que existan 3 objetos tipo "button".', () => {
        expect(button).toHaveLength(3);
    });

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().activeTab).toEqual('tab-1');
	});

    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

	//Se cambia el texto.
	it('La pestaña seleccionada debe cambiar.', () => {
        //Simulación.
        button.at(1).simulate('click', {});
        //Expectativa.
        expect(component.state().activeTab).toEqual('tab-2');
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

//Flujo #1 (con función definida).
describe('[FLUJO][Componentes][Common][Tabs] - Se realiza el cambio de pestaña (con función definida).', () => {
    //Valores.
    let tabs = [
        {
            id: 'tab-1',
            title: 'Tab #1',
            icon: 'brandWhatsappSquare',
            content: <div>Whatsapp</div>
        },
        {
            id: 'tab-2',
            title: 'Tab #2',
            icon: 'brandFacebookSquare',
            content: <div>Facebook</div>
        },
        {
            id: 'tab-3',
            title: 'Tab #3',
            icon: 'brandReact',
            content: <div>React</div>
        }
    ];
    //Funciones 'dummy'.
	const handleOnTabChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Tabs tabs={tabs} theme='red' onTabChange={handleOnTabChange}/>);
    let button = component.find('button');
    it('Se revisa que existan 3 objetos tipo "button".', () => {
        expect(button).toHaveLength(3);
    });

	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().activeTab).toEqual('tab-1');
	});

    // OOO  N   N  CCCC L     IIIII  CCCC K   K
    //O   O NN  N C     L       I   C     K  K
    //O   O N N N C     L       I   C     KKK
    //O   O N  NN C     L       I   C     K  K
    // OOO  N   N  CCCC LLLLL IIIII  CCCC K   K

	//Se cambia el texto.
	it('La pestaña seleccionada debe cambiar.', () => {
        //Simulación.
        button.at(1).simulate('click', {});
        //Expectativa.
        expect(component.state().activeTab).toEqual('tab-2');
        expect(handleOnTabChange).toHaveBeenCalled();
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

//Métodos (con identificador numérico).
describe('[FLUJO][Componentes][Common][Tabs] - Se cambia y consulta la pestaña seleccionada(con identificador numérico).', () => {
    //Valores.
    let tabs = [
        {
            id: 'tab-1',
            title: 'Tab #1',
            icon: 'brandWhatsappSquare',
            content: <div>Whatsapp</div>
        },
        {
            id: 'tab-2',
            title: 'Tab #2',
            icon: 'brandFacebookSquare',
            content: <div>Facebook</div>
        },
        {
            id: 'tab-3',
            title: 'Tab #3',
            icon: 'brandReact',
            content: <div>React</div>
        }
    ];
    //Funciones 'dummy'.
	const handleOnTabChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Tabs tabs={tabs} theme='red' onTabChange={handleOnTabChange}/>);
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().activeTab).toEqual('tab-1');
	});

    // SSSS EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //S     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    // SSS  EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //    S E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    //SSSS  EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('La pestaña seleccionada debe cambiar.', () => {
        //Simulación.
		component.instance().setSelectedTab(1);
		//Expectativa.
        expect(component.state().activeTab).toEqual('tab-2');
    });
    
    // GGGG EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //G     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    //G  GG EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //G   G E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    // GGGG EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('Debe devolver el índice de la pestaña seleccionada.', () => {
        //Simulación.
		let activeTab = component.instance().getSelectedTab();
		//Expectativa.
        expect(activeTab).toEqual(1);
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

//Métodos (con identificador alfa-numérico).
describe('[FLUJO][Componentes][Common][Tabs] - Se cambia y consulta la pestaña seleccionada (con identificador alfa-numérico).', () => {
    //Valores.
    let tabs = [
        {
            id: 'tab-1',
            title: 'Tab #1',
            icon: 'brandWhatsappSquare',
            content: <div>Whatsapp</div>
        },
        {
            id: 'tab-2',
            title: 'Tab #2',
            icon: 'brandFacebookSquare',
            content: <div>Facebook</div>
        },
        {
            id: 'tab-3',
            title: 'Tab #3',
            icon: 'brandReact',
            content: <div>React</div>
        }
    ];
    //Funciones 'dummy'.
	const handleOnTabChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Tabs tabs={tabs} theme='red' onTabChange={handleOnTabChange}/>);
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().activeTab).toEqual('tab-1');
	});

    // SSSS EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //S     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    // SSS  EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //    S E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    //SSSS  EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('La pestaña seleccionada debe cambiar.', () => {
        //Simulación.
		component.instance().setSelectedTab('tab-2');
		//Expectativa.
        expect(component.state().activeTab).toEqual('tab-2');
    });
    
    // GGGG EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //G     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    //G  GG EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //G   G E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    // GGGG EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('Debe devolver el índice de la pestaña seleccionada.', () => {
        //Simulación.
		let activeTab = component.instance().getSelectedTab();
		//Expectativa.
        expect(activeTab).toEqual(1);
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

//Métodos (con identificador ^[numérico | alfa-numérico]).
describe('[FLUJO][Componentes][Common][Tabs] - Se cambia y consulta la pestaña seleccionada(con identificador ^[numérico | alfa-numérico]).', () => {
    //Valores.
    let tabs = [
        {
            id: 'tab-1',
            title: 'Tab #1',
            icon: 'brandWhatsappSquare',
            content: <div>Whatsapp</div>
        },
        {
            id: 'tab-2',
            title: 'Tab #2',
            icon: 'brandFacebookSquare',
            content: <div>Facebook</div>
        },
        {
            id: 'tab-3',
            title: 'Tab #3',
            icon: 'brandReact',
            content: <div>React</div>
        }
    ];
    //Funciones 'dummy'.
	const handleOnTabChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Tabs tabs={tabs} theme='red' onTabChange={handleOnTabChange}/>);
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().activeTab).toEqual('tab-1');
	});

    // SSSS EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //S     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    // SSS  EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //    S E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    //SSSS  EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('La pestaña seleccionada debe cambiar.', () => {
        //Simulación.
		component.instance().setSelectedTab(true);
		//Expectativa.
        expect(component.state().activeTab).toEqual('tab-1');
    });
    
    // GGGG EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //G     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    //G  GG EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //G   G E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    // GGGG EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('Debe devolver el índice de la pestaña seleccionada.', () => {
        //Simulación.
		let activeTab = component.instance().getSelectedTab();
		//Expectativa.
        expect(activeTab).toEqual(0);
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

//Métodos (sin pestañas) (con identificador numérico).
describe('[FLUJO][Componentes][Common][Tabs] - Se cambia y consulta la pestaña seleccionada (sin pestañas) (con identificador numérico).', () => {
    //Funciones 'dummy'.
	const handleOnTabChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Tabs tabs={[]} theme='red' onTabChange={handleOnTabChange}/>);
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().activeTab).toEqual('');
	});

    // SSSS EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //S     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    // SSS  EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //    S E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    //SSSS  EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('La pestaña seleccionada debe cambiar.', () => {
        //Simulación.
		component.instance().setSelectedTab(1);
		//Expectativa.
        expect(component.state().activeTab).toEqual('');
    });
    
    // GGGG EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //G     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    //G  GG EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //G   G E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    // GGGG EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('Debe devolver el índice de la pestaña seleccionada.', () => {
        //Simulación.
		let activeTab = component.instance().getSelectedTab();
		//Expectativa.
        expect(activeTab).toEqual(-1);
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

//Métodos (sin pestañas) (con identificador alfa-numérico).
describe('[FLUJO][Componentes][Common][Tabs] - Se cambia y consulta la pestaña seleccionada (sin pestañas) (con identificador alfa-numérico).', () => {
    //Valores.
    let tabs = [
        {
            id: 'tab-1',
            title: 'Tab #1',
            icon: 'brandWhatsappSquare',
            content: <div>Whatsapp</div>
        },
        {
            id: 'tab-2',
            title: 'Tab #2',
            icon: 'brandFacebookSquare',
            content: <div>Facebook</div>
        },
        {
            id: 'tab-3',
            title: 'Tab #3',
            icon: 'brandReact',
            content: <div>React</div>
        }
    ];
    //Funciones 'dummy'.
	const handleOnTabChange = jest.fn(event => {
		//Nada que hacer aquí.
	});
	//Se crea el componente.
	//NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const component = enzyme.mount(<Tabs tabs={[]} theme='red' onTabChange={handleOnTabChange}/>);
    
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial esté correcta.', () => {
		//Expectativas.
		expect(component.state().activeTab).toEqual('');
	});

    // SSSS EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //S     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    // SSS  EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //    S E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    //SSSS  EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('La pestaña seleccionada debe cambiar.', () => {
        //Simulación.
		component.instance().setSelectedTab('tab-2');
		//Expectativa.
        expect(component.state().activeTab).toEqual('');
    });
    
    // GGGG EEEEE TTTTT  SSSS EEEEE L     EEEEE  CCCC TTTTT EEEEE DDDD  TTTTT  AAA  BBBB
    //G     E       T   S     E     L     E     C       T   E     D   D   T   A   A B   B
    //G  GG EEE     T    SSS  EEE   L     EEE   C       T   EEE   D   D   T   AAAAA BBBB
    //G   G E       T       S E     L     E     C       T   E     D   D   T   A   A B   B
    // GGGG EEEEE   T   SSSS  EEEEE LLLLL EEEEE  CCCC   T   EEEEE DDDD    T   A   A BBBB

	//Se cambia el texto.
	it('Debe devolver el índice de la pestaña seleccionada.', () => {
        //Simulación.
		let activeTab = component.instance().getSelectedTab();
		//Expectativa.
        expect(activeTab).toEqual(-1);
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

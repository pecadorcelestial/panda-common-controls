
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

import { Loading, Animate } from './animations';

//Snapshot (LOADING).
describe('[SNAPSHOT][Componentes][Common][Loading] - Animación "Loading...".', () => {
	it('Debe pintar el componente correctamente.', () => {
        const component = renderer.create(<Loading size={{ height: 50, width: 50 }}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshots (ANIMATE).
describe('[SNAPSHOT][Componentes][Common][Animate] - Animación de entrada y salida.', () => {
    //type="fade"; from="left"; executeWhen="isMounted"
	it('Debe pintar el envolvente correctamente con los siguientes valores: type="fade"; from="left"; executeWhen="isMounted".', () => {
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<Animate type='fade' from='left' executeWhen='isMounted'>{child}</Animate>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //type="fade"; from="right"; executeWhen="isMounted"
    it('Debe pintar el envolvente correctamente con los siguientes valores: type="fade"; from="right"; executeWhen="isMounted".', () => {
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<Animate type='fade' from='left' executeWhen='isMounted'>{child}</Animate>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //type="fade"; from="top"; executeWhen="isMounted"
    it('Debe pintar el envolvente correctamente con los siguientes valores: type="fade"; from="top"; executeWhen="isMounted".', () => {
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<Animate type='fade' from='left' executeWhen='isMounted'>{child}</Animate>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //type="fade"; from="bottom"; executeWhen="isMounted"
    it('Debe pintar el envolvente correctamente con los siguientes valores: type="fade"; from="bottom"; executeWhen="isMounted".', () => {
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<Animate type='fade' from='left' executeWhen='isMounted'>{child}</Animate>).toJSON();
		expect(component).toMatchSnapshot();
    });
    //type="flip"; from="horizontal"; executeWhen="isMounted"
    it('Debe pintar el envolvente correctamente con los siguientes valores: type="flip"; from="horizontal"; executeWhen="isMounted".', () => {
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<Animate type='flip' from='horizontal' executeWhen='isMounted'>{child}</Animate>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //type="flip"; from="vertical"; executeWhen="isMounted"
    it('Debe pintar el envolvente correctamente con los siguientes valores: type="flip"; from="vertical"; executeWhen="isMounted".', () => {
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<Animate type='flip' from='vertical' executeWhen='isMounted'>{child}</Animate>).toJSON();
		expect(component).toMatchSnapshot();
	});
    //type="zoom"; executeWhen="isMounted"
    it('Debe pintar el envolvente correctamente con los siguientes valores: type="fade"; from="right"; executeWhen="isMounted".', () => {
        const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
        const component = renderer.create(<Animate type='zoom' executeWhen='isMounted'>{child}</Animate>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Métodos (ANIMATE - fade).
describe("[MÉTODOS][Componentes][Common][Animate][fade] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
    //NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
    const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
    const component = enzyme.mount(<Animate type='fade' from='left' executeWhen='onDemand'>{child}</Animate>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial sea correcta.', () => {
		//Expectativas.
        expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(false);
	});

    //TTTTT RRRR  IIIII  GGGG  GGGG EEEEE RRRR  EEEEE N   N TTTTT RRRR   AAA  N   N  CCCC EEEEE  AAA  N   N IIIII M   M  AAA  TTTTT IIIII  OOO  N   N
    //  T   R   R   I   G     G     E     R   R E     NN  N   T   R   R A   A NN  N C     E     A   A NN  N   I   MM MM A   A   T     I   O   O NN  N
    //  T   RRRR    I   G  GG G  GG EEE   RRRR  EEE   N N N   T   RRRR  AAAAA N N N C     EEE   AAAAA N N N   I   M M M AAAAA   T     I   O   O N N N
    //  T   R   R   I   G   G G   G E     R   R E     N  NN   T   R   R A   A N  NN C     E     A   A N  NN   I   M   M A   A   T     I   O   O N  NN
    //  T   R   R IIIII  GGGG  GGGG EEEEE R   R EEEEE N   N   T   R   R A   A N   N  CCCC EEEEE A   A N   N IIIII M   M A   A   T   IIIII  OOO  N   N

    it('Debe detonar la animación de entrada.', () => {
        //Simulación.
        component.instance().triggerEntranceAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(true);
        expect(component.state().exit).toBe(false);
    });
    it('Debe detonar la animación de salida.', () => {
        //Simulación.
        component.instance().triggerExitAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
    });
});

//Métodos (ANIMATE - fade)(con efecto tipo "bounce").
describe("[MÉTODOS][Componentes][Common][Animate][fade][withBounce] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
    //NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
    const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
    const component = enzyme.mount(<Animate type='fade' from='left' executeWhen='onDemand' enterWithBounce={true}>{child}</Animate>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial sea correcta.', () => {
		//Expectativas.
        expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(false);
	});

    //TTTTT RRRR  IIIII  GGGG  GGGG EEEEE RRRR  EEEEE N   N TTTTT RRRR   AAA  N   N  CCCC EEEEE  AAA  N   N IIIII M   M  AAA  TTTTT IIIII  OOO  N   N
    //  T   R   R   I   G     G     E     R   R E     NN  N   T   R   R A   A NN  N C     E     A   A NN  N   I   MM MM A   A   T     I   O   O NN  N
    //  T   RRRR    I   G  GG G  GG EEE   RRRR  EEE   N N N   T   RRRR  AAAAA N N N C     EEE   AAAAA N N N   I   M M M AAAAA   T     I   O   O N N N
    //  T   R   R   I   G   G G   G E     R   R E     N  NN   T   R   R A   A N  NN C     E     A   A N  NN   I   M   M A   A   T     I   O   O N  NN
    //  T   R   R IIIII  GGGG  GGGG EEEEE R   R EEEEE N   N   T   R   R A   A N   N  CCCC EEEEE A   A N   N IIIII M   M A   A   T   IIIII  OOO  N   N

    it('Debe detonar la animación de entrada.', () => {
        //Simulación.
        component.instance().triggerEntranceAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(true);
        expect(component.state().exit).toBe(false);
    });
    it('Debe detonar la animación de salida.', () => {
        //Simulación.
        component.instance().triggerExitAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
    });
});

//Métodos (ANIMATE - flip).
describe("[MÉTODOS][Componentes][Common][Animate][flip] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
    //NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
    const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
    const component = enzyme.mount(<Animate type='flip' from='horizontal' executeWhen='onDemand'>{child}</Animate>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial sea correcta.', () => {
		//Expectativas.
        expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(false);
	});

    //TTTTT RRRR  IIIII  GGGG  GGGG EEEEE RRRR  EEEEE N   N TTTTT RRRR   AAA  N   N  CCCC EEEEE  AAA  N   N IIIII M   M  AAA  TTTTT IIIII  OOO  N   N
    //  T   R   R   I   G     G     E     R   R E     NN  N   T   R   R A   A NN  N C     E     A   A NN  N   I   MM MM A   A   T     I   O   O NN  N
    //  T   RRRR    I   G  GG G  GG EEE   RRRR  EEE   N N N   T   RRRR  AAAAA N N N C     EEE   AAAAA N N N   I   M M M AAAAA   T     I   O   O N N N
    //  T   R   R   I   G   G G   G E     R   R E     N  NN   T   R   R A   A N  NN C     E     A   A N  NN   I   M   M A   A   T     I   O   O N  NN
    //  T   R   R IIIII  GGGG  GGGG EEEEE R   R EEEEE N   N   T   R   R A   A N   N  CCCC EEEEE A   A N   N IIIII M   M A   A   T   IIIII  OOO  N   N

    it('Debe detonar la animación de entrada (horizontal).', () => {
        //Simulación.
        component.instance().triggerEntranceAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(true);
        expect(component.state().exit).toBe(false);
    });
    it('Debe detonar la animación de salida (horizontal).', () => {
        //Simulación.
        component.instance().triggerExitAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
    });

    it('Se cambia la propiedad de la animación.', () => {
        component.setProps({ from: 'vertical' });
    });
    
    it('Debe detonar la animación de entrada (vertical).', () => {
        //Simulación.
        component.instance().triggerEntranceAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(true);
        expect(component.state().exit).toBe(false);
    });
    it('Debe detonar la animación de salida (vartical).', () => {
        //Simulación.
        component.instance().triggerExitAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
    });

	//U   U N   N M   M  OOO  U   U N   N TTTTT
	//U   U NN  N MM MM O   O U   U NN  N   T
	//U   U N N N M M M O   O U   U N N N   T
	//U   U N  NN M   M O   O U   U N  NN   T
	// UUU  N   N M   M  OOO   UUU  N   N   T

    it('Desmonta el componente.', () => {
        component.unmount();
    });
});

//Métodos (ANIMATE - flip)(con efecto tipo "bounce").
describe("[MÉTODOS][Componentes][Common][Animate][flip][withBounce] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
    //NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
    const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
    const component = enzyme.mount(<Animate type='flip' from='horizontal' executeWhen='onDemand' enterWithBounce={true}>{child}</Animate>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T

	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial sea correcta.', () => {
		//Expectativas.
        expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(false);
	});

    //TTTTT RRRR  IIIII  GGGG  GGGG EEEEE RRRR  EEEEE N   N TTTTT RRRR   AAA  N   N  CCCC EEEEE  AAA  N   N IIIII M   M  AAA  TTTTT IIIII  OOO  N   N
    //  T   R   R   I   G     G     E     R   R E     NN  N   T   R   R A   A NN  N C     E     A   A NN  N   I   MM MM A   A   T     I   O   O NN  N
    //  T   RRRR    I   G  GG G  GG EEE   RRRR  EEE   N N N   T   RRRR  AAAAA N N N C     EEE   AAAAA N N N   I   M M M AAAAA   T     I   O   O N N N
    //  T   R   R   I   G   G G   G E     R   R E     N  NN   T   R   R A   A N  NN C     E     A   A N  NN   I   M   M A   A   T     I   O   O N  NN
    //  T   R   R IIIII  GGGG  GGGG EEEEE R   R EEEEE N   N   T   R   R A   A N   N  CCCC EEEEE A   A N   N IIIII M   M A   A   T   IIIII  OOO  N   N

    it('Debe detonar la animación de entrada (horizontal).', () => {
        //Simulación.
        component.instance().triggerEntranceAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(true);
        expect(component.state().exit).toBe(false);
    });
    it('Debe detonar la animación de salida (horizontal).', () => {
        //Simulación.
        component.instance().triggerExitAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
    });

    it('Se cambia la propiedad de la animación.', () => {
        component.setProps({ from: 'vertical' });
    });
    
    it('Debe detonar la animación de entrada (vertical).', () => {
        //Simulación.
        component.instance().triggerEntranceAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(true);
        expect(component.state().exit).toBe(false);
    });
    it('Debe detonar la animación de salida (vartical).', () => {
        //Simulación.
        component.instance().triggerExitAnimation();
        //Expectativas.
		expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
    });

	//U   U N   N M   M  OOO  U   U N   N TTTTT
	//U   U NN  N MM MM O   O U   U NN  N   T
	//U   U N N N M M M O   O U   U N N N   T
	//U   U N  NN M   M O   O U   U N  NN   T
	// UUU  N   N M   M  OOO   UUU  N   N   T

    it('Desmonta el componente.', () => {
        component.unmount();
    });
});

//Métodos (ANIMATE - zoom).
describe("[MÉTODOS][Componentes][Common][Animate][zoom] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
    //NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
    const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
    const component = enzyme.mount(<Animate type='zoom' executeWhen='isVisible'>{child}</Animate>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T
    
	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial sea correcta.', () => {
		//Expectativas.
        expect(component.state().entrance).toBe(true);
        expect(component.state().exit).toBe(false);
    });
    
    // OOO  N   N  SSSS  CCCC RRRR   OOO  L     L
    //O   O NN  N S     C     R   R O   O L     L
    //O   O N N N  SSS  C     RRRR  O   O L     L
    //O   O N  NN     S C     R   R O   O L     L
    // OOO  N   N SSSS   CCCC R   R  OOO  LLLLL LLLLL

    it('Debe detonar la animación de salida al ya no ser visible el componente.', () => {
        //Simulación
        //window.scrollTo({ xPos: 0 , yPos: 300 });
        /*
		event: {
			path: [
				document,
				window: {
					innerHeight: ###,
					innerWidth: ###
				}
			]
		}
		*/
        let event = {
            path: [
                {},
                {
                    innerHeight: 0,
                    innerWidth: 100
                }
            ]
        };
        component.instance().handleScroll(event);
		//Expectativas.
        expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
    });

    // OOO  N   N  SSSS  CCCC RRRR   OOO  L     L
    //O   O NN  N S     C     R   R O   O L     L
    //O   O N N N  SSS  C     RRRR  O   O L     L
    //O   O N  NN     S C     R   R O   O L     L
    // OOO  N   N SSSS   CCCC R   R  OOO  LLLLL LLLLL

    it('Debe simula el "scroll" otra vez pero el estado del componente no debe cambiar.', () => {
        //Simulación
        let event = {
            path: [
                {},
                {
                    innerHeight: 0,
                    innerWidth: 100
                }
            ]
        };
        component.instance().handleScroll(event);
		//Expectativas.
        expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
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

//Métodos (ANIMATE - zoom)(con efecto tipo "bounce").
describe("[MÉTODOS][Componentes][Common][Animate][zoom][withBounce] - Valida las llamadas a los métodos dentro del componente.", () => {
	//Se crea el componente.
	//NOTA [1]: Al utilizar la función "mount" se detona la función "componentDidMount".
    //NOTA [2]: Además, con "mount" se puede utilizar el método "attachTo" para utilizar "document".
    const child = <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>;
    const component = enzyme.mount(<Animate type='zoom' executeWhen='isVisible' enterWithBounce={true}>{child}</Animate>);
	
	// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT DDDD  IIIII DDDD  M   M  OOO  U   U N   N TTTTT
	//C     O   O MM MM P   P O   O NN  N E     NN  N   T   D   D   I   D   D MM MM O   O U   U NN  N   T
	//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   D   D   I   D   D M M M O   O U   U N N N   T
	//C     O   O M   M P     O   O N  NN E     N  NN   T   D   D   I   D   D M   M O   O U   U N  NN   T
	// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   DDDD  IIIII DDDD  M   M  OOO   UUU  N   N   T
    
	//La única propiedad que se revisa en la función 'componentWillReceiveProps' es el valor por defecto.
	it('Se verifica que la información inicial sea correcta.', () => {
		//Expectativas.
        expect(component.state().entrance).toBe(true);
        expect(component.state().exit).toBe(false);
    });
    
    // OOO  N   N  SSSS  CCCC RRRR   OOO  L     L
    //O   O NN  N S     C     R   R O   O L     L
    //O   O N N N  SSS  C     RRRR  O   O L     L
    //O   O N  NN     S C     R   R O   O L     L
    // OOO  N   N SSSS   CCCC R   R  OOO  LLLLL LLLLL

    it('Debe detonar la animación de salida al ya no ser visible el componente.', () => {
        //Simulación
        //window.scrollTo({ xPos: 0 , yPos: 300 });
        /*
		event: {
			path: [
				document,
				window: {
					innerHeight: ###,
					innerWidth: ###
				}
			]
		}
		*/
        let event = {
            path: [
                {},
                {
                    innerHeight: 0,
                    innerWidth: 100
                }
            ]
        };
        component.instance().handleScroll(event);
		//Expectativas.
        expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
    });

    // OOO  N   N  SSSS  CCCC RRRR   OOO  L     L
    //O   O NN  N S     C     R   R O   O L     L
    //O   O N N N  SSS  C     RRRR  O   O L     L
    //O   O N  NN     S C     R   R O   O L     L
    // OOO  N   N SSSS   CCCC R   R  OOO  LLLLL LLLLL

    it('Debe simula el "scroll" otra vez pero el estado del componente no debe cambiar.', () => {
        //Simulación
        let event = {
            path: [
                {},
                {
                    innerHeight: 0,
                    innerWidth: 100
                }
            ]
        };
        component.instance().handleScroll(event);
		//Expectativas.
        expect(component.state().entrance).toBe(false);
        expect(component.state().exit).toBe(true);
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

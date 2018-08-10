
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

import ToolTip from './tooltip';

//Snapshot #1 (Origen: arriba)(Elevación: 4).
describe('[SNAPSHOT][Componentes][Common][ToolTip] - ToolTip (Origen: arriba)(Elevación: 4).', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Origen: arriba)(Elevación: 4).', () => {
        //Tema.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};
        //Propiedades.
        //['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        const tooltipProps = {
            //Obligatorios.
            anchorID: 'fake-id',
            theme: tooltipTheme,
            //Opcionales.
            at: 'top',
            elevation: 4
        };
        //Se crea el componente.
        const component = renderer.create(<ToolTip theme={tooltipTheme} {...tooltipProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #2 (Origen: abajo)(Elevación: 8).
describe('[SNAPSHOT][Componentes][Common][ToolTip] - ToolTip (Origen: abajo)(Elevación: 8).', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Origen: abajo)(Elevación: 8).', () => {
        //Tema.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};
        //Propiedades.
        //['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        const tooltipProps = {
            //Obligatorios.
            anchorID: 'fake-id',
            theme: tooltipTheme,
            //Opcionales.
            at: 'bottom',
            elevation: 8
        };
        //Se crea el componente.
        const component = renderer.create(<ToolTip theme={tooltipTheme} {...tooltipProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #3 (Origen: izquierda)(Elevación: 10).
describe('[SNAPSHOT][Componentes][Common][ToolTip] - ToolTip (Origen: izquierda)(Elevación: 10).', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Origen: izquierda)(Elevación: 10).', () => {
        //Tema.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};
        //Propiedades.
        //['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        const tooltipProps = {
            //Obligatorios.
            anchorID: 'fake-id',
            theme: tooltipTheme,
            //Opcionales.
            at: 'left',
            elevation: 10
        };
        //Se crea el componente.
        const component = renderer.create(<ToolTip theme={tooltipTheme} {...tooltipProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #4 (Origen: derecha)(Elevación: 14).
describe('[SNAPSHOT][Componentes][Common][ToolTip] - ToolTip (Origen: derecha)(Elevación: 14).', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Origen: derecha)(Elevación: 14).', () => {
        //Tema.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};
        //Propiedades.
        //['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        const tooltipProps = {
            //Obligatorios.
            anchorID: 'fake-id',
            theme: tooltipTheme,
            //Opcionales.
            at: 'right',
            elevation: 14
        };
        //Se crea el componente.
        const component = renderer.create(<ToolTip theme={tooltipTheme} {...tooltipProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #5 (Origen: arriba-izquierda)(Elevación: 18).
describe('[SNAPSHOT][Componentes][Common][ToolTip] - ToolTip (Origen: arriba-izquierda)(Elevación: 18).', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Origen: arriba-izquierda)(Elevación: 18).', () => {
        //Tema.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};
        //Propiedades.
        //['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        const tooltipProps = {
            //Obligatorios.
            anchorID: 'fake-id',
            theme: tooltipTheme,
            //Opcionales.
            at: 'top-left',
            elevation: 18
        };
        //Se crea el componente.
        const component = renderer.create(<ToolTip theme={tooltipTheme} {...tooltipProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #6 (Origen: arriba-derecha)(Elevación: 32).
describe('[SNAPSHOT][Componentes][Common][ToolTip] - ToolTip (Origen: arriba-derecha)(Elevación: 32).', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Origen: arriba-derecha)(Elevación: 32).', () => {
        //Tema.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};
        //Propiedades.
        //['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        const tooltipProps = {
            //Obligatorios.
            anchorID: 'fake-id',
            theme: tooltipTheme,
            //Opcionales.
            at: 'top-right',
            elevation: 32
        };
        //Se crea el componente.
        const component = renderer.create(<ToolTip theme={tooltipTheme} {...tooltipProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #7 (Origen: abajo-izquierda)(Elevación: 0).
describe('[SNAPSHOT][Componentes][Common][ToolTip] - ToolTip (Origen: abajo-izquierda)(Elevación: 0).', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Origen: abajo-izquierda)(Elevación: 0).', () => {
        //Tema.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};
        //Propiedades.
        //['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        const tooltipProps = {
            //Obligatorios.
            anchorID: 'fake-id',
            theme: tooltipTheme,
            //Opcionales.
            at: 'bottom-left',
            elevation: 0
        };
        //Se crea el componente.
        const component = renderer.create(<ToolTip theme={tooltipTheme} {...tooltipProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Snapshot #8 (Origen: abajo-derecha)(Elevación: -10).
describe('[SNAPSHOT][Componentes][Common][ToolTip] - ToolTip (Origen: abajo-derecha)(Elevación: -10).', () => {
	it('Debe pintar el componente con los siguientes modificadores: (Origen: abajo-derecha)(Elevación: -10).', () => {
        //Tema.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};
        //Propiedades.
        //['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        const tooltipProps = {
            //Obligatorios.
            anchorID: 'fake-id',
            theme: tooltipTheme,
            //Opcionales.
            at: 'bottom-right',
            elevation: -10
        };
        //Se crea el componente.
        const component = renderer.create(<ToolTip theme={tooltipTheme} {...tooltipProps}/>).toJSON();
		expect(component).toMatchSnapshot();
	});
});

//Flujo + Métodos #1 (Origen: arriba).
describe('[FLUJO][Componentes][Common][ToastNotifications] - Se muestra la notificación y se debe ocultar automáticamente.', () => {
     //Tema.        
    let tooltipTheme = {
        content: {
            backgroundColor: '#FFF',
            borderColor: '#1476FB'
        },
        arrow: {
            backgroundColor: '#FFF',
            borderColor: '#1476FB'
        }
    };
    //Propiedades.
    const tooltipProps = {
        //Obligatorios.
        anchorID: 'btn-anchor',
        theme: tooltipTheme,
        //Opcionales.
        at: 'top',
        elevation: 14
    };
	//Se crea el componente.
    //NOTA: Al utilizar la función 'mount' se detona las siguientes funciones: constructor, componentDidMount y render.
    const dummyPage = <div><button type='button' id='btn-anchor'/><ToolTip theme={tooltipTheme} {...tooltipProps}/></div>;
    //NOTA: Si el componente hace uso de "cocument.getElementById" (o simplemente de "document"), el componente debe "adjuntarse" a este:
    //https://airbnb.io/enzyme/docs/api/mount.html#arguments
    //NOTA: El problema con esto es el siguiente warning:
    /*
    Warning: render(): Rendering components directly into document.body is discouraged, since its children are often manipulated 
    by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container 
    element created for your app.
    */
    const component = enzyme.mount(dummyPage, { attachTo: document.body });
    let button = component.find('button');
    it('Se revisa que exista 1 objeto tipo "button".', () => {
        expect(button).toHaveLength(1);
    });
    let tooltip = component.find('ToolTip');
    it('Se revisa que exista 1 objeto tipo "ToolTip".', () => {
        expect(tooltip).toHaveLength(1);
    });

    // SSSS H   H  OOO  W   W
    //S     H   H O   O W   W
    // SSS  HHHHH O   O W W W
    //    S H   H O   O WW WW
    //SSSS  H   H  OOO  W   W
    
	it('Debe mostrar el componente.', () => {
		//Simulación.
        tooltip.instance().show();
        //console.log(tooltip.instance().state);
		//Expectativa.
        expect(tooltip.instance().state.show).toBe(true);
        expect(tooltip.instance().state.hide).toBe(false);
	});
    
    //H   H IIIII DDDD  EEEEE
    //H   H   I   D   D E
    //HHHHH   I   D   D EEE
    //H   H   I   D   D E
    //H   H IIIII DDDD  EEEEE
    
	//Se cambia el texto.
	it('Debe ocultar el componente.', () => {
        //Simulación.
		tooltip.instance().hide();
		//Expectativa.
        expect(tooltip.instance().state.show).toBe(false);
        expect(tooltip.instance().state.hide).toBe(true);
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

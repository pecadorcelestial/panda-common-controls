
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

import ToolTip, { addToolTipSize } from './tooltip';

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

//Flujo + Métodos #1 (Origen: arriba)(ancla < tooltip).
describe('[FLUJO][Componentes][Common][ToolTip] - Se muestra el tooltip y se debe ocultar dando click afuera.', () => {
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
    const dummyPage = <div><button type='button' id='btn-anchor'/><ToolTip theme={tooltipTheme} {...tooltipProps}><button type='button' id='btn-insider'/></ToolTip></div>;
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

    it('Se revisa que exista 1 objeto tipo "button" y un objeto tipo "Tooltip".', () => {
        let outsideButton = component.find('#btn-anchor');
        let tooltip = component.find('ToolTip');
        let insideButton = component.find('#btn-insider');
        expect(outsideButton).toHaveLength(1);
        expect(tooltip).toHaveLength(1);
        expect(insideButton).toHaveLength(1);
    });
	it('Debe mostrar el componente, intentarlo nuevamente y ajustar el tamaño y la posición del documento.', () => {
        //Variables.
        let outsideButton = component.find('#btn-anchor');
        let tooltip = component.find('ToolTip');
        let insideButton = component.find('#btn-insider');
        
        // SSSS H   H  OOO  W   W
        //S     H   H O   O W   W
        // SSS  HHHHH O   O W W W
        //    S H   H O   O WW WW
        //SSSS  H   H  OOO  W   W
        
		//Simulación.
        tooltip.instance().show();
		//Expectativa.
        expect(tooltip.instance().state.show).toBe(true);
        expect(tooltip.instance().state.hide).toBe(false); 
		//Simulación.
        tooltip.instance().show();
        
        //RRRR  EEEEE  SSSS IIIII ZZZZZ EEEEE
        //R   R E     S       I      Z  E
        //RRRR  EEE    SSS    I     Z   EEE
        //R   R E         S   I    Z    E
        //R   R EEEEE SSSS  IIIII ZZZZZ EEEEE
        
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));

        // SSSS  CCCC RRRR   OOO  L     L
        //S     C     R   R O   O L     L
        // SSS  C     RRRR  O   O L     L
        //    S C     R   R O   O L     L
        //SSSS   CCCC R   R  OOO  LLLLL LLLLL

        global.dispatchEvent(new Event('scroll'));

        //M   M  OOO  U   U  SSSS EEEEE DDDD   OOO  W   W N   N
        //MM MM O   O U   U S     E     D   D O   O W   W NN  N
        //M M M O   O U   U  SSS  EEE   D   D O   O W W W N N N
        //M   M O   O U   U     S E     D   D O   O WW WW N  NN
        //M   M  OOO   UUU  SSSS  EEEEE DDDD   OOO  W   W N   N
        
        //1ro. Se hace click en el mismo componente.
        let event = {
            target: insideButton.instance()
        }
        tooltip.instance().handleMouseDown(event);
        //2do. Se hace click fuera del componente para cerrarlo.
        event = {
            target: outsideButton.instance()
        }
        tooltip.instance().handleMouseDown(event);

        //H   H IIIII DDDD  EEEEE
        //H   H   I   D   D E
        //HHHHH   I   D   D EEE
        //H   H   I   D   D E
        //H   H IIIII DDDD  EEEEE
        
        //Al emular un click fuera del componente, la función para ocultarlo se manda llamar.
        
	});
});

//Flujo + Métodos #1 (Origen: arriba)(sin componente ancla).
describe('[FLUJO][Componentes][Common][ToolTip] - No debe mostrarse el tooltip al no encontrar el ancla.', () => {
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
   const dummyPage = <div><ToolTip theme={tooltipTheme} {...tooltipProps}/></div>;
   //NOTA: Si el componente hace uso de "document.getElementById" (o simplemente de "document"), el componente debe "adjuntarse" a este:
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
    document.body.innerHTML = '<div id="root"></div>';
    beforeEach(() => {
        component = enzyme.mount(dummyPage, { attachTo: document.querySelector('#root'), pretendToBeVisual: true });
    });
    afterEach(() => {
        component.unmount();
    });

    // SSSS IIIII M   M U   U L      AAA   CCCC IIIII  OOO  N   N EEEEE  SSSS
    //S       I   MM MM U   U L     A   A C       I   O   O NN  N E     S
    // SSS    I   M M M U   U L     AAAAA C       I   O   O N N N EEE    SSS
    //    S   I   M   M U   U L     A   A C       I   O   O N  NN E         S
    //SSSS  IIIII M   M  UUU  LLLLL A   A  CCCC IIIII  OOO  N   N EEEEE SSSS

    it('Se revisa que exista 1 objeto tipo "ToolTip".', () => {
        let tooltip = component.find('ToolTip');
        expect(tooltip).toHaveLength(1);
    });
    it('Debe mostrar el componente, intentarlo nuevamente y ajustar el tamaño y la posición del documento.', () => {
        let tooltip = component.find('ToolTip');

        // SSSS H   H  OOO  W   W
        //S     H   H O   O W   W
        // SSS  HHHHH O   O W W W
        //    S H   H O   O WW WW
        //SSSS  H   H  OOO  W   W

        //Simulación.
        tooltip.instance().show();
        //Expectativa.
        expect(tooltip.instance().state.show).toBe(false);
        expect(tooltip.instance().state.hide).toBe(false); 

        //RRRR  EEEEE  SSSS IIIII ZZZZZ EEEEE
        //R   R E     S       I      Z  E
        //RRRR  EEE    SSS    I     Z   EEE
        //R   R E         S   I    Z    E
        //R   R EEEEE SSSS  IIIII ZZZZZ EEEEE
    
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
    
        // SSSS  CCCC RRRR   OOO  L     L
        //S     C     R   R O   O L     L
        // SSS  C     RRRR  O   O L     L
        //    S C     R   R O   O L     L
        //SSSS   CCCC R   R  OOO  LLLLL LLLLL
    
        global.dispatchEvent(new Event('scroll'));    
    });
});

//FFFFF U   U N   N  CCCC IIIII  OOO  N   N EEEEE  SSSS
//F     U   U NN  N C       I   O   O NN  N E     S
//FFF   U   U N N N C       I   O   O N N N EEE    SSS
//F     U   U N  NN C       I   O   O N  NN E         S
//F      UUU  N   N  CCCC IIIII  OOO  N   N EEEEE SSSS

describe('[Funciones][Componentes][Common][ToolTip][addToolTipSize]: Debe devolver la posición del tooltip (ancla < tooltip).', () => {
    //tooltip, position, anchor, at, offSet
    let tooltip = { 
        bottom: 0,
        height: 100,
        left: 0,
        right: 0,
        top: 0,
        width: 100 
    };
    let position = {
        left: 200,
        top: 200
    };
    let anchor = {
        bottom: 0,
        height: 50,
        left: 0,
        right: 0,
        top: 0,
        width: 50 
    };
    it('Debe devolver { top: 90, left: 175 } al enviar "top" como el origen.', () => {
        let result = { top: 90, left: 175 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'top', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 260, left: 175 } al enviar "bottom" como el origen.', () => {
        let result = { top: 260, left: 175 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'bottom', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 175, left: 90 } al enviar "left" como el origen.', () => {
        let result = { top: 175, left: 90 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'left', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 175, left: 260 } al enviar "right" como el origen.', () => {
        let result = { top: 175, left: 260 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'right', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 90, left: 145 } al enviar "top-left" como el origen.', () => {
        let result = { top: 90, left: 145 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'top-left', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 90, left: 205 } al enviar "top-right" como el origen.', () => {
        let result = { top: 90, left: 205 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'top-right', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 260, left: 175 } al enviar "bottom-left" como el origen.', () => {
        let result = { top: 260, left: 145 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'bottom-left', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 260, left: 175 } al enviar "bottom-right" como el origen.', () => {
        let result = { top: 260, left: 205 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'bottom-right', 0))).toEqual(JSON.stringify(result));
    });
});

describe('[Funciones][Componentes][Common][ToolTip][addToolTipSize]: Debe devolver la posición del tooltip (ancla > tooltip).', () => {
    //tooltip, position, anchor, at, offSet
    let tooltip = { 
        bottom: 0,
        height: 100,
        left: 0,
        right: 0,
        top: 0,
        width: 100 
    };
    let position = {
        left: 200,
        top: 200
    };
    let anchor = {
        bottom: 0,
        height: 150,
        left: 0,
        right: 0,
        top: 0,
        width: 150 
    };
    it('Debe devolver { top: 90, left: 225 } al enviar "top" como el origen.', () => {
        let result = { top: 90, left: 225 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'top', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 360, left: 225 } al enviar "bottom" como el origen.', () => {
        let result = { top: 360, left: 225 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'bottom', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 225, left: 90 } al enviar "left" como el origen.', () => {
        let result = { top: 225, left: 90 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'left', 0))).toEqual(JSON.stringify(result));
    });
    it('Debe devolver { top: 225, left: 360 } al enviar "right" como el origen.', () => {
        let result = { top: 225, left: 360 };
        expect(JSON.stringify(addToolTipSize(tooltip, position, anchor, 'right', 0))).toEqual(JSON.stringify(result));
    });
});
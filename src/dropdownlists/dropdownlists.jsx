//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

//Componentes locales.
import { Icon } from '../icons/icons';

//TTTTT EEEEE M   M  AAA
//  T   E     MM MM A   A
//  T   EEE   M M M AAAAA
//  T   E     M   M A   A
//  T   EEEEE M   M A   A

const titleColor = theme('status', {
	normal: '#242424',
	complete: '#A7A7A7',
	valid: '#09BA8A',
	error: '#EF2525',
	disabled: '#BFBFBF'
});

const selectBorderColor = theme('status', {
	normal: '#BFBFBF',
	complete: '#242424',
	valid: '#09BA8A',
	error: '#EF2525',
	disabled: '#BFBFBF'
});

const selectColor = theme('status', {
	normal: '#A7A7A7',
	complete: '#242424',
	valid: '#242424',
	error: '#242424',
	disabled: '#BFBFBF'
});

const optionColor = theme('status', {
	normal: '#242424',
	complete: '#242424',
	valid: '#242424',
	error: '#242424',
	disabled: '#BFBFBF'
});

//BBBB   AAA   SSSS IIIII  CCCC  OOO
//B   B A   A S       I   C     O   O
//BBBB  AAAAA  SSS    I   C     O   O
//B   B A   A     S   I   C     O   O
//BBBB  A   A SSSS  IIIII  CCCC  OOO

//EEEEE  SSSS TTTTT IIIII L      OOO   SSSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const Layout = styled.div`
	box-sizing: border-box;
	display: inline-block;
	height: 60px;
	margin: 0px;
	min-width: 250px;
	padding: 0px;
	position: relative;
	width: auto;
`;

const Title = styled.label`
	border-top: 0px solid transparent;
	border-left: 0px solid transparent;
	border-right: 0px solid transparent;
	border-bottom: 1px solid ${selectBorderColor};
	color: ${titleColor};
	height: 45px;
	font-family: "Open Sans", sans-serif;
	font-size: 11px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	left: 0px;
	letter-spacing: normal;
	margin: 0px;
	padding: 0px;
	position: absolute;
	text-align: left;
	top: 0px;
	width: 100%;
	white-space: nowrap;
	z-index: 1;
	
	transition: color 0.3s ease-in-out, font 0.1s linear, padding 0.1s linear;
	
	&:after {
		background: #1476FB;
		bottom: -1px;
		content: '';
		height: 1px;
		left: 50%;
		position: absolute;
		transition: all 0.3s linear;
		width: 0px;
	}
`;

const Select = styled.select`
	appearance: none;
	background-color: transparent;
	background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 9' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eabajo%3C/title%3E%3Cpath d='M7.916 8.636a.718.718 0 0 1-.509-.21L.211 1.228A.719.719 0 1 1 1.229.21l6.687 6.688L14.604.21a.719.719 0 1 1 1.017 1.018L8.425 8.425a.718.718 0 0 1-.509.211' fill='%238B8B8B' fill-rule='evenodd'/%3E%3C/svg%3E");
	background-position: right 5px center;
	background-repeat: no-repeat;
	background-size: 15px 15px;
	border: none;
	border-radius: 0px;
	color: ${selectColor};
	cursor: pointer;
	font-family: "Open Sans", sans-serif;
	font-size: 16px;
	font-weight: normal;
	height: 30px;
	left: 0px;
	overflow: hidden;
	padding: 0px 25px 0px 0px;
	position: absolute;
	top: 15px;
	text-indent: 1px;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
	z-index: 2;
	
	&:focus {
        color: #000;
        outline: none;
	}

	&:focus ~ ${Title} {
		color: #1476FB;

		&:after {
			left: 0px;
			width: 100%;
		}
	}
`;

const Option = styled.option`
	color: ${optionColor};
	font-family: "Open Sans", sans-serif;
	font-size: 14px;
	font-weight: normal;
	height: 30px;
	letter-spacing: normal;
	margin: 0px;
	overflow: hidden;
	padding: 0px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;

	&:disabled {
		color: #BFBFBF;
	}
`;

const Error = styled.label`
	bottom: 0px;
	color: #EF2525;
	height: 15px;
	font-family: "Open Sans", sans-serif;
	font-size: 11px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	left: 0px;
	letter-spacing: normal;
	margin: 0px;
	padding: 0px;
	position: absolute;
	text-align: left;
	width: 100%;
	white-space: nowrap;
	z-index: 1;
`;

// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT EEEEE
//C     O   O MM MM P   P O   O NN  N E     NN  N   T   E
//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   EEE
//C     O   O M   M P     O   O N  NN E     N  NN   T   E
// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   EEEEE

export class BasicSelect extends React.Component {
	//*** CONSTRUCTOR ***
	constructor(props) {
		super(props);

		//1. Se busca el elemento correspondiente al índice seleccionado.
		let item;
		for(let i=0; i < props.options.length; i++) {
			if(props.options[i].id == props.selectedOption) {
				item = props.options[i];
				break;
			}
		}

		//2. Se crea el estado inicial.
		this.state={
            correct: false,
            complete: false,
			errors: {
				isEmpty: false
			},
			item,
			selectedOption: this.props.selectedOption
		};
	}
	//*** FUNCIONES DEL CONTROL ***
	componentDidMount() {
		//console.log('[COMÚN][ESTILIZADOS][SELECT][componentDidMount] State: ', this.state);
	}
	componentWillReceiveProps(nextProps) {
        //Aquí sólo se revisa la propiedad "selectedOption", ya que es la única que se cambia en el estado.
		//console.log('[COMÚN][ESTILIZADOS][SELECT][componentWillReceiveProps] Item seleccionado: ', parseInt(nextProps.selectedOption));
		if(nextProps.selectedOption === '' || parseInt(nextProps.selectedOption) < 0) {
			//console.log('[COMÚN][ESTILIZADOS][SELECT][componentWillReceiveProps] ¿Es una cadena vacía? R =', nextProps.selectedOption === '');
			//console.log('[COMÚN][ESTILIZADOS][SELECT][componentWillReceiveProps] ¿Es menor a 0? R =', (parseInt(nextProps.selectedOption) < 0));
			this.setState({ item: undefined, selectedOption: nextProps.selectedOption });
		} else {
			for(let i=0; i < nextProps.options.length; i++) {
				if(nextProps.options[i].id == nextProps.selectedOption) {
					this.setState({ item: nextProps.options[i], selectedOption: nextProps.selectedOption });
					break;
				}
			}
		}
	}
	//*** HANDLERS ***
	handleOnChange = (event) => {
		event.preventDefault();
		//console.log('[COMÚN][ESTILIZADOS][SELECT][handleOnChange] Target.Value: ', event.target.value);
		//let id = this.props.idIsNumeric ? parseInt(event.target.value) : event.target.value;
		//NOTA: Se cambió la manera de obtener la descripción del elemento.
		//let description = '';
		let item;
		if(event.target.value == '' || event.target.value < 0) {
			//console.log('[COMÚN][ESTILIZADOS][SELECT][handleOnChange] Item debe ser indefinido.');
			item = undefined;
		} else {
			for(let i=0; i<this.props.options.length; i++) {
				if(this.props.options[i].id == event.target.value) {
					item = this.props.options[i];
					break;
				}
			}
		}
		/*
		let selectedItem = {
			id,
			description
		};
		*/
		//console.log('[COMÚN][ESTILIZADOS][SELECT][handleOnChange] Información seleccionada: ', (event.target.value == '' || event.target.value < 0) ? undefined : item);
		//console.log('[COMÚN][ESTILIZADOS][SELECT][handleOnChange] Información seleccionada: ', item);
		this.setState({ item: item, selectedOption: (this.props.idIsNumeric ? parseInt(event.target.value) : event.target.value) }, () => {
			//console.log('[COMÚN][ESTILIZADOS][SELECT][handleOnChange] State: ', this.state);
			this.validate();
		});
		if(this.props.onOptionChange) this.props.onOptionChange(item);
	}
	handleOnBlur = () => {
		this.validate();
	}
	//*** MÉTODOS ***
	validate = () => {
		//NOTA: La única condición es que sea requerido.
		//¿En numérico?
		if(this.props.idIsNumeric) {
			if(this.props.isRequired) {
                //Es requerido.
				if(this.state.item != undefined && parseInt(this.state.item.id) >= 0) {
					let errors = { isEmpty: false};
					this.setState({ correct: true, complete: false, errors });
					return true;
				} else {
					let errors = { isEmpty: true};
					this.setState({ correct: false, complete: false, errors });
					return false;
				}
			} else {
				//console.log('[COMÚN][DROPDOWNLIST][validate] Item: ', this.state.item);
                //NO es requerido.
				if(this.state.item != undefined && parseInt(this.state.item.id) >= 0) {
					let errors = { isEmpty: false};
					this.setState({ correct: false, complete: true, errors });
					return true;
				} else {
					let errors = { isEmpty: true};
					this.setState({ correct: false, complete: false, errors });
					return false;
				}
			}
		} else {
			if(this.props.isRequired) {
			    //Es requerido.
				if(this.state.item != undefined && this.state.item.id != '') {
					let errors = { isEmpty: false};
					this.setState({ correct: true, complete: false, errors });
					return true;
				} else {
					let errors = { isEmpty: true};
					this.setState({ correct: false, complete: false, errors });
					return false;
				}
			} else {
                //NO es requerido.
				if(this.state.item != undefined && this.state.item.id != '') {
					let errors = { isEmpty: false};
					this.setState({ correct: false, complete: true, errors });
					return true;
				} else {
					let errors = { isEmpty: true};
					this.setState({ correct: false, complete: false, errors });
					return false;
				}
			}
		}
	}
	getValue = () => {
		return this.state.item;
    }
    setValue = (id) => {
        //this.setState({ item: value, selectedOption: value.id });
        let item;
        for(let i=0; i < this.props.options.length; i++) {
            if(this.props.options[i].id == id) {
                item = this.props.options[i];
                break;
            }
		}
		this.setState({ item, selectedOption: id });
    }
	//*** RESULTADO ***
	render() {
		
		//EEEEE  SSSS TTTTT IIIII L      OOO
		//E     S       T     I   L     O   O
		//EEE    SSS    T     I   L     O   O
		//E         S   T     I   L     O   O
		//EEEEE SSSS    T   IIIII LLLLL  OOO
		
		let status;
		if(this.props.disabled) {
			status = 'disabled';
		} else if(this.state.errors.isEmpty) {
			status = 'error';
		} else if(this.state.correct) {
			status = 'valid';
		} else {
			status = 'normal';
		}		
				
		//EEEEE RRRR  RRRR   OOO  RRRR
		//E     R   R R   R O   O R   R
		//EEE   RRRR  RRRR  O   O RRRR
		//E     R   R R   R O   O R   R
		//EEEEE R   R R   R  OOO  R   R
		
		let error;
		if(this.state.errors.isEmpty) {
			error = <Error ref={label => { this.ErrorRef = label; }}>Debe seleccionar una opción.</Error>;
		} else {
			error = null;
		}
		
		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO

		return(
			<ThemeProvider theme={{ status }}>
				<Layout {...this.props}>
						<Select 
							id={this.props.id}
							disabled={this.props.disabled}
							placeholder={this.props.placeHolder}
							value={this.state.selectedOption}
							onChange={this.handleOnChange}
							onBlur={this.handleOnBlur} >
							<Option value={this.props.idIsNumeric ? '-1' : ''}>{(this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción'}</Option>
							{
								this.props.options.map(option=><Option value={option.id} disabled={(option.disabled) ? option.disabled : false} key={option.id}>{option.description}</Option>)
							}
						</Select>
					<Title>{this.props.title}</Title>
					{error}
				</Layout>
			</ThemeProvider>
		);
	}
}

//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
//P     R   R O   O P       I   E     D   D A   A D   D E         S
//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS

BasicSelect.propTypes={
	//Obligatorios.
	title: PropTypes.string.isRequired,		
	error: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
    ]).isRequired,
    //Funciones
	onOptionChange: PropTypes.func,
	//Opcionales.
	id: PropTypes.string,
	placeHolder: PropTypes.string,
	disabled: PropTypes.bool,
	//Validación.
	isRequired: PropTypes.bool,
	idIsNumeric: PropTypes.bool
}

BasicSelect.defaultProps={
	disabled: false,
	id: '',
	isRequired: false,
    idIsNumeric: true,
    placeHolder: ''
}

// AAA  V   V  AAA  N   N ZZZZZ  AAA  DDDD   OOO
//A   A V   V A   A NN  N    Z  A   A D   D O   O
//AAAAA V   V AAAAA N N N   Z   AAAAA D   D O   O
//A   A  V V  A   A N  NN  Z    A   A D   D O   O
//A   A   V   A   A N   N ZZZZZ A   A DDDD   OOO

//EEEEE  SSSS TTTTT IIIII L      OOO   SSSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const ToogleButton = styled.button`
	background-color: transparent;
	border: none;
	border-radius: 0px;
	color: ${selectColor};
	cursor: ${props => props.disabled ? `default` : `pointer`};
	font-family: "Open Sans", sans-serif;
	font-size: 16px;
	font-weight: normal;
	height: 30px;
	left: 0px;
	overflow: hidden;
	padding: 0px 25px 0px 0px;
	position: absolute;
	top: 15px;
	text-align: left;
	text-indent: 1px;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
	z-index: 2;

	&:focus {
		color: #000;
		outline: none;
	}

	&:focus ~ ${Title} {
		color: #1476FB;

		&:after {
			left: 0px;
			width: 100%;
		}
	}
`;

const ToogleIcon = styled(Icon)`
	cursor: ${props => props.disabled ? `default` : `pointer`};
	fill: ${props => props.disabled ? `#BFBFBF` : `#A7A7A7`};
	pointer-events: ${props => props.disabled ? `none` : `all`};
	position: absolute;
	right: 0px;
	top: 3px;
	z-index: 3;

	transition: transform 0.3s;

	${props => props.show ? `transform: rotate(180deg);` : ``}
`;

const listMaximumHeight = (itemsType) => {
	switch(itemsType) {
		//case 'title-desription': 
		//case 'icon-title-description':
		case 'image-title-description':	
			return '200px';
		case 'simple':
		default:
			return '150px';
	}
}

const AdvancedList = styled.ul`
	background-clip: padding-box;
	background-color: #FFF;
	border: 1px solid #BFBFBF;
	border-radius: 4px;
	box-shadow:  0px 0px 14px 1px rgba(0, 0, 0, 0.1);
	display: ${props => props.show ? `block` : `none`};;
	float: left;
	font-family: "Open Sans", sans-serif;
	font-size: 14px;
	font-weight: normal;
	left: 0;
	list-style: none;
	margin: 1px 0px 0px 0px;
	max-height: ${props => listMaximumHeight(props.itemsType)};
	min-width: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0px;
	position: absolute;
	text-align: left;
	top: 45px;
	z-index: 4;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background-color: #E5E5E5;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background: rgba(20, 118, 251, 0.8);
	}

	&::-webkit-scrollbar-thumb:hover {
		background: rgba(20, 118, 251, 1);
	}

	&::-webkit-scrollbar-thumb:window-inactive {
		background: rgba(20, 118, 251, 0.4);
	}
`;

// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT EEEEE
//C     O   O MM MM P   P O   O NN  N E     NN  N   T   E
//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   EEE
//C     O   O M   M P     O   O N  NN E     N  NN   T   E
// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   EEEEE

export class AdvancedSelect extends React.Component {
	//*** CONSTRUCTOR ***
	constructor(props) {
		super(props);

		//1. Se busca el elemento correspondiente al índice seleccionado.
		let item;
		let selectedOption = (this.props.idIsNumeric ? -1 : '');
		switch(this.props.itemsType) {
			//case 'title-desription':
			//case 'icon-title-description':
			case 'image-title-description':
				item = {
					id: (this.props.idIsNumeric ? -1 : ''),
					icon: 'solidUndoAlt',
					title: ((this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción'),
					description: '(Opción no válida)'
				};
				break;
			case 'simple':
			default:
				item = {
					id: (this.props.idIsNumeric ? -1 : ''),
					description: ((this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción')
				};
				break;
		}
		for(let i=0; i < this.props.options.length; i++) {
			if(props.options[i].id == this.props.selectedOption) {
				item = this.props.options[i];
				selectedOption = this.props.selectedOption
				break;
			}
		}

		//2. Se crea el estado inicial.
		this.state={
			show: false,
            correct: false,
            complete: false,
			errors: {
				isEmpty: false
			},
			item,
			selectedOption
		};
	}
	//*** FUNCIONES DEL CONTROL ***
	componentDidMount() {
        //1. Se agrega el "event listener".
        window.addEventListener('mousedown', this.handleMouseDown);
	}
	componentWillReceiveProps(nextProps) {
        //Aquí sólo se revisa la propiedad "selectedOption", ya que es la única que se cambia en el estado.
		//console.log('[COMÚN][ESTILIZADOS][SELECT][componentWillReceiveProps] Item seleccionado: ', parseInt(nextProps.selectedOption));
		if(nextProps.selectedOption === '' || parseInt(nextProps.selectedOption) < 0) {
			//console.log('[COMÚN][ESTILIZADOS][SELECT][componentWillReceiveProps] ¿Es una cadena vacía? R =', nextProps.selectedOption === '');
			//console.log('[COMÚN][ESTILIZADOS][SELECT][componentWillReceiveProps] ¿Es menor a 0? R =', (parseInt(nextProps.selectedOption) < 0));
			let item;
			switch(this.props.itemsType) {
				//case 'title-desription':
				//case 'icon-title-description':
				case 'image-title-description':
					item = {
						id: (this.props.idIsNumeric ? -1 : ''),
						icon: 'solidUndoAlt',
						title: ((this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción'),
						description: '(Opción no válida)'
					};
					break;
				case 'simple':
				default:
					item = {
						id: (this.props.idIsNumeric ? -1 : ''),
						description: ((this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción')
					};
					break;
			}
			this.setState({ item, selectedOption: nextProps.selectedOption });
		} else {
			let item;
			let selectedOption = (this.props.idIsNumeric ? -1 : '');
			for(let i=0; i < nextProps.options.length; i++) {
				if(nextProps.options[i].id == nextProps.selectedOption) {
					//this.setState({ item: nextProps.options[i], selectedOption: nextProps.selectedOption });
					item = nextProps.options[i];
					selectedOption = nextProps.selectedOption;
					break;
				}
			}
			this.setState({ item, selectedOption });
		}
	}
	componentWillUnmount() {
        //1. Se elimina el "event listener".
        window.removeEventListener('mousedown', this.handleMouseDown);
	}
	//*** HANDLERS ***
	handleOnChange = (item) => {
		//La función sólo se manda llamar desde un componente bien formado.
		//if(item != undefined && (item.constructor === Object && Object.keys(item).length > 0)) {
			//console.log('[COMÚN][ESTILIZADOS][SELECT (AVANZADO)][handleOnChange] Item: ', item);
			this.setState({ item: item, selectedOption: (this.props.idIsNumeric ? parseInt(item.id) : item.id), show: false }, () => {
				this.validate();
			});
			if(this.props.onOptionChange) this.props.onOptionChange(item);
		//}
	}
    handleMouseDown = (event) => {
        if(this.AdvancedSelectInnerRef.contains(event.target)) {
            return;
        } else {
			this.setState({ show: false }, () => {
				this.validate();
			});
        }
    }
	//*** MÉTODOS ***
	validate = () => {
		//NOTA: La única condición es que sea requerido.
		//¿En numérico?
		if(this.props.idIsNumeric) {
			if(this.props.isRequired) {
                //Es requerido.
				if(this.state.item != undefined && parseInt(this.state.item.id) >= 0) {
					let errors = { isEmpty: false};
					this.setState({ correct: true, complete: false, errors });
					return true;
				} else {
					let errors = { isEmpty: true};
					this.setState({ correct: false, complete: false, errors });
					return false;
				}
			} else {
				//console.log('[COMÚN][DROPDOWNLIST][validate] Item: ', this.state.item);
                //NO es requerido.
				if(this.state.item != undefined && parseInt(this.state.item.id) >= 0) {
					let errors = { isEmpty: false};
					this.setState({ correct: false, complete: true, errors });
					return true;
				} else {
					let errors = { isEmpty: true};
					this.setState({ correct: false, complete: false, errors });
					return false;
				}
			}
		} else {
			if(this.props.isRequired) {
			    //Es requerido.
				if(this.state.item != undefined && this.state.item.id != '') {
					let errors = { isEmpty: false};
					this.setState({ correct: true, complete: false, errors });
					return true;
				} else {
					let errors = { isEmpty: true};
					this.setState({ correct: false, complete: false, errors });
					return false;
				}
			} else {
                //NO es requerido.
				if(this.state.item != undefined && this.state.item.id != '') {
					let errors = { isEmpty: false};
					this.setState({ correct: false, complete: true, errors });
					return true;
				} else {
					let errors = { isEmpty: true};
					this.setState({ correct: false, complete: false, errors });
					return false;
				}
			}
		}
	}
	getValue = () => {
		return this.state.item;
    }
    setValue = (id) => {
        //this.setState({ item: value, selectedOption: value.id });
        let item;
        for(let i=0; i < this.props.options.length; i++) {
            if(this.props.options[i].id == id) {
                item = this.props.options[i];
                break;
            }
		}
		this.setState({ item, selectedOption: id });
    }
	//*** RESULTADO ***
	render() {
		
		//EEEEE  SSSS TTTTT IIIII L      OOO
		//E     S       T     I   L     O   O
		//EEE    SSS    T     I   L     O   O
		//E         S   T     I   L     O   O
		//EEEEE SSSS    T   IIIII LLLLL  OOO
		
		let status;
		if(this.props.disabled) {
			status = 'disabled';
		} else if(this.state.errors.isEmpty) {
			status = 'error';
		} else if(this.state.correct) {
			status = 'valid';
		} else {
			status = 'normal';
		}		
				
		//EEEEE RRRR  RRRR   OOO  RRRR
		//E     R   R R   R O   O R   R
		//EEE   RRRR  RRRR  O   O RRRR
		//E     R   R R   R O   O R   R
		//EEEEE R   R R   R  OOO  R   R
		
		let error;
		if(this.state.errors.isEmpty) {
			error = <Error ref={label => { this.ErrorRef = label; }}>Debe seleccionar una opción.</Error>;
		} else {
			error = null;
		}
		
		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
		
		let iconProps = {
			disabled: this.props.disabled,
			height: '25px',
			icon: 'solidAngleDown',
			id: 'svg-show-list-icon',
			show: this.state.show,
			width: '25px',
		};

		//PPPP  RRRR  IIIII M   M EEEEE RRRR      EEEEE L     EEEEE M   M EEEEE N   N TTTTT  OOO
		//P   P R   R   I   MM MM E     R   R     E     L     E     MM MM E     NN  N   T   O   O
		//PPPP  RRRR    I   M M M EEE   RRRR      EEE   L     EEE   M M M EEE   N N N   T   O   O
		//P     R   R   I   M   M E     R   R     E     L     E     M   M E     N  NN   T   O   O
		//P     R   R IIIII M   M EEEEE R   R     EEEEE LLLLL EEEEE M   M EEEEE N   N   T    OOO

		let firstItem;
		switch(this.props.itemsType) {
			//case 'title-desription':
			//case 'icon-title-description':
			case 'image-title-description':
				firstItem = <IconTitleNDescriptionItem
					icon='solidBan'
					title={(this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción'}
					description='(Opción no válida)'
					onClick={() => {
						this.handleOnChange({
							id: (this.props.idIsNumeric ? -1 : ''),
							icon: 'solidUndoAlt',
							title: ((this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción'),
							description: '(Opción no válida)'
						});
					}}
				/>;
				break;
			case 'simple':
			default:
				firstItem = <SimpleItem
					description={(this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción'}
					onClick={() => {
						this.handleOnChange({
							id: (this.props.idIsNumeric ? -1 : ''),
							description: ((this.props.placeHolder != undefined && this.props.placeHolder != '') ? this.props.placeHolder : 'Selecciona una opción'),
						});
					}}
				/>;
				break;
		}

		//EEEEE L     EEEEE M   M EEEEE N   N TTTTT  OOO   SSSS
		//E     L     E     MM MM E     NN  N   T   O   O S
		//EEE   L     EEE   M M M EEE   N N N   T   O   O  SSS
		//E     L     E     M   M E     N  NN   T   O   O     S
		//EEEEE LLLLL EEEEE M   M EEEEE N   N   T    OOO  SSSS
		
		let elements;
		switch(this.props.itemsType) {
			//case 'title-desription':
			//case 'icon-title-description':
			case 'image-title-description':
				elements = <AdvancedList show={this.state.show} itemsType={this.props.itemsType}>
					{firstItem}
					{
						this.props.options.map((option, index) => 
						<IconTitleNDescriptionItem
							description={option.description}
							disabled={(option.disabled) ? option.disabled : false} 
							icon={option.icon}
							key={`li-${option.id}-${index}`}
							selected={this.state.selectedOption == option.id}
							title={option.title}
							onClick={() => { this.handleOnChange(option); }}/>
						, this)
					}
				</AdvancedList>;
				break;
			case 'simple':
			default:
				elements = <AdvancedList show={this.state.show} itemsType={this.props.itemsType}>
					{firstItem}
					{
						this.props.options.map((option, index) => 
						<SimpleItem
							description={option.description}
							disabled={(option.disabled) ? option.disabled : false} 
							key={`li-${option.id}-${index}`}
							selected={this.state.selectedOption == option.id}
							onClick={() => { this.handleOnChange(option); }}/>
						, this)
					}
				</AdvancedList>;
				break;
		}

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO

		return(
			<ThemeProvider theme={{ status }}>
				<Layout {...this.props} innerRef={select => this.AdvancedSelectInnerRef = select}>
					<ToogleButton 
						disabled={this.props.disabled} 
						onClick={(event) => { 
							event.preventDefault();
							let show = this.state.show;
							show = !show;
							this.setState({ show });
						}}
					>
						{this.state.item.title || this.state.item.description}
						<ToogleIcon {...iconProps}/>
					</ToogleButton>
					{elements}
					<Title>{this.props.title}</Title>
					{error}
				</Layout>
			</ThemeProvider>
		);
	}
}

//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
//P     R   R O   O P       I   E     D   D A   A D   D E         S
//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS

AdvancedSelect.propTypes={
	//Obligatorios.
	title: PropTypes.string.isRequired,		
	error: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
    ]).isRequired,
    //Funciones
	onOptionChange: PropTypes.func,
	//Opcionales.
	id: PropTypes.string,
	itemsType: PropTypes.oneOf(['simple', 'title-desription', 'icon-title-description', 'image-title-description']),
	placeHolder: PropTypes.string,
	disabled: PropTypes.bool,
	//Validación.
	isRequired: PropTypes.bool,
	idIsNumeric: PropTypes.bool
}

AdvancedSelect.defaultProps={
	disabled: false,
	id: '',
	idIsNumeric: true,
	isRequired: false,
	itemsType: 'simple',
    placeHolder: ''
}

// OOO  PPPP   CCCC IIIII  OOO  N   N EEEEE  SSSS
//O   O P   P C       I   O   O NN  N E     S
//O   O PPPP  C       I   O   O N N N EEE    SSS
//O   O P     C       I   O   O N  NN E         S
// OOO  P      CCCC IIIII  OOO  N   N EEEEE SSSS

const ListItem = styled.li`
	background-color: ${props => props.selected ? `#A1C8FD` : `#FFF`};
	cursor: pointer;	
	height: 30px;
	margin: 0px;
	overflow: hidden;
	padding: 0px;
	pointer-events: ${props => (props.disabled || props.selected) ? `none` : `all`};

	&:hover {
		background-color: #1476FB;
	}
`;

const ItemTitle = styled.label`
	box-sizing: border-box;
	color: ${props => props.disabled ? `#BFBFBF` : `#242424`};
	cursor: pointer;
	float: left;
	font-family: "Open Sans", sans-serif;
	font-size: 14px;
	font-weight: bold;
	letter-spacing: normal;
	height: 20px;
	pointer-events: ${props => props.disabled ? `none` : `all`};
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: calc(100% - 40px);

	&:disabled {
		color: #BFBFBF;
	}

	${ListItem}:hover & {
		color: #FFF;
	}
`;

const ItemDescription = styled.label`
	box-sizing: border-box;	
	color: ${props => props.disabled ? `#BFBFBF` : `#242424`};
	cursor: pointer;
	float: left;
	font-family: "Open Sans", sans-serif;
	font-size: 11px;
	font-style: italic;
	font-weight: normal;
	letter-spacing: normal;
	height: 20px;
	pointer-events: ${props => props.disabled ? `none` : `all`};
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: calc(100% - 40px);

	&:disabled {
		color: #BFBFBF;
	}

	${ListItem}:hover & {
		color: #FFF;
	}
`;

const ItemIcon = styled(Icon)`
	cursor: pointer;
	fill: ${props => props.disabled ? `#BFBFBF` : `#242424`};
	pointer-events: ${props => props.disabled ? `none` : `all`};

	${ListItem}:hover & {
		fill: #FFF;
	}
`;

const ItemIconWrapper = styled.div`
	box-sizing: border-box;
	cursor: pointer;
	float: left;
	height: 40px;
	margin: 0px;
	padding: 7px;
	width: 40px;
`;

const SimpleItem = (props) => {
	return(
		<ListItem disabled={props.disabled} {...props}>
			<ItemTitle style={{ height: '30px', padding: '5px', width: '100%' }} disabled={props.disabled}>{props.description}</ItemTitle>
		</ListItem>
	);
}

const IconTitleNDescriptionItem = (props) => {

	//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
	//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
	//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
	//P     R   R O   O P       I   E     D   D A   A D   D E         S
	//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
	
	let iconProps = {
		disabled: props.disabled,
		height: '25px',
		width: '25px',
	};

	//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
	//R   R E     S     U   U L       T   A   A D   D O   O
	//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
	//R   R E         S U   U L       T   A   A D   D O   O
	//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO

	return(
		<ListItem style={{ height: '40px' }} disabled={props.disabled} {...props}>
			<ItemIconWrapper>
				<ItemIcon icon={props.icon ? props.icon : ''} {...iconProps}/>
			</ItemIconWrapper>
			<ItemTitle disabled={props.disabled}>{props.title}</ItemTitle>
			<ItemDescription disabled={props.disabled}>{props.description}</ItemDescription>
		</ListItem>
	);
}
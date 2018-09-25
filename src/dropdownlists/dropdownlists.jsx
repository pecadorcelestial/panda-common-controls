//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

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

const Layout = styled.div`
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

export class BasicSelect extends React.Component {
	//*** CONSTRUCTOR ***
	constructor(props) {
		super(props);

		//1. Se busca el elemento correspondiente al índice seleccionado.
		let item;
		for(let i=0; i < this.props.options.length; i++) {
			if(this.props.options[i].id == this.props.selectedOption) {
				item = this.props.options[i];
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
	componentWillReceiveProps(nextProps) {
        //Aquí sólo se revisa la propiedad "selectedOption", ya que es la única que se cambia en el estado.
		if(nextProps.selectedOption == '' || parseInt(nextProps.selectedOption) < 0) {
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
		//console.log('[COMÚN][ESTILIZADOS][SELECT][handleOnChange] Target: ', event.target);
		//let id = this.props.idIsNumeric ? parseInt(event.target.value) : event.target.value;
		//NOTA: Se cambió la manera de obtener la descripción del elemento.
		//let description = '';
		let item;
		for(let i=0; i<this.props.options.length; i++) {
			if(this.props.options[i].id == event.target.value) {
				item = this.props.options[i];
				break;
			}
		}
		/*
		let selectedItem = {
			id,
			description
		};
		*/
		//console.log('[COMÚN][ESTILIZADOS][SELECT][handleOnChange] Información seleccionada: ', selectedItem);
		this.setState({ item: (event.target.value == '' || event.target.value < 0) ? undefined : item, selectedOption: (this.props.idIsNumeric ? parseInt(event.target.value) : event.target.value) }, () => {
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
								this.props.options.map(option=><Option value={option.id} key={option.id}>{option.description}</Option>)
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
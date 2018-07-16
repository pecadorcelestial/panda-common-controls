//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

const titleColor = theme('status', {
	normal: '#A7A7A7',
	complete: '#A7A7A7',
	valid: '#09BA8A',
	error: '#EF2525',
	disabled: '#BFBFBF'
});

const titleBorderColor = theme('status', {
	normal: '#BFBFBF',
	complete: '#242424',
	valid: '#09BA8A',
	error: '#EF2525',
	disabled: '#BFBFBF'
});

const textboxColor = theme('status', {
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
	padding: 0px;
	position: relative;
	width: 100%;
`;

const Title = styled.label`
	border-bottom: 1px solid ${titleBorderColor};
	box-sizing: border-box;
	color: ${titleColor};
	height: 45px;
	font-family: Open Sans;
	font-size: ${props => !props.notEmpty ? `16px` : `11px`};
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	left: 0px;
	letter-spacing: normal;
	margin: 0px;
	padding: ${props => !props.notEmpty ? `15px 0px 0px 0px` : `0px`};
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

const Textbox = styled.input`
	background-color: transparent;
	border: 0px solid transparent;
	border-radius: 0px;
	color: ${textboxColor};
	display: inline-block;
	font-size: 16px;
	height: 30px;
	outline: none;
	padding: 0px;
	position: absolute;
	top: 15px;
	width: 100%;
	z-index: 2;
	
	&:focus ~ ${Title} {
		color: #1476FB;
		font-size: 11px;
		padding: 0px;
		
		&:after {
			left: 0px;
			width: 100%;
		}
	}
`;

const Error = styled.label`
	bottom: 0px;
	color: #EF2525;
	height: 15px;
	font-family: Open Sans;
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

const ShowPassword = styled.button`
	background-color: transparent;
	background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%2037.139%2015%27%3E%3Ctitle%3Eeye%3C/title%3E%3Cpath%20fill%3D%27%23BFBFBF%27%20d%3D%27M18.569%203a6%206%200%201%200%206%206%206%206%200%200%200-6-6zm-3%2010a2%202%200%201%201%202-2%202%202%200%200%201-2%202zm3.5-3a.5.5%200%201%201%20.5-.5.5.5%200%200%201-.5.5z%27/%3E%3Cpath%20fill%3D%27%23BFBFBF%27%20d%3D%27M.499%209.5a.5.5%200%200%201-.432-.751C3.154%203.434%2010.417%200%2018.569%200s15.414%203.434%2018.5%208.749a.5.5%200%200%201-.865.5C33.294%204.239%2026.369%201%2018.569%201S3.844%204.239.932%209.251a.5.5%200%200%201-.433.249z%27/%3E%3C/svg%3E");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 20px 20px;
	border: none;
	cursor: pointer;
	height: 20px;
	margin: 0px;
	padding: 0px;
	position: absolute;
	right: 10px;
	top: 20px;
	width: 20px;
	z-index: 3;
	
	&:focus {
		outline: none;
	}
	
	&:hover {
		background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%2037.139%2015%27%3E%3Ctitle%3Eeye%3C/title%3E%3Cpath%20fill%3D%27%23000000%27%20d%3D%27M18.569%203a6%206%200%201%200%206%206%206%206%200%200%200-6-6zm-3%2010a2%202%200%201%201%202-2%202%202%200%200%201-2%202zm3.5-3a.5.5%200%201%201%20.5-.5.5.5%200%200%201-.5.5z%27/%3E%3Cpath%20fill%3D%27%23000000%27%20d%3D%27M.499%209.5a.5.5%200%200%201-.432-.751C3.154%203.434%2010.417%200%2018.569%200s15.414%203.434%2018.5%208.749a.5.5%200%200%201-.865.5C33.294%204.239%2026.369%201%2018.569%201S3.844%204.239.932%209.251a.5.5%200%200%201-.433.249z%27/%3E%3C/svg%3E");
	}
`;

export class BasicTextBox extends React.Component {
	//*** CONSTRUCTOR ***
	constructor(props) {
		super(props);
		this.state = {
			correct: false,
			complete: false,
			errors: {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			},
			text: '',
			inputType: this.props.inputType,
			showPassword: false
		};
	}
	//*** FUNCIONES DEL COMPONENTE ***
	componentWillReceiveProps(nextProps) {
		//Aquí sólo se revisa la propiedad "inputType", ya que es la única que se cambia en el estado.
		if(nextProps.inputType != this.props.inputType) this.setState({ inputType: nextProps.inputType });
	}
	//*** FUNCIONES ***
	textIsValid(originalText, regex) {
		let newRegEx = RegExp(regex);
		if(String(originalText).match(newRegEx)) {
			return true;
		} else {
			return false;
		}
	}
	//*** MÉTODOS ***
	focus = () => {
		this.TextBoxInnerRef.focus();
		if(this.props.onFocus) this.props.onFocus();
	}
	validate = () => {
		//Error.
		let errors = {
			isEmpty: false,
			invalidRegEx: false,
			error: false,
			errorMessage: ''
		};
		//Validar con expresión regular.
		if(this.props.validRegEx != '' && this.state.text != '') {
			//¿Es válido?
			if(this.textIsValid(this.state.text, this.props.validRegEx)) {
				errors = {
					isEmpty: false,
					invalidRegEx: false,
					error: false,
					errorMessage: ''
				};
				this.setState({ correct: true, errors, complete: false });
				return true;
			} else {
				errors = {
					isEmpty: false,
					invalidRegEx: true,
					error: false,
					errorMessage: ''
				};
				this.setState({ correct: false, errors, complete: false });
				return false;
			}
		}
		//Validar campo si así se requirió.
		if(this.props.isRequired && this.state.text != '') {
			errors = {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			};
			this.setState({ correct: true, errors, complete: false });
			return true;
		} else if(this.props.isRequired && this.state.text == '') {
			errors = {
				isEmpty: true,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			};
			this.setState({ correct: false, errors, complete: false });
			return false;
		}
		//En este punto sólo se revisa si hay información.
		if(this.state.text != '') {
			errors = {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			};
			this.setState({ correct: false, errors, complete: true });
			return true;
		} else {
			errors = {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			};
			this.setState({ correct: false, errors, complete: false });
			return true;
		}
	}
	reset = () => {
		this.setState({
			correct: false,
			complete: false,
			errors: {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			},
			text: '',
			inputType: this.props.inputType,
			defaultValueWasSet: false,
			showPassword: false
		});
		this.TextBoxInnerRef.value = '';
	}
	setError = (errorMessage) => {
		let errors = {
			isEmpty: false,
			invalidRegEx: false,
			error: true,
			errorMessage
		};
		this.setState({ correct: false, errors, complete: false });
	}
	getValue = () => {
		return this.state.text;
	}
	setValue = (value) => {
		this.setState({ text: value });
		this.TextBoxInnerRef.value = value;
	}
	//*** RESULTADO ***
	render() {
		
		//EEEEE RRRR  RRRR   OOO  RRRR
		//E     R   R R   R O   O R   R
		//EEE   RRRR  RRRR  O   O RRRR
		//E     R   R R   R O   O R   R
		//EEEEE R   R R   R  OOO  R   R

		let errorMessage;
		if(this.state.errors.isEmpty) {
			errorMessage = 'El campo es requerido.';
		} else if(this.state.errors.invalidRegEx) {
			errorMessage = this.props.error;
		} else if(this.state.errors.error) {
			errorMessage = this.state.errors.errorMessage;
		} else {
			errorMessage = '';
		}

		let error;
		if(!this.props.disabled && (this.state.errors.isEmpty || this.state.errors.invalidRegEx || this.state.errors.error)) {
			error = <Error ref={label => { this.ErrorRef = label; }}>{errorMessage}</Error>;
		} else {
			error = null;
		}

		//EEEEE  SSSS TTTTT IIIII L      OOO
		//E     S       T     I   L     O   O
		//EEE    SSS    T     I   L     O   O
		//E         S   T     I   L     O   O
		//EEEEE SSSS    T   IIIII LLLLL  OOO

		let status;
		if(this.props.disabled) {
			status = 'disabled';
		} else if(this.state.errors.isEmpty || this.state.errors.invalidRegEx || this.state.errors.error) {
			status = 'error';
		} else if(this.state.complete) {
			status = 'complete';
		} else if(this.state.correct) {
			status = 'valid';
		} else {
			status = 'normal';
		}

		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
		
		const textboxProps = {
			disabled: this.props.disabled,
			id: this.props.id,
			maxLength: this.props.maxLength,
			type: this.state.inputType,
			//value: this.state.text,
			onChange: (event) => {
				this.setState({ text: event.target.value });
				if(this.props.onChange) this.props.onChange(event);
			},
			onKeyPress: (event) => {
				if(this.props.valueType != 'text') {
					//45 = guión (-)
					//46 = punto (.)
					let validInput = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
					switch(this.props.valueType) {
						case 'decimal':
							validInput.push(46);
							break;
					}
					//Se evita que se tecleé un valor no numérico.
					if (validInput.indexOf(event.which) < 0) {
						event.preventDefault();
					}
				}
				//Se manda la información al padre, por si se desea capturar el ENTER.
				if(this.props.onKeyPress) this.props.onKeyPress(event);
			},
			onFocus: () => {
				let errors = {
					isEmpty: false,
					invalidRegEx: false,
					error: false,
					errorMessage: ''
				};
				this.setState({ correct: false, errors, complete: false });
				if (this.props.onFocus) this.props.onFocus();
			},
			onBlur: () => {this.validate();}
		};
		
		const showPasswordProps = {
			onMouseDown: () => {
				this.setState({ inputType: 'text' });
			},
			onMouseUp: () => {
				this.setState({ inputType: 'password' });
			},
			onMouseOut: () => {
				this.setState({ inputType: 'password' });
			},
			onTouchStart: () => {
				this.setState({ inputType: 'text' });
			},
			onTouchEnd: () => {
				this.setState({ inputType: 'password' });
			}
		};
		
		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
		return (
			<ThemeProvider theme={{ status }}>
				<Layout>
					<Textbox {...textboxProps} innerRef={input => this.TextBoxInnerRef = input}/>
					<Title notEmpty={this.state.text != ''}>{this.props.title}</Title>
					{
						this.props.inputType === 'password' ?
						<ShowPassword {...showPasswordProps}/> :
						null
					}
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

BasicTextBox.propTypes = {
	//Obligatorios.
	title: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired,
	maxLength: PropTypes.number.isRequired,
	//Opcionales.
	backgroundImage: PropTypes.string,	//*
	disabled: PropTypes.bool,
	id: PropTypes.string,
	inputType: PropTypes.oneOf(['text', 'password', 'email', 'number']),
	valueType: PropTypes.oneOf(['number', 'decimal', 'text']),
	//Validación.
	isRequired: PropTypes.bool,
	validRegEx: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	//Funciones.
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onKeyPress: PropTypes.func
}

BasicTextBox.defaultProps={
	backgroundImage: '',
	disabled: false,
	id: '',
	inputType: 'text',
	isRequired: false,
	validRegEx: '',
	valueType: 'text'
}
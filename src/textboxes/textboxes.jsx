//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

import { Icon } from '../icons/icons';
import { Calendar } from '../calendar/calendar';
import { ToolTip } from '../tooltip/tooltip';

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
	font-family: "Open Sans", sans-serif;
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

const ShowPasswordSVG = styled.svg`
	background-color: transparent;
	cursor: pointer;
	fill: ${props => props.disabled ? `#BFBFBF` : `#242424`};
	height: ${props => props.height};
	pointer-events: ${props => props.disabled ? `none` : `all`};
	position: absolute;
	right: 10px;
	top: 20px;
	width: ${props => props.width};
	z-index: 3;
`;

const CalendarIcon = Icon.extend.attrs({
	icon: 'calendar'
})`
	cursor: pointer;
	fill: ${props => props.disabled ? `#BFBFBF` : `#242424`};
	pointer-events: ${props => props.disabled ? `none` : `all`};
	position: absolute;
	right: 10px;
	top: 20px;
	z-index: 3;
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
			inputType: this.props.inputType !== 'date' ? this.props.inputType : 'text',
			showPassword: false
		};
	}
	//*** FUNCIONES DEL COMPONENTE ***
	componentWillReceiveProps(nextProps) {
		//Aquí sólo se revisa la propiedad "inputType", ya que es la única que se cambia en el estado.
		if(nextProps.inputType != this.props.inputType) {
			let inputType = nextProps.inputType !== 'date' ? nextProps.inputType : 'text';
			this.setState({ inputType });
		}
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
			disabled: this.props.disabled,
			height: '20px',
			viewBox: '0 0 511.626 511.627',
			width: '20px',
			onMouseDown: () => {
				this.setState({ inputType: 'text' });
			},
			onMouseUp: () => {
				this.setState({ inputType: 'password' });
			},
			onMouseLeave: () => {
				this.setState({ inputType: 'password' });
			},
			onTouchStart: () => {
				this.setState({ inputType: 'text' });
			},
			onTouchEnd: () => {
				this.setState({ inputType: 'password' });
			}
		};

		//BBBB   OOO  TTTTT  OOO  N   N EEEEE  SSSS
		//B   B O   O   T   O   O NN  N E     S
		//BBBB  O   O   T   O   O N N N EEE    SSS
		//B   B O   O   T   O   O N  NN E         S
		//BBBB   OOO    T    OOO  N   N EEEEE SSSS

		/* {div => this.CalendarIconRef = div} */
		let calendarButton;
		if(this.props.inputType === 'date') {
			calendarButton = <CalendarIcon id='svg-calendar-icon' icon='calendar' height='20px' width='20px' onClick={() => { console.log('[COMÚN][TEXTBOX][render][CALENDARIO(ICONO)] OnClick!'); this.ToolTipRef.show(); }}/>;
		} else {
			calendarButton = null;
		}
		
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
						<ShowPasswordSVG {...showPasswordProps}>
							<g>
							{
								this.state.inputType === 'password' ?
								<g>
									<path d="M361.161,291.652c15.037-21.796,22.56-45.922,22.56-72.375c0-7.422-0.76-15.417-2.286-23.984l-79.938,143.321 C326.235,329.101,346.125,313.438,361.161,291.652z"/> 
									<path d="M372.872,94.221c0.191-0.378,0.28-1.235,0.28-2.568c0-3.237-1.522-5.802-4.571-7.715c-0.568-0.38-2.423-1.475-5.568-3.287 c-3.138-1.805-6.14-3.567-8.989-5.282c-2.854-1.713-5.989-3.472-9.422-5.28c-3.426-1.809-6.375-3.284-8.846-4.427 c-2.479-1.141-4.189-1.713-5.141-1.713c-3.426,0-6.092,1.525-7.994,4.569l-15.413,27.696c-17.316-3.234-34.451-4.854-51.391-4.854 c-51.201,0-98.404,12.946-141.613,38.831C70.998,156.08,34.836,191.385,5.711,236.114C1.903,242.019,0,248.586,0,255.819 c0,7.231,1.903,13.801,5.711,19.698c16.748,26.073,36.592,49.396,59.528,69.949c22.936,20.561,48.011,37.018,75.229,49.396 c-8.375,14.273-12.562,22.556-12.562,24.842c0,3.425,1.524,6.088,4.57,7.99c23.219,13.329,35.97,19.985,38.256,19.985 c3.422,0,6.089-1.529,7.992-4.575l13.99-25.406c20.177-35.967,50.248-89.931,90.222-161.878 C322.908,183.871,352.886,130.005,372.872,94.221z M158.456,362.885C108.97,340.616,68.33,304.93,36.547,255.822 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.206-17.417,64.237c0,20.365,4.661,39.68,13.99,57.955 c9.327,18.274,22.27,33.4,38.83,45.392L158.456,362.885z M265.525,155.887c-2.662,2.667-5.906,3.999-9.712,3.999 c-16.368,0-30.361,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971c0,3.811-1.336,7.044-3.999,9.71 c-2.668,2.667-5.902,3.999-9.707,3.999c-3.809,0-7.045-1.334-9.71-3.999c-2.667-2.666-3.999-5.903-3.999-9.71 c0-23.79,8.52-44.206,25.553-61.242c17.034-17.034,37.447-25.553,61.241-25.553c3.806,0,7.043,1.336,9.713,3.999 c2.662,2.664,3.996,5.901,3.996,9.707C269.515,149.992,268.181,153.228,265.525,155.887z"/>
									<path d="M505.916,236.114c-10.853-18.08-24.603-35.594-41.255-52.534c-16.646-16.939-34.022-31.496-52.105-43.68l-17.987,31.977 c31.785,21.888,58.625,49.87,80.51,83.939c-23.024,35.782-51.723,65-86.07,87.648c-34.358,22.661-71.712,35.693-112.065,39.115 l-21.129,37.688c42.257,0,82.18-9.038,119.769-27.121c37.59-18.076,70.668-43.488,99.216-76.225 c13.322-15.421,23.695-29.219,31.121-41.401c3.806-6.476,5.708-13.046,5.708-19.702 C511.626,249.157,509.724,242.59,505.916,236.114z"/>
								</g> :
								<path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z"/>
							}
							</g>
						</ShowPasswordSVG> :
						null
					}
					{calendarButton}
					{error}
					{
						this.props.inputType === 'date' ?
						<ToolTip elevation={14} anchorID='svg-calendar-icon' ref={tooltip => this.ToolTipRef = tooltip}>
							<Calendar selectedDate='08/15/2018' language='es-MX' theme='default' onChange={(date) => { console.log('[COMÚN][TEXTBOX][render][CALENDARIO][onChange] Fecha: ', date); }}/>
						</ToolTip> :
						null
					}
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
	inputType: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date']),
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
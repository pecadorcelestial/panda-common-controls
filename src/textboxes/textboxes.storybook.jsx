//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { BasicTextBox } from './textboxes';
import { Button } from '../buttons/buttons';
import { CheckBox } from '../checkboxes/checkboxes';
import { BasicSelect } from '../dropdownlists/dropdownlists';
//import { FadeIn } from '../animations/animations';

const Layout = styled.div`
    display: inline-block;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const LeftColumn = styled.div`
    border-right: 3px solid #BFBFBF;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: 300px;
`;

const RightColumn = styled.div`
	box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: calc(100% - 650px);
`;

const Control = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const AnimationWrapper = styled.div`
    height: 100px;
    margin: 0px;
    padding: 0px;
    position: relative;
    width: 100px;
`;

const Option = styled.div`
    display: inline-block;
    height: auto;
    margin: 5px 0px;
    padding: 0px;
    width: 100%;
`;

const Title = styled.label`
	color: #000;
    display: inline-block;
	height: 35px;
	font-family: Open Sans;
	font-size: 20px;
	font-weight: bold;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 0px;
    text-align: left;
	width: 100%;
`;

const OptionTitle = styled.label`
    box-sizing: border-box;
	color: #000;
    display: inline-block;
    height: auto;
    float: left;
	font-family: Open Sans;
	font-size: 12px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 10px 0px 0px 0px;
    width: 20%;
`;

const OptionInput = styled.input`
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #000;
    border-left: none;
	border-radius: 0px;box-sizing: border-box;
	color: #000;
    display: inline-block;
    display: inline-block;
    float: left;
	font-size: 14px;
    height: 30px;
    margin: 0px;
	outline: none;
	padding: 7px 0px 0px 0px;
	width: ${props => (props.style != undefined && props.style.width != undefined) ? props.style.width : `79%`};
`;

const OptionButtonWrapper = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: ${props => (props.style != undefined && props.style.margin != undefined) ? props.style.margin : `5px 5px 0px 0px`};
    padding: 0px;
    width: auto;
`;

const ColoredDiv = styled.div`
    background-color: #8394DE;
    height: 100px;
    width: 100px;
`;

class TextboxStorybook extends Component {
    constructor() {
        super();
        this.state = {
            //Obligatorios.
            title: 'Título',
            error: 'Error configurado en propiedades.',
            maxLength: 50,
            //Opcionales.
            //backgroundImage: PropTypes.string,
            disabled: false,
            id: 'identificador',
            inputType: 'password',
            valueType: 'text',
            //Validación.
            isRequired: true,
            validRegEx: '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,4})+$',
            //Métodos.
            customError: '',
            customValue: '',
            //Componentes "dinámicos"
            Animate: undefined
        };
    }
    componentDidMount() {
        const { Animate } = require('../animations/animations');
        console.log('[STORYBOOK][TEXTBOOK][componentDidMount] Animate: ', Animate);
        this.setState({ Animate });
    }
    render() {

        //V   V  AAA  L      OOO  RRRR  EEEEE  SSSS
        //V   V A   A L     O   O R   R E     S
        //V   V AAAAA L     O   O RRRR  EEE    SSS
        // V V  A   A L     O   O R   R E         S
        //  V   A   A LLLLL  OOO  R   R EEEEE SSSS

        const inputTypes = [
            {
                id: 'text',
                description: 'Texto'
            },
            {
                id: 'password',
                description: 'Password'
            },
            {
                id: 'email',
                description: 'Correo electrónico'
            },
            {
                id: 'number',
                description: 'Número'
            },
        ];

        const valueTypes = [
            {
                id: 'number',
                description: 'Númerico'
            },
            {
                id: 'decimal',
                description: 'Decimal'
            },
            {
                id: 'text',
                description: 'Texto'
            }
        ];

		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
		
        const textboxProps = {
            //Obligatorios.
            title: this.state.title,
            error: this.state.error,
            maxLength: this.state.maxLength,
            //Opcionales.
            disabled: this.state.disabled,
            id: this.state.id,
            inputType: this.state.inputType,
            valueType: this.state.valueType,
            //Validación.
            isRequired: this.state.isRequired,
            validRegEx: this.state.validRegEx,
            //Funciones.
            onChange: (event) => {console.log('[STORYBOOK][TEXTBOX][onChange] Valor: ', event.target.value);},
            onFocus: () => {console.log('[STORYBOOK][TEXTBOX][onFocus]');},
            onKeyPress: (event) => {console.log('[STORYBOOK][TEXTBOX][onKeyPress] Tecla: ', event.which);}
        };

        const inputTypesProps = {
            title: 'Tipo de dato:',
            error: 'Debe seleccionar un valor.',
            options: inputTypes,
            selectedOption: this.state.inputType,
            onChange: (event) => { this.setState({ inputType: event.target.value }); },
            id: '',
            placeHolder: 'Selecciona un tipo',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        }

        const valueTypesProps = {
            title: 'Tipo de valor:',
            error: 'Debe seleccionar un valor.',
            options: valueTypes,
            selectedOption: this.state.valueType,
            onChange: (event) => { this.setState({ valueType: event.target.value }); },
            id: '',
            placeHolder: 'Selecciona un tipo',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        }

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
        return(
            <Layout>
                <LeftColumn>
                    <Title>Propiedades:</Title>
                    <Option>
                        <OptionTitle>Título:</OptionTitle>
                        <OptionInput onChange={(event) => { this.setState({ title: event.target.value }); }} value={this.state.title}/>
                    </Option>
                    <Option>
                        <OptionTitle>Error:</OptionTitle>
                        <OptionInput onChange={(event) => { this.setState({ error: event.target.value }); }} value={this.state.error}/>
                    </Option>
                    <Option>
                        <OptionTitle>Longitud:</OptionTitle>
                        <OptionInput type='number' min='1' max='250' onChange={(event) => { this.setState({ maxLength: event.target.value }); }} value={this.state.maxLength}/>
                    </Option>
                    <Option>
                        <CheckBox checked={this.state.disabled} onChange={(checked) => { this.setState({ disabled: checked }); }}>¿Deshabilidato?</CheckBox>
                    </Option>
                    <Option>
                        <BasicSelect {...inputTypesProps}/>
                    </Option>
                    <Option>
                        <BasicSelect {...valueTypesProps}/>
                    </Option>
                    <Option>
                        <CheckBox checked={this.state.isRequired} onChange={(checked) => { this.setState({ isRequired: checked }); }}>¿Es requerido?</CheckBox>
                    </Option>
                    <Option>
                        <OptionTitle>RegEx:</OptionTitle>
                        <OptionInput onChange={(event) => { this.setState({ validRegEx: event.target.value }); }} value={this.state.validRegEx}/>
                    </Option>
                </LeftColumn>
                <LeftColumn>
                    <Title>Métodos:</Title>
                    <Option>
                        <OptionButtonWrapper>
                            <Button theme='blue' size='small' onClick={(event) => { this.TextBoxRef.focus(); }}>focus</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='blue' size='small' onClick={(event) => { this.TextBoxRef.validate(); }}>validate</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='blue' size='small' onClick={(event) => { this.TextBoxRef.reset(); }}>reset</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='blue' size='small' onClick={(event) => { let value = this.TextBoxRef.getValue(); alert(`[STORYBOOK][TEXTBOX][getValue] Valor: ${value}`); }}>getValue</Button>
                        </OptionButtonWrapper>
                    </Option>
                    <Option>
                        <OptionInput style={{ width: '50%' }} onChange={(event) => { this.setState({ customError: event.target.value }); }} value={this.state.customError}/>
                        <OptionButtonWrapper style={{ margin: '0px 0px 0px 10px' }}>
                            <Button theme='blue' size='small' onClick={(event) => { this.TextBoxRef.setError(this.state.customError); }}>setError</Button>
                        </OptionButtonWrapper>
                    </Option>
                    <Option>                        
                        <OptionInput style={{ width: '50%' }} onChange={(event) => { this.setState({ customValue: event.target.value }); }} value={this.state.customValue}/>
                        <OptionButtonWrapper style={{ margin: '0px 0px 0px 10px' }}>
                            <Button theme='blue' size='small' onClick={(event) => { this.TextBoxRef.setValue(this.state.customValue); }}>setValue</Button>
                        </OptionButtonWrapper>
                    </Option>
                    <Title>Animación:</Title>
                    <Option>
                        <OptionButtonWrapper>
                            <Button theme='blue' size='small' onClick={(event) => { this.AnimateRef.triggerEntranceAnimation(); }}>triggerEntrance</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='blue' size='small' onClick={(event) => { this.AnimateRef.triggerExitAnimation(); }}>triggerExit</Button>
                        </OptionButtonWrapper>
                    </Option>
                </LeftColumn>
                <RightColumn>
                    <Control>
                        <BasicTextBox {...textboxProps} ref={(textbox) => { this.TextBoxRef = textbox;}}/>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                        {
                            this.state.Animate ?
                            <this.state.Animate type='zoom' executeWhen='isMounted' ref={animate => { this.AnimateRef = animate; }}>
                                <ColoredDiv/>
                            </this.state.Animate> :
                            null
                        }
                        </AnimationWrapper>
                    </Control>
                </RightColumn>
            </Layout>
        );
    }
}

export default TextboxStorybook;
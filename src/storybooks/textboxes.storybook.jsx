//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { BasicTextBox } from '../textboxes/textboxes';
import { Button } from '../buttons/buttons';
import { BasicCard } from '../cards/cards';
import { CheckBox } from '../checkboxes/checkboxes';
import { BasicSelect } from '../dropdownlists/dropdownlists';
import { Loading, Animate } from '../animations/animations';
import { ToastNotifiaction } from '../toastnotifications/toastnotifications';

import { Calendar } from '../calendar/calendar';

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

const CardContent = styled.div`
    box-sizing: border-box;
    height: 100px;
    margin: 0px;
    padding: 20px;
    width: 100%;
`;

const AnimationWrapper = styled.div`
    height: 100px;
    margin: 10px 0px 0px 0px;
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
    background-color: ${props => props.color};
    height: 100px;
    width: 100px;
`;

class TextboxStorybook extends Component {
    constructor() {
        super();
        this.state = {
            //Obligatorios.
            title: 'Title',
            error: 'Error setup by properties.',
            maxLength: 50,
            //Opcionales.
            //backgroundImage: PropTypes.string,
            disabled: false,
            id: 'identifier',
            inputType: 'password',
            valueType: 'text',
            //Validación.
            isRequired: true,
            validRegEx: '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)\\.([a-zA-Z]{2,4})+$',
            //Métodos.
            customError: '',
            customValue: '',
            //Animaciones.
            fadeFrom: 'right',
            flipFrom: 'vertical',
            //Componentes "dinámicos"
            Animate: undefined
        };
    }
    componentDidMount() {
        const { Animate } = require('../animations/animations');
        //console.log('[STORYBOOK][TEXTBOOK][componentDidMount] Animate: ', Animate);
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
                description: 'Text'
            },
            {
                id: 'password',
                description: 'Password'
            },
            {
                id: 'email',
                description: 'Email'
            },
            {
                id: 'number',
                description: 'Number'
            },
        ];

        const valueTypes = [
            {
                id: 'number',
                description: 'Numeric'
            },
            {
                id: 'decimal',
                description: 'Decimal'
            },
            {
                id: 'text',
                description: 'Text'
            }
        ];

        const fadeFromOptions = [
            {
                id: 'left',
                description: 'Left'
            },
            {
                id: 'right',
                description: 'Right'
            },
            {
                id: 'top',
                description: 'Top'
            },
            {
                id: 'bottom',
                description: 'Bottom'
            }
        ];

        const flipFromOptions = [
            {
                id: 'vertical',
                description: 'Vertical'
            },
            {
                id: 'horizontal',
                description: 'Horizontal'
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
            onChange: (event) => {console.log('[STORYBOOK][TEXTBOX][onChange] Value: ', event.target.value);},
            onFocus: () => {console.log('[STORYBOOK][TEXTBOX][onFocus]');},
            onKeyPress: (event) => {console.log('[STORYBOOK][TEXTBOX][onKeyPress] Key: ', event.which);}
        };

        const inputTypesProps = {
            title: 'Data type:',
            error: 'You must select an option.',
            options: inputTypes,
            selectedOption: this.state.inputType,
            onChange: (event) => { this.setState({ inputType: event.target.value }); },
            id: '',
            placeHolder: 'Select a type',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        };

        const valueTypesProps = {
            title: 'Value type:',
            error: 'You must select an option.',
            options: valueTypes,
            selectedOption: this.state.valueType,
            onChange: (event) => { this.setState({ valueType: event.target.value }); },
            id: '',
            placeHolder: 'Select a type',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        };

        const fadeFromProps = {
            title: 'Fade animation (from):',
            error: 'You must select an option.',
            options: fadeFromOptions,
            selectedOption: this.state.fadeFrom,
            onChange: (event) => { this.setState({ fadeFrom: event.target.value }); },
            id: '',
            placeHolder: 'Select a type',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        };

        const flipFromProps = {
            title: 'Flip animation (from):',
            error: 'You must select an option.',
            options: flipFromOptions,
            selectedOption: this.state.flipFrom,
            onChange: (event) => { this.setState({ flipFrom: event.target.value }); },
            id: '',
            placeHolder: 'Select a type',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        };

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
        return(
            <Layout>
                <LeftColumn>
                    <Title>Properties:</Title>
                    <Option>
                        <OptionTitle>Title:</OptionTitle>
                        <OptionInput onChange={(event) => { this.setState({ title: event.target.value }); }} value={this.state.title}/>
                    </Option>
                    <Option>
                        <OptionTitle>Error:</OptionTitle>
                        <OptionInput onChange={(event) => { this.setState({ error: event.target.value }); }} value={this.state.error}/>
                    </Option>
                    <Option>
                        <OptionTitle>Length:</OptionTitle>
                        <OptionInput type='number' min='1' max='250' onChange={(event) => { this.setState({ maxLength: event.target.value }); }} value={this.state.maxLength}/>
                    </Option>
                    <Option>
                        <CheckBox checked={this.state.disabled} onChange={(checked) => { this.setState({ disabled: checked }); }}>Disabled?</CheckBox>
                    </Option>
                    <Option>
                        <BasicSelect {...inputTypesProps}/>
                    </Option>
                    <Option>
                        <BasicSelect {...valueTypesProps}/>
                    </Option>
                    <Option>
                        <CheckBox checked={this.state.isRequired} onChange={(checked) => { this.setState({ isRequired: checked }); }}>Required?</CheckBox>
                    </Option>
                    <Option>
                        <OptionTitle>RegEx:</OptionTitle>
                        <OptionInput onChange={(event) => { this.setState({ validRegEx: event.target.value }); }} value={this.state.validRegEx}/>
                    </Option>
                </LeftColumn>
                <LeftColumn>
                    <Title>Methods:</Title>
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
                    <Title>Animations:</Title>
                    <Option>
                        <Loading size={{ height: 60, width: 60 }}/>
                    </Option>
                    <Option>
                        <BasicSelect {...fadeFromProps}/>
                    </Option>
                    <Option>
                        <BasicSelect {...flipFromProps}/>
                    </Option>
                    <Option>
                        <OptionButtonWrapper>
                            <Button theme='blue' size='small' onClick={(event) => { this.AnimateFadeRef.triggerEntranceAnimation(); this.AnimateFlipRef.triggerEntranceAnimation(); this.AnimateZoomRef.triggerEntranceAnimation(); }}>triggerEntrance</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='blue' size='small' onClick={(event) => { this.AnimateFadeRef.triggerExitAnimation(); this.AnimateFlipRef.triggerExitAnimation(); this.AnimateZoomRef.triggerExitAnimation(); }}>triggerExit</Button>
                        </OptionButtonWrapper>
                    </Option>
                    <Title>Notifications:</Title>
                    <Option>
                        <OptionButtonWrapper>
                            <Button theme='main' size='small' onClick={(event) => { this.ToastNotificationRef.show(); }}>Show toast</Button>
                        </OptionButtonWrapper>
                    </Option>
                </LeftColumn>
                <RightColumn>
                    <Control>
                        <BasicCard elevation={32} width='100%'>
                            <CardContent>
                                <BasicTextBox {...textboxProps} ref={(textbox) => { this.TextBoxRef = textbox;}}/>
                            </CardContent>
                        </BasicCard>
                    </Control>
                    <Control>
                        <Calendar selectedDate='32-11-2018' language='es-ES' minDate='07/27/2018'/>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='fade' from={this.state.fadeFrom} executeWhen='isVisible' ref={animate => { this.AnimateFadeRef = animate; }}>
                                <ColoredDiv color='#800080'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='flip' from={this.state.flipFrom} executeWhen='isVisible' ref={animate => { this.AnimateFlipRef = animate; }}>
                                <ColoredDiv color='#FF0033'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='zoom' executeWhen='isVisible' ref={animate => { this.AnimateZoomRef = animate; }}>
                                <ColoredDiv color='#00FF7F'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                    <div style={{ height: '2000px', width: '100%' }}/>
                </RightColumn>
                {/* NOTIFICACIONES */}
                <ToastNotifiaction notificationType='success' from='bottom' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.ToastNotificationRef = notification; }}/>
            </Layout>
        );
    }
}

export default TextboxStorybook;
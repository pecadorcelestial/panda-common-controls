//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { BasicTextBox } from '../textboxes/textboxes';
import { Button } from '../buttons/buttons';
import { BasicCard } from '../cards/cards';
import { CheckBox } from '../checkboxes/checkboxes';
import { BasicSelect } from '../dropdownlists/dropdownlists';
import { RadioButtonsGroup } from '../radiobuttons/radiobuttons';

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

	@media screen and (max-width: 767px) {
		width: 100%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 100%;
	}
`;

const RightColumn = styled.div`
	box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: calc(100% - 650px);

	@media screen and (max-width: 767px) {
		width: 100%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 100%;
	}
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
	font-family: "Open Sans", sans-serif;
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
	font-family: "Open Sans", sans-serif;
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
	width: 79%;
`;

const OptionButtonWrapper = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: ${props => (props.style != undefined && props.style.margin != undefined) ? props.style.margin : `5px 5px 0px 0px`};
    padding: 0px;
    width: auto;
`;

class StorybookVol1 extends Component {
    constructor() {
        super();
        let today = new Date();
        let minDate = today.toLocaleDateString('en-EU');
        this.state = {
            //Obligatorios.
            title: 'Title',
            error: 'Error setup by properties.',
            maxLength: 50,
            //Opcionales.
            //backgroundImage: PropTypes.string,
            disabled: false,
            id: 'identifier',
            inputType: 'date',
            valueType: 'text',
            //Validación.
            isRequired: true,
            validRegEx: '^\\d{2}\/\\d{2}\/\\d{4}$', //'^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)\\.([a-zA-Z]{2,4})+$',
            //Tipo: Fecha.
            language: 'es-MX',
            minDate,
            //Métodos.
            customError: '',
            customValue: ''
        };
    }
    componentDidMount() {
       
    }
    handleJSON = () => {
        //"domain\\this"
        let value = this.TextBoxRef.getValue(), secret = 'alsQWERBAISDR', key = 'lssuyANWOEVNANLSDGHqooe';
        console.log(value);
        let json = { item: value, secret: secret, key: key};
        //Al ser sólo JSON (o después de usar JSON.parse), el caracter es "decodificado", osea, cambiado de \\ a uno sólo \
        console.log(json);
        //Después de usar "stringify", el valor es sólo texto.
        console.log(JSON.stringify(json));
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
            {
                id: 'date',
                description: 'Date'
            }
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

        const radioButtons = [
            {
                name: 'Option #1',
                value: 1
            },
            {
                name: 'Option #2',
                value: 2
            },
            {
                name: 'Option #3',
                value: 3
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
            onChange: (event) => { 
                event.preventDefault();
                console.log('[STORYBOOK][INPUT TYPE][onChange] Valor: ', event.target.value);
                this.setState({ inputType: event.target.value }); 
            },
            onOptionChange: (item) => { 
                //item.preventDefault();
                console.log('[STORYBOOK][INPUT TYPE][onOptionChange] Elemento: ', item);
                //this.setState({ inputType: event.target.value }); 
            },
            id: 'ddl-unique-id',
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
                </LeftColumn>
                <RightColumn>
                    <Control>
                        <BasicCard elevation={32} width='100%'>
                            <CardContent>
                                <BasicTextBox {...textboxProps} style={{ margin: '10px', width: '100%' }} ref={(textbox) => { this.TextBoxRef = textbox;}}/>
                            </CardContent>
                        </BasicCard>
                    </Control>
                    <Title>RadioButtons:</Title>
                    <Control>
                        <RadioButtonsGroup options={radioButtons} selectedValue={2} onChange={(value) => { console.log('[STORYBOOK][RADIOBUTTONS][onChange] Value: ', value); }}/>
                    </Control>
                    <Title>JSON:</Title>
                    <Control>
                        <Button theme='red' size='small' onClick={this.handleJSON}>Stringify</Button>
                    </Control>
                </RightColumn>
            </Layout>
        );
    }
}

export default StorybookVol1;
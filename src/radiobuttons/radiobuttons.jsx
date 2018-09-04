//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.label`
    box-sizing: border-box;
    color: #242424;
    cursor: pointer;
    display: inline-block;
	height: 30px;
	font-family: "Open Sans", sans-serif;
	font-size: 16px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 5px 0px 0px 25px;
	position: relative;
	text-align: left;
	width: auto;
    white-space: nowrap;
`;

const CheckMark = styled.div`
    background-color: ${props => props.checked ? `#1476FB`: `#BFBFBF`};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    left: 0;
    margin: 0px;
    position: absolute;
    top: 5px;
    width: 20px;
    
	transition: all .3s;
	
    ${Input}:hover & {
        background-color: ${props => props.checked ? `#11AAFF`: `#A7A7A7`};
    }

    ${props => props.checked ? `
        &:after {
            border: solid white;
            border-width: 0px 3px 3px 0px;
            content: "";
            display: block;
            height: 10px;
            left: 6px;
            position: absolute;
            top: 2px;
            width: 5px;

            transform: rotate(45deg);
        }` : ``}
`;

export class RadioButton extends Component {
    render() {
        return(
            <Input {...this.props} onClick={() => { if(this.props.onChange) { this.props.onChange(this.props.value); } }}>
                <CheckMark checked={this.props.checked}/>
                {this.props.children}
            </Input>
        );
    }
}

RadioButton.propTypes = {
    //Obligatorios.
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    //Opcionales.
    checked: PropTypes.bool,
    //Funciones.
    onChange: PropTypes.func
};

RadioButton.defaultProps = {
    checked: false
};

// GGGG RRRR  U   U PPPP   OOO
//G     R   R U   U P   P O   O
//G  GG RRRR  U   U PPPP  O   O
//G   G R   R U   U P     O   O
// GGGG R   R  UUU  P      OOO

const Layout = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: auto;
`;

const Buttons = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

export class RadioButtonsGroup extends Component {
    //*** CONSTRUCTOR ***
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: this.props.selectedValue
        };
    }
    //*** MÉTODOS ***
    getValue = () => {
        return this.state.selectedValue;
    }
    setValue = (value) => {
        this.setState({ selectedValue: value });
    }
    //*** RESULTADO ***
    render() {
        return(
            <Layout>
                <Buttons>
                    {
                        this.props.options.map((option, index) => <RadioButton key={`rbt-opt-${index}`} value={option.value} checked={option.value == this.state.selectedValue} onChange={(value) => { this.setState({ selectedValue: value }); if(this.props.onChange) { this.props.onChange(value); } }}>{option.name}</RadioButton>)
                    }
                </Buttons>
            </Layout>
        );
    }
}

RadioButtonsGroup.propTypes = {
    //Obligatorio.
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        })
    ).isRequired,
    selectedValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    //Funciones.
    onChange: PropTypes.func
};
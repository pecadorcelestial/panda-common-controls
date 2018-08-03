//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
	display: inline-block;
	height: 30px;
	margin: 0px;
	padding: 0px;
	position: relative;
    width: 100%;
`;

const CheckMark = styled.div`
    background-color: ${props => props.checked ? `#1476FB`: `#BFBFBF`};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 20px;
    left: 0;
    margin: 0px;
    position: absolute;
    top: 5px;
    width: 20px;
    
    ${Layout}:hover & {
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

const Title = styled.label`
    box-sizing: border-box;
    color: #242424;
    cursor: pointer;
	height: 30px;
	font-family: "Open Sans", sans-serif;
	font-size: 16px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	left: 20px;
	letter-spacing: normal;
	margin: 0px;
	padding: 4px 0px 0px 5px;
	position: absolute;
	text-align: left;
	top: 0px;
	width: auto;
    white-space: nowrap;
`;

export class CheckBox extends Component {
    //*** CONSTRUCTOR ***
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }
    //*** MÉTODOS ***
    getValue = () => {
        return this.state.checked;
    }
    setValue = (value) => {
        this.setState({ checked: value });
    }
    //*** RESULTADO ***
    render() {
        return(
            <Layout onClick={() => { let checked = !this.state.checked; this.setState({ checked }); if(this.props.onChange) this.props.onChange(checked); }}>
                <CheckMark checked={this.state.checked}/>
                <Title checked={this.state.checked}>{this.props.children}</Title>
            </Layout>
        );
    }
}

CheckBox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

CheckBox.defaultProps = {
    checked: false
};
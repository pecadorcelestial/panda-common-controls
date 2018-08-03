//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';

// CCCC  OOO  N   N      TTTTT EEEEE M   M  AAA
//C     O   O NN  N        T   E     MM MM A   A
//C     O   O N N N        T   EEE   M M M AAAAA
//C     O   O N  NN        T   E     M   M A   A
// CCCC  OOO  N   N        T   EEEEE M   M A   A

const getButtonTheme = (theme) => {
	switch(theme) {
		case 'main':
			return `
				background-color: #FF456A;
				border: 1px solid #FF456A;
				color: #FFF;
				
				&:hover{
					background-color: #CC1F62;
					border: 1px solid #CC1F62;
					color: #FFF;
					text-decoration: none;
				}
				
				&:disabled {
					background-color: #BFBFBF;
					border: 1px solid #BFBFBF;
					pointer-events: none;
				}
			`;
		case 'secondary':
			return `
				background-color: #FFF;
				border: 1px solid #FF456A;
				color: #FF456A;
				
				&:hover {
					background-color: #CC1F62;
					border: 1px solid #CC1F62;
					color: #FFF;
					text-decoration: none;
				}
				
				&:disabled {
					background-color: #BFBFBF;
					border: 1px solid #BFBFBF;
					color: #FFF;
					pointer-events: none;
				}
			`;
		case 'flat':
			return `
				background-color: transparent;
				border: 1px solid transparent;
				color: #FF456A;
				
				&:hover {
					background-color: #EBEBEB;
					border: 1px solid #EBEBEB;
					color: #FF456A;
					text-decoration: none;
				}
				
				&:disabled {
					color: #BFBFBF;
					pointer-events: none;
				}
			`;
		case 'blue':
			return `
				background-color: #1476FB;
				border: 1px solid #1476FB;
				color: #FFF;
				
				&:hover{
					background-color: #0960D3;
					border: 1px solid #0960D3;
					color: #FFF;
					text-decoration: none;
				}
				
				&:disabled {
					background-color: #BFBFBF;
					border: 1px solid #BFBFBF;
					pointer-events: none;
				}
			`;
		case 'flatBlue':
			return `
				background-color: #FFF;
				border: 1px solid #FFF;
				color: #1476FB;
				
				&:hover {
					background-color: #EBEBEB;
					border: 1px solid #EBEBEB;
					text-decoration: none;
				}
				
				&:disabled {
					color: #BFBFBF;
					pointer-events: none;
				}
			`;
	}
}

const getButtonSize = (size) => {
	switch(size) {
		case 'medium':
			return `
				font-size: 16px;
				height: 40px;
			`;
		case 'big':
			return `
				font-size: 18px;
				height: 46px;
			`;
		case 'small':
		default:
			return `
				font-size: 14px;
				height: 30px;
			`;
	}
}

export const Button = styled.button`
	border-radius: 5px;
	cursor: pointer;
	float: ${props => (props.style != undefined && props.style.float != undefined) ? props.style.float : `unset`};
	font-family: "Open Sans", sans-serif;	
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
	letter-spacing: normal;
	padding: 0px 30px;
	text-align: center;
	width: ${props => (props.style != undefined && props.style.width != undefined) ? props.style.width : `auto`};
	
	transition: all .3s;
	
	&:focus {
		outline: none;
	}
	
	${props => getButtonTheme(props.theme)}	
	
	${props => getButtonSize(props.size)}	
	
`;

Button.propTypes = {
	theme: PropTypes.oneOf(['main', 'secondary', 'flat', 'blue', 'flatBlue']),
	size: PropTypes.oneOf(['small', 'medium', 'big'])
};

Button.defaultProps = {
	theme: 'main',
	size: 'small'
}
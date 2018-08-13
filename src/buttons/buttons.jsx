//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../icons/icons';

// CCCC  OOO  N   N      TTTTT EEEEE M   M  AAA
//C     O   O NN  N        T   E     MM MM A   A
//C     O   O N N N        T   EEE   M M M AAAAA
//C     O   O N  NN        T   E     M   M A   A
// CCCC  OOO  N   N        T   EEEEE M   M A   A

const backgroundColor = (theme) => {
	switch(theme) {
		case 'main': return '#FF456A';
		case 'secondary': return '#FFF';
		case 'flat': return 'transparent';
		case 'blue': return '#1476FB';
		case 'flatBlue': return 'transparent';
	}
};

const border = (theme) => {
	switch(theme) {
		case 'main': return '1px solid #FF456A';
		case 'secondary': return '1px solid #FF456A';
		case 'flat': return '1px solid transparent';
		case 'blue': return '1px solid #1476FB';
		case 'flatBlue': return '1px solid transparent';
	}
};

const color = (theme) => {
	switch(theme) {
		case 'main': return '#FFF';
		case 'secondary': return '#FF456A';
		case 'flat': return '#FF456A';
		case 'blue': return '#FFF';
		case 'flatBlue': return '#1476FB';
	}
};

const hoverBackgroundColor = (theme) => {
	switch(theme) {
		case 'main': return '#CC1F62';
		case 'secondary': return '#CC1F62';
		case 'flat': return '#EBEBEB';
		case 'blue': return '#0960D3';
		case 'flatBlue': return '#EBEBEB';
	}
};

const hoverBorder = (theme) => {
	switch(theme) {
		case 'main': return '1px solid #CC1F62';
		case 'secondary': return '1px solid #CC1F62';
		case 'flat': return '1px solid #EBEBEB';
		case 'blue': return '1px solid #0960D3';
		case 'flatBlue': return '1px solid #EBEBEB';
	}
};

const hoverColor = (theme) => {
	switch(theme) {
		case 'main': return '#FFF';
		case 'secondary': return '#FFF';
		case 'flat': return '#FF456A';
		case 'blue': return '#FFF';
		case 'flatBlue': return '#1476FB';
	}
};

const disabledBackgroundColor = (theme) => {
	switch(theme) {
		case 'main': return '#BFBFBF';
		case 'secondary': return '#BFBFBF';
		case 'flat': return 'transparent';
		case 'blue': return '#BFBFBF';
		case 'flatBlue': return 'transparent';
	}
};

const disabledBorder = (theme) => {
	switch(theme) {
		case 'main': return '1px solid #BFBFBF';
		case 'secondary': return '1px solid #BFBFBF';
		case 'flat': return '1px solid transparent';
		case 'blue': return '1px solid #BFBFBF';
		case 'flatBlue': return '1px solid transparent';
	}
};

const disabledColor = (theme) => {
	switch(theme) {
		case 'main': return '#FFF';
		case 'secondary': return '#FFF';
		case 'flat': return '#BFBFBF';
		case 'blue': return '#FFF';
		case 'flatBlue': return '#BFBFBF';
	}
};

const fontSize = (size) => {
	switch(size) {
		case 'small': return '14px';
		case 'medium': return '16px';
		case 'big': return '18px';
	}
};

const height = (size) => {
	switch(size) {
		case 'small': return '30px';
		case 'medium': return '40px';
		case 'big': return '46px';
	}
};

const iconSize = (size) => {
	switch(size) {
		case 'small': return '20px';
		case 'medium': return '30px';
		case 'big': return '36px';
	}
};

export const Button = styled(({ className, children, ...props }) => (
	<button className={className} {...props}>{children}</button>
))`
	background-color: ${props => backgroundColor(props.theme)};
	border: ${props => border(props.theme)};
	border-radius: 5px;
	box-sizing: border-box;
	color: ${props => color(props.theme)};
	cursor: pointer;
	display: flex;
	font-size: ${props => fontSize(props.size)};
	font-family: "Open Sans", sans-serif;	
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
	height: ${props => height(props.size)};
	letter-spacing: normal;
	padding: 5px 30px;
	text-align: center;
	width: auto;
	
	transition: all .3s;
	
	&:hover {
		background-color: ${props => hoverBackgroundColor(props.theme)};
		border: ${props => hoverBorder(props.theme)};
		color: ${props => hoverColor(props.theme)};
		text-decoration: none;
	}

	&:hover ${Icon} {
		fill: ${props => hoverColor(props.theme)};
	}

	&:disabled {
		background-color: ${props => disabledBackgroundColor(props.theme)};
		border: ${props => disabledBorder(props.theme)};
		color: ${props => disabledColor(props.theme)};
		pointer-events: none;
	}

	&:disabled ${Icon} {
		fill: ${props => disabledColor(props.theme)};
	}

	&:focus {
		outline: none;
	}
	
	${Icon} {
		fill: ${props => color(props.theme)};
		height: ${props => iconSize(props.size)};
		width: ${props => iconSize(props.size)};
	}
`;

Button.propTypes = {
	theme: PropTypes.oneOf(['main', 'secondary', 'flat', 'blue', 'flatBlue']),
	size: PropTypes.oneOf(['small', 'medium', 'big'])
};

Button.defaultProps = {
	theme: 'main',
	size: 'small'
}

// CCCC  OOO  N   N      IIIII  CCCC  OOO  N   N  OOO
//C     O   O NN  N        I   C     O   O NN  N O   O
//C     O   O N N N        I   C     O   O N N N O   O
//C     O   O N  NN        I   C     O   O N  NN O   O
// CCCC  OOO  N   N      IIIII  CCCC  OOO  N   N  OOO

//https://github.com/styled-components/styled-components/issues/305


//NOTA: Este componente está preparado para modificar los estilos que sean necesarios.
export const IconButton = styled(({ className, theme, size, children, ...props}) => (
	<Button className={className} theme={theme} size={size} {...props}><Icon icon={props.icon} margin='0px 5px 0px 0px'/>{children}</Button>
))``;

//RRRR  EEEEE DDDD   OOO  N   N DDDD   OOO
//R   R E     D   D O   O NN  N D   D O   O
//RRRR  EEE   D   D O   O N N N D   D O   O
//R   R E     D   D O   O N  NN D   D O   O
//R   R EEEEE DDDD   OOO  N   N DDDD   OOO

export const RoundButton = styled(({ className, theme, size, children, ...props}) => (
	<Button className={className} theme={theme} size={size} {...props}><Icon icon={props.icon}/></Button>
))`
	border-radius: 50%;
	padding: 0px 5px;
	width: ${props => height(props.size)};
`;
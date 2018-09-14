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
		case 'red': return '#FF456A';
		case 'secondaryRed': return '#FFF';
		case 'flatRed': return 'transparent';
		case 'blue': return '#1476FB';
		case 'flatBlue': return 'transparent';
		case 'green': return '#4CB050';
		case 'flatGreen': return 'transparent';
		case 'yellow': return '#FFE200';
		case 'flatYellow': return 'transparent';
		case 'gray': return '#858585';
		case 'flatGray': return 'transparent';

		case 'flatWhite': return 'transparent';
	}
};

const border = (theme) => {
	switch(theme) {
		case 'red': return '1px solid #FF456A';
		case 'secondaryRed': return '1px solid #FF456A';
		case 'flatRed': return '1px solid transparent';
		case 'blue': return '1px solid #1476FB';
		case 'flatBlue': return '1px solid transparent';
		case 'green': return '1px solid #4CB050';
		case 'flatGreen': return '1px solid transparent';
		case 'yellow': return '1px solid #FFE200';
		case 'flatYellow': return '1px solid transparent';
		case 'gray': return '1px solid #858585';
		case 'flatGray': return '1px solid transparent';

		case 'flatWhite': return '1px solid transparent';
	}
};

const color = (theme) => {
	switch(theme) {
		case 'red': return '#FFF';
		case 'secondaryRed': return '#FF456A';
		case 'flatRed': return '#FF456A';
		case 'blue': return '#FFF';
		case 'flatBlue': return '#1476FB';
		case 'green': return '#FFF';
		case 'flatGreen': return '#4CB050';
		case 'yellow': return '#FFF';
		case 'flatYellow': return '#FFE200';
		case 'gray': return '#FFF';
		case 'flatGray': return '#858585';

		case 'flatWhite': return '#FFF';
	}
};

const hoverBackgroundColor = (theme) => {
	switch(theme) {
		case 'red': return '#CC1F62';
		case 'secondaryRed': return '#CC1F62';
		case 'flatRed': return '#EBEBEB';
		case 'blue': return '#0960D3';
		case 'flatBlue': return '#EBEBEB';
		case 'green': return '#3C8C40';
		case 'flatGreen': return '#EBEBEB';
		case 'yellow': return '#CCB400';
		case 'flatYellow': return '#EBEBEB';
		case 'gray': return '#6A6A6A';
		case 'flatGray': return '#EBEBEB';

		case 'flatWhite': return 'rgba(235, 235, 235, 0.5)';
	}
};

const hoverBorder = (theme) => {
	switch(theme) {
		case 'red': return '1px solid #CC1F62';
		case 'secondaryRed': return '1px solid #CC1F62';
		case 'flatRed': return '1px solid #EBEBEB';
		case 'blue': return '1px solid #0960D3';
		case 'flatBlue': return '1px solid #EBEBEB';
		case 'green': return '1px solid #3C8C40';
		case 'flatGreen': return '1px solid #EBEBEB';
		case 'yellow': return '1px solid #CCB400';
		case 'flatYellow': return '1px solid #EBEBEB';
		case 'gray': return '1px solid #6A6A6A';
		case 'flatGray': return '1px solid #EBEBEB';

		case 'flatWhite': return '1px solid rgba(235, 235, 235, 0)';
	}
};

const hoverColor = (theme) => {
	switch(theme) {
		case 'red': return '#FFF';
		case 'secondaryRed': return '#FFF';
		case 'flatRed': return '#FF456A';
		case 'blue': return '#FFF';
		case 'flatBlue': return '#1476FB';
		case 'green': return '#FFF';
		case 'flatGreen': return '#4CB050';
		case 'yellow': return '#FFF';
		case 'flatYellow': return '#FFE200';
		case 'gray': return '#FFF';
		case 'flatGray': return '#858585';

		case 'flatWhite': return '#FFF';
	}
};

const disabledBackgroundColor = (theme) => {
	switch(theme) {
		case 'red': return '#BFBFBF';
		case 'secondaryRed': return '#BFBFBF';
		case 'flatRed': return 'transparent';
		case 'blue': return '#BFBFBF';
		case 'flatBlue': return 'transparent';
		case 'green': return '#BFBFBF';
		case 'flatGreen': return 'transparent';
		case 'yellow': return '#BFBFBF';
		case 'flatYellow': return 'transparent';
		case 'gray': return '#BFBFBF';
		case 'flatGray': return 'transparent';

		case 'flatWhite': return 'transparent';
	}
};

const disabledBorder = (theme) => {
	switch(theme) {
		case 'red': return '1px solid #BFBFBF';
		case 'secondaryRed': return '1px solid #BFBFBF';
		case 'flatRed': return '1px solid transparent';
		case 'blue': return '1px solid #BFBFBF';
		case 'flatBlue': return '1px solid transparent';
		case 'green': return '1px solid #BFBFBF';
		case 'flatGreen': return '1px solid transparent';
		case 'yellow': return '1px solid #BFBFBF';
		case 'flatYellow': return '1px solid transparent';
		case 'gray': return '1px solid #BFBFBF';
		case 'flatGray': return '1px solid transparent';

		case 'flatWhite': return '1px solid transparent';
	}
};

const disabledColor = (theme) => {
	switch(theme) {
		case 'red': return '#FFF';
		case 'secondaryRed': return '#FFF';
		case 'flatRed': return '#BFBFBF';
		case 'blue': return '#FFF';
		case 'flatBlue': return '#BFBFBF';
		case 'green': return '#FFF';
		case 'flatGreen': return '#BFBFBF';
		case 'yellow': return '#FFF';
		case 'flatYellow': return '#BFBFBF';
		case 'gray': return '#FFF';
		case 'flatGray': return '#BFBFBF';

		case 'flatWhite': return '#BFBFBF';
	}
};

const fontSize = (size) => {
	switch(size) {
		case 'small': return '14px';
		case 'medium': return '18px';
		case 'big': return '24px';
	}
};

const height = (size) => {
	switch(size) {
		case 'small': return '30px';
		case 'medium': return '40px';
		case 'big': return '50px';
	}
};

const lineHeight = (size) => {
	switch(size) {
		case 'small': return '20px';
		case 'medium': return '20px';
		case 'big': return '36px';
	}
};

const iconSize = (size) => {
	switch(size) {
		case 'small': return '18px';
		case 'medium': return '20px';
		case 'big': return '30px';
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
	display: inline-block;
	font-size: ${props => fontSize(props.size)};
	font-family: "Open Sans", sans-serif;	
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
	height: ${props => height(props.size)};
	letter-spacing: normal;
	line-height: ${props => lineHeight(props.size)};
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
	theme: PropTypes.oneOf(['red', 'secondaryRed', 'flatRed', 'blue', 'flatBlue', 'green', 'flatGreen', 'yellow', 'flatYellow', 'gray', 'flatGray', 'flatWhite']),
	size: PropTypes.oneOf(['small', 'medium', 'big'])
};

Button.defaultProps = {
	theme: 'red',
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

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
	theme: PropTypes.oneOf(['red', 'secondaryRed', 'flatRed', 'blue', 'flatBlue', 'green', 'flatGreen', 'yellow', 'flatYellow', 'gray', 'flatGray', 'flatWhite']),
	size: PropTypes.oneOf(['small', 'medium', 'big'])
};

IconButton.defaultProps = {
	theme: 'red',
	size: 'small'
}

//RRRR  EEEEE DDDD   OOO  N   N DDDD   OOO
//R   R E     D   D O   O NN  N D   D O   O
//RRRR  EEE   D   D O   O N N N D   D O   O
//R   R E     D   D O   O N  NN D   D O   O
//R   R EEEEE DDDD   OOO  N   N DDDD   OOO

const padding = (size) => {
	switch(size) {
		case 'small': return '1px 0px 0px 0px';
		case 'medium': return '9px 0px';
		case 'big': return '9px 0px';
	}
};

export const RoundButton = styled(({ className, theme, size, children, ...props}) => (
	<Button className={className} theme={theme} size={size} {...props}><Icon icon={props.icon}/></Button>
))`
	border-radius: 50%;
	padding: ${props => padding(props.size)};
	width: ${props => height(props.size)};
`;
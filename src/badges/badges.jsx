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
		case 'orange': return '#FF9700';
		case 'flatOrange': return 'transparent';
	}
};

const border = (theme) => {
	switch(theme) {
		case 'red': return '1px solid #FF456A';
		case 'secondaryRed': return '1px solid #FF456A';
		case 'flatRed': return '1px solid #FF456A';
		case 'blue': return '1px solid #1476FB';
		case 'flatBlue': return '1px solid #1476FB';
		case 'green': return '1px solid #4CB050';
		case 'flatGreen': return '1px solid #4CB050';
		case 'yellow': return '1px solid #FFE200';
		case 'flatYellow': return '1px solid #FFE200';
		case 'gray': return '1px solid #858585';
		case 'flatGray': return '1px solid #858585';

		case 'flatWhite': return '1px solid transparent';
		case 'orange': return '1px solid #FF9700';
		case 'flatOrange': return '1px solid #FF9700';
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
		case 'orange': return '#FFF';
		case 'flatOrange': return '#FF9700';
	}
};

const borderRadius = (size) => {
    switch(size) {
		case 'small': return '11px';
		case 'medium': return '14px';
		case 'big': return '20px';
	}
};

const fontSize = (size) => {
	switch(size) {
		case 'small': return '11px';
		case 'medium': return '14px';
		case 'big': return '20px';
	}
};

const height = (size) => {
	switch(size) {
		case 'small': return '22px';
		case 'medium': return '28px';
		case 'big': return '40px';
	}
};

const lineHeight = (size) => {
	switch(size) {
		case 'small': return '20px';
		case 'medium': return '24px';
		case 'big': return '34px';
	}
};

const padding = (size, showCloseButton) => {
	switch(size) {
		case 'small': return showCloseButton ? '0px 4px 0px 10px' : '0px 10px';
		case 'medium': return showCloseButton ? '0px 5px 0px 15px' : '0px 15px';
		case 'big': return showCloseButton ? '0px 5px 0px 20px' : '0px 20px';
	}
};
/*
const iconMargin = (size) => {
    switch(size) {
		case 'small': return '3px 0px 0px 6px';
		case 'medium': return '3px 0px 0px 6px';
		case 'big': return '3px 0px 0px 6px';
	}
};
*/
const iconSize = (size) => {
	switch(size) {
		case 'small': return '15px';
		case 'medium': return '20px';
		case 'big': return '30px';
	}
};

const CloseButton = styled(Icon)`
    box-sizing: border-box;
    cursor: pointer;
    fill: ${props => color(props.theme)};
    height: ${props => iconSize(props.size)};
    margin: 3px 0px 0px 6px;
    width: ${props => iconSize(props.size)};
    
	&:hover {
		
	}

`;

export const Badge = styled(({ className, children, closeOnClick, showCloseButton, ...props }) => (
	<label className={className} {...props}>{children}{showCloseButton ? <CloseButton icon='solidTimesCircle' onClick={(event) => { if(closeOnClick) closeOnClick(event); }}/> : null}</label>
))`
	background-color: ${props => backgroundColor(props.theme)};
	border: ${props => border(props.theme)};
	border-radius: ${props => borderRadius(props.size)};
	box-sizing: border-box;
	color: ${props => color(props.theme)};
	display: inline-block;
	font-size: ${props => fontSize(props.size)};
	font-family: "Open Sans", sans-serif;	
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
	height: ${props => height(props.size)};
	letter-spacing: normal;
	line-height: ${props => lineHeight(props.size)};
	padding: ${props => padding(props.size, props.showCloseButton)};
	text-align: center;
	width: auto;
	
	transition: all .3s;
	
	&:focus {
		outline: none;
	}
	
	${Icon} {
		fill: ${props => color(props.theme)};
		height: ${props => iconSize(props.size)};
		width: ${props => iconSize(props.size)};
	}
`;

Badge.propTypes = {
    showCloseButton: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
    theme: PropTypes.oneOf(['red', 'secondaryRed', 'flatRed', 'blue', 'flatBlue', 'green', 'flatGreen', 'yellow', 'flatYellow', 'gray', 'flatGray', 'flatWhite', 'orange', 'flatOrange']),
    closeOnClick: PropTypes.func
};

Badge.defaultProps = {
    showCloseButton: false,
	size: 'small',
	theme: 'red'
};

// CCCC  OOO  N   N      IIIII  CCCC  OOO  N   N  OOO
//C     O   O NN  N        I   C     O   O NN  N O   O
//C     O   O N N N        I   C     O   O N N N O   O
//C     O   O N  NN        I   C     O   O N  NN O   O
// CCCC  OOO  N   N      IIIII  CCCC  OOO  N   N  OOO

//https://github.com/styled-components/styled-components/issues/305

//NOTA: Este componente está preparado para modificar los estilos que sean necesarios.
export const IconBadge = styled(({ className, theme, size, closeOnClick, children, ...props}) => (
	<Badge className={className} theme={theme} size={size} closeOnClick={closeOnClick} {...props}><Icon icon={props.icon} margin='3px 6px 0px 0px'/>{children}</Badge>
))`
    padding: 0px 5px 0px 5px;
`;

IconBadge.propTypes = {
    icon: PropTypes.string.isRequired,
	theme: PropTypes.oneOf(['red', 'secondaryRed', 'flatRed', 'blue', 'flatBlue', 'green', 'flatGreen', 'yellow', 'flatYellow', 'gray', 'flatGray', 'flatWhite', 'orange', 'flatOrange']),
	size: PropTypes.oneOf(['small', 'medium', 'big']),
    closeOnClick: PropTypes.func
};

IconBadge.defaultProps = {
	theme: 'red',
	size: 'small'
};

const NotificationContainer = styled.div`
    box-sizing: border-box;    
    display: inline-block;
    height: auto;
    margin: 0px;
    padding: 0px;
    position: relative;
    width: auto;
`;

const NotificationBubble = styled.div`
    background-color: #FF456A;
    box-sizing: border-box;
    border-radius: 50%;
    color: #FFF;
    font-size: 11px;
	font-family: "Open Sans", sans-serif;	
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
    height: 20px;
    line-height: 20px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: -10px;
    text-align: center;
    top: -10px;
    width: 20px;
`;

//export const NotificationBadge = (props) => {
export const NotificationBadge = styled(({ className, children, ...props}) => (
    <NotificationContainer className={className} {...props}>
        <NotificationBubble>{props.counter}</NotificationBubble>
        {children}
    </NotificationContainer>
))``;

NotificationBadge.propTypes = {
    counter: PropTypes.string.isRequired
};
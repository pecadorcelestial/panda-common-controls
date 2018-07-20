//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

//L      OOO   AAA  DDDD  IIIII N   N  GGGG
//L     O   O A   A D   D   I   NN  N G
//L     O   O AAAAA D   D   I   N N N G  GG
//L     O   O A   A D   D   I   N  NN G   G
//LLLLL  OOO  A   A DDDD  IIIII N   N  GGGG

const LoadingLayout = styled.div`
	height: ${props => props.height}px;
	margin: 0 auto;
	position: relative;
	width: ${props => props.height}px;
`;

//NOTA: Los 'keyframes' se deben declarar antes de usarlos dentro de algún estilo.
const circleFadeDelay = keyframes`
	0% {
		opacity: 0;
	}
	39% {
		opacity: 0;
	}
    40% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

const LoadingCircle = styled.div`
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	
	&:before {
		background-color: #CDCDCD;
		border-radius: 100%;
		content: '';
		display: block;
		height: 15%;
		margin: 0 auto;
		width: 15%;

		-webkit-animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
		animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
	}
	
	&:nth-child(2) {
		-webkit-transform: rotate(30deg);
		-ms-transform: rotate(30deg);
		transform: rotate(30deg);
	}
	
	&:nth-child(2):before {
		-webkit-animation-delay: -1.1s;
		animation-delay: -1.1s;
	}
	
	&:nth-child(3) {
		-webkit-transform: rotate(60deg);
		-ms-transform: rotate(60deg);
		transform: rotate(60deg);
	}
	
	&:nth-child(3):before {
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
	}
	
	&:nth-child(4) {
		-webkit-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		transform: rotate(90deg);
	}
	
	&:nth-child(4):before {
		-webkit-animation-delay: -0.9s;
		animation-delay: -0.9s;
	}
	
	&:nth-child(5) {
		-webkit-transform: rotate(120deg);
		-ms-transform: rotate(120deg);
		transform: rotate(120deg);
	}
	
	&:nth-child(5):before {
		-webkit-animation-delay: -0.8s;
		animation-delay: -0.8s;
	}
	
	&:nth-child(6) {
		-webkit-transform: rotate(150deg);
		-ms-transform: rotate(150deg);
		transform: rotate(150deg);
	}
	
	&:nth-child(6):before {
		-webkit-animation-delay: -0.7s;
		animation-delay: -0.7s;
	}
	
	&:nth-child(7) {
		-webkit-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	
	&:nth-child(7):before {
		-webkit-animation-delay: -0.6s;
		animation-delay: -0.6s;
	}
	
	&:nth-child(8) {
		-webkit-transform: rotate(210deg);
		-ms-transform: rotate(210deg);
		transform: rotate(210deg);
	}
	
	&:nth-child(8):before {
		-webkit-animation-delay: -0.5s;
		animation-delay: -0.5s;
	}
	
	&:nth-child(9) {
		-webkit-transform: rotate(240deg);
		-ms-transform: rotate(240deg);
		transform: rotate(240deg);
	}
	
	&:nth-child(9):before {
		-webkit-animation-delay: -0.4s;
		animation-delay: -0.4s;
	}
	
	&:nth-child(10) {
		-webkit-transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		transform: rotate(270deg);
	}
	
	&:nth-child(10):before {
		-webkit-animation-delay: -0.3s;
		animation-delay: -0.3s;
	}
	
	&:nth-child(11) {
		-webkit-transform: rotate(300deg);
		-ms-transform: rotate(300deg);
		transform: rotate(300deg);
	}
	
	&:nth-child(11):before {
		-webkit-animation-delay: -0.2s;
		animation-delay: -0.2s;
	}
	
	&:nth-child(12) {
		-webkit-transform: rotate(330deg);
		-ms-transform: rotate(330deg);
		transform: rotate(330deg);
	}
	
	&:nth-child(12):before {
		-webkit-animation-delay: -0.1s;
		animation-delay: -0.1s;
	}
`;

export class Loading extends React.Component {
	render () {
		return(
			<LoadingLayout height={this.props.size.height} width={this.props.size.width}>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
				<LoadingCircle/>
			</LoadingLayout>
		);
	}
}

Loading.propTypes = {
	size: PropTypes.shape({
		height: PropTypes.number,
		width: PropTypes.number
	}).isRequired
}

//PPPP  RRRR  EEEEE  SSSS EEEEE N   N TTTTT  AAA   CCCC IIIII  OOO  N   N
//P   P R   R E     S     E     NN  N   T   A   A C       I   O   O NN  N
//PPPP  RRRR  EEE    SSS  EEE   N N N   T   AAAAA C       I   O   O N N N
//P     R   R E         S E     N  NN   T   A   A C       I   O   O N  NN
//P     R   R EEEEE SSSS  EEEEE N   N   T   A   A  CCCC IIIII  OOO  N   N

const getEntranceAnimation = (type, from) => {
    switch(type) {
        case 'fade': return FadeIn(from);
        case 'flip': return FlipIn(from);
        case 'zoom': return ZoomIn();
    }
};

const getExitAnimation = (type, from) => {
    switch(type) {
        case 'fade': return FadeOut(from);
        case 'flip': return FlipOut(from);
        case 'zoom': return ZoomOut();
    }
};

//FFFFF  AAA  DDDD  EEEEE
//F     A   A D   D E
//FFF   AAAAA D   D EEE
//F     A   A D   D E
//F     A   A DDDD  EEEEE

const FadeIn = (from) => keyframes`
    0% {
        ${from}: -100%;
        opacity: 0;
    }
	100% { 
        ${from}: 0px;
        opacity: 1;
    }
`;

const FadeOut = (from) => keyframes`
    0% {
        ${from}: 0px;
        opacity: 1;
    }
	100% { 
        ${from}: -100%;
        opacity: 0;
    }
`;

//FFFFF L     IIIII PPPP
//F     L       I   P   P
//FFF   L       I   PPPP
//F     L       I   P
//F     LLLLL IIIII P

const FlipIn = (from) => keyframes`
    0% {
        opacity: 0;
        transform: rotate${from == 'vertical' ? `X` : `Y`}(90deg);
    }
    100% {
        opacity: 1;
        transform: rotate${from == 'vertical' ? `X` : `Y`}(0deg);
    }
`;

const FlipOut = (from) => keyframes`
    0% {
        opacity: 1;
        transform: rotate${from == 'vertical' ? `X` : `Y`}(0deg);
    }
    100% {
        opacity: 0;
        transform: rotate${from == 'vertical' ? `X` : `Y`}(90deg);
    }
`;

//ZZZZZ  OOO   OOO  M   M
//   Z  O   O O   O MM MM
//  Z   O   O O   O M M M
// Z    O   O O   O M   M
//ZZZZZ  OOO   OOO  M   M

const ZoomIn = () => keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const ZoomOut = () => keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
`;

const Animation = styled.div`
    box-sizing: border-box;
    display: block;
    height: auto;
    margin: 0px;
    opacity: 0;
    padding: 0px;
    position: absolute;
    width: auto;

    ${props => props.entrance ? `animation: ${getEntranceAnimation(props.type, props.from)} 1s ease forwards;` : ``}
    ${props => props.exit ? `animation: ${getExitAnimation(props.type, props.from)} 1s ease forwards;` : ``}
`;

export class Animate extends React.Component {
	//*** CONSTRUCTOR ***
	constructor() {
		super();
		this.state = {
            entrance: false,
            exit: false
		}
    }
    //*** FUNCIONES DEL COMPONENTE ***
    componentDidMount() {
        //console.log('[ANIMATIONS][ANIMATE][componentDidMount]');
        if(this.props.executeWhen === 'isMounted') this.setState({ entrance: true, exit: false });
    }
	//*** MÉTODOS ***
	triggerEntranceAnimation = () => {
        this.setState({ entrance: true, exit: false });
    }
	triggerExitAnimation = () => {
        this.setState({ entrance: false, exit: true });
    }
	//*** RESULTADO ***
	render() {
        return(
            <Animation entrance={this.state.entrance} exit={this.state.exit} type={this.props.type} from={this.props.from}>
                {this.props.children}
            </Animation>
        );
    }
}

FadeIn.propTypes = {
    type: PropTypes.oneOf(['fade', 'flip', 'zoom']),
    from: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'vertical', 'horizontal']),
    executeWhen: PropTypes.oneOf(['isMounted', 'isVisible', 'onDemand']).isRequired
}
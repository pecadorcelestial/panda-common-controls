//Módulos generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

//Componentes locales.
import { Animate } from '../animations/animations';
import { RoundButton } from '../buttons/buttons';

//TTTTT EEEEE M   M  AAA
//  T   E     MM MM A   A
//  T   EEE   M M M AAAAA
//  T   E     M   M A   A
//  T   EEEEE M   M A   A

const headerBackgroundColor = (theme) => {
	switch(theme) {
		case 'IENTC': return '#242424';
		case 'default': default: return '#FFF';
	}
};

const titleColor = (theme) => {
	switch(theme) {
		case 'IENTC': return '#FFF';
		case 'default': default: return '#242424';
	}
};

const buttonTheme = (theme) => {
    switch(theme) {
		case 'IENTC': return 'IENTC';
		case 'default': default: return 'blue';
	}
};

//EEEEE  SSSS TTTTT IIIII L      OOO   SSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const Layout = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const Header = styled.div`
    background-color: ${props => headerBackgroundColor(props.theme)};
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: 50px;
    margin: 0px;
    padding: 10px;
    width: 100%;
`;

const IconWrapper = styled.div`
    cursor: pointer;
    float: left;
    height: 30px;
    margin: 0px;
    padding: 1px 0px 0px 0px;
    width: 30px;
`;

const Title = styled.h1`
    color: ${props => titleColor(props.theme)};
    float: left;
    font-family: "Open Sans", sans-serif;	
    font-size: 20px;
	font-stretch: normal;
	font-style: normal;	
    font-weight: bold;
    height: 30px;
    margin: 0px 0px 0px 10px;
	overflow: hidden;
    padding: 5px 0px 0px 0px;
    text-overflow: ellipsis;
	white-space: nowrap;
    width: calc(100% - 40px);
`;

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

const Options = styled.div`
    background-color: transparent;
    box-sizing: border-box;
    display: block;
    height: auto;
    margin: 50px 0px 0px 0px;
    min-width: 300px;
    opacity: 0;
    padding: 0px;
    position: absolute;
    z-index: 999;

    transform: scale(0);
    transform-origin: 0px 0px;

    ${props => (props.show && !props.hide) ? `animation: ${ZoomIn()} 0.1s ease-out forwards;` : ``}
    ${props => (props.hide && !props.show) ? `animation: ${ZoomOut()} 0.1s ease-out forwards;` : ``}

	@media screen and (max-width: 767px) {
        min-width: unset;
		width: 80%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		min-width: unset;
		width: 80%;
	}
`;

const Blur = () => keyframes`
    0% {
        filter: blur(0px);
    }
    100% {
        filter: blur(10px);
    }
`;

const Unblur = () => keyframes`
    0% {
        filter: blur(10px);
    }
    100% {
        filter: blur(0px);
    }
`;

const Content = styled.div`
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;

    ${props => props.blur ? `animation: ${Blur()} 0.2s ease forwards; pointer-events: none;` : `animation: ${Unblur()} 0.2s ease forwards; pointer-events: auto;`};
`;

export class MenuWithBlur extends Component {
    //*** CONSTRUCTOR ***
    constructor() {
        super();
        this.state = {
            show: false,
            hide: false
        };
        this.OptionsRef = [];
    }
    //*** FUNCIONES DEL CICLO DE VIDA DEL COMPONENTE ***
    componentDidMount() {
        //1. Se agrega el "event listener".
        window.addEventListener('mousedown', this.handleMouseDown);
    }
	componentWillUnmount() {
        window.removeEventListener('mousedown', this.handleMouseDown);
	}
    //*** HANDLERS ***
    handleMouseDown = (event) => {
        if(this.OptionsInnerRef.contains(event.target) || this.HeaderInnerRef.contains(event.target)) {
            return;
        } else {
            this.hide();
        }
    }
    handleIconOnClick = (event) => {
        this.show();
    }
    //*** MÉTODOS ***
    show = () => {
        this.setState({ show: true, hide: false }, () => {
            this.OptionsRef.forEach(animate => {
                if(animate) {
                    animate.triggerEntranceAnimation();
                }
            });
        });
    }
    hide = () => {
        this.OptionsRef.forEach(animate => {
            if(animate) {
                animate.triggerExitAnimation();
            }
        });
        let delay = (this.props.options.length * 100) + 400;
        setTimeout(() => {
            this.setState({ show: false, hide: true });
        }, delay);
    }
    //*** RESULTADO ***
    //NOTA: Falta hacer dinámica la altura de cada componente, ahora está forzada a 40px.
    render() {
        return(
            <Layout>
                <Header theme={this.props.theme} innerRef={header => this.HeaderInnerRef = header}>
                    <IconWrapper>
                        <RoundButton id='btn-menu-options' icon='solidTh' theme={buttonTheme(this.props.theme)} size='small' onClick={this.handleIconOnClick}/>
                    </IconWrapper>
                    <Title theme={this.props.theme}>{this.props.title}</Title>
                </Header>
                <Options show={this.state.show} hide={this.state.hide} innerRef={options => this.OptionsInnerRef = options}>
                    {
                        this.props.options.map((option, index) => {
                            let animateProps = {
                                type: 'fade',
                                enterWithBounce: false,
                                executeWhen: 'onDemand',
                                from: 'left'
                            };
                            let animationDelay = (index * 2) / 10;
                            let animationTop = index * 40;
                            return(<Animate key={`a-${index}`} {...animateProps} style={{ animationDelay: `${animationDelay}s`, height: '40px', top: `${animationTop}px`, width: '100%' }} ref={(animate) => { this.OptionsRef.push(animate); }} onClick={() => { this.hide(); }}>{option}</Animate>);
                        })
                    }
                </Options>
                <Content blur={this.state.show}>
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}

MenuWithBlur.propTypes = {
    //Obligatorios.
    options: PropTypes.arrayOf(PropTypes.element).isRequired,
    title: PropTypes.string.isRequired,
    //Opcionales.
    theme: PropTypes.oneOf(['default', 'IENTC'])
};

MenuWithBlur.defaultProps = {
    theme: 'default'
};
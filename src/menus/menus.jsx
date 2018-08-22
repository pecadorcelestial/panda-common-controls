//Módulos generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

//Componentes locales.
import { Animate } from '../animations/animations';
import { Icon } from '../icons/icons';

const Layout = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const Header = styled.div`
    background-color: #FFF;
    box-sizing: border-box;
    display: inline-block;
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
    float: left;
    font-family: "Open Sans", sans-serif;	
    font-size: 20px;
	font-stretch: normal;
	font-style: normal;	
    font-weight: bold;
    height: 30px;
    margin: 0px 0px 0px 10px;
    padding: 0px;
    width: auto;
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
    margin: 0px;
    min-width: 300px
    opacity: 0;
    padding: 0px;
    position: absolute;
    z-index: 99;

    transform: scale(0);
    transform-origin: 0px 0px;

    ${props => (props.show && !props.hide) ? `animation: ${ZoomIn()} 0.1s ease-out forwards;` : ``}
    ${props => (props.hide && !props.show) ? `animation: ${ZoomOut()} 0.1s ease-out forwards;` : ``}
`;

const Content = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;

    ${props => props.blur ? `filter: blur(10px)` : ``};
`;

export class Menu extends Component {
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
            if(this.OptionsRef.length > 0) {
                this.OptionsRef.forEach(animate => {
                    if(animate) {
                        animate.triggerEntranceAnimation();
                    }
                });
            }
        });
    }
    hide = () => {
        if(this.OptionsRef.length > 0) {
            this.OptionsRef.forEach(animate => {
                if(animate) {
                    animate.triggerExitAnimation();
                }
            });
        }
        /*
        let delay = this.props.options.length * 600;
        setTimeout(() => {
            this.setState({ show: false, hide: true });
        }, delay);
        */
    }
    //*** RESULTADO ***
    render() {
        return(
            <Layout>
                <Header innerRef={header => this.HeaderInnerRef = header}>
                    <IconWrapper>
                        <Icon icon='threeHorizontalLines' fill='#242424' height='30px' width='30px' onClick={this.handleIconOnClick}/>
                    </IconWrapper>
                    <Title>{this.props.title}</Title>
                </Header>
                    {
                        this.props.options && this.props.options.length > 0 ?
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
                        </Options> :
                        null
					}
                <Content blur={this.state.show}>
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}

Menu.propTypes = {
    //Obligatorios.
    options: PropTypes.arrayOf(PropTypes.element).isRequired,
    title: PropTypes.string.isRequired
};
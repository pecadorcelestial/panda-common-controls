//Componentes generales.
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getTooltipBoxShadow = (elevation) => {
	switch(elevation) {
		case 4:
			return `box-shadow:  0px 0px 4px 1px rgba(0, 0, 0, 0.05);`;
		case 8:
			return `box-shadow:  0px 0px 8px 1px rgba(0, 0, 0, 0.05);`;
		case 10:
			return `box-shadow:  0px 0px 10px 1px rgba(0, 0, 0, 0.1);`;
		case 14:
			return `box-shadow:  0px 0px 14px 1px rgba(0, 0, 0, 0.1);`;
		case 18:
			return `box-shadow:  0px 0px 18px 1px rgba(0, 0, 0, 0.1);`;
		case 32:
			return `box-shadow:  0px 0px 32px 1px rgba(0, 0, 0, 0.1);`;
		default:
			return `box-shadow: unset;`;
	}
};

const Content = styled.div`
    background-color: transparent;
    border: 1px solid #1476FB;
    border-radius: 5px;
    display: inline-block;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: auto;

    ${props => getTooltipBoxShadow(props.elevation)}

`;

const PositionWrapper = styled.div`
    left: ${props => props.position.left}px;
    position: fixed;
    top: ${props => props.position.top}px;
    z-index: 99;
`;

const Layout = styled.div`
    background-color: transparent;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    display: ${props => props.show ? `inline-block` : `none`};
    height: auto;
    margin: 0px;
    padding: 0px;
    position: relative;
    width: auto;

    transition: all .3s;
    
    &:before {
        border-bottom: 10px solid #1476FB;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        bottom: 100%;
        content: '';
        height: 0px;
        pointer-events: none;
        position: absolute;
        right: 10px
        width: 0px;
    }

    @media screen and (max-width: 767px) {
        
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        
    }
`;

export class ToolTip extends React.Component {
	//*** CONSTRUCTOR ***
	constructor() {
		super();
		this.state = {
            show: false,
            hide: false,
            position: {
                left: 0,
                top: 0
            }
		};
    }
    //*** FUNCIONES DEL CICLO DE VIDA DEL COMPONENTE ***
    componentDidMount() {
        let anchorRef = document.getElementById(this.props.anchorID);
        if(anchorRef) {
            let position = this.offSet(anchorRef);
            //console.log('[COMÚN][TOOLTIP][componentDidMount]', position);
            this.setState({ position });
        }
    }
    //*** FUNCIONES ***
    offSet = (element) => {
        var rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop + rect.height + 10, left: rect.left + scrollLeft + rect.width + 10 }
    }
	//*** MÉTODOS ***
	show = () => {
		this.setState({ show: true, hide: false }, () => {            
            let position = this.state.position;
            let size = this.ToolTipInneWrapper.getBoundingClientRect();
            position.left -= size.width;
            console.log('[COMÚN][TOOLTIP][show][Callback]', size);
            this.setState({ position });
        });
	}
	hide = () => {
		this.setState({ show: false, hide: true });
	}
	//*** RESULTADO ***
	render() {
		
		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
		return (
            <PositionWrapper position={this.state.position} innerRef={wrapper => this.ToolTipInneWrapper = wrapper}>
                <Layout props={this.props} show={this.state.show}>
                    <Content elevation={this.props.elevation}>
                        {this.props.children}
                    </Content>
                </Layout>
            </PositionWrapper>
		);
	}	
}

ToolTip.propTypes = {
    elevation: PropTypes.number,
    anchorID: PropTypes.string.isRequired
};
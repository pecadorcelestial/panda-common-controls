//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

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

const PositionWrapper = styled.div`
    left: ${props => props.position.left}px;
    position: fixed;
    top: ${props => props.position.top}px;
    z-index: 97;

	&:focus {
		outline: none;
	}
`;

const Layout = styled.div`
    background-color: ${props => props.theme.backgroundColor};
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
        border-bottom: 10px solid ${props => props.theme.arrow.borderColor};
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

    &:after {
        border-bottom: 9px solid ${props => props.theme.arrow.backgroundColor};
        border-top: 9px solid transparent;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        bottom: 100%;
        content: '';
        height: 0px;
        pointer-events: none;
        position: absolute;
        right: 11px
        width: 0px;
    }

    @media screen and (max-width: 767px) {
        
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        
    }
`;

const Content = styled.div`
    background-color: ${props => props.theme.content.backgroundColor};
    border: 1px solid ${props => props.theme.content.borderColor};
    border-radius: 5px;
    display: inline-block;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: auto;
    z-index: 98;

    ${props => getTooltipBoxShadow(props.elevation)}

`;

class ToolTip extends React.Component {
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
        //1. Se agrega el "event listener".
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('mousedown', this.handleMouseDown);
    }
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('mousedown', this.handleMouseDown);
	}
    //*** HANDLERS ***
    handleResize = (event) => {
        //Se obtiene la posición del componente ancla.
        let anchorRef = document.getElementById(this.props.anchorID);
        if(anchorRef) {
            let position = this.anchorPosition(anchorRef);            
            if(this.state.show) {
                let tooltip = this.ToolTipWrapperInnerRef.getBoundingClientRect();
                let anchor = anchorRef.getBoundingClientRect();
                position = this.addToolTipSize(tooltip, position, anchor, this.props.at, this.props.offSet);
            }
            this.setState({ position });
        }
    }
	handleScroll = (event) => {
		/*
		event: {
			path: [
				document,
				window: {
					innerHeight: ###,
					innerWidth: ###
				}
			]
		}
		*/
		//this.anchorRef.getBoundingClientRect());
		/*
			DOMRect: {
				bottom: 2173,
				height: 100,
				left: 618,
				right: 718,
				top: 2073,
				width: 100,
				x: 618,
				y: 2073
			}
		*/
        //Se obtiene la posición del componente ancla.
        let anchorRef = document.getElementById(this.props.anchorID);
        if(anchorRef) {
            let position = this.anchorPosition(anchorRef);
            if(this.state.show) {
                let tooltip = this.ToolTipWrapperInnerRef.getBoundingClientRect();
                let anchor = anchorRef.getBoundingClientRect();
                position = this.addToolTipSize(tooltip, position, anchor, this.props.at, this.props.offSet);
            }
            this.setState({ position });
        }
    }
    handleMouseDown = (event) => {
        if(this.ToolTipWrapperInnerRef.contains(event.target)) {
            return;
        } else {
            this.hide();
        }
    }
    //*** FUNCIONES ***
    anchorPosition = (anchor) => {
        //1. Se obtiene la pocisión del componente ancla en el documento y el scroll de la ventana.
        let rect = anchor.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        //2. Se obtiene la posición del componente con respecto a la ventana.
        let top = rect.top + scrollTop;
        let left = rect.left + scrollLeft;
        //3. Se devuelve la posición del ancla.
        return { top, left };
    }
    addToolTipSize = (tooltip, position, anchor, at, offSet) => {
    
        /*
           TOP-LEFT         TOP          TOP-RIGHT
                    ┌──────────────────┐
                    │                  │
               LEFT │                  │ RIGHT
                    │                  │
                    └──────────────────┘
        BOTTOM-LEFT        BOTTOM        BOTTOM-RIGHT
        */

        //Se le suman / restan las cooredenadas del tooltip dependiendo de la posición deseada.
        console.log(anchor);
        let top = position.top;
        let left = position.left;
        switch(at) {
            case 'top':
                top -= (tooltip.height + 10 + offSet);
                if(anchor.width >= tooltip.width) {
                    left += ((anchor.width / 2) - (tooltip.width / 2));
                } else {
                    left -= ((tooltip.width / 2) - (anchor.width / 2));
                }
                break;
            case 'bottom':
                top += (anchor.height + 10 + offSet);
                if(anchor.width >= tooltip.width) {
                    left += ((anchor.width / 2) - (tooltip.width / 2));
                } else {
                    left -= ((tooltip.width / 2) - (anchor.width / 2));
                }
                break;
            case 'left':
                left -= (tooltip.width + 10 + offSet);
                if(anchor.height >= tooltip.height) {
                    top += ((anchor.height / 2) - (tooltip.height / 2));
                } else {
                    top -= ((tooltip.height / 2) - (anchor.height / 2));
                }
                break;
            case 'right':
                left += (anchor.width + 10 + offSet);
                if(anchor.height >= tooltip.height) {
                    top += ((anchor.height / 2) - (tooltip.height / 2));
                } else {
                    top -= ((tooltip.height / 2) - (anchor.height / 2));
                }
                break;
            case 'top-left':
                top -= (tooltip.height + 10 + offSet);
                left -= (tooltip.width - offSet);
                break;
            case 'top-right':
                top -= (tooltip.height + 10 + offSet);
                left += (anchor.width - offSet);
                break;
            case 'bottom-left':
                top += (anchor.height + 10 + offSet);
                left -= (tooltip.width - offSet);
                break;
            case 'bottom-right':
                top += (anchor.height + 10 + offSet);
                left += (anchor.width - offSet);
                break;
        }
        //Se devuelve la posición del ancla.
        return { top, left };
    }
	//*** MÉTODOS ***
	show = () => {
        if(!this.state.show) {
            let anchorRef = document.getElementById(this.props.anchorID);
            if(anchorRef) {
                this.setState({ show: true, hide: false }, () => {
                    let position = this.anchorPosition(anchorRef);
                    let tooltip = this.ToolTipWrapperInnerRef.getBoundingClientRect();
                    let anchor = anchorRef.getBoundingClientRect();
                    position = this.addToolTipSize(tooltip, position, anchor, this.props.at, this.props.offSet);
                    this.setState({ position });
                    this.ToolTipWrapperInnerRef.focus();
                });                
            }
        }
	}
	hide = () => {
		this.setState({ show: false, hide: true });
	}
	//*** RESULTADO ***
	render() {
        /*
        const { children } = this.props;
        let childProps = {};
        if(this.props.onInnerClick) childProps.onClick = this.props.onInnerClick;
        if(this.props.onInnerChange) childProps.onChange = this.props.onInnerChange;
        const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, childProps));
        */
		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		//onBlur={() => { this.setState({ show: false, hide: true }); }}
		return (
            <PositionWrapper position={this.state.position} innerRef={wrapper => this.ToolTipWrapperInnerRef = wrapper}>
                <Layout props={this.props} show={this.state.show} theme={this.props.theme}>
                    <Content elevation={this.props.elevation} theme={this.props.theme}>
                        {this.props.children}
                    </Content>
                </Layout>
            </PositionWrapper>
		);
	}	
}

ToolTip.propTypes = {
    //Obligatorios.
    anchorID: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    //Opcionales.
    at: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']) ,
    elevation: PropTypes.number,
    offSet: PropTypes.number
};

ToolTip.defaultProps = {
    at: 'bottom-right',
    offSet: 0
};

export default withTheme(ToolTip);
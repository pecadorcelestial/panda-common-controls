//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

//Componentes locales.
import { RoundButton } from '../buttons/buttons';

const Layout = styled.div`
	background-color: rgba(0,0,0,0.4);
    display: ${props => props.lock ? `block` : `none`};
	height: 100%;
	left: 0px;
	overflow: auto;
	position: fixed;
	top: 0px;
	width: 100%;
	z-index: 997;
`;

const Mask = styled.div`
	background-color: rgba(0,0,0,0.4);
    display: block;
	height: 100%;
	left: 0px;
	overflow: auto;
	position: fixed;
	top: 0px;
	width: 100%;
	z-index: 998;
`;

const show = keyframes`
	from {
		opacity: 0;
		top: -100%;
	}
  	to {
		opacity: 1;
		top: 0px;
	}
`;

const showWithBounce = keyframes`
	0% {
		top: -100%;
		opacity: 0;
	}
	80% {
		top: 50px;
		opacity: 0.8;
	}
	90% {
		top: 20px;
		opacity: 0.9;
	}
  	100% {
		top: 30px;
		opacity: 1;
	}
`;

const hide = keyframes`
	0% {
		opacity: 1;
		top: 0px;
	}
  	100% {
		opacity: 0;
		top: -100%;
	}
`;

const Content = styled.div`
	background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 1px 8px rgba(0,0,0,0.05);	
    height: auto;
    margin: 50px auto;
    overflow: hidden;
	padding: 0px;
	position: relative;
	width: 600px;
	z-index: 999;
	
    ${props => (props.show && !props.hide) ? `animation: ${showWithBounce} 0.6s ease-in-out forwards;` : ``}
    ${props => (!props.show && props.hide) ? `animation: ${hide} 0.6s ease-in-out forwards;` : ``}
	
	@media screen and (max-width: 767px) {
		width: 90%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 90%;
	}
`;

export const ModalHeader = styled.div`
	background-color: #1476FB;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: 45px;
	margin: 0px;
	padding: 10px;
    width: 100%;
`;

export const ModalTitle = styled.label`
    box-sizing: border-box;
	color: #FFF;	
	height: 24px;
	font-family: "Open Sans", sans-serif;
	font-size: 18px;
	font-stretch: normal;
	font-style: normal;
	font-weight: bold;
	letter-spacing: normal;
	margin: 0px;
	padding: 3px 10px;
	text-align: left;
	width: 100%;
	
	@media screen and (max-width: 767px) {
		font-size: 12px;
		padding: 0px;
		width: calc(100% - 15px);
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		font-size: 12px;
		padding: 0px;
		width: calc(100% - 15px);
	}
`;

export const ModalBody = styled.div`
    background-color: #FFF;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
	margin: 0px;
	padding: 10px;
    width: 100%;
`;

export const ModalFooter = styled.div`
    background-color: #FFF;
    border-top: 1px solid #A7A7A7;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: 40px;
	margin: 0px;
	padding: 10px;
    width: 100%;
`;

export class Modal extends React.Component {
	//*** CONSTRUCTOR ***
	constructor() {
		super();
		this.state = {
            show: false,
            hide: false,
            lock: false
		};
	}
	//*** MÉTODOS ***
	show = () => {
		this.setState({ show: true, hide: false, lock: true });
	}
	hide = () => {
		this.setState({ show: false, hide: true }, () => {
            setTimeout(() => { this.setState({ lock: false }); }, 600);
        });
	}
	//*** RESULTADOS ***
	render() {
		return(
			<Layout lock={this.state.lock} {...this.props}>
				<Content show={this.state.show} hide={this.state.hide}>
					{this.props.children}
					<RoundButton type='button' theme='flatWhite' size='small' icon='crossSign' style={{ position: 'absolute', right: '5px', top: '8px' }} onClick={(event) => { event.preventDefault(); this.hide(); }}/>
				</Content>
                {
                    this.state.lock ?
                    <Mask lock={this.state.lock}/> :
                    null
                }
			</Layout>
		);
	}
}
//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { Icon } from '../icons/icons';

const Layout = styled.div`
    display: inline-block;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const Title = styled.label`
	color: #000;
    display: inline-block;
	height: 35px;
	font-family: "Open Sans", sans-serif;
	font-size: 20px;
	font-weight: bold;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 0px;
    text-align: left;
	width: 100%;
`;

const IconWrapper = styled.div`
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: 50px;
    margin: 0px;
    padding: 5px;
    width: 50px;
`;

class StorybookVol3 extends Component {
    render() {
        return(
            <Layout>
                <Title>Iconos:</Title>
                <IconWrapper>
                    <Icon icon='android' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='apple' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='blankFile' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='briefcase' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='calendar' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='checked' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='cogWheel' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='comment' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='creditCard' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='cross' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='dashboard' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='dollar' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='earth' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='envelope' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='exclamation' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='eye' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='eyeCrossed' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='facebook' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='github' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='heart' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='heartFull' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='information' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='linkedIn' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='magnifyingGlass' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='mapMarker' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='padlock' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='paperBill' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='pause' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='pencil' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='photoCamera' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='picture' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='pinterest' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='play' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='plus' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='powerButton' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='printer' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='questionMark' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='refresh' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='save' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='star' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='starFull' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='telephone' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='time' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='trash' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='twitter' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='warning' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='youTube' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
            </Layout>
        );
    }
}

export default StorybookVol3;
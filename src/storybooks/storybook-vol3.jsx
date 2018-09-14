//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { Badge, IconBadge, NotificationBadge } from '../badges/badges';
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

const Controls = styled.div`
    display: inline-block;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: 100%;
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
                    <Icon icon='crossSign' fill='#242424' height='40px' width='40px'/>
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
                    <Icon icon='group' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='heart' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='heartFull' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='home' fill='#242424' height='40px' width='40px'/>
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
                    <Icon icon='nineTiles' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='padlock' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='paperBill' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='paperClip' fill='#242424' height='40px' width='40px'/>
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
                    <Icon icon='playSign' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='plus' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='plusSign' fill='#242424' height='40px' width='40px'/>
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
                    <Icon icon='signIn' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='signOut' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='sitemap' fill='#242424' height='40px' width='40px'/>
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
                    <Icon icon='threeHorizontalLines' fill='#242424' height='40px' width='40px'/>
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
                    <Icon icon='user' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='verticalEllipsis' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='warning' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <IconWrapper>
                    <Icon icon='youTube' fill='#242424' height='40px' width='40px'/>
                </IconWrapper>
                <Title style={{ marginTop: '20px' }}>Cintillas:</Title>
                <Controls>
                    <Badge theme='red' size='small' style={{ marginRight: '10px' }}>Red badge</Badge>
                    <Badge theme='blue' size='small' style={{ marginRight: '10px' }}>Blue badge</Badge>
                    <Badge theme='green' size='small' style={{ marginRight: '10px' }}>Green badge</Badge>
                    <Badge theme='yellow' size='small' style={{ marginRight: '10px' }}>Yellow badge</Badge>
                    <Badge theme='gray' size='small' style={{ marginRight: '10px' }}>Gray badge</Badge>
                </Controls>
                <Controls>
                    <Badge theme='flatRed' size='small' style={{ marginRight: '10px' }}>Red badge</Badge>
                    <Badge theme='flatBlue' size='small' style={{ marginRight: '10px' }}>Blue badge</Badge>
                    <Badge theme='flatGreen' size='small' style={{ marginRight: '10px' }}>Green badge</Badge>
                    <Badge theme='flatYellow' size='small' style={{ marginRight: '10px' }}>Yellow badge</Badge>
                    <Badge theme='flatGray' size='small' style={{ marginRight: '10px' }}>Gray badge</Badge>
                </Controls>
                <Controls>
                    <Badge theme='blue' size='small' showCloseButton={true} closeOnClick={() => { console.log('[STORYBOOK][BADGE][closeOnClick] Cerrado.'); }} style={{ marginRight: '10px' }}>Small badge</Badge>
                    <Badge theme='blue' size='medium' showCloseButton={true} style={{ marginRight: '10px' }}>Medium badge</Badge>
                    <Badge theme='blue' size='big' showCloseButton={true} style={{ marginRight: '10px' }}>Big badge</Badge>
                </Controls>
                <Controls>
                    <IconBadge icon='earth' theme='green' size='small' showCloseButton={true} closeOnClick={() => { console.log('[STORYBOOK][BADGE][closeOnClick] Cerrado.'); }} style={{ marginRight: '10px' }}>Small badge</IconBadge>
                    <IconBadge icon='earth' theme='green' size='medium' showCloseButton={true} style={{ marginRight: '10px' }}>Medium badge</IconBadge>
                    <IconBadge icon='earth' theme='green' size='big' showCloseButton={true} style={{ marginRight: '10px' }}>Big badge</IconBadge>
                </Controls>
                <Controls>
                    <NotificationBadge counter='+9' style={{ marginRight: '20px' }}>
                        <Icon icon='comment' fill='#242424' height='40px' width='40px'/>
                    </NotificationBadge>
                    <NotificationBadge counter='+9' style={{ marginRight: '20px' }}>
                        <Icon icon='calendar' fill='#242424' height='40px' width='40px'/>
                    </NotificationBadge>
                    <NotificationBadge counter='2' style={{ marginRight: '20px' }}>
                        <Icon icon='user' fill='#242424' height='40px' width='40px'/>
                    </NotificationBadge>
                    <NotificationBadge counter='4' style={{ marginRight: '20px' }}>
                        <Title style={{ padding: '0px 10px' }}>Un texto cualquiera</Title>
                    </NotificationBadge>
                </Controls>
            </Layout>
        );
    }
}

export default StorybookVol3;
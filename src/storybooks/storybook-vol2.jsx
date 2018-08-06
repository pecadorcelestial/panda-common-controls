//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { Button, IconButton } from '../buttons/buttons';
import { BasicSelect } from '../dropdownlists/dropdownlists';
import { Loading, Animate } from '../animations/animations';
import { ToastNotifiaction } from '../toastnotifications/toastnotifications';
import { Icon } from '../icons/icons';

import { Calendar } from '../calendar/calendar';

const Layout = styled.div`
    display: inline-block;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const LeftColumn = styled.div`
    border-right: 3px solid #BFBFBF;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: 300px;
`;

const RightColumn = styled.div`
	box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: calc(100% - 650px);
`;

const Control = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const CardContent = styled.div`
    box-sizing: border-box;
    height: 100px;
    margin: 0px;
    padding: 20px;
    width: 100%;
`;

const AnimationWrapper = styled.div`
    height: 100px;
    margin: 10px 0px 0px 0px;
    padding: 0px;
    position: relative;
    width: 100px;
`;

const Option = styled.div`
    display: inline-block;
    height: auto;
    margin: 5px 0px;
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

const OptionTitle = styled.label`
    box-sizing: border-box;
	color: #000;
    display: inline-block;
    height: auto;
    float: left;
	font-family: "Open Sans", sans-serif;
	font-size: 12px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 10px 0px 0px 0px;
    width: 20%;
`;

const OptionInput = styled.input`
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #000;
    border-left: none;
	border-radius: 0px;box-sizing: border-box;
	color: #000;
    display: inline-block;
    display: inline-block;
    float: left;
	font-size: 14px;
    height: 30px;
    margin: 0px;
	outline: none;
	padding: 7px 0px 0px 0px;
	width: ${props => (props.style != undefined && props.style.width != undefined) ? props.style.width : `79%`};
`;

const OptionButtonWrapper = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: ${props => (props.style != undefined && props.style.margin != undefined) ? props.style.margin : `5px 5px 0px 0px`};
    padding: 0px;
    width: auto;
`;

const ColoredDiv = styled.div`
    background-color: ${props => props.color};
    height: 100px;
    width: 100px;
`;

class StorybookVol2 extends Component {
    constructor() {
        super();
        this.state = {
            //Animaciones.
            fadeFrom: 'right',
            flipFrom: 'vertical',
            //Componentes "dinámicos"
            Animate: undefined
        };
    }
    componentDidMount() {
        const { Animate } = require('../animations/animations');
        //console.log('[STORYBOOK][TEXTBOOK][componentDidMount] Animate: ', Animate);
        this.setState({ Animate });
    }
    render() {

        //V   V  AAA  L      OOO  RRRR  EEEEE  SSSS
        //V   V A   A L     O   O R   R E     S
        //V   V AAAAA L     O   O RRRR  EEE    SSS
        // V V  A   A L     O   O R   R E         S
        //  V   A   A LLLLL  OOO  R   R EEEEE SSSS

        const fadeFromOptions = [
            {
                id: 'left',
                description: 'Left'
            },
            {
                id: 'right',
                description: 'Right'
            },
            {
                id: 'top',
                description: 'Top'
            },
            {
                id: 'bottom',
                description: 'Bottom'
            }
        ];

        const flipFromOptions = [
            {
                id: 'vertical',
                description: 'Vertical'
            },
            {
                id: 'horizontal',
                description: 'Horizontal'
            }
        ];

		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
		
        const fadeFromProps = {
            title: 'Fade animation (from):',
            error: 'You must select an option.',
            options: fadeFromOptions,
            selectedOption: this.state.fadeFrom,
            onChange: (event) => { this.setState({ fadeFrom: event.target.value }); },
            id: '',
            placeHolder: 'Select a type',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        };

        const flipFromProps = {
            title: 'Flip animation (from):',
            error: 'You must select an option.',
            options: flipFromOptions,
            selectedOption: this.state.flipFrom,
            onChange: (event) => { this.setState({ flipFrom: event.target.value }); },
            id: '',
            placeHolder: 'Select a type',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        };

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
        return(
            <Layout>
                <LeftColumn>
                    <Title>Animations:</Title>
                    <Option>
                        <Loading size={{ height: 60, width: 60 }}/>
                    </Option>
                    <Option>
                        <BasicSelect {...fadeFromProps}/>
                    </Option>
                    <Option>
                        <BasicSelect {...flipFromProps}/>
                    </Option>
                    <Option>
                        <OptionButtonWrapper>
                            <Button theme='secondary' size='small' onClick={(event) => { this.AnimateFadeRef.triggerEntranceAnimation(); this.AnimateFlipRef.triggerEntranceAnimation(); this.AnimateZoomRef.triggerEntranceAnimation(); }}>triggerEntrance</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='secondary' size='small' onClick={(event) => { this.AnimateFadeRef.triggerExitAnimation(); this.AnimateFlipRef.triggerExitAnimation(); this.AnimateZoomRef.triggerExitAnimation(); }}>triggerExit</Button>
                        </OptionButtonWrapper>
                    </Option>
                </LeftColumn>
                <LeftColumn>
                    <Title>Notifications:</Title>
                    <Option>
                        <OptionButtonWrapper>
                            <Button theme='secondary' size='small' onClick={(event) => { this.SuccessToastNotificationRef.show(); }}>Show success toast</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='secondary' size='small' onClick={(event) => { this.ErrorToastNotificationRef.show(); }}>Show error toast</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='secondary' size='small' onClick={(event) => { this.WarningToastNotificationRef.show(); }}>Show warning toast</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='secondary' size='small' onClick={(event) => { this.InformationToastNotificationRef.show(); }}>Show information toast</Button>
                        </OptionButtonWrapper>
                    </Option>
                    <Title>Botones:</Title>
                    <Option>
                        <OptionButtonWrapper>
                            <IconButton theme='main' size='small' icon='plus'>Add new</IconButton>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <IconButton theme='secondary' size='small' icon='save'>Save</IconButton>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <IconButton theme='flat' size='small' icon='pencil'>Edit</IconButton>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <IconButton theme='blue' size='small' icon='cogWheel'>Configuration</IconButton>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <IconButton theme='flatBlue' size='small' icon='heartFull'>Like</IconButton>
                        </OptionButtonWrapper>
                    </Option>
                </LeftColumn>
                <RightColumn>
                    <Control>
                        <Icon icon='android' fill='#242424' height='60px' width='60px'/>
                    </Control>
                    <Control>
                        <Calendar selectedDate='08/15/2018' language='es-ES' theme='default' onChange={(date) => { console.log('[STORYBOOK vol.2][render][CALENDARIO][onChange] Fecha: ', date); }}/>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='fade' from={this.state.fadeFrom} executeWhen='isVisible' enterWithBounce={true} ref={animate => { this.AnimateFadeRef = animate; }}>
                                <ColoredDiv color='#800080'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='flip' from={this.state.flipFrom} executeWhen='isVisible' enterWithBounce={true} ref={animate => { this.AnimateFlipRef = animate; }}>
                                <ColoredDiv color='#FF0033'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='zoom' executeWhen='isVisible' enterWithBounce={true} ref={animate => { this.AnimateZoomRef = animate; }}>
                                <ColoredDiv color='#00FF7F'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                    <div style={{ height: '2000px', width: '100%' }}/>
                </RightColumn>
                {/* NOTIFICACIONES */}
                <ToastNotifiaction notificationType='success' from='bottom' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.SuccessToastNotificationRef = notification; }} showWithBounce={true}/>
                <ToastNotifiaction notificationType='error' from='bottom' side='left' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.ErrorToastNotificationRef = notification; }}/>
                <ToastNotifiaction notificationType='warning' from='top' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.WarningToastNotificationRef = notification; }} showWithBounce={true}/>
                <ToastNotifiaction notificationType='information' from='top' side='left' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.InformationToastNotificationRef = notification; }}/>
            </Layout>
        );
    }
}

export default StorybookVol2;
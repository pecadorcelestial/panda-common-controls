//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { Button, IconButton, RoundButton } from '../buttons/buttons';
import { BasicSelect, AdvancedSelect } from '../dropdownlists/dropdownlists';
import { Loading, Animate } from '../animations/animations';
import { ToastNotification } from '../toastnotifications/toastnotifications';
import { Icon } from '../icons/icons';

import { Calendar } from '../calendar/calendar';
import ToolTip from '../tooltip/tooltip';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from '../modals/modals';

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

	@media screen and (max-width: 767px) {
		width: 100%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 100%;
	}
`;

const RightColumn = styled.div`
	box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: calc(100% - 650px);

	@media screen and (max-width: 767px) {
		width: 100%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 100%;
	}
`;

const Control = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px;
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

const Footer = styled.label`
	color: #000;
    display: inline-block;
	height: 15px;
	font-family: "Open Sans", sans-serif;
	font-size: 14px;
	font-weight: bold;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 0px;
    text-align: right;
	width: 100%;
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

		let tooltipTheme = {
			content: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#FFF',
				borderColor: '#1476FB'
			}
		};

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

        const flipEXFromOptions = [
            {
                id: 'vertical',
                icon: 'solidUndoAlt',
                title: 'Vertical',
                description: 'Vertical flip.'
            },
            {
                id: 'horizontal',
                icon: 'solidUndoAlt',
                title: 'Horizontal',
                description: 'Horizontal flip.',
                disabled: true
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

        const flipEXFromProps = {
            title: 'Flip animation (from):',
            error: 'You must select an option.',
            options: flipEXFromOptions,
            selectedOption: this.state.flipFrom,
            onChange: (event) => { this.setState({ flipFrom: event.target.value }); },
            id: '',
            itemsType: 'icon-title-description',
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
                        <AdvancedSelect {...flipFromProps}/>
                    </Option>
                    <Option>
                        <AdvancedSelect {...flipEXFromProps}/>
                    </Option>
                    <Option>
                        <OptionButtonWrapper>
                            <Button theme='secondaryRed' size='small' onClick={(event) => { this.AnimateFadeRef.triggerEntranceAnimation(); this.AnimateFlipRef.triggerEntranceAnimation(); this.AnimateZoomRef.triggerEntranceAnimation(); }}>triggerEntrance</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='secondaryRed' size='small' onClick={(event) => { this.AnimateFadeRef.triggerExitAnimation(); this.AnimateFlipRef.triggerExitAnimation(); this.AnimateZoomRef.triggerExitAnimation(); }}>triggerExit</Button>
                        </OptionButtonWrapper>
                    </Option>
                </LeftColumn>
                <LeftColumn>
                    <Title>Notifications:</Title>
                    <Option>
                        <OptionButtonWrapper>
                            <Button theme='secondaryRed' size='small' onClick={(event) => { this.SuccessToastNotificationRef.show(); }}>Show success toast</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='secondaryRed' size='small' onClick={(event) => { this.ErrorToastNotificationRef.show(); }}>Show error toast</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='secondaryRed' size='small' onClick={(event) => { this.WarningToastNotificationRef.show(); }}>Show warning toast</Button>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <Button theme='secondaryRed' size='small' onClick={(event) => { this.InformationToastNotificationRef.show(); }}>Show information toast</Button>
                        </OptionButtonWrapper>
                    </Option>
                    <Title>Botones:</Title>
                    <Option>
                        <OptionButtonWrapper style={{ width: '100%' }}>
                            <IconButton id='btn-small-tooltip' theme='red' size='small' icon='solidPlusCircle' style={{ width: '100%' }} onClick={() => { this.ToolTipInnerRef.show(); }}>Small</IconButton>
                            <ToolTip elevation={14} anchorID='btn-small-tooltip' theme={tooltipTheme} at='bottom-left' innerRef={tooltip => this.ToolTipInnerRef = tooltip}>
							    <p>¡HOLA!</p>
						    </ToolTip>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper style={{ width: '100%' }}>
                            <IconButton theme='secondaryRed' size='medium' icon='solidSave' style={{ width: '100%' }}>Medium</IconButton>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper style={{ width: '100%' }}>
                            <IconButton theme='blue' size='big' icon='solidPencilAlt' style={{ width: '100%' }}>Big</IconButton>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <RoundButton theme='secondaryRed' size='small' icon='solidSearch'/>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <RoundButton theme='blue' size='medium' icon='solidTimesCircle'/>
                        </OptionButtonWrapper>
                        <OptionButtonWrapper>
                            <RoundButton theme='red' size='big' icon='solidPlusCircle' onClick={() => { this.ModalRef.show(); }}/>
                        </OptionButtonWrapper>
                    </Option>
                </LeftColumn>
                <RightColumn>
                    <Control>
                        <Icon icon='brandAndroid' fill='#242424' height='60px' width='60px'/>
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
                </RightColumn>
                {/* NOTIFICACIONES */}
                <ToastNotification notificationType='success' from='bottom' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.SuccessToastNotificationRef = notification; }} showWithBounce={true}/>
                <ToastNotification notificationType='error' from='bottom' side='left' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.ErrorToastNotificationRef = notification; }}/>
                <ToastNotification notificationType='warning' from='top' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.WarningToastNotificationRef = notification; }} showWithBounce={true}/>
                <ToastNotification notificationType='information' from='top' side='left' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.InformationToastNotificationRef = notification; }}/>
                {/* MODAL */}
                <Modal ref={modal => this.ModalRef = modal}>
                    <ModalHeader>
                        <ModalTitle>Título del modal</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Loading size={{ height: 60, width: 60 }}/>
                    </ModalBody>
                    <ModalFooter>
                        <Footer>&#9400; Panda Corp. all rights reserved.</Footer>
                    </ModalFooter>
                </Modal>
            </Layout>
        );
    }
}

export default StorybookVol2;
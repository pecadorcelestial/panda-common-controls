//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { Badge, IconBadge, NotificationBadge } from '../badges/badges';
import { Icon } from '../icons/icons';

import Icons from '../icons/icons-lib-v2';

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
    constructor() {
        super();
        this.state = {
            iconsList: []
        };
    }
    componentDidMount() {
        let iconsList = [];
        Object.keys(Icons).map((key, index) => {
            iconsList.push(key);
        });
        this.setState({ iconsList });
        //console.log('[STORYBOOK-3][componentDidMount] Lista: ', iconsList);
        //this.download(iconsList, 'json.txt', 'text/plain');
    }
    /*
    download = (content, fileName, contentType) => {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    */
    render() {
        //console.log('[STORYBOOK-3][componentDidMount] Lista: ', this.state.iconsList);
        return(
            <Layout>
                <Title>Iconos:</Title>
                {
                    this.state.iconsList.length > 0 ?
                    this.state.iconsList.map((icon, index) => 
                        <IconWrapper key={`icon-${index}`}>
                            <Icon icon={icon} fill='#242424' height='40px' width='40px'/>
                        </IconWrapper> 
                    ):
                    null
                }
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
                    <IconBadge icon='solidGlobeAmericas' theme='green' size='small' showCloseButton={true} closeOnClick={() => { console.log('[STORYBOOK][BADGE][closeOnClick] Cerrado.'); }} style={{ marginRight: '10px' }}>Small badge</IconBadge>
                    <IconBadge icon='solidGlobeAmericas' theme='green' size='medium' showCloseButton={true} style={{ marginRight: '10px' }}>Medium badge</IconBadge>
                    <IconBadge icon='solidGlobeAmericas' theme='green' size='big' showCloseButton={true} style={{ marginRight: '10px' }}>Big badge</IconBadge>
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
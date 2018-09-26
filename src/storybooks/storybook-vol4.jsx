//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { CircularGraph } from '../graphs/graphs';

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

const Controls = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: 100%;
`;

class StorybookVol4 extends Component {
    constructor() {
        super();
        this.state = {
            iconsList: []
        };
    }
    componentDidMount() {
        
    }
    render() {
        return(
            <Layout>
                <Title>Gráficas:</Title>
                <Controls>
                    <CircularGraph percent={75} theme='green' style={{ width: '150px' }}/>
                    <CircularGraph percent={45} theme='orange'/>
                    <CircularGraph percent={10} theme='red'/>
                </Controls>
            </Layout>
        );
    }
}

export default StorybookVol4;
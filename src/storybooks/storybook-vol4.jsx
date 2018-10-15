//Módulos generales.
import React, { Component } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { CircularGraph } from '../graphs/graphs';
import { FrontContent, BackContent, FlipCard} from '../animations/animations';

const Layout = styled.div`
    box-sizing: border-box;
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
    line-height: 35px;
	margin: 0px;
	padding: 0px;
    text-align: left;
	width: 100%;
`;

const Controls = styled.div`
    box-sizing: border-box;
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
                <Title>Tarjeta con giro:</Title>
                <Controls>
                    <div style={{ boxSizing: 'border-box', width: '150px' }}>
                        <FlipCard style={{ border: '1px dotted #000', cursor: 'pointer' }} ref={card => this.FlipCardRef = card} onClick={() => { this.FlipCardRef.flip(); }}>
                            <FrontContent>
                                <Title style={{ cursor: 'pointer', textAlign: 'center' }}>FRONT</Title>
                            </FrontContent>
                            <BackContent>
                                <Title style={{ cursor: 'pointer', textAlign: 'center' }}>BACK</Title>
                            </BackContent>
                        </FlipCard>
                    </div>
                </Controls>
            </Layout>
        );
    }
}

export default StorybookVol4;
//Modulos generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const backgroundColor = (theme) => {
	switch(theme) {
		case 'red': return '#FF456A';
		case 'blue': return '#1476FB';
		case 'green': return '#4CB050';
		case 'yellow': return '#FFE200';
		case 'gray': return '#858585';
        case 'orange': return '#FF9700';
		case 'black': return '#242424';
        case 'ientc': return '#FF0000';
	}
};

const Layout = styled.div`
    justify-content: space-around;
    width: 200px;
`;

const SVG = styled.svg`
    display: block;
    margin: 10px auto;
    max-height: 200px;
    max-width: 200px;
`;

const OutterPath = styled.path`
    fill: none;
    stroke: #EEE;
    stroke-width: 2.8;
`;

const progress = (percent) => keyframes`
    0% {
        stroke-dasharray: 0 100;
    }
    100% {
        stroke-dasharray: ${percent} 100;
    }
`;

const InnerPath = styled.path`
    fill: none;
    stroke-linecap: round;
    stroke: ${props => backgroundColor(props.theme)};
    stroke-width: 2.8;
    ${props => `animation: ${progress(props.percent)} 1s ease-out forwards`};
`;

const Text = styled.text`
    fill: #666;
    font-family: "Open Sans", sans-serif;
    font-size: 0.5em;
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
    text-anchor: middle;
`;

export class CircularGraph extends Component {
    render() {
        return(
            <Layout {...this.props}>
                <SVG viewBox="0 0 36 36">
                    <OutterPath
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <InnerPath
                        percent={this.props.percent}
                        theme={this.props.theme}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <Text x="18" y="20.35">{`${this.props.percent}%`}</Text>
                </SVG>
            </Layout>
        );
    }
}

CircularGraph.propTypes = {
    percent: PropTypes.number.isRequired,
    theme: PropTypes.oneOf(['red', 'blue', 'green', 'yellow', 'gray', 'orange', 'black', 'ientc'])
};

CircularGraph.defaultProps = {
	theme: 'green'
}

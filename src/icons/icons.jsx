//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SVG = styled.svg`
    display: inline-block;
    fill: ${props => props.fill ? props.fill : `#FFF`};
    height: ${props => props.height ? props.height : `50px`};
    margin: ${props => props.margin ? props.margin : `0px`};
    vertical-align: middle;
    width: ${props => props.width ? props.width : `50px`};
    
	transition: all .3s;
	
`;

export const Icon = styled(({ ...props}) => {
    let iconFile = require(`./icons-lib`)[props.icon];
    if(iconFile) {
        return(
            <SVG {...props} x='0px' y='0px' viewBox='0 0 512.000 512.000' preserveAspectRatio='none' vectorEffect='non-scaling-stroke' dangerouslySetInnerHTML={{__html: iconFile}}>
            </SVG>
        );
    } else {
        return null;
    }
})``;

Icon.propTypes = {
    //Obligatorios.
    icon: PropTypes.string.isRequired,
    //Opcionales.
    fill: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string
};
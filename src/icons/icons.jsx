//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SVG = styled.svg`
    display: inline-block;
    fill: ${props => props.fill ? props.fill : `#FFF`};
    height: ${props => props.height ? props.height : `50px`};
    margin: ${props => props.margin ? props.margin : `0px`};
    vertical-align: top;
    width: ${props => props.width ? props.width : `50px`};
    
	transition: all .3s;
	
`;

export const Icon = styled(({ ...props}) => {
    //console.log('[ICONS][constant] Icono: ', props.icon);
    let iconFile = require(`./icons-lib-v2`)[props.icon];
    if(iconFile) {
        return(
            <SVG {...props} x='0px' y='0px' viewBox={iconFile.viewBox} dangerouslySetInnerHTML={{__html: iconFile.path}} alt={props.icon}>
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
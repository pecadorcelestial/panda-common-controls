//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCardBoxShadow = (elevation) => {
	switch(elevation) {
		case 4:
			return `box-shadow:  0px 0px 4px 1px rgba(0, 0, 0, 0.05);`;
		case 8:
			return `box-shadow:  0px 0px 8px 1px rgba(0, 0, 0, 0.05);`;
		case 10:
			return `box-shadow:  0px 0px 10px 1px rgba(0, 0, 0, 0.1);`;
		case 14:
			return `box-shadow:  0px 0px 14px 1px rgba(0, 0, 0, 0.1);`;
		case 18:
			return `box-shadow:  0px 0px 18px 1px rgba(0, 0, 0, 0.1);`;
		case 32:
			return `box-shadow:  0px 0px 32px 1px rgba(0, 0, 0, 0.1);`;
		default:
			return `box-shadow: unset;`;
	}
};

export const BasicCard = styled.div`
    background-color: #FFF;
    border-radius: 5px;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: ${props => props.width ? props.width : `auto`};

    transition: all .3s;
        
    ${props => getCardBoxShadow(props.elevation)}		

    @media screen and (max-width: 767px) {
        border-radius: 0px;
        box-shadow: unset;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        border-radius: 0px;
        box-shadow: unset;
    }
`;

BasicCard.propTypes = {
    elevation: PropTypes.number,
    width: PropTypes.string
};
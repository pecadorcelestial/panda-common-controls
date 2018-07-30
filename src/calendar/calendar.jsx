//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

import Month from './month';

const Layout = styled.div`
    box-sizing: border-box;
    height: 195;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: 185px;
`;

export class Calendar extends Component {
    //*** HANDLERS ***
    handleMonthOnClick = () => {
        console.log('[COMÚN][CALENDARIO][MES][onClick]'); 
    }
    //*** RESULTADO ***
    render() {

        let theme = 'default';

        return(
            <Layout>
                <Month {...this.props} theme={theme} monthOnClick={this.handleMonthOnClick}/>
            </Layout>
        );
    }
}

Calendar.propTypes = {
    dateOutputFormat: PropTypes.string,
    language: PropTypes.string,
    minDate: PropTypes.string,
    selectedDate: PropTypes.string
};
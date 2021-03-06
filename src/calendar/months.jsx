//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

//Funciones.
import { getMonthName } from '../scripts/date-functions';

const headerBackgroundColor = theme('theme', {
    default: '#1476FB'
});

const headerFontColor = theme('theme', {
    default: '#FFF'
});

const headerButtonsHover = theme('theme', {
    default: '#0960D3'
});

const Layout = styled.div`
    box-sizing: border-box;
    min-height: 195px;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: 185px;
`;

const Header = styled.div`
    background-color: ${headerBackgroundColor};
    box-sizing: border-box;
    height: 35px;
    margin: 0px;
    padding: 5px;
    position: relative;
    text-align: center;
    width: 100%;
`;

const YearButton = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: ${headerFontColor};
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 25px;
    margin: 0px 0px 5px 0px;
    padding: 2px 15px;
    width: auto;
    
    &:hover {
        background-color: ${headerButtonsHover};
        text-decoration: none;
    }
    
	&:focus {
		outline: none;
	}
`;

const Body = styled.div`
    background-color: #FFF;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 5px;
    width: 100%;
`;

export default class Months extends Component {
    //*** CONSTRUCTOR ***
    /*
    constructor(props) {
        super(props);
        let months = getAllMonthsName(this.props.language);
        this.state = {
            months
        };
    }
    */
    //*** HANDLERS ***
    handleMonthOnClick = (event, month) => {
        let date = new Date(this.props.innerDate);
        date.setMonth(month);
        this.props.onChange(date);
    }
    //*** RESULTADO ***
    render() {
        const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        return(
            <ThemeProvider theme={{ theme: this.props.theme }}>
                <Layout>
                    <Header>
                        <YearButton type='button' id='btn-years' onClick={() => this.props.yearOnClick()}>{`${this.props.innerDate.getFullYear()}`}</YearButton>
                    </Header>
                    <Body>
                        {
                            months.map((month, index) => {
                                let date = new Date();
                                date.setMonth(month, 1);
                                date.setFullYear(this.props.innerDate.getFullYear());
                                const selected = (month === this.props.selectedDate.getMonth() && date.getFullYear() === this.props.selectedDate.getFullYear());
                                const disabled = (this.props.minDate && (month < this.props.minDate.getMonth() && date.getFullYear() <= this.props.minDate.getFullYear()));
                                const state = selected ? 'selected' : (disabled ? 'disabled' : 'normal');
                                const monthProps = {
                                    key: `month-${month}-${index}`,
                                    state,
                                    disabled,
                                    onClick: (event) => this.handleMonthOnClick(event, index)
                                };
                                return(<Month type='button' {...monthProps}>{getMonthName(date)}</Month>);
                            })
                        }
                    </Body>
                </Layout>
            </ThemeProvider>
        );
    }
}

Months.propTypes = {
    //Obligatorios.
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    innerDate: PropTypes.instanceOf(Date).isRequired,
    //Opcionales.
    language: PropTypes.string,
    minDate: PropTypes.instanceOf(Date),
    //Funciones.
    yearOnClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

const getYearButtonTheme = (state) => {
    switch(state) {
        case 'selected':
            return `
                background-color: #1476FB;
                color: #FFF;

                &:hover {
                    background-color: #0960D3;
                    color: #FFF;
                    text-decoration: none;
                }
            `;
        case 'disabled':
            return `
                background-color: transparent;
                color: #BFBFBF;
                cursor: default;
                pointer-events: none;

                &:hover {
                    background-color: transparent;
                    color: #BFBFBF;
                    text-decoration: none;
                }
            `;
        case 'normal':
        default:
            return `
                background-color: transparent;
                color: #242424;

                &:hover {
                    background-color: #BFBFBF;
                    color: #000;
                    text-decoration: none;
                }
            `;
    }
}

const Month = styled.button`
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 25px;
    margin: 0px;
    padding: 0px;
    width: 50%;
    
    ${props => getYearButtonTheme(props.state)}

    &:focus {
		outline: none;
	}
`;

Month.propTypes = {
    state: PropTypes.oneOf(['normal', 'selected', 'different', 'disabled']).isRequired
};
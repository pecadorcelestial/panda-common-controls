//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

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

const Title = styled.label`
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    color: ${headerFontColor};
    display: inline-block;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: bold;
    height: 25px;
    margin: 0px 0px 5px 0px;
    padding: 3px 15px;
    width: auto;
`;

const Body = styled.div`
    background-color: #FFF;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 5px;
    width: 100%;
`;

const Previous = styled.button`
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjkycHgiIGhlaWdodD0iMjkycHgiIHZpZXdCb3g9IjAgMCAyOTIuMzU5IDI5Mi4zNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi4zNTkgMjkyLjM1OTsgZmlsbDogd2hpdGU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODAsIDE0NiwgMTQ2KSI+PHBhdGggZD0iTTIyMi45NzksMTMzLjMzMUw5NS4wNzMsNS40MjRDOTEuNDU2LDEuODA3LDg3LjE3OCwwLDgyLjIyNiwwYy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0Yy0zLjYxNywzLjYxNy01LjQyNCw3Ljg5OC01LjQyNCwxMi44NDd2MjU1LjgxM2MwLDQuOTQ4LDEuODA3LDkuMjMyLDUuNDI0LDEyLjg0N2MzLjYyMSwzLjYxNyw3LjkwMiw1LjQyOCwxMi44NSw1LjQyOGM0Ljk0OSwwLDkuMjMtMS44MTEsMTIuODQ3LTUuNDI4bDEyNy45MDYtMTI3LjkwN2MzLjYxNC0zLjYxMyw1LjQyOC03Ljg5Nyw1LjQyOC0xMi44NDdDMjI4LjQwNywxNDEuMjI5LDIyNi41OTQsMTM2Ljk0OCwyMjIuOTc5LDEzMy4zMzF6Ii8+PC9nPjwvc3ZnPg==");
    background-position: 1px center;
    background-repeat: no-repeat;
    background-size: 15px 15px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 22px;
    left: 5px;
    position: absolute;
    top: 5px;
    width: 22px;
    
    &:hover {
        background-color: ${headerButtonsHover};
    }
    
	&:focus {
		outline: none;
	}
`;

const Next = styled.button`
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjkycHgiIGhlaWdodD0iMjkycHgiIHZpZXdCb3g9IjAgMCAyOTIuMzU5IDI5Mi4zNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi4zNTkgMjkyLjM1OTsgZmlsbDogd2hpdGU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMjIyLjk3OSwxMzMuMzMxTDk1LjA3Myw1LjQyNEM5MS40NTYsMS44MDcsODcuMTc4LDAsODIuMjI2LDBjLTQuOTUyLDAtOS4yMzMsMS44MDctMTIuODUsNS40MjRjLTMuNjE3LDMuNjE3LTUuNDI0LDcuODk4LTUuNDI0LDEyLjg0N3YyNTUuODEzYzAsNC45NDgsMS44MDcsOS4yMzIsNS40MjQsMTIuODQ3YzMuNjIxLDMuNjE3LDcuOTAyLDUuNDI4LDEyLjg1LDUuNDI4YzQuOTQ5LDAsOS4yMy0xLjgxMSwxMi44NDctNS40MjhsMTI3LjkwNi0xMjcuOTA3YzMuNjE0LTMuNjEzLDUuNDI4LTcuODk3LDUuNDI4LTEyLjg0N0MyMjguNDA3LDE0MS4yMjksMjI2LjU5NCwxMzYuOTQ4LDIyMi45NzksMTMzLjMzMXoiLz48L2c+PC9zdmc+");
    background-position: right 1px center;
    background-repeat: no-repeat;
    background-size: 15px 15px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 22px;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 22px;
    
    &:hover {
        background-color: ${headerButtonsHover};
    }
    
	&:focus {
		outline: none;
	}
`;

export default class Years extends Component {
    //*** CONSTRUCTOR ***
    constructor(props) {
        super(props);
        let currentYear = this.props.selectedDate.getFullYear();
        let firstYear = Math.floor(currentYear / 10) * 10;
        let years = [];
        for(let i=0; i<10; i++) {
            years.push(firstYear + i);
        }
        this.state = {
            years
        };
    }
    //*** HANDLERS ***
    handlePreviousYearsRangeOnClick = (event) => {
        let firstYear = this.state.years[0] - 10;
        let years = [];
        for(let i=0; i<10; i++) {
            years.push(firstYear + i);
        }
        this.setState({ years });
    }
    handleNextYearsRangeOnClick = (event) => {
        let firstYear = this.state.years[0] + 10;
        let years = [];
        for(let i=0; i<10; i++) {
            years.push(firstYear + i);
        }
        this.setState({ years });
    }
    handleYearOnClick = (event, year) => {
        let date = new Date(this.props.selectedDate);
        date.setFullYear(year);
        this.props.onChange(date);
    }
    //*** RESULTADO ***
    render() {
        return(
            <ThemeProvider theme={{ theme: this.props.theme }}>
                <Layout>
                    <Header>
                        <Title>{`${this.state.years[0]} - ${this.state.years[9]}`}</Title>
                        <Previous onClick={this.handlePreviousYearsRangeOnClick}/>
                        <Next onClick={this.handleNextYearsRangeOnClick}/>
                    </Header>
                    <Body>
                        {
                            this.state.years.map((year, index) => {
                                const selected = year === this.props.selectedDate.getFullYear();
                                const disabled = (this.props.minDate && year < this.props.minDate.getFullYear());
                                const state = selected ? 'selected' : (disabled ? 'disabled' : 'normal');
                                const yearProps = {
                                    key: `year-${year}-${index}`,
                                    state,
                                    disabled,
                                    onClick: (event) => this.handleYearOnClick(event, year)
                                };
                                return(<Year type='button' {...yearProps}>{year}</Year>);
                            })
                        }
                    </Body>
                </Layout>
            </ThemeProvider>
        );
    }
}

Years.propTypes = {
    //Obligatorios.
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    //Opcionales.
    language: PropTypes.string,
    minDate: PropTypes.instanceOf(Date),
    //Funciones.
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
        case 'different':
            return `
                background-color: transparent;
                color: #BFBFBF;

                &:hover {
                    background-color: #BFBFBF;
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

const Year = styled.button`
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    font-family: Open Sans;
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

Year.propTypes = {
    state: PropTypes.oneOf(['normal', 'selected', 'different', 'disabled']).isRequired
};
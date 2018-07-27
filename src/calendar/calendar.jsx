//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

//Funciones.
import { getMonthName, getAllDaysInMonth } from '../scripts/date-functions';

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
    height: 195;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: 185px;
`;

const Header = styled.div`
    background-color: ${headerBackgroundColor};
    box-sizing: border-box;
    height: 60px;
    margin: 0px;
    padding: 5px;
    position: relative;
    text-align: center;
    width: 100%;
`;

const MonthYearButton = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: ${headerFontColor};
    cursor: pointer;
    font-family: Open Sans;
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

const Row = styled.div`
    display: flex;
    height: auto;
    justify-content: space-between;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const WeekDayName = styled.label`
    box-sizing: border-box;
    color: ${headerFontColor};
    font-family: Open Sans;
    font-size: 12px;
    font-weight: bold;
    height: 20px;
    margin: 0px;
    padidng: 2px;
    width: 20px;
`;

/*
background: repeating-linear-gradient(
    45deg,
    #999,
    #999 10px,
    #555 10px,
    #555 20px
);
*/
//135px
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

export class Calendar extends Component {
    constructor(props) {
        super(props);
        //Se obtiene la fecha enviada por parámetros o la fecha actual.
        let date = new Date(this.props.selectedDate);
        if(!date instanceof Date || isNaN(date)) date = new Date();
        //NOTA: Los meses comienzan en 0, enero = 0.
        const monthName = getMonthName(date.getMonth() + 1, this.props.language);
        //Listado con los días del mes.
        const days = getAllDaysInMonth(date.getMonth() + 1, date.getFullYear());
        //Fecha mínima.
        let minDate = new Date(this.props.minDate);
        if(!minDate instanceof Date || isNaN(minDate)) minDate = undefined;
        console.log('[COMÚN][CALENDARIO][DÍA][constructor] Fecha mínima: ', minDate);
        //Se inicializa el estado interno.
        this.state = {
            day: date.getDate(),
            month: date.getMonth(),
            monthName,
            year: date.getFullYear(),
            days,
            minDate
        };
    }
    render() {

        let theme = 'default';

        return(
            <ThemeProvider theme={{ theme }}>
                <Layout>
                    <Header>
                        <MonthYearButton type='button'>{`${this.state.monthName} ${this.state.year}`}</MonthYearButton>
                        <Previous onClick={(event) => { console.log('[COMÚN][CALENDARIO][DÍA][ANTERIOR][onClick]'); }}/>
                        <Next onClick={(event) => { console.log('[COMÚN][CALENDARIO][DÍA][SIGUIENTE][onClick]'); }}/>
                        <Row>
                            <WeekDayName>Do</WeekDayName>
                            <WeekDayName>Lu</WeekDayName>
                            <WeekDayName>Ma</WeekDayName>
                            <WeekDayName>Mi</WeekDayName>
                            <WeekDayName>Ju</WeekDayName>
                            <WeekDayName>Vi</WeekDayName>
                            <WeekDayName>Sa</WeekDayName>
                        </Row>
                    </Header>
                    <Body>
                        {
                            this.state.days.length > 0 ?
                            this.state.days.map((day, index) => {
                                const selected = day.getDate() == this.state.day && day.getMonth() === this.state.month;
                                const different = day.getMonth() != this.state.month;
                                const disabled = (this.state.minDate && day < this.state.minDate);
                                const state = selected ? 'selected' : (different ? 'different' : (disabled ? 'disabled' : 'normal'));
                                const dayProps = {
                                    key: `day-${day.getDate()}-${index}`,
                                    state,
                                    disabled,
                                    onClick: (event) => { console.log('[COMÚN][CALENDARIO][DÍA][onClick] Fecha: ', day); }
                                };
                                return(<Day {...dayProps}>{day.getDate()}</Day>);
                            }) :
                            null
                        }
                    </Body>
                </Layout>
            </ThemeProvider>
        );
    }
}

Calendar.propTypes = {
    dateOutputFormat: PropTypes.string,
    language: PropTypes.string,
    minDate: PropTypes.string,
    selectedDate: PropTypes.string
};

const getDayButtonTheme = (state) => {
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

const Day = styled.button`
    border: none;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: bold;
    height: 25px;
    margin: 0px;
    padding: 0px;
    width: 25px;
    
    ${props => getDayButtonTheme(props.state)}

    &:focus {
		outline: none;
	}
`;

Day.propTypes = {
    state: PropTypes.oneOf(['normal', 'selected', 'different', 'disabled']).isRequired
};
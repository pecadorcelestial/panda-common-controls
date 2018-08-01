//Componentes generales.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Month from './month';
import Months from './months';
import Years from './years';

const Layout = styled.div`
    box-sizing: border-box;
    margin: 0px;
    min-height: 195px;
    overflow: hidden;
    padding: 0px;
    width: 185px;
`;

export class Calendar extends Component {
    //*** CONSTRUCTOR ***
    constructor(props) {
        super(props);
        //Se inicializan las variables necesarias.
        //Fecha seleccionada.
        let selectedDate = new Date(this.props.selectedDate);
        if(!selectedDate instanceof Date || isNaN(selectedDate)) selectedDate = new Date();
        //Fecha mínima.
        let minDate = new Date(this.props.minDate);
        if(!minDate instanceof Date || isNaN(minDate)) minDate = undefined;
        //Se configura el estado inicial.
        this.state = {
            mode: this.props.mode,
            selectedDate,               //Fecha seleccionada, se inicializa con la fecha proporcionada en las propiedades.
            innerDate: selectedDate,    //Fecha interna, se utiliza para todas las modificaciones en meses y años, es decir, es de uso intero hasta seleccionar una fecha final.
            minDate
        };
    }
    //*** HANDLERS ***

    //DDDD  IIIII  AAA
    //D   D   I   A   A
    //D   D   I   AAAAA
    //D   D   I   A   A
    //DDDD  IIIII A   A

    handleMonthOnClick = () => {
        this.setState({ mode: 'months' });
    }
    //NOTA:Esta función se manda llamar cuando se recorre un mes hacía delante o atrás.
    handleDayOnInnerChange = (date) => {
        this.setState({ innerDate: date });
    }
    //NOTA: Es la única función que va a modificar la fecha seleccionada.
    handleDayOnChange = (date) => {
        this.setState({ selectedDate: date, innerDate: date }, () => {
            this.props.onChange(date);
        });
    }

    //M   M EEEEE  SSSS
    //MM MM E     S
    //M M M EEE    SSS
    //M   M E         S
    //M   M EEEEE SSSS

    handleMonthOnChange = (date) => { 
        this.setState({ innerDate: date, mode: 'month' });
    }
    handleYearOnClick = () => {
        this.setState({ mode: 'years' });
    }

    // AAA    ~~~  OOO
    //A   A ~~    O   O
    //AAAAA n nn  O   O
    //A   A nn  n O   O
    //A   A n   n  OOO

    handleYearOnChange = (date) => {
        this.setState({ innerDate: date, mode: 'months' });
    }

    //*** RESULTADO ***
    render() {

        // CCCC  OOO  N   N TTTTT EEEEE N   N IIIII DDDD   OOO
        //C     O   O NN  N   T   E     NN  N   I   D   D O   O
        //C     O   O N N N   T   EEE   N N N   I   D   D O   O
        //C     O   O N  NN   T   E     N  NN   I   D   D O   O
        // CCCC  OOO  N   N   T   EEEEE N   N IIIII DDDD   OOO

        let content;
        switch(this.state.mode) {
            case 'month':
                content = <Month {...this.props} selectedDate={this.state.selectedDate} innerDate={this.state.innerDate} minDate={this.state.minDate} onChange={this.handleDayOnChange} onInnerChange={this.handleDayOnInnerChange} monthOnClick={this.handleMonthOnClick}/>;
                break;
            case 'months':
                content = <Months {...this.props} selectedDate={this.state.selectedDate} innerDate={this.state.innerDate} minDate={this.state.minDate} onChange={this.handleMonthOnChange} yearOnClick={this.handleYearOnClick}/>;
                break;
            case 'years':
                content = <Years {...this.props} selectedDate={this.state.selectedDate} innerDate={this.state.innerDate} minDate={this.state.minDate} onChange={this.handleYearOnChange}/>;
                break;
        }

        //RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
        //R   R E     S     U   U L       T   A   A D   D O   O
        //RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
        //R   R E         S U   U L       T   A   A D   D O   O
        //R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO

        return(
            <Layout>
                {content}
            </Layout>
        );
    }
}

Calendar.propTypes = {
    //Opcionales.
    language: PropTypes.string,
    minDate: PropTypes.string,
    mode: PropTypes.oneOf(['month', 'months', 'years']),
    selectedDate: PropTypes.string,
    //Funciones.
    onChange: PropTypes.func.isRequired
};

Calendar.defaultProps = {
    mode: 'month'
};
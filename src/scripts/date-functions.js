//NOTA: Los parámetros tipo Object (incluídos los tipo Date) se mandan como referencia SIEMPRE.
//https://www.w3schools.com/js/js_function_parameters.asp

//Descripción: Devuelve el nombre del mes correspondiente a su posición en el calendario.
//Parámetros:
//      date: Objeto del tipo Date del que se obtendra el nombre del mes.
//      language: Lenguaje en el que se desea obtener el nombre (p. ej.: 'es-ES').
//Resultado: Una cadena con el nombre del mes.
export const getMonthName = (date, language) => {
    const locale = language || 'es-MX';
    const month = date.toLocaleString(locale, { month: 'long' });
    return month;
};

//Descripción: Devuelve un arreglo con todos los días del mes pedido.
//Parámetros:
//      date: Objeto tipo Date del que se obtendran los días.
//Resultado: Arreglo con objetos tip Date.
export const getAllDaysInMonth = (dateRef) => {
    //Variables.
    let days = [];
    let date = new Date(dateRef);
    //Se ajusta el día del mes.
    date.setDate(1);
    //Se obtienen el mes anetior y el mes siguiente.
    let previousMonth = new Date(date);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    let nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    //1. Se revisa en qué día de la semana comienza el mes.
    const weekDay = date.getDay();
    //2. De ser mayor a 0 (domingo), se deben agregar los días del mes anterior.
    let previousDays;
    if(weekDay > 0) {
        //NOTA: Por ahora agregamos un día "dummy".
        /*
        for(let i = 0; i < weekDay; i++) {
            //NOTA: Por ahora agregamos un día "dummy".
            days.push({
                getDate: () => 'X',
                getMonth: () => 13
            });
        }
        */
        previousDays = getNDaysInMonth(previousMonth, - weekDay);
        days = previousDays;
    }
    //3. Se insertan todos los días de la semana.
    const currentMonth = date.getMonth();
    while(date.getMonth() === currentMonth) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    //4. El calendario consta de 35 / 42 lugares para colocar días, si el arreglo es menor se deben agregar los días del siguiente mes.
    let rows = Math.floor(days.length / 7);
    rows += ((days.length % 7) > 0) ? 1 : 0;
    let totalDays = rows * 7;
    let nextDays;
    if(days.length < totalDays) {
        /*
        for(let j = days.length; j < totalDays; j++) {
            //NOTA: Por ahora agregamos un día "dummy".
            days.push({
                getDate: () => 'X',
                getMonth: () => 13
            });
        }
        */
        nextDays = getNDaysInMonth(nextMonth, (totalDays - days.length));
        nextDays.forEach((day) => {
            days.push(day);
        });
    }
    //5. Se devuelve el resultado.
    return days;
};

//Descripción: Devuelve un arreglo con la cantidad de días pedidos de un mes.
//Parámetros:
//      date: Objeto tipo Date de donde se obtendran los días.
//      count:
//                0 = Para obtener todos los días del mes.
//              > 0 = Para obtener los sólo los días indicado a partir del primero.
//              < 0 = Para obtener los sólo los últimos días indicados.
//Resultado: Un arreglo de objetos tipo fecha.
export const getNDaysInMonth = (dateRef, count) => {
    //Variables.
    let days = [];
    let date = new Date(dateRef);
    //0. Se revisa cuál será la fecha inicial.
    date.setDate(1);
    if(count && count < 0) {
        date.setMonth(date.getMonth() + 1);
        date.setDate(date.getDate() + count);
    }
    //console.log('[SCRIPTS][FECHAS][getNDaysInMonth] Fecha inicial: ', date);
    //2. Se insertan los días solicitados.
    let newCount = count >= 0 ? count : (count * -1);
    for(let i=0; i<newCount; i++) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    //3. Se devuelve el arreglo.
    return days;
};

//Descripción: Devuelve una fecha con el formato deseado.
//Parámetros:
//      date: Objeto tipo Date al que se desea dar formato.
//      format: Objeto tipo string con el formato deseado.
//      language: Lenguaje en el que se desea obtener la información (p. ej.: 'es-MX').
//Resultado: Una cadena con la fecha en el formato deseado.
export const getFormattedDate = (date, format, language) => {
    //console.log(`[SCRIPTS][FECHAS][getFormattedDate] Fecha: ${date}.`);
    const locale = language || 'es-MX';
    let day = date.toLocaleDateString(locale, { day: '2-digit' });
    let month = date.toLocaleDateString(locale, { month: '2-digit' });
    let monthName = date.toLocaleString(locale, { month: 'long' });
    let year = date.getFullYear();
    //console.log(`[SCRIPTS][FECHAS][getFormattedDate] Día: ${day}; Mes: ${month}; Mes (nombre): ${monthName} Años: ${year}`);
    let result = format;
    result = result.replace(/[d]{2}/gi, day);
    result = result.replace(/[m]{3}/gi, monthName);
    result = result.replace(/[m]{2}/gi, month);
    result = result.replace(/[y]{2,4}/gi, year);
    return result;
};
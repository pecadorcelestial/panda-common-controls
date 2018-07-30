
//Descripción: Devuelve el nombre del mes correspondiente a su posición en el calendario.
//Parámetros:
//      id: Posición del mes (p. ej.: enero =1 ~ diciembre = 12).
//      language: Lenguaje en el que se desea obtener el nombre (p. ej.: 'es-ES').
//Resultado: Una cadena con el nombre del mes.
export const getMonthName = (id, language) => {
    const date = new Date();
    date.setMonth(id - 1);
    const locale = language || 'es-ES';
    const month = date.toLocaleString(locale, { month: 'long' });
    return month;
};

//Descripción: Devuelve un arreglo con todos los días del mes pedido.
//Parámetros:
//      month: Mes del que se quieren los días (p. ej.: enero =1 ~ diciembre = 12)
//      year: Año (obviamente).
export const getAllDaysInMonth = (month, year) => {
    //console.log(`[SCRIPTS][FECHAS][getAllDaysInMonth] Parámetros: a) month = ${month}; b) year = ${year}`);
    //Variables.
    let days = [];
    const date = new Date(year, month - 1, 1);
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
        //console.log('[SCRIPTS][FECHAS][getAllDaysInMonth] Se van a pedir los días anteriores.');
        previousDays = getNDaysInMonth(month - 1, year, - weekDay);
        days = previousDays;
    }
    //console.log('[SCRIPTS][FECHAS][getAllDaysInMonth] Días (corte 1): ', days);
    //3. Se insertan todos los días de la semana.
    while(date.getMonth() === month - 1) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    //console.log('[SCRIPTS][FECHAS][getAllDaysInMonth] Días (corte 2): ', days);
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
        //console.log('[SCRIPTS][FECHAS][getAllDaysInMonth] Se van a pedir los días anteriores.');
        nextDays = getNDaysInMonth(month + 1, year, (totalDays - days.length));
        nextDays.forEach((day) => {
            days.push(day);
        });
    }
    //console.log('[SCRIPTS][FECHAS][getAllDaysInMonth] Días (corte 2): ', days);
    //5. Se devuelve el resultado.
    return days;
};

//Descripción: Devuelve un arreglo con la cantidad de días pedidos de un mes.
//Parámetros:
//      month: Mes del que se quieren los días (p. ej.: enero =1 ~ diciembre = 12)
//      year: Año (obviamente).
//      count:
//                0 = Para obtener todos los días del mes.
//              > 0 = Para obtener los sólo los días indicado a partir del primero.
//              < 0 = Para obtener los sólo los últimos días indicados.
//Resultado: Un arreglo de objetos tipo fecha.
export const getNDaysInMonth = (month, year, count) => {
    //console.log(`[SCRIPTS][FECHAS][getNDaysInMonth] Parámetros: a) month = ${month}; b) year = ${year}; c) count = ${count}`);
    //Variables.
    let days = [];
    let date;
    //0. Se revisa cuál será la fecha inicial.
    if(!count || count >= 0) {
        date = new Date(year, month - 1, 1);
    } else {
        date = new Date(year, month, 1);
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
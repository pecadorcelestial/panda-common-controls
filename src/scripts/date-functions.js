
//Descripción: Devuelve el nombre del mes correspondiente a su posición en el calendario.
//Parámetros:
//      id: Posición del mes (p. ej.: enero =1 ~ diciembre = 12)
//      language: Lenguaje en el que se desea obtener el nombre (p. ej.: 'es-ES')
//Resultado: Una cadena con el nombre del mes.
export const getMonthName = (id, language) => {
    const date = new Date();
    date.setMonth(id - 1);
    const locale = language || 'es-ES';
    const month = date.toLocaleString(locale, { month: 'long' });
    return month;
}

export const getAllDaysInMonth = (month, year) => {
    //Variables.
    let days = [];
    const date = new Date(year, month - 1, 1);
    //1. Se revisa en qué día de la semana comienza el mes.
    const weekDay = date.getDay();
    //2. De ser mayor a 0 (domingo), se deben agregar los días del mes anterior.
    if(weekDay > 0) {
        for(let i = 0; i < weekDay; i++) {
            //NOTA: Por ahora agregamos un día "dummy".
            days.push({
                getDate: () => 'X',
                getMonth: () => 13
            });
        }
    }
    //3. Se insertan todos los días de la semana.
    while(date.getMonth() === month - 1) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    //4. El calendario consta de 35 / 42 lugares para colocar días, si el arreglo es menor se deben agregar los días del siguiente mes.
    let rows = Math.floor(days.length / 7);
    rows += ((days.length % 7) > 0) ? 1 : 0;
    let totalDays = rows * 7;
    if(days.length < totalDays) {
        for(let j = days.length; j < totalDays; j++) {
            //NOTA: Por ahora agregamos un día "dummy".
            days.push({
                getDate: () => 'X',
                getMonth: () => 13
            });
        }
    }
    //5. Se devuelve el resultado.
    return days;
}
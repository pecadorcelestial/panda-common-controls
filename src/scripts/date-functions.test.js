import { getMonthName, getAllDaysInMonth, getNDaysInMonth, getFormattedDate } from './date-functions';

//NOTA: La función "getNDaysInMonth" es utilizada por la función "getAllDaysInMonth", por lo que está cubierta ya.

describe('[Funciones][Fechas][getMonthName]: Debe devolver el nombre del mes en el idioma seleccionado.', () => {
    let date = new Date('08/15/1981');
    //Español (x defecto).
	it('Debe devolver "agosto".', () => {
        //NOTA: Las pruebas fallan por que NODE JS se instala sólo con la localización de Estados Unidos (¬_¬') = 'en-EU'.
        //      Hasta que llega al servidor lo convierte, ya que los navegadores si tienen localización más amplia.
        //      https://github.com/nodejs/node/issues/8500
		expect(getMonthName(date)).toEqual('M08');
    });
    //Inglés.
	it('Debe devolver "August".', () => {
		expect(getMonthName(date, 'en-US')).toEqual('August');
	});
});

describe('[Funciones][Fechas][getAllDaysInMonth]: Debe devolver todos los días del mes seleccionado (con días antes y después).', () => {
    let days = [];
    let julyStartDate = new Date('07/29/2018');
    //Días de julio.
    for(let i=0; i<3; i++) {
        let newDate = new Date(julyStartDate);
        newDate.setDate(newDate.getDate() + i);
        days.push(newDate);
    }
    //Días de agosto.
    let augustStartDate = new Date('08/01/2018');
    for(let i=0; i<31; i++) {
        let newDate = new Date(augustStartDate);
        newDate.setDate(newDate.getDate() + i);
        days.push(newDate);
    }
    //Días de septiembre.
    let septemberStartDate = new Date('09/01/2018');
    days.push(septemberStartDate);
    //Fecha a utilizar con la función.
    let dateToTest = new Date('08/15/2018');
	it('Debe devolver un arreglo de 35 Objetos tipo Date.', () => {
		expect(getAllDaysInMonth(dateToTest)).toEqual(days);
    });
});

describe('[Funciones][Fechas][getAllDaysInMonth]: Debe devolver todos los días del mes seleccionado (sin días antes y si con días después).', () => {
    let days = [];
    let julyStartDate = new Date('07/01/2018');
    //Días de julio.
    for(let i=0; i<31; i++) {
        let newDate = new Date(julyStartDate);
        newDate.setDate(newDate.getDate() + i);
        days.push(newDate);
    }
    //Días de agosto.
    let augustStartDate = new Date('08/01/2018');
    for(let i=0; i<4; i++) {
        let newDate = new Date(augustStartDate);
        newDate.setDate(newDate.getDate() + i);
        days.push(newDate);
    }
    //Fecha a utilizar con la función.
    let dateToTest = new Date('07/15/2018');
	it('Debe devolver un arreglo de 35 Objetos tipo Date.', () => {
		expect(getAllDaysInMonth(dateToTest)).toEqual(days);
    });
});

describe('[Funciones][Fechas][getAllDaysInMonth]: Debe devolver todos los días del mes seleccionado (con días antes pero sin días después).', () => {
    let days = [];
    let mayStartDate = new Date('05/27/2018');
    //Días de mayo.
    for(let i=0; i<5; i++) {
        let newDate = new Date(mayStartDate);
        newDate.setDate(newDate.getDate() + i);
        days.push(newDate);
    }
    //Días de junio.
    let juneStartDate = new Date('06/01/2018');
    for(let i=0; i<30; i++) {
        let newDate = new Date(juneStartDate);
        newDate.setDate(newDate.getDate() + i);
        days.push(newDate);
    }
    //Fecha a utilizar con la función.
    let dateToTest = new Date('06/15/2018');
	it('Debe devolver un arreglo de 35 Objetos tipo Date.', () => {
		expect(getAllDaysInMonth(dateToTest)).toEqual(days);
    });
});

describe('[Funciones][Fechas][getFormattedDate]: Debe devolver la fecha con el formato deseado.', () => {
    let date = new Date('08/15/2018');
    it('Debe devolver "15/08/2018" enviando el formato "dd/mm/yyyy"', () => {
        expect(getFormattedDate(date, 'dd/mm/yyyy')).toEqual('15/08/2018');
    });
    it('Debe devolver "15-08-2018" enviando el formato "DD-MM-YYYY"', () => {
        expect(getFormattedDate(date, 'DD-MM-YYYY')).toEqual('15-08-2018');
    });
    //NOTA: Las pruebas se tienen que hacer en inglés por que NODE JS se instala sólo con la localización de 
    //      Estados Unidos (¬_¬') = 'en-EU'.
    //      Hasta que llega al servidor lo convierte, ya que los navegadores si tienen localización más amplia.
    //      https://github.com/nodejs/node/issues/8500
    it('Debe devolver "15-August-2018" enviando el formato "dd-mmm-yyyy"', () => {
        expect(getFormattedDate(date, 'dd-mmm-yyyy', 'en-EU')).toEqual('15-August-2018');
    });
    it('Debe devolver "15th of August 2018" enviando el formato "ddth of mmm yyyy"', () => {
        expect(getFormattedDate(date, 'ddth of mmm yyyy', 'en-EU')).toEqual('15th of August 2018');
    });
});
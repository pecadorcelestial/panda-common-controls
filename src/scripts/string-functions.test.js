import { capitalizeString } from './string-functions';

describe('[Funciones][Texto][capitalizeString]: Debe devolver el texto original con la primer letra en mayúscula.', () => {
    let string = 'francisco';
	it('Debe devolver "Francisco".', () => {
		expect(capitalizeString(string)).toEqual('Francisco');
    });
});

describe('[Funciones][Texto][capitalizeString]: Debe devolver el texto original con la primer letra de todas las palabras en mayúscula.', () => {
    let string = 'francisco rodríguez';
	it('Debe devolver "Francisco Rodríguez".', () => {
		expect(capitalizeString(string, true)).toEqual('Francisco Rodríguez');
    });
});

describe('[Funciones][Texto][capitalizeString]: Debe devolver una cadena vacía al envíar un valor no válido.', () => {
    it('Debe devolver "".', () => {
		expect(capitalizeString(undefined)).toEqual('');
        expect(capitalizeString(null)).toEqual('');
		expect(capitalizeString(false, false)).toEqual('');
		expect(capitalizeString(parseInt(0))).toEqual('');
    });
});
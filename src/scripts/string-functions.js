//Descripción: Devuelve una cadena con la primer letra en mayúscula.
//Parámetros:
//      string: Objeto del tipo string de que se modificara.
//      all: Objeto tipo booleano que indica si se "capitalizan" todas las palabras.
//Resultado: Una cadena con primer letra en mayúscula..
export const capitalizeString = (string, all = false) => {
    //Se valida que el valor recibido sea del tipo string.
    if(typeof string === "string") {
        if(all) {
            let result = '';
            let strings = string.split(' ');
            strings.forEach(string => {
                result += `${string.charAt(0).toUpperCase()}${string.slice(1)} `;
            });
            return result.trim();
        } else {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    } else {
        return '';
    }    
};
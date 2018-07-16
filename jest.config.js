//JJJJJ  SSSS DDDD   OOO  M   M
//    J S     D   D O   O MM MM
//    J  SSS  D   D O   O M M M
//J   J     S D   D O   O M   M
// JJJ  SSSS  DDDD   OOO  M   M

//NOTA [1]: Se requiere de un DOM "virtual" para poder utilizar el módulo "mount" en ENZYME.
//https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

//NOTA [2]: Al parecer se debe utilizar la nomenclatura de Node.JS, es decir "require" en lugar de "import" (°~°).
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body><div id="app" /></body></html>');
const { window } = jsdom;

const copyProps = (src, target) => {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        }), {});
    Object.defineProperties(target, props);
};

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);

//JJJJJ  SSSS DDDD   OOO  M   M
//    J S     D   D O   O MM MM
//    J  SSS  D   D O   O M M M
//J   J     S D   D O   O M   M
// JJJ  SSSS  DDDD   OOO  M   M

//NOTA [1]: Se requiere de un DOM "virtual" para poder utilizar el módulo "mount" en ENZYME.
//https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

//NOTA [2]: Al parecer se debe utilizar la nomenclatura de Node.JS, es decir "require" en lugar de "import" (°~°).
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;
global.window = window;
global.document = window.document
global.navigator = {
    userAgent: 'node.js',
};

//Ejemplo:
//https://github.com/hex-fire/Sample-1525/blob/master/__test__/setupFile.js
//JJJJJ  SSSS DDDD   OOO  M   M
//    J S     D   D O   O MM MM
//    J  SSS  D   D O   O M M M
//J   J     S D   D O   O M   M
// JJJ  SSSS  DDDD   OOO  M   M

//NOTA [1]: Se requiere de un DOM "virtual" para poder utilizar el módulo "mount" en ENZYME.
//https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

//NOTA [2]: Al parecer se debe utilizar la nomenclatura de Node.JS, es decir "require" en lugar de "import" (°~°).
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body><div id="app" style="margin-top: 150px;"></div></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};

global.window.resizeTo = function(width, height) {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event('resize'));
};
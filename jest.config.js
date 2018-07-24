//JJJJJ  SSSS DDDD   OOO  M   M
//    J S     D   D O   O MM MM
//    J  SSS  D   D O   O M M M
//J   J     S D   D O   O M   M
// JJJ  SSSS  DDDD   OOO  M   M

//NOTA [1]: Se requiere de un DOM "virtual" para poder utilizar el módulo "mount" en ENZYME.
//https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

//NOTA [2]: Al parecer se debe utilizar la nomenclatura de Node.JS, es decir "require" en lugar de "import" (°~°).
const { JSDOM } = require('jsdom');

const options = {
    resources: 'usable',
    runScripts: 'dangerously',
    beforeParse(window) {
        window.alert = window.console.log.bind(window.console);
        window.innerWidth = 300;
        window.innerHeight = 100;
        window.scrollTo = (xPos, yPos) => {
            console.log('[JSDOM][CONFIGURATION][window.scrollTo]');
        }
    }
};

const jsdom = new JSDOM('<!doctype html><html><body><div id="app" style="margin-top: 150px;"/></body></html>', options);
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

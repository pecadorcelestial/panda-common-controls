/*
https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import

While import is indeed part of ES6, it is unfortunately not yet supported in NodeJS by default, 
and has only very recently landed support in browsers.

From James M Snell's Update on ES6 Modules in Node.js (February 2017):

| Work is in progress but it is going to take some time — We’re currently looking at around a year at least.

Until support shows up natively, you'll have to continue using classic require statements:

const express = require("express");
*/

require('babel-register');

const { Button } = require('./lib/buttons/buttons');
const { CheckBox } = require('./lib/checkboxes/checkboxes');
const { BasicSelect: Select } = require('./lib/dropdownlists/dropdownlists');
const { BasicTextBox: TextBox } = require('./lib/textboxes/textboxes');
const { BasicCard: Card } = require('./lib/cards/cards')

module.exports = {
    Button,
    Card,
    CheckBox,
    Select,
    TextBox
};
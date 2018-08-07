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

const { Loading, Animate } = require('./lib/animations/animations');
const { Button, IconButton, RoundButton } = require('./lib/buttons/buttons');
const { Calendar } = require('./lib/calendar/calendar');
const { BasicCard: Card } = require('./lib/cards/cards');
const { CheckBox } = require('./lib/checkboxes/checkboxes');
const { BasicSelect: Select } = require('./lib/dropdownlists/dropdownlists');
const { Icon } = require('./lib/icons/icons');
const { BasicTextBox: TextBox } = require('./lib/textboxes/textboxes');
const { ToastNotification } = require('./lib/toastnotifications/toastnotifications');

module.exports = {
    Animate,
    Button,
    Calendar,
    Card,
    CheckBox,
    Icon,
    IconButton,
    Loading,
    Select,
    RoundButton,
    TextBox,
    ToastNotification
};
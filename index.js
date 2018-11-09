/*
https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import

While import is indeed part of ES6, it is unfortunately not yet supported in NodeJS by default, 
and has only very recently landed support in browsers.

From James M Snell's Update on ES6 Modules in Node.js (February 2017):

| Work is in progress but it is going to take some time — We’re currently looking at around a year at least.

Until support shows up natively, you'll have to continue using classic require statements:

const express = require("express");
*/

require('@babel/register');

const { Loading, Animate, FlipCard, FrontContent, BackContent } = require('./lib/animations/animations');
const { Badge, IconBadge, NotificationBadge } = require('./lib/badges/badges');
const { Button, IconButton, RoundButton } = require('./lib/buttons/buttons');
const { Calendar } = require('./lib/calendar/calendar');
const { BasicCard: Card } = require('./lib/cards/cards');
const { CheckBox } = require('./lib/checkboxes/checkboxes');
const { BasicSelect: Select } = require('./lib/dropdownlists/dropdownlists');
const { CircularGraph } = require('./lib/graphs/graphs');
const { Icon } = require('./lib/icons/icons');
const { MenuWithBlur } = require('./lib/menus/menus');
const { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } = require('./lib/modals/modals');
const { RadioButton, RadioButtonsGroup } = require('./lib/radiobuttons/radiobuttons');
const { BasicTextBox: TextBox } = require('./lib/textboxes/textboxes');
const { Tabs } = require('./lib/tabs/tabs');
const { ToastNotification } = require('./lib/toastnotifications/toastnotifications');
const ToolTip = require('./lib/tooltip/tooltip');

module.exports = {
    Animate,
    Badge,
    Button,
    Calendar,
    Card,
    CheckBox,
    CircularGraph,
    FlipCard, FrontContent, BackContent,
    Icon,
    IconBadge,
    IconButton,
    Loading,
    MenuWithBlur,
    Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter,
    NotificationBadge,
    Select,
    RadioButton, 
    RadioButtonsGroup,
    RoundButton,
    Tabs,
    TextBox,
    ToastNotification,
    ToolTip
};
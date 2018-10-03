# &#128060; Panda Common Controls

[![npm version](https://badge.fury.io/js/panda-common-controls.svg)](https://badge.fury.io/js/panda-common-controls)
[![Build Status](https://travis-ci.org/pecadorcelestial/panda-common-controls.svg?branch=master)](https://travis-ci.org/pecadorcelestial/panda-common-controls)
[![Coverage Status](https://coveralls.io/repos/github/pecadorcelestial/panda-common-controls/badge.svg)](https://coveralls.io/github/pecadorcelestial/panda-common-controls)

This library came out as a personal project to create a list of reusable components and also as a test to build my first public module to use with NPM.

It contains some "fancy looking" components like:
- Animations
- Badges
- Button
- Calendar
- Card
- Checkbox
- Dropdown List
- Graphs
- Icons
- Menus Layout
- Modals
- RadioButton
- TextBox (an input tag with a little more functionality)
- Toast Notifications
- ToolTip

These components where created using the [styled-componets](https://www.styled-components.com/) library.

You can see them in action [here](https://03lzl0k66l.codesandbox.io/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

**NOTE:** In order to use these components you will need to install the ``styled-components`` and ``styled-theming`` packages.

```
npm install --save styled-components styled-theming
```

To install this module using **_npm_** just run this command:

```
npm install --save panda-common-controls
```

This will install the following files into your project:

```
    .
    ├── lib
    |     ├── animations
    |     |       └── animations.js
    |     ├── badges
    |     |       └── badges.js
    |     ├── buttons
    |     |       └── buttons.js
    |     ├── calendar
    |     |       ├── calendar.js
    |     |       ├── month.js
    |     |       ├── months.js
    |     |       └── years.js
    |     ├── cards
    |     |       └── cards.js
    |     ├── checkboxes
    |     |       └── checkboxes.js
    |     ├── dropdownlists
    |     |       └── dropdownlists.js
    |     ├── graphs
    |     |       └── graphs.js
    |     ├── icons
    |     |       └── icons.js
    |     ├── menus
    |     |       └── menus.js
    |     ├── modals
    |     |       └── modals.js
    |     ├── radiobuttons
    |     |       └── radiobuttons.js
    |     ├── textboxes
    |     |       └── textboxes.js
    |     ├── toastnotifications
    |     |       └── toastnotifications.js
    |     └── tooltip
    |             └── tooltip.js
    ├── index.js
    ├── package.json
    └── README.md
```

For a complete list of the files, including a running examples and tests, you can check the [GitHub](https://github.com/pecadorcelestial/panda-common-controls) repository.

## Basic usage

### Components

* [Animations](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/animations.md)
* [Badges](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/badges.md)
* [Buttons](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/buttons.md)
* [Calendar](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/calendar.md)
* [Cards](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/cards.md)
* [CheckBoxes](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/checkboxes.md)
* [DropDown Lists](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/dropdownlists.md)
* [Graphs](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/graphs.md)
* [Icons](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/icons.md)
* [Menus](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/menus.md)
* [Modals](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/modals.md)
* [RadioButtons](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/radiobuttons.md)
* [TextBoxes](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/textboxes.md)
* [Toast Notifications](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/toastnotifications.md)
* [ToolTip](https://github.com/pecadorcelestial/panda-common-controls/blob/master/docs/api/tooltip.md)

You can clone the [repository](https://github.com/pecadorcelestial/panda-common-controls), start it and check the **_meta-storybook_** page to see some of the components in action.

```
**To clone it**
git clone https://github.com/pecadorcelestial/panda-common-controls.git

**To start it**
npm start
```

## Running the tests

The test where build using [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme), to run them just copy the repository and type:

```
npm test
```

This includes the coverage command.

## Built With

* [styled-componets](https://www.styled-components.com/) - For visuals and animations.
* [Jest](https://jestjs.io/) - Testing sandbox.
* [Enzyme](https://github.com/airbnb/enzyme) - JS testing utility.

## Authors

* **Francisco Rodríguez** - *Initial work* - [GitHub](https://github.com/pecadorcelestial/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* These components are highly inspired by the [React-MDL library](https://tleunen.github.io/react-mdl/).
* The [font awesome](https://fontawesome.com/?from=io) by **Dave Gandy** is used... it really is awesome.

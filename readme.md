# Panda Common Controls

This library came out as a personal project to create a list of reusable components and also as a test to build my first public module to use with NPM.

It contains some "fancy looking" components like:
- Animations
- Button
- Card
- Checkbox
- Dropdown List
- TextBox (an input tag with a little more functionality)

These components where created using the [styled-componets](https://www.styled-components.com/) library.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

To install this module using *npm* just run this command:

```
npm install --save panda-common-controls
```

This will install the following files into your project:

```
    .
    ├── lib
    |     ├── animations
    |     |       └── animations.js
    |     ├── buttons
    |     |       └── buttons.js
    |     ├── cards
    |     |       └── cards.js
    |     ├── checkboxes
    |     |       └── checkboxes.js
    |     ├── dropdownlists
    |     |       └── dropdownlists.js
    |     └── textboxes
    |             └── textboxes.js
    ├── index.js
    ├── package.json
    └── README.md
```

For a complete list of the files, including a running examples and tests, you can check the [GitHub](https://github.com/pecadorcelestial/panda-common-controls) repository.

## Basic usage

### Components

* [Animations](docs/api/animations.md)
* [Buttons](docs/api/buttons.md)
* [Cards](docs/api/cards.md)
* [CheckBoxes](docs/api/checkboxes.md)
* [DropDown Lists](docs/api/dropdownlists.md)
* [TextBoxes](docs/api/textboxes.md)

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

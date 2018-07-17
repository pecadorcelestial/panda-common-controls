# Select

## Properties, funcitons and methods

```
coming soon...
```

## Usage

```javascript
import React, { Component } from 'react';
import { Select } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Options.
        const options = [
            {
                id: 'text',
                description: 'Text'
            },
            {
                id: 'password',
                description: 'Password'
            },
            {
                id: 'email',
                description: 'Email'
            },
            {
                id: 'number',
                description: 'Number'
            },
        ];
        //Properties.
        const props = {
            //Required.
            title: 'Title',
            error: 'Error set by properties.',
            options,
            selectedOption: 1,
            //Optional.
            disabled: false,
            id: '',
            placeHolder: 'Select a type',
            //Validation.
            isRequired: false,
            idIsNumeric: false
            //Functions.
            onChange: (event) => {console.log('[panda-common-controls][test][onChange] Value: ', event.target.value);}
        };
        //Result.
        return(
            <div>
                <Select {...props} ref={(select) => { this.SelectRef = select;}}/>
            <div>
        );
    }
}
```

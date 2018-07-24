# Select

### Properties

| Name           | Type             | Required | Comments |
| ---------------|------------------|----------|----------|
| disabled       | bool             | false    | Sets the state of the component to disabled. |
| error          | string           | true     | Sets the error message to display when the component state is not valid. |
| id             | string           | false    | Sets the identifier for the **select** component. |
| idIsNumerid    | bool             | false    | Flag that helps on the component state validation. |
| isRequired     | bool             | false    | Flag used to validate the component state. |
| options        | array            | true     | Array of objects to be displayed inside the list. <br/>_Note: Each object should at least contain an **id** (string or number) and a **description** (string) key/value._ |
| placeholder    | string           | false    | Sets the _placeholder_ text to display when no option is selected. |
| selectedOption | string or number | true     | Sets the selected value inside the list. |
| title          | string           | true     | Sets the title text to be displayed. |

### Functions

| Name     | Parameters | Type   | Description |
|----------|------------|--------|-------------|
| onChange | item       | object | Returns the selected item when it changes. |

### Methods

| Name     | Parameters | Type | Description |
|----------|------------|------|-------------|
| getValue | N/A        | N/A  | Returns the item selected from the list. |
| setValue | value      | bool | Changes the selected item in the list. |
| validate | N/A        | N/A  | Validates the component state and changes its theme accordingly. |

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

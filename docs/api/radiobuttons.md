# RadioButton

### Properties

| Name    | Type            | Required | Comments |
| --------|-----------------|----------|----------|
| checked | bool            | false    | Sets the initial state of the **radiobutton**. |
| value   | string / number | true     | Sets the value to be returned when the component is checked. |

### Functions

| Name     | Parameters | Type | Description |
|----------|------------|------|-------------|
| onChange | checked    | bool | Returns the value of the **radiobutton**. |

### Methods

| Name     | Parameters | Type | Description |
|----------|------------|------|-------------|
| getValue | N/A        | N/A  | Returns the state of the **checkbox**. |
| setValue | value      | bool | Changes the value of the **checkbox**. |

## Usage

```javascript
import React, { Component } from 'react';
import { RadioButton } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Properties.
        const props = {
            //Required.
            value: 1,
            //Optional.
            checked: false,
            //Functions.
            onChange: (value) => {console.log('[panda-common-controls][test][onChange] Valor: ', value);}
        };
        //Result.
        return(
            <div>
                <RadioButton {...props}>Option #1</RadioButton>
            <div>
        );
    }
}
```

# RadioButtonsGroup

### Properties

| Name          | Type            | Required | Comments |
| --------------|-----------------|----------|----------|
| options       | object          | true     | Object that will contain ``RadioButtons`` to be _gropued_. [1] |
| selectedValue | string / number | true     | Sets the value to be returned when the component is checked. |

[1]
```json
[
    {
        "name": "Option #1",
        "value": 1
    },
    {
        "name": "Option #2",
        "value": 2
    }
]
```

### Functions

| Name     | Parameters | Type | Description |
|----------|------------|------|-------------|
| onChange | checked    | bool | Returns the selected value. |

### Methods

| Name     | Parameters | Type            | Description |
|----------|------------|-----------------|-------------|
| getValue | N/A        | N/A             | Returns the selected value of the **group**. |
| setValue | value      | string / number | Changes the selected value of the **group**. |

## Usage

```javascript
import React, { Component } from 'react';
import { RadioButtonsGroup } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Options.
        const options = [
            {
                "name": "Option #1",
                "value": 1
            },
            {
                "name": "Option #2",
                "value": 2
            }
        ];
        //Properties.
        const props = {
            //Required.
            options,
            selectedValue: 1,
            //Functions.
            onChange: (value) => {console.log('[panda-common-controls][test][onChange] Valor: ', value);}
        };
        //Result.
        return(
            <div>
                <RadioButtonsGroup {...props}/>
            <div>
        );
    }
}
```

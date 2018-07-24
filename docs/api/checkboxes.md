# CheckBox

### Properties

| Name    | Type | Required | Comments |
| --------|------|----------|----------|
| checked | bool | false    | Sets the initial state of the **checkbox**. |

### Functions

| Name     | Parameters | Type | Description |
|----------|------------|------|-------------|
| onChange | checked    | bool | Returns the state of the **checkbox** when it changes. |

### Methods

| Name     | Parameters | Type | Description |
|----------|------------|------|-------------|
| getValue | N/A        | N/A  | Returns the state of the **checkbox**. |
| setValue | value      | bool | Changes the value of the **checkbox**. |

## Usage

```javascript
import React, { Component } from 'react';
import { CheckBox } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Properties.
        const props = {
            //Required.
            checked: false,
            //Functions.
            onChange: (checked) => {console.log('[panda-common-controls][test][onChange] Valor: ', checked);}
        };
        //Result.
        return(
            <div>
                <CheckBox {...props}>¿Should this be checked?</CheckBox>
            <div>
        );
    }
}
```

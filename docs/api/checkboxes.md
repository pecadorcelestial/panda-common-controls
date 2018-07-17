# CheckBox

## Properties, funcitons and methods

```
coming soon...
```

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

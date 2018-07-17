# TextBox

## Properties, funcitons and methods

```
coming soon...
```

## Usage

```javascript
import React, { Component } from 'react';
import { TextBox } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Properties.
        const textboxProps = {
            //Required.
            title: 'Title',
            error: 'Error set by properties.',
            maxLength: 50,
            //Optionals.
            disabled: false,
            id: 'id',
            inputType: 'email',
            valueType: 'text',
            //Validation.
            isRequired: true,
            validRegEx: '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,4})+$',
            //Functions.
            onChange: (event) => {console.log('[panda-common-controls][test][onChange] Value: ', event.target.value);},
            onFocus: () => {console.log('[panda-common-controls][test][onFocus]');},
            onKeyPress: (event) => {console.log('[panda-common-controls][test][onKeyPress] Key: ', event.which);}
        };
        //Result.
        return(
            <div>
                <TextBox {...textboxProps} ref={(textbox) => { this.TextBoxRef = textbox;}}/>
            <div>
        );
    }
}
```

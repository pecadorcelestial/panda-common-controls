# Badges

### Properties

| Name            | Type    | Required | Comments |
| ----------------|---------|----------|----------|
| showCloseButton | boolean | false    | Use to display the close button. |
| size            | string  | false    | Sets the size of the button, 3 options are available: ``small``*, ``medium`` and ``big``. |
| theme           | string  | false    | Sets the theme (color scheme) for the button, these are the options currently available: ``red``*, ``secondaryRed``, ``flatRed``, ``blue``, ``flatBlue``, ``green``, ``flatGreen``, ``yellow``, ``flatYellow``, ``gray`` y ``flatGray``. |

**\*** _default_ value.
<br/>_Note: The **style** values for **width** and **float** can be overriden._

### Functions

| Name         | Parameters | Type   | Description |
|--------------|------------|--------|-------------|
| closeOnClick | event      | object | Function called when the close button is clicked. |

## Usage

```javascript
import React, { Component } from 'react';
import { Badge } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <Badge theme='red' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Main</Badge>
                <Badge theme='secondaryRed' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Secondary</Badge>
                <Badge theme='flatRed' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Flat</Badge>
                <Badge theme='blue' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Blue</Badge>
                <Badge theme='flatBlue' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Flat Blue</Badge>
                <Badge theme='green' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Blue</Badge>
                <Badge theme='flatGreen' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Flat Blue</Badge>
                <Badge theme='yellow' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Blue</Badge>
                <Badge theme='flatYellow' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Flat Blue</Badge>
                <Badge theme='gray' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Blue</Badge>
                <Badge theme='flatGray' size='small' showCloseButton={true} closeOnClick={(event) => { console.log('[panda-common-controls][test][closeOnClick]'); }}>Flat Blue</Badge>
            <div>
        );
    }
}
```

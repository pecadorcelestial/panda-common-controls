# Button

### Properties

| Name  | Type   | Required | Comments |
| ------|--------|----------|----------|
| size  | string | false     | Sets the size of the button, 3 options are available: ``small``*, ``medium`` and ``big``. |
| theme | string | false     | Sets the theme (color scheme) for the button, these are the options currently available: ``main``*, ``secondary``, ``flat``, ``blue`` and ``flatBlue``. |

**\*** _default_ value.
<br/>_Note: The **style** values for **width** and **float** can be overriden._

## Usage

```javascript
import React, { Component } from 'react';
import { Button } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <Button theme='red' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Main</Button>
                <Button theme='secondaryRed' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Secondary</Button>
                <Button theme='flatRed' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Flat</Button>
                <Button theme='blue' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Blue</Button>
                <Button theme='flatBlue' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Flat Blue</Button>
            <div>
        );
    }
}
```

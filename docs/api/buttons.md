# Button

## Properties, funcitons and methods

```
coming soon...
```

## Usage

```javascript
import React, { Component } from 'react';
import { Button } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <Button theme='main' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Main</Button>
                <Button theme='secondary' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Secondary</Button>
                <Button theme='flat' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Flat</Button>
                <Button theme='blue' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Blue</Button>
                <Button theme='flatBlue' size='small' onClick={(event) => { console.log('[panda-common-controls][test][onClick]'); }}>Flat Blue</Button>
            <div>
        );
    }
}
```

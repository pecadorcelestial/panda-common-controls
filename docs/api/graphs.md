# Button

### Properties

| Name    | Type   | Required | Comments |
| --------|--------|----------|----------|
| percent | number | true     | Sets the amount of the graphs that's going to be covered. |
| theme   | string | false    | Sets the theme (color scheme) for the button, these are the options currently available: ``red``, ``blue``, ``green``*, ``yellow``, ``gray``, ``orange`` and ``black``. |

**\*** _default_ value.
<br/>_Note: The **style** values for **width** and **float** can be overriden._

## Usage

```javascript
import React, { Component } from 'react';
import { CircularGraph } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <CircularGraph percent={85} theme='green'/>
                <CircularGraph percent={45} theme='orange'/>
                <CircularGraph percent={10} theme='red'/>
            <div>
        );
    }
}
```

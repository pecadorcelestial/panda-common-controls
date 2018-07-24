# Card

This component wraps its content in a card-like ``div`` with a ``shadow-box`` and ``border`` of 5px.

### Properties

| Name       | Type   | Optional | Comments |
| -----------|--------|----------|----------|
| elevation  | number | true     | Sets the size of the shadow in the card. If no value is passed the box-shadow will be unset. |
| width      | string | true     | Sets the width of the card. If no value is passed the width is set to ``auto``. |

## Usage

```javascript
import React, { Component } from 'react';
import { Card } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <Card elevation={14} width='100px'>
                    {/* Put content here... */}
                </Card>
            <div>
        );
    }
}
```

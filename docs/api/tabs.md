# Tabs

### Properties

| Name  | Type   | Required | Comments |
| ------|--------|----------|----------|
| tabs  | array  | true     | Array of objects with the information of each tab. <br/>_Note: Each object should at least contain an **id** (string), a **title** (string), the **icon** name (string / optional) and the **content** (object) that will be displayed when that tab is selected._ |
| theme | string | false    | Sets the theme (color scheme) for the button, these are the options currently available: ``red``*, ``blue``, ``green``, ``yellow``, ``gray``, ``orange`` and ``black``. |

## Usage

```javascript
import React, { Component } from 'react';
import { Select } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Values.
        let tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <div>Whatsapp</div>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <div>Facebook</div>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <div>React</div>
            }
        ];
        //Result.
        return(
            <div>
                <Tabs tabs={tabs} theme='blue'/>
            <div>
        );
    }
}
```

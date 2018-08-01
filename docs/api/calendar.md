# Calendar

## Properties

| Name         | Type   | Required | Comments |
| -------------|--------|----------|----------|
| language     | string | false    | Sets localisation for the lenguage the months are displayed on.<br/>[Options available.](https://en.wikipedia.org/wiki/Language_localisation) |
| minDate      | string | false    | Sets the minimum date to ve accepted by the control, the dates below this would be disabled.<br/>The input format should be one of the 3 that are generally available: [ISO, short and long](https://www.w3schools.com/js/js_date_formats.asp). |
| mode         | string | false    | Sets the starting section of the calendar: ``month``*, ``months`` or ``years``. |
| selectedDate | string | false    | Sets the selected date, it will be highlighted.<br/>The input format should be one of the 3 that are generally available: [ISO, short and long](https://www.w3schools.com/js/js_date_formats.asp). |
| theme        | string | false    | Sets the color palette used by the component. _Pending full implementation._ |

**\*** _default_ value.
<br/>_Very important note: If **SSR** is implemented, take into concideration that **Node JS** installs only the minimal requirements, which means that it only has the **english** localisation options. So, for example, if you set ``language`` to 'es-MX' (spanish-México) and the ``selectedDate`` to '08/15/1981', the month returned from NODE will be **M08** instead of **August**._

## Functions

| Name     | Parameters | Type | Description |
|----------|------------|------|-------------|
| onChange | date       | Date | Returns the selected date.<br/>_Note: This function will only be triggered from the month part of the calendar (that is, only when a specific day is selected)._ |

## Methods

| Name    | Parameters | Type | Description |
|---------|------------|------|-------------|
| getDate | N/A        | N/A  | _Pending implementation._ |
| setDate | date       | Date | _Pending implementation._ |

## Usage

```javascript
import React, { Component } from 'react';
import { Calendar } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <Calendar selectedDate='08/15/2018' language='en-EU' theme='default' onChange={(date) => { console.log('[STORYBOOK vol.2][render][CALENDARIO][onChange] Date: ', date); }}/>
            <div>
        );
    }
}
```

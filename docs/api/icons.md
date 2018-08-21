# Icon

### Properties

| Name  | Type   | Required | Comments |
| ------|--------|----------|----------|
| icon  | string | true     | Name of the icon to be displayed, a list of the currently available icons can be found below. |

<br/>_Note: The **fill**, **height** and **width** props can be also overriden._

- android
- apple
- blankFile
- briefcase
- calendar
- checked
- cogWheel
- comment
- creditCard
- cross
- dashboard
- dollar
- earth
- envelope
- exclamation
- eye
- eyeCrossed
- facebook
- github
- heart
- heartFull
- information
- linkedIn
- magnifyingGlass
- mapMarker
- padlock
- paperBill
- pause
- pencil
- photoCamera
- picture
- pinterest
- play
- playSign
- plus
- powerButton
- printer
- questionMark
- refresh
- save
- star
- starFull
- telephone
- time
- trash
- twitter
- warning
- youTube

## Usage

```javascript
import React, { Component } from 'react';
import { Icon } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <Icon icon='android' fill='#242424' height='40px' width='40px'/>
                <Icon icon='apple' fill='#242424' height='40px' width='40px'/>
                <Icon icon='earth' fill='#242424' height='40px' width='40px'/>px'/>
                <Icon icon='facebook' fill='#242424' height='40px' width='40px'/>
                <Icon icon='github' fill='#242424' height='40px' width='40px'/>
                <Icon icon='linkedIn' fill='#242424' height='40px' width='40px'/>
                <Icon icon='pinterest' fill='#242424' height='40px' width='40px'/>
                <Icon icon='twitter' fill='#242424' height='40px' width='40px'/>
                <Icon icon='youTube' fill='#242424' height='40px' width='40px'/>
            <div>
        );
    }
}
```

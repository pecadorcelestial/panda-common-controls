# ToolTip

### Properties

| Name      | Type   | Required | Comments |
| ----------|--------|----------|----------|
| anchorID  | bool   | true     | Sets the name of the component id to which the tooltip will be attached. |
| at        | string | false    | Sets the _origin_ from where the component should be displayed: ``top``, ``bottom``, ``left``, ``right``, ``top-left``, ``top-right``, ``bottom-left``* and ``bottom-right``. |
| elevation | string | false    | Sets the size of the shadow in the tooltip. If no value is passed the box-shadow will be unset. |
| theme     | string | true     | Object that will contain the colors for the ``border`` and ``background`` of the tooltip. [1] |

**\*** _default_ value.

[1]
```json
{
    "content": {
        "backgroundColor": "#1476FB",
        "borderColor": "#1476FB"
    },
    "arrow": {
        "backgroundColor": "#1476FB",
        "borderColor": "#1476FB"
    }
}
```

## Methods

| Name | Parameters | Type | Description |
|------|------------|------|-------------|
| show | N/A        | N/A  | Shows the tooltip... obviously. |
| hide | N/A        | N/A  | Hides the tooltip... also obvious. |

## Usage

```javascript
import React, { Component } from 'react';
import { ToolTip } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Theme.        
		let tooltipTheme = {
			content: {
				backgroundColor: '#1476FB',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#1476FB',
				borderColor: '#1476FB'
			}
		};
        //Result.
        return(
            <div>
                <button type='button' id='btn-anchor' onClick={(event) => { this.ToolTipInnerRef.show(); }}>Show ToolTip</button>
                <ToolTip elevation={14} anchorID='btn-anchor' theme={tooltipTheme} at='bottom-left' innerRef={tooltip => this.ToolTipInnerRef = tooltip}>
                    {/* Put content here... */}
                </ToolTip>
            <div>
        );
    }
}
```

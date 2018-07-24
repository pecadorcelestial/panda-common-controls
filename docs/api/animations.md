# Animations

As for now, there are only 2 components inside the **animations** part of the library:
1. A ``Loading`` which renders a _spinner_ made out of _rotating balls_.
2. A ``Animate`` wrapper wich add a _presentation_ animation to its content, for example: **fade in** on mount and **fade out** on dismount.

## Loading

### Properties

| Name        | Type   | Required | Comments |
| ------------|--------|----------|----------|
| size        | object | true     | Object that needs to contain the ``height`` and the ``width`` of the component. |
| size.height | number | true     | Sets the heigth of the _spinner_. |
| size.width  | number | true     | Sets the width of the _spinner_.  |

## Animate

### Properties

| Name        | Type   | Required | Comments |
| ------------|--------|----------|----------|
| type        | string | true     | It describes the animation style: a)``fade``, b)``flip`` and c)``zoom``. |
| from        | string | true     | Sets the animation direction. <br/>For **fade**:<ul><li>``left``</li><li>``right``</li><li>``top``</li><li>``bottom``</li></ul>For **flip**:<ul><li>``vertical``</li><li>``horizontal``</li></ul> |
| executeWhen | string | false    | Sets when the animation should be triggered. <ul><li>``isMounted``: executes the _in and out_ animations when the component is **mounted** or **dismounted** respectively.</li><li>``isVisible``: executes the _in and out_ animations when the component **enters** or **exits** the _viewport_ respectively.</li></ul>_Note: By default the ``onDemand`` option can be use, just add a **reference** to the declaration of the animation and call the **trigger** methods._|

### Methods

| Name                     | Parameters | Type | Description |
|--------------------------|------------|------|-------------|
| triggerEntranceAnimation | N/A        | N/A  | Triggers the _entrance_ animation... obviously. |
| triggerExitAnimation     | N/A        | N/A  | Triggers the _exit_ animation... also obvious. |

## Usage

```javascript
import React, { Component } from 'react';
import { Loading, Animate } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <Loading size={{ height: 50, width: 50 }}/>
                <div style={{ height: '100px', position: 'relative', width: '100%' }}>
                    <Animate type='zoom' executeWhen='isMounted' ref={animate => { this.AnimateRef = animate; }}>
                        <div style={{ backgroundColor: '#8394DE', height: '100px', width: '100px' }}/>
                    </Animate>
                </div>
            <div>
        );
    }
}
```

# Animations

As for now, there are only 2 components inside the **animations** part of the library:
1. A ``Loading`` which renders a _spinner_ made out of _rotating balls_.
2. A ``Animate`` wrapper wich add a _presentation_ animation to its content, for example: **fade in** on mount and **fade out** on dismount.

## Properties, funcitons and methods

### Loading

| Name        | Type   | Optional | Comments |
| ------------|--------|----------|----------|
| size        | object | false    | Object that needs to contain the ``height`` and the ``width`` of the component. |
| size.height | number | false    | Sets the heigth of the _spinner_. |
| size.width  | number | false    | Sets the width of the _spinner_.  |

### Animate

| Name        | Type   | Optional | Comments |
| ------------|--------|----------|----------|
| type        | string | false    | It describes the animation style: a)``fade``, b)``flip`` and c)``zoom``. |
| from        | string | false    | Set the animation direction. <br/>For **fade**:<ul><li>``left``</li><li>``right``</li><li>``top``</li><li>``bottom``</li></ul><br/>For **flip**:<ul><li>``vertical``</li><li>``horizontal``</li></ul>. |
| executeWhen | string | true     | Sets when the animation should be triggered. <ul><li>``isMounted``: executes the _in and out_ animations when the component is **mounted** or **dismounted** respectively.</li><li>``isVisible``: executes the _in and out_ animations when the component **enters** or **exits** the _viewport_ respectively.</li></ul>|

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
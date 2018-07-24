# Animations

## Properties, funcitons and methods

```
coming soon...
```

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
                        <div style={{ backgroundColor: '#8394DE', height: '100px', widht: '100px' }}/>
                    </Animate>
                </div>
            <div>
        );
    }
}
```

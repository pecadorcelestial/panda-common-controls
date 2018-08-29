# Modal

## Methods

| Name | Parameters | Type | Description |
|------|------------|------|-------------|
| show | N/A        | N/A  | Shows the notification... obviously. |
| hide | N/A        | N/A  | Hides the notification... also obvious. |

## Usage

```javascript
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <button onClick={() => { this.ModalRef.show(); }}>Show modal</button>
                <Modal ref={modal => this.ModalRef = modal}>
                    <ModalHeader>
                        <ModalTitle>Modal title</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <label>Body content.</label>
                    </ModalBody>
                    <ModalFooter>
                        <label>&#9400; Panda Corp. all rights reserved.</label>
                    </ModalFooter>
                </Modal>
            <div>
        );
    }
}
```

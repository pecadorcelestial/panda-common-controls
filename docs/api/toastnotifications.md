# Toast Notifications

## Properties

| Name             | Type             | Required | Comments |
| -----------------|------------------|----------|----------|
| from             | string           | false    | Sets one of the points of origin, in this case: ``top`` or ``bottom``*. |
| message          | string or object | false    | Sets the content of the notification, could be a string or an object (component). |
| notificationType | string           | true     | Sets the theme of the notification: ``success``, ``error``, ``warning`` and ``information``. |
| showWithBounce   | boolean | false    | Indicates if the component initial animation implements a "bouncing" effect. |
| side             | string           | false    | Sets the second part of the origin: ``left``* or ``right``. |
| timeout          | number           | false    | Sets the amount of seconds that the notifications remains visible, if not passed the notifications will stay on display. |
| title            | string           | true     | Sets the title for the notification. |

**\*** _default_ value.

## Methods

| Name | Parameters | Type | Description |
|------|------------|------|-------------|
| show | N/A        | N/A  | Shows the notification... obviously. |
| hide | N/A        | N/A  | Hides the notification... also obvious. |

## Usage

```javascript
import React, { Component } from 'react';
import { ToastNotification } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Result.
        return(
            <div>
                <ToastNotifiaction notificationType='success' from='bottom' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.SuccessToastNotificationRef = notification; }} showWithBounce={true}/>
                <ToastNotifiaction notificationType='error' from='bottom' side='left' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.ErrorToastNotificationRef = notification; }}/>
                <ToastNotifiaction notificationType='warning' from='top' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.WarningToastNotificationRef = notification; }} showWithBounce={true}/>
                <ToastNotifiaction notificationType='information' from='top' side='left' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={notification => { this.InformationToastNotificationRef = notification; }}/>
            <div>
        );
    }
}
```

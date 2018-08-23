# Menu with a blur effect

As its name suggests, this component consists in a ``header``, the ``options`` and a ``content`` layout where you place the components for the page, a wrapper kind of thing. When the menu is displayed, all the components inside the ``content`` section with be blured.

### Properties

| Name      | Type              | Required | Comments |
| ----------|-------------------|----------|----------|
| options   | array of elements | true     | An array of elements (nodes) that will be displayed in the menu. |
| title     | string | true     | Sets the _title_ for the ``header`` section. |

## Methods

| Name | Parameters | Type | Description |
|------|------------|------|-------------|
| show | N/A        | N/A  | Shows the menu... obviously. |
| hide | N/A        | N/A  | Hides the menu... also obvious. |

## Usage

```javascript
import React, { Component } from 'react';
import { MenuWithBlur } from 'panda-common-controls';

class BasicForm extends Component {
    render() {
        //Menu options.
        const options = [];
        options.push(<a href='/'>Home</a>);
        options.push(<a href='/second'>Second page</a>);
        options.push(<a href='/storybook-1'>Storybook vol. 1</a>);
        options.push(<a href='/storybook-2'>Storybook vol. 2</a>);
        options.push(<a href='/storybook-3'>Storybook vol. 3</a>);
        //Result.
        return(
            <MenuWithBlur title='Title' options={options}>
                <div>
                    {/* The rest of your content... */}
                </div>
            </MenuWithBlur>
        );
    }
}
```

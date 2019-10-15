# Button

There are three different styles of Buttons:

1. Primary Button - This is the main action you want the user to take. Ideally, there should only be a single primary button on a screen at a time.

2. Secondary Button - These are for secondary actions... A cancel button or adding an optional form element.

3. Transparent Button - These buttons are unstyled and are good if you need some text or an icon to behave as a button. For example, a trash icon for deleting an item or a question mark icon for a help button. These are the default buttons.

The basic code for a button is something like:

```
import Button from 'button/Button';
import { ButtonVariant } from 'button/Button';

...

<Button label="Sign In" variant={ButtonVariant.primary}>Sign In</Button>

```

You can add behavior to the button by passing it an `onClick` function. See the stories.js file for usage examples.

## ButtonBar

A companion component for the Button is the ButtonBar component. This simply allows for quick alignment of multiple buttons in a row. By default, buttons are right-aligned. If you want to change this (like in the examples), you need to pass it an align attribute.

`<ButtonBar>...</ButtonBar>` - Right aligned Buttons

`<ButtonBar align={ButtonBarAlign.center}>...</ButtonBar>` - Centered Buttons

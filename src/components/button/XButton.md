# XButton

The XButton looks like a pill with the option to click an `x`. This is useful for tracking a list of these buttons and making the only option to remove them from that list.

The basic code for a XButton is something like:

```
import X from 'button/XButton';

...

<XButton
    text="Hide email"
    onClick={() => {
        // do something to remove this button from a list
}}></XButton>

```

It also supports adding in other button props or html props that are recognized in the browser. For example `className`,`id`, or `key`.

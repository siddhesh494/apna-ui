# This is a React Component Library

# Button
 ### Props
 This are the Props which can be pass in
 - `handleOnClick` - On Click Action (Required)
 - `label` - You can either pass text attribute to display the button text or abb children to the component.
 - `isLoading` - Boolean, If true loading will be shown inside button (Default false)
  - `isDisabled`- Boolean, If true Button will be disabled inside (Default false)
 - `classes` - Different type of button style is available you can you classes like button `contain`, `outline`, `small`, `large`

### Examples

For Outline Button
```html
<Button
  classes="outline"
  label="Button"
/>
```

For Contain Button
```html
<Button
  classes="contain"
  label="Button"
/>
```
For Disabled Button
```html
<Button
  classes="contain"
  label="Button"
  isDisabled={true}
/>
```
Button with different size
```html
<Button
  classes="contain large"
  label="Button"
/>
```




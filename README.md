# This is a React Component Library

# Button
 ### Props
 This are the Props which can be pass in
 - `handleOnClick` - On Click Action (Required)
 - `label` - You can either pass text attribute to display the button text or add children to the component.
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
```js
<Button
  classes="contain large"
  label="Button"
/>
```


# Accordion
### Props
 This are the Props which can be pass in
  - `handleOnClick`- On Click Action (Required)
  - `title`- Accordion title (Required)
  - `isOpen`- Boolean, decide if the accordion is open or not
  - `classes`- Add custome CSS for Accordion
    `accordionBody`, `accordionHead`, `accordionTitle`, `accordionContainer`, `accordionIcon`

### Examples
```js
<Accordion
  title = {"Title"}
  isOpen={true}
  classes={{
    accordionHead: 'accordionHead',
    accordionTitle: 'accordionTitle'
  }}
  handleOnClick={() => {
    
  }}
>
  <div>
    We will add children component
  </div>
</Accordion>
```
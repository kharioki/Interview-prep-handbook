#### Question

Given this button code: 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <button>Clicks: 0</button>
    <script src="src/index.js"></script>
  </body>
</html>
```

Make the text within the button display the number of times the button has been clicked.

#### Answer

```js
const button = document.querySelector('button');
let count = 0;
button.addEventListener('click', () => {
  count += 1;
  button.textContent = `Clicks: ${count}`;
});
```

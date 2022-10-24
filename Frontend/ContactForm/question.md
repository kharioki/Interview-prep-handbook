#### Description

In this exercise, we build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

#### Instructions

- The form should contain the following elements:
  - Name field
  - Email field
  - Message field. Since the message can be long, using a `<textarea>` will be good.
  - Submit button
    - Contains the text "Sent".
    - Clicking on the submit button submits the form.
- The form and submission should be implemented entirely in HTML. No JavaScript should be used for this question.
- There is no need to do any validation on the fields. Validation will be done on the server side.

#### Submission API

Upon submission, `POST` the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the **request body**: `name, email, message`.

#### Question

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
    <form>
      <input type="text" />
    </form>
    <script src="src/index.js"></script>
  </body>
</html>
```

#### Answer

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
    <form
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="POST"
    >
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" />
      <label for="message">Message</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Send</button>
    </form>
    <script src="src/index.js"></script>
  </body>
</html>
```

```js
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
  });
});
```

```css
body {
  font-family: sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

label {
  font-size: 12px;
}

input,
textarea {
  display: block;
}
```

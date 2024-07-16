# Project related to DOM

## Project link

[Click here](https://stackblitz.com/edit/vitejs-vite-hnjdqo?file=script.js)

##  Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (['grey', 'blue', 'white', 'yellow'].includes(e.target.id)) {
      body.style.backgroundColor = e.target.id;
    }
  });
});

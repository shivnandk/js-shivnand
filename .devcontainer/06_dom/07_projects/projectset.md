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
```
# Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```
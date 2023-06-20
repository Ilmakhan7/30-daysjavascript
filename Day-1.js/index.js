const button = document.querySelector('.button');
const count = document.querySelector('.count');

let counter = 0;

button.addEventListener('click', function (e) {
  if (e.target.classList.contains('add')) {
    counter++;
  } else if (e.target.classList.contains('subtract')) {
    counter--;
  } else {
    counter = 0;
  }
  setColor();
  count.textContent = counter;
});

function setColor() {
  if (counter > 0) {
    count.style.color = 'green';
  } else if (counter < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = 'red';
  }
}
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const radioFullfield = document.querySelector('input[value=fulfilled]');
const radioRejected = document.querySelector('input[value=rejected]');
const button = document.querySelector('button');

radioFullfield.addEventListener('click', event => {
  options.shouldResolve = true;
});

radioRejected.addEventListener('click', event => {
  options.shouldResolve = false;
});

input.addEventListener('input', event => {
  const inputValue = input.value;
  if (inputValue > 0) {
    options.delay = inputValue;
  }
});

const options = {};

const makePromis = ({ delay, shouldResolve }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          iziToast.success({
            position: 'topRight',
            message: `Fulfilled promise in ${delay}ms`,
          })
        );
      } else {
        reject(
          iziToast.error({
            position: 'topRight',
            message: `Rejected promise in ${delay}ms`,
          })
        );
      }
    }, delay);
  });
};

button.addEventListener('click', event => {
  event.preventDefault();
  makePromis(options)
    .then(() => {})
    .catch(() => {});
});

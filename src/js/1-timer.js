import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button');

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      iziToast.error({
        title: 'ERROR',
        message: 'Please choose a date in the future',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });

      button.disabled = true;
    } else {
      button.disabled = false;
    }
  },
};

const datePicker = flatpickr(input, options);

let userSelectedDate = null;

function timerStart() {
  userSelectedDate = setInterval(() => {
    let deferenceDate = datePicker.selectedDates[0] - Date.now();
    if (deferenceDate <= 0) {
      clearInterval(userSelectedDate);
      initialTime(convertMs(0));
      return;
    } else {
      button.disabled = false;
    }

    initialTime(convertMs(deferenceDate));
  }, 1000);
}

function initialTime({ days, hours, minutes, seconds }) {
  timerDays.textContent = addLeadingZero(days);
  timerHours.textContent = addLeadingZero(hours);
  timerMinutes.textContent = addLeadingZero(minutes);
  timerSeconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

button.addEventListener('click', timerStart);

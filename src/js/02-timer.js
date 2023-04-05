// імпортуємо необхідні модулі та бібліотеки
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
// фокусимо необхідні елементи
const inputDate = document.querySelector('input');
const startBtn = document.querySelector('button');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');
// тимчасово вирубаємо кнопку
function disabledBtn() {
  startBtn.setAttribute('disabled', 'true');
}
disabledBtn();
// оголошені порожні змінні
let timerId = null;
let savedDate;
// об'єкт для вибору дати та функція "календарика"
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.info('Виберіть дату в майбутньому!');
    }
    else {
      startBtn.removeAttribute('disabled');
      Notiflix.Notify.info('Дату вибрано!');
      savedDate = selectedDates[0];
    }
  },
};
flatpickr(inputDate, options);
// запуск відліку
startBtn.addEventListener('click', () => {
  Notiflix.Notify.info('Відлік запущено!');
  let convertedMiliseconds;
  timerId = setInterval(() => {
  
    convertedMiliseconds = savedDate - new Date();
    console.log(convertedMiliseconds); 

  daysValue.textContent = convertMs(convertedMiliseconds).days;
  hoursValue.textContent = convertMs(convertedMiliseconds).hours;
  minutesValue.textContent = convertMs(convertedMiliseconds).minutes;
  secondsValue.textContent = convertMs(convertedMiliseconds).seconds;

  function addLeadingZeroDays(){
    return daysValue.textContent.padStart(2, '0');
  }
  function addLeadingZeroHours(){
    return hoursValue.textContent.padStart(2, '0');
  }
  function addLeadingZeroMinutes(){
    return minutesValue.textContent.padStart(2, '0');
  }
  function addLeadingZeroSeconds(){
    return secondsValue.textContent.padStart(2, '0');
  }

  if (convertedMiliseconds < 1000) {
    clearInterval(timerId);
    Notiflix.Notify.info('Відлік завершено!');
  }
  
    if (convertMs(convertedMiliseconds).days < 10) {
      daysValue.textContent = addLeadingZeroDays();
      hoursValue.textContent = addLeadingZeroHours();
      minutesValue.textContent = addLeadingZeroMinutes();
      secondsValue.textContent = addLeadingZeroSeconds();
  }
   
}, 1000);
})
// Готова функція для підрахунку значень для зворотнього відліку
function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
  
  const hours = Math.floor((ms % day) / hour);
  
  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


// інше
  Notiflix.Notify.info('Віконце сповіщень готове!');




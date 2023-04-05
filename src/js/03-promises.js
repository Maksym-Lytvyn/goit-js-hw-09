// імпортуємо бібліотеку
import Notiflix from 'notiflix';
// захоплюємо необхідні елементи
const form = document.querySelector('form');
const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');

// створюємо прототип функції для промісу
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.info('Проміс виконано!');
  } else {
    Notiflix.Notify.info('Проміс відхилено!');
  }
}



// створюємо прослуховувач гадсилання форми
form.addEventListener('submit', (event) => {
  event.preventDefault();
  createPromise(0.2, 4000);
})




// інше
Notiflix.Notify.info('Віконце сповіщень готове!');
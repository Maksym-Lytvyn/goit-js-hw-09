// імпортуємо бібліотеку
import Notiflix from 'notiflix';
// захоплюємо необхідні елементи
const form = document.querySelector('.form');
// створюємо прототип функції для промісу
function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
  
// створюємо прослуховувач гадсилання форми
  form.addEventListener('submit', event => {
    event.preventDefault();
  
    const delay = Number(form.elements.delay.value);
    const step = Number(form.elements.step.value);
    const amount = Number(form.elements.amount.value);
  
    for (let i = 0; i < amount; i++) {
      const position = i + 1;
      const currentDelay = delay + step * i;
      createPromise(position, currentDelay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        console.log(currentDelay);
    }
    Notiflix.Notify.info('Цикл промісів завершено!')
  });




// інше
Notiflix.Notify.info('Віконце сповіщень готове!');

//ПЕРЕВІРКОВИЙ КОД
// const isSuccess = true;

// function examplePromise(){
//   const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(22);
//     } else {
//       reject(44);
//     }
//   }, 5000);
// });

// promise
//   .then(value => {
//     Notiflix.Notify.info(value);
//   })
//   .catch(error => {
//     Notiflix.Notify.info(error);
//   })
//   .finally(() => Notiflix.Notify.info("Виконання промісу завершено"));
// }
// examplePromise();

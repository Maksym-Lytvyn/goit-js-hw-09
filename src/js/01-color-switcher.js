const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        console.log('process-started!');
        startBtn.setAttribute('disabled', 'true');
        bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
  });

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
    console.log('process-abrupted!');
})

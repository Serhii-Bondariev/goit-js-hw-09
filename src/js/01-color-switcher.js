// Отримуємо кнопки "Start" і "Stop" за їхніми атрибутами data-start і data-stop
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

// Отримуємо посилання на елемент body для зміни фонового кольору
const body = document.body;

// Ініціалізуємо змінну для зберігання ідентифікатора інтервалу
let intervalId = null;

// Додаємо обробники подій для кнопок "Start" і "Stop"
startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

// Функція, яка виконується при натисканні на кнопку "Start"
function onStartClick() {
  // Вимикаємо кнопку "Start" і активуємо кнопку "Stop"
  startBtn.disabled = true;
  stopBtn.disabled = false;

  // Запускаємо інтервал, який змінює фоновий колір кожну секунду
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Функція, яка виконується при натисканні на кнопку "Stop"
function onStopClick() {
  // Активуємо кнопку "Start" і вимикаємо кнопку "Stop"
  startBtn.disabled = false;
  stopBtn.disabled = true;

  // Зупиняємо інтервал зміни фонового кольору
  clearInterval(intervalId);
}

// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}


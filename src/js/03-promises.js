// Імпортуємо бібліотеку Notiflix для відображення повідомлень
import Notiflix from 'notiflix';

// Вибираємо форму з класом "form"
const form = document.querySelector(".form");

// Функція для створення об'єкта Promise з випадковим успіхом або невдачею
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// Обробник події відправки форми
const submitHandler = e => {
  e.preventDefault();

  // Отримуємо доступ до елементів форми
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  // Отримуємо числові значення з полів форми
  const initialDelay = Number(delay.value);
  const stepDelay = Number(step.value);
  const totalAmount = Number(amount.value);

  let currentDelay = initialDelay;

  // Запускаємо цикл для створення та виконання об'єктів Promise
  for (let i = 1; i <= totalAmount; i += 1) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        // Відображаємо повідомлення про успіх
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        // Відображаємо повідомлення про невдачу
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += stepDelay;
  }  
};

// Додаємо обробник події відправки форми
form.addEventListener('submit', submitHandler);



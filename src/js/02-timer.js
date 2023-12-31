// Імпортуємо бібліотеку flatpickr з пакету "flatpickr"
import flatpickr from "flatpickr";
// Додаємо додатковий імпорт стилів для бібліотеки flatpickr
import "flatpickr/dist/flatpickr.min.css";
// Імпортуємо бібліотеку Notiflix з пакету "notiflix"
import Notiflix from 'notiflix';

// Флаг, що вказує на активність таймера
let timerActive = false;

// Налаштування для бібліотеки flatpickr
const options = {
  // Включаємо можливість вибору часу
  enableTime: true,
  // Встановлюємо 24-годинний формат часу
  time_24hr: true,
  // Встановлюємо поточну дату як значення за замовчуванням
  defaultDate: new Date(),
  // Інтервал вибору хвилин (1 хвилина)
  minuteIncrement: 1,
  // Функція, яка викликається при закритті вибору дати та часу
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    // Перевіряємо, чи обрана дата не менше поточної
    if (selectedDate <= currentDate) {
      // Виводимо повідомлення користувачу, яке запитує обрати майбутню дату
      Notiflix.Notify.warning("Please choose a date in the future");
      // Очищаємо поле вибору дати та часу
      document.getElementById("datetime-picker").value = "";
      return;
    }
  },
};

// Ініціалізуємо об'єкт flatpickr зі вказаними налаштуваннями на полі з id "datetime-picker"
const picker = flatpickr("#datetime-picker", options);

// Додаємо обробник події для кнопки "Start"
document.getElementById("start-button").addEventListener("click", function () {
  if (timerActive) {
    // Якщо таймер вже активний, не робимо нічого
    return;
  }

  const selectedDate = picker.selectedDates[0];
  const currentDate = new Date();

  // Перевіряємо, чи обрана дата не менше поточної
  if (selectedDate <= currentDate) {
    // Виводимо повідомлення користувачу, яке запитує обрати майбутню дату
    Notiflix.Notify.warning("Please choose a date in the future");
    // Очищаємо поле вибору дати та часу
    document.getElementById("datetime-picker").value = "";
    return;
  }

  // Деактивуємо кнопку "Start", щоб не можна було запустити новий таймер
  document.getElementById("start-button").setAttribute("disabled", true);
  // Позначаємо таймер як активний
  timerActive = true;

  // Запускаємо функцію для початку зворотного відліку
  startCountdown(selectedDate);
});

// Функція для початку зворотного відліку
function startCountdown(targetDate) {
  // Встановлюємо інтервал для оновлення таймера кожну секунду
  const timerInterval = setInterval(updateTimer, 1000);

  // Функція для оновлення таймера
  function updateTimer() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    // Перевіряємо, чи час не минув
    if (timeDifference <= 0) {
      // Якщо час минув, зупиняємо інтервал
      clearInterval(timerInterval);
      // Позначаємо таймер як неактивний
      timerActive = false;
      // Деактивуємо кнопку "Start", щоб можна було запустити новий таймер
      document.getElementById("start-button").removeAttribute("disabled");
      return Notiflix.Notify.success("Countdown finished!");
    }

    // Розраховуємо дні, години, хвилини та секунди до обраної дати
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    // Оновлюємо відображення таймера на сторінці
    document.querySelector("[data-days]").textContent = addLeadingZero(days);
    document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
    document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
    document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
  }
}

// Функція для конвертації мілісекунд у дні, години, хвилини та секунди
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

// Функція для додавання лідируючого нуля до числа (форматування)
function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}





import Notiflix from 'notiflix';
// Функція createPromise створює новий проміс з випадковою можливістю виконання або відхилення.
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

// Додаємо слухач події 'submit' до форми.
document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    const initialDelay = parseInt(this.querySelector("[name='delay']").value);
    const step = parseInt(this.querySelector("[name='step']").value);
    const amount = parseInt(this.querySelector("[name='amount']").value);
    const promises = [];

    let currentDelay = initialDelay;

    // Генеруємо задану кількість промісів і додаємо їх до масиву promises.
    for (let i = 0; i < amount; i++) {
        promises.push(createPromise(i + 1, currentDelay));
        currentDelay += step;
    }

    // Використовуємо Promise.allSettled для обробки всіх промісів одночасно.
    Promise.allSettled(promises)
        .then((results) => {
            // Обробляємо результати всіх промісів.
            results.forEach((result) => {
                if (result.status === "fulfilled") {
                    // Відображаємо сповіщення успішного виконання промісу.
                    Notiflix.Notify.success(`✅ Fulfilled promise ${result.value.position} in ${result.value.delay}ms`);
                } else {
                    // Відображаємо сповіщення про відхилення промісу та деталі помилки.
                    Notiflix.Notify.failure(`❌ Rejected promise ${result.reason.position} in ${result.reason.delay}ms`);
                }
            });
        })
        .catch((error) => {
            // Відображаємо сповіщення про помилку під час обробки промісів.
            Notiflix.Notify.failure("Error handling promises");
        });
});

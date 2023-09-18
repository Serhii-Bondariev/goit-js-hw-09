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
document.querySelector(".form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const initialDelay = parseInt(this.querySelector("[name='delay']").value);
    const step = parseInt(this.querySelector("[name='step']").value);
    const amount = parseInt(this.querySelector("[name='amount']").value);

    // Створюємо функцію для виконання промісів послідовно в порядку їхнього завершення.
    async function executePromisesSequentially() {
        let currentDelay = initialDelay;
        for (let i = 1; i <= amount; i++) {
            try {
                const result = await createPromise(i, currentDelay);
                // Відображаємо сповіщення успішного виконання промісу.
                Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
            } catch (error) {
                // Відображаємо сповіщення про відхилення промісу та деталі помилки.
                Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
            }
            currentDelay += step;
        }
    }

    // Викликаємо функцію для виконання промісів послідовно.
    executePromisesSequentially();
});


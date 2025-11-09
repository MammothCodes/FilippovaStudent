// Глобальные переменные
let taskData = {};

// Вспомогательные функции
function displayResult(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}

function showLoading(elementId, message = "Выполняется...") {
    displayResult(elementId, `<div class="loading">${message}</div>`);
}

function showSuccess(elementId, message) {
    displayResult(elementId, `<div class="success">${message}</div>`);
}

function showError(elementId, message) {
    displayResult(elementId, `<div class="error">${message}</div>`);
}

// Задание 1: Реализация блок-схемы
function runTask1() {
    showLoading('task1Result', 'Ожидание ввода начального значения...');
    
    setTimeout(() => {
        try {
            let input = prompt("Задание 1: Введите начальное значение x (рекомендуется 10):");
            
            if (input === null) {
                showError('task1Result', 'Пользователь отменил ввод');
                return;
            }
            
            let x = parseInt(input);
            
            if (isNaN(x)) {
                showError('task1Result', 'Ошибка: введите число!');
                return;
            }
            
            let result = "";
            result += `<div class="result-item"><strong>Начальное значение x:</strong> ${x}</div>`;
            
            // Блок-схема: если x > 0, то уменьшаем x, иначе завершаем
            let steps = 0;
            while (x > 0) {
                steps++;
                result += `<div class="calculation">Шаг ${steps}: x = ${x} > 0 → уменьшаем x</div>`;
                x--;
            }
            
            result += `<div class="calculation">x = ${x} ≤ 0 → завершаем</div>`;
            result += `<div class="success">Блок-схема выполнена! Всего шагов: ${steps}</div>`;
            
            displayResult('task1Result', result);
            taskData.task1 = { completed: true, steps: steps };
            
        } catch (error) {
            showError('task1Result', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Задание 2: Счет от 1 до 10
function runTask2() {
    showLoading('task2Result', 'Ожидание подтверждения...');
    
    setTimeout(() => {
        try {
            let confirmStart = confirm("Задание 2: Нажмите OK для счета от 1 до 10");
            
            if (!confirmStart) {
                showError('task2Result', 'Пользователь отменил выполнение');
                return;
            }
            
            let result = "<div class='result-item'><strong>Счет от 1 до 10:</strong></div>";
            
            // Используем цикл for
            for (let i = 1; i <= 10; i++) {
                result += `<div class="calculation">${i}</div>`;
            }
            
            result += `<div class="success">Счет завершен!</div>`;
            
            displayResult('task2Result', result);
            taskData.task2 = { completed: true, numbers: 10 };
            
        } catch (error) {
            showError('task2Result', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Задание 3: Программа для застолий
function runTask3() {
    showLoading('task3Result', 'Запуск программы для застолий...');
    
    setTimeout(() => {
        try {
            let result = "<div class='result-item'><strong>Диалог:</strong></div>";
            let answer;
            let count = 0;
            
            alert("Задание 3: Программа для застолий началась!");
            
            do {
                count++;
                answer = prompt("Еще по одной? (введите '1' для выхода, любой другой текст для продолжения)");
                
                if (answer === null) {
                    result += `<div class="calculation">Пользователь отменил ввод → выход</div>`;
                    break;
                }
                
                if (answer === "1") {
                    result += `<div class="calculation">Еще по одной? → ${answer} (выход)</div>`;
                } else {
                    result += `<div class="calculation">Еще по одной? → "${answer}" (продолжаем)</div>`;
                }
                
            } while (answer !== "1" && count < 10); // защита от бесконечного цикла
            
            result += `<div class="success">Застолье завершено! Всего предложений: ${count}</div>`;
            
            displayResult('task3Result', result);
            taskData.task3 = { completed: true, offers: count };
            
        } catch (error) {
            showError('task3Result', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Задание 4: Факториал
function runTask4() {
    showLoading('task4Result', 'Ожидание ввода числа...');
    
    setTimeout(() => {
        try {
            let input = prompt("Задание 4: Введите число для вычисления факториала:");
            
            if (input === null) {
                showError('task4Result', 'Пользователь отменил ввод');
                return;
            }
            
            let number = parseInt(input);
            
            if (isNaN(number) || number < 0) {
                showError('task4Result', 'Ошибка: введите неотрицательное число!');
                return;
            }
            
            if (number > 20) {
                showError('task4Result', 'Ошибка: число слишком большое! Введите число ≤ 20');
                return;
            }
            
            let factorial = 1;
            let calculationSteps = "";
            
            for (let i = 1; i <= number; i++) {
                factorial *= i;
                calculationSteps += `${i}`;
                if (i < number) calculationSteps += " × ";
            }
            
            let result = `
                <div class="result-item"><strong>Введенное число:</strong> ${number}</div>
                <div class="result-item"><strong>Вычисление:</strong> ${calculationSteps}</div>
                <div class="result-item"><strong>Факториал ${number}! =</strong> ${factorial.toLocaleString()}</div>
                <div class="success">Факториал вычислен успешно!</div>
            `;
            
            displayResult('task4Result', result);
            taskData.task4 = { 
                completed: true, 
                number: number, 
                factorial: factorial 
            };
            
        } catch (error) {
            showError('task4Result', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Задание 5: Палиндром фамилии
function runTask5() {
    showLoading('task5Result', 'Ожидание ввода фамилии...');
    
    setTimeout(() => {
        try {
            let surname = prompt("Задание 5: Введите фамилию для проверки на палиндром:");
            
            if (surname === null) {
                showError('task5Result', 'Пользователь отменил ввод');
                return;
            }
            
            if (surname.trim() === '') {
                showError('task5Result', 'Ошибка: введите фамилию!');
                return;
            }
            
            const cleanSurname = surname.toLowerCase().replace(/\s/g, '');
            const reversedSurname = cleanSurname.split('').reverse().join('');
            const isPalindrome = cleanSurname === reversedSurname;
            
            let result = `
                <div class="result-item"><strong>Введенная фамилия:</strong> ${surname}</div>
                <div class="result-item"><strong>Очищенная фамилия:</strong> ${cleanSurname}</div>
                <div class="result-item"><strong>Перевернутая фамилия:</strong> ${reversedSurname}</div>
                <div class="result-item"><strong>Результат:</strong> ${
                    isPalindrome ? 
                    '<span style="color: green;">✓ Это палиндром!</span>' : 
                    '<span style="color: red;">✗ Это не палиндром</span>'
                }</div>
            `;
            
            if (!isPalindrome) {
                result += `<div class="calculation">Пример палиндрома: "Анна", "топот", "казак"</div>`;
            }
            
            displayResult('task5Result', result);
            taskData.task5 = { 
                completed: true, 
                surname: surname, 
                isPalindrome: isPalindrome 
            };
            
        } catch (error) {
            showError('task5Result', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Задание 6: Простые числа
function runTask6() {
    showLoading('task6Result', 'Ожидание ввода числа...');
    
    setTimeout(() => {
        try {
            let input = prompt("Задание 6: Введите верхнюю границу для поиска простых чисел:");
            
            if (input === null) {
                showError('task6Result', 'Пользователь отменил ввод');
                return;
            }
            
            let maxNumber = parseInt(input);
            
            if (isNaN(maxNumber) || maxNumber < 2) {
                showError('task6Result', 'Ошибка: введите число больше 1!');
                return;
            }
            
            if (maxNumber > 1000) {
                showError('task6Result', 'Ошибка: число слишком большое! Введите число ≤ 1000');
                return;
            }
            
            const primes = findPrimeNumbers(maxNumber);
            
            let result = `
                <div class="result-item"><strong>Верхняя граница:</strong> ${maxNumber}</div>
                <div class="result-item"><strong>Простые числа от 1 до ${maxNumber}:</strong></div>
                <div style="margin: 10px 0;">
            `;
            
            // Показываем максимум 30 чисел, остальные скрываем
            const showPrimes = primes.slice(0, 30);
            showPrimes.forEach(prime => {
                result += `<span class="prime-number">${prime}</span> `;
            });
            
            result += `</div>`;
            
            if (primes.length > 30) {
                result += `<div class="calculation">... и ещё ${primes.length - 30} простых чисел</div>`;
            }
            
            result += `<div class="result-item"><strong>Всего найдено:</strong> ${primes.length} простых чисел</div>`;
            result += `<div class="success">Поиск завершен!</div>`;
            
            displayResult('task6Result', result);
            taskData.task6 = { 
                completed: true, 
                number: maxNumber, 
                primes: primes,
                count: primes.length 
            };
            
        } catch (error) {
            showError('task6Result', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Дополнительное задание: Угадай число
function runAdditionalTask() {
    showLoading('additionalTaskResult', 'Загадываю число...');
    
    setTimeout(() => {
        try {
            // Компьютер загадывает число от 1 до 10
            const secretNumber = Math.floor(Math.random() * 10) + 1;
            let attempts = 0;
            let guessed = false;
            let maxAttempts = 3;
            
            alert("Дополнительное задание: Я загадал число от 1 до 10. Попробуйте угадать за 3 попытки!");
            
            let result = `
                <div class="result-item"><strong>Игра "Угадай число"</strong></div>
                <div class="result-item">Загаданное число: от 1 до 10</div>
                <div class="result-item">У вас есть ${maxAttempts} попытки</div>
            `;
            
            // Используем while вместо for для интерактивного ввода
            while (attempts < maxAttempts && !guessed) {
                attempts++;
                let guessInput = prompt(`Попытка ${attempts}/${maxAttempts}: Введите число от 1 до 10:`);
                
                if (guessInput === null) {
                    result += `<div class="error">Игра прервана пользователем на попытке ${attempts}</div>`;
                    break;
                }
                
                let guess = parseInt(guessInput);
                
                // Проверяем корректность ввода
                if (isNaN(guess)) {
                    result += `<div class="error">Попытка ${attempts}: "${guessInput}" - ✗ Это не число!</div>`;
                    alert("Пожалуйста, введите число!");
                    attempts--; // Не засчитываем некорректную попытку
                    continue;
                }
                
                if (guess < 1 || guess > 10) {
                    result += `<div class="error">Попытка ${attempts}: ${guess} - ✗ Число должно быть от 1 до 10!</div>`;
                    alert("Число должно быть от 1 до 10!");
                    attempts--; // Не засчитываем некорректную попытку
                    continue;
                }
                
                // Проверяем угадали ли
                if (guess === secretNumber) {
                    result += `<div class="success">Попытка ${attempts}: ${guess} - ✓ ПРАВИЛЬНО! Вы угадали!</div>`;
                    guessed = true;
                    alert(`🎉 Поздравляю! Вы угадали число ${secretNumber} с ${attempts} попытки!`);
                } else if (guess < secretNumber) {
                    result += `<div class="calculation">Попытка ${attempts}: ${guess} - ✗ Загаданное число БОЛЬШЕ</div>`;
                    if (attempts < maxAttempts) {
                        alert(`❌ Не угадали! Загаданное число БОЛЬШЕ чем ${guess}. Попробуйте еще!`);
                    }
                } else {
                    result += `<div class="calculation">Попытка ${attempts}: ${guess} - ✗ Загаданное число МЕНЬШЕ</div>`;
                    if (attempts < maxAttempts) {
                        alert(`❌ Не угадали! Загаданное число МЕНЬШЕ чем ${guess}. Попробуйте еще!`);
                    }
                }
            }
            
            // Результат игры
            if (guessed) {
                result += `<div class="success">🎊 Поздравляем! Вы выиграли!</div>`;
            } else if (attempts >= maxAttempts) {
                result += `<div class="error">💔 Вы проиграли! Загаданное число было: ${secretNumber}</div>`;
                alert(`💔 К сожалению, вы не угадали. Загаданное число было: ${secretNumber}`);
            }
            
            result += `<div class="result-item"><strong>Всего использовано попыток:</strong> ${attempts}</div>`;
            
            displayResult('additionalTaskResult', result);
            
        } catch (error) {
            showError('additionalTaskResult', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Вспомогательные функции
function findPrimeNumbers(maxNumber) {
    const primes = [];
    
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    for (let i = 2; i <= maxNumber; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    return primes;
}

function runAllTasks() {
    const tasks = [
        runTask1, runTask2, runTask3, runTask4, runTask5, runTask6
    ];
    
    // Запускаем задания с задержкой
    tasks.forEach((task, index) => {
        setTimeout(() => {
            task();
        }, index * 1500);
    });
    
    setTimeout(() => {
        showSuccess('additionalTaskResult', 'Все основные задания выполнены! Можете попробовать дополнительное задание "Угадай число"');
    }, tasks.length * 1500);
}

function clearAllResults() {
    const resultElements = [
        'task1Result', 'task2Result', 'task3Result', 'task4Result',
        'task5Result', 'task6Result', 'additionalTaskResult'
    ];
    
    resultElements.forEach(elementId => {
        displayResult(elementId, 'Результат появится здесь после выполнения задания');
    });
    
    taskData = {};
    console.log("Все результаты очищены");
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log("Лабораторная работа 2 готова к выполнению!");
});
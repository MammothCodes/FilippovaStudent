// Глобальные переменные для хранения данных заданий
let taskData = {
    task1: null,
    task2: null,
    task3: null,
    task4: null
};

// Функция для вывода результатов на экран
function displayResult(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}

// Функция для отображения статуса выполнения
function showLoading(elementId, message = "Выполняется...") {
    displayResult(elementId, `<div class="loading">${message}</div>`);
}

// Функция для отображения успешного выполнения
function showSuccess(elementId, message) {
    displayResult(elementId, `<div class="success">${message}</div>`);
}

// Функция для отображения ошибки
function showError(elementId, message) {
    displayResult(elementId, `<div class="error">${message}</div>`);
}

// Функция для задания 1: Ввод числа
function runTask1() {
    showLoading('task1Result', 'Ожидание ввода числа...');
    
    setTimeout(() => {
        try {
            let userNumber = prompt("Задание 1: Введите любое число:");
            if (userNumber === null) {
                showError('task1Result', 'Пользователь отменил ввод');
                taskData.task1 = null;
                return;
            }
            
            if (userNumber.trim() === '') {
                showError('task1Result', 'Вы ввели пустую строку');
                taskData.task1 = null;
                return;
            }
            
            taskData.task1 = {
                value: userNumber,
                type: typeof userNumber
            };
            
            let task1HTML = `
                <div class="result-item">
                    <strong>Введенное число:</strong> ${userNumber}
                </div>
                <div class="type-info">
                    <strong>Тип переменной:</strong> ${typeof userNumber}
                </div>
                <div class="task-status">Задание 1 выполнено успешно!</div>
            `;
            displayResult('task1Result', task1HTML);
            
        } catch (error) {
            showError('task1Result', `Ошибка: ${error.message}`);
        }
    }, 100);
}

// Функция для задания 2: Калькулятор
function runTask2() {
    showLoading('task2Result', 'Ожидание ввода чисел...');
    
    setTimeout(() => {
        try {
            let num1Input = prompt("Задание 2: Введите первое число для калькулятора:");
            if (num1Input === null) {
                showError('task2Result', 'Ввод первого числа отменен');
                taskData.task2 = null;
                return;
            }
            
            let num2Input = prompt("Задание 2: Введите второе число для калькулятора:");
            if (num2Input === null) {
                showError('task2Result', 'Ввод второго числа отменен');
                taskData.task2 = null;
                return;
            }
            
            let num1 = parseFloat(num1Input);
            let num2 = parseFloat(num2Input);
            
            if (isNaN(num1) || isNaN(num2)) {
                showError('task2Result', 'Ошибка: введены некорректные числа');
                taskData.task2 = null;
                return;
            }
            
            taskData.task2 = {
                num1: num1,
                num2: num2,
                operations: {
                    sum: num1 + num2,
                    difference: num1 - num2,
                    product: num1 * num2,
                    quotient: num1 / num2,
                    remainder: num1 % num2
                }
            };
            
            let task2HTML = `
                <div class="result-item">
                    <strong>Числа:</strong> ${num1} и ${num2}
                </div>
                <div class="calculation">
                    ${num1} + ${num2} = <strong>${num1 + num2}</strong>
                </div>
                <div class="calculation">
                    ${num1} - ${num2} = <strong>${num1 - num2}</strong>
                </div>
                <div class="calculation">
                    ${num1} × ${num2} = <strong>${num1 * num2}</strong>
                </div>
                <div class="calculation">
                    ${num1} ÷ ${num2} = <strong>${(num1 / num2).toFixed(2)}</strong>
                </div>
                <div class="calculation">
                    ${num1} % ${num2} = <strong>${num1 % num2}</strong> (остаток от деления)
                </div>
                <div class="task-status">Задание 2 выполнено успешно!</div>
            `;
            displayResult('task2Result', task2HTML);
            
        } catch (error) {
            showError('task2Result', `Ошибка: ${error.message}`);
        }
    }, 100);
}

// Функция для задания 3: Угадывание числа
function runTask3() {
    showLoading('task3Result', 'Ожидание ввода результата вычислений...');
    
    setTimeout(() => {
        try {
            let resultInput = prompt("Задание 3: Умножьте ваше число на 2 и прибавьте 7. Введите результат:");
            if (resultInput === null) {
                showError('task3Result', 'Ввод результата отменен');
                taskData.task3 = null;
                return;
            }
            
            let result = parseFloat(resultInput);
            if (isNaN(result)) {
                showError('task3Result', 'Ошибка: введено некорректное число');
                taskData.task3 = null;
                return;
            }
            
            let guessedNumber = (result - 7) / 2;
            
            alert("Вы задумали число: " + guessedNumber);
            
            taskData.task3 = {
                input: result,
                guessed: guessedNumber
            };
            
            let task3HTML = `
                <div class="result-item">
                    <strong>Введенный результат:</strong> ${result}
                </div>
                <div class="result-item">
                    <strong>Вычисленное задуманное число:</strong> ${guessedNumber}
                </div>
                <div class="calculation">
                    <strong>Формула:</strong> (${result} - 7) ÷ 2 = ${guessedNumber}
                </div>
                <div class="task-status">Задание 3 выполнено успешно! Проверьте всплывающее окно с результатом.</div>
            `;
            displayResult('task3Result', task3HTML);
            
        } catch (error) {
            showError('task3Result', `Ошибка: ${error.message}`);
        }
    }, 100);
}

// Функция для задания 4: Возраст пользователя
function runTask4() {
    showLoading('task4Result', 'Ожидание ввода данных пользователя...');
    
    setTimeout(() => {
        try {
            let userName = prompt("Задание 4: Введите ваше имя:");
            if (userName === null) {
                showError('task4Result', 'Ввод имени отменен');
                taskData.task4 = null;
                return;
            }
            
            let birthYearInput = prompt("Задание 4: Введите ваш год рождения:");
            if (birthYearInput === null) {
                showError('task4Result', 'Ввод года рождения отменен');
                taskData.task4 = null;
                return;
            }
            
            let birthYear = parseInt(birthYearInput);
            if (isNaN(birthYear)) {
                showError('task4Result', 'Ошибка: введен некорректный год рождения');
                taskData.task4 = null;
                return;
            }
            
            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;
            
            taskData.task4 = {
                name: userName,
                birthYear: birthYear,
                age: age
            };
            
            let task4HTML = `
                <div class="result-item">
                    <strong>Имя:</strong> ${userName}
                </div>
                <div class="result-item">
                    <strong>Год рождения:</strong> ${birthYear}
                </div>
                <div class="result-item">
                    <strong>Текущий год:</strong> ${currentYear}
                </div>
                <div class="result-item">
                    <strong>Возраст:</strong> ${age} лет
                </div>
                <div style="font-size: 18px; color: #007bff; padding: 10px; background-color: #d4edda; border-radius: 5px; margin-top: 10px;">
                    <strong>${userName}: ${age}</strong>
                </div>
                <div class="task-status">Задание 4 выполнено успешно!</div>
            `;
            displayResult('task4Result', task4HTML);
            
        } catch (error) {
            showError('task4Result', `Ошибка: ${error.message}`);
        }
    }, 100);
}

// Функция для отображения типов переменных
function showVariableTypes() {
    if (!taskData.task1 && !taskData.task2 && !taskData.task3 && !taskData.task4) {
        showError('typesResult', 'Сначала выполните хотя бы одно задание');
        return;
    }
    
    let typesHTML = `<h3>Типы всех выполненных переменных:</h3>`;
    
    if (taskData.task1) {
        typesHTML += `
            <div class="type-info">
                <strong>userNumber</strong> (${taskData.task1.value}): <code>${taskData.task1.type}</code>
            </div>
        `;
    } else {
        typesHTML += `<div class="type-info">Задание 1 не выполнено</div>`;
    }
    
    if (taskData.task2) {
        typesHTML += `
            <div class="type-info">
                <strong>num1</strong> (${taskData.task2.num1}): <code>${typeof taskData.task2.num1}</code>
            </div>
            <div class="type-info">
                <strong>num2</strong> (${taskData.task2.num2}): <code>${typeof taskData.task2.num2}</code>
            </div>
        `;
    } else {
        typesHTML += `<div class="type-info">Задание 2 не выполнено</div>`;
    }
    
    if (taskData.task3) {
        typesHTML += `
            <div class="type-info">
                <strong>result</strong> (${taskData.task3.input}): <code>${typeof taskData.task3.input}</code>
            </div>
            <div class="type-info">
                <strong>guessedNumber</strong> (${taskData.task3.guessed}): <code>${typeof taskData.task3.guessed}</code>
            </div>
        `;
    } else {
        typesHTML += `<div class="type-info">Задание 3 не выполнено</div>`;
    }
    
    if (taskData.task4) {
        typesHTML += `
            <div class="type-info">
                <strong>userName</strong> (${taskData.task4.name}): <code>${typeof taskData.task4.name}</code>
            </div>
            <div class="type-info">
                <strong>birthYear</strong> (${taskData.task4.birthYear}): <code>${typeof taskData.task4.birthYear}</code>
            </div>
            <div class="type-info">
                <strong>age</strong> (${taskData.task4.age}): <code>${typeof taskData.task4.age}</code>
            </div>
        `;
    } else {
        typesHTML += `<div class="type-info">Задание 4 не выполнено</div>`;
    }
    
    displayResult('typesResult', typesHTML);
}

// Главная функция для запуска всех заданий
function runAllTasks() {
    showLoading('task1Result', 'Задание 1: ожидание ввода числа...');
    showLoading('task2Result', 'Задание 2: ожидание ввода чисел...');
    showLoading('task3Result', 'Задание 3: ожидание ввода результата...');
    showLoading('task4Result', 'Задание 4: ожидание ввода данных...');
    showLoading('typesResult', 'Типы переменных будут показаны после выполнения всех заданий');
    
    setTimeout(() => runTask1(), 100);
    setTimeout(() => runTask2(), 800);
    setTimeout(() => runTask3(), 1500);
    setTimeout(() => runTask4(), 2200);
    setTimeout(() => showVariableTypes(), 3000);
}

// Функция для очистки всех результатов
function clearAllResults() {
    taskData = {
        task1: null,
        task2: null,
        task3: null,
        task4: null
    };
    
    displayResult('task1Result', 'Результат появится здесь после выполнения задания');
    displayResult('task2Result', 'Результат появится здесь после выполнения задания');
    displayResult('task3Result', 'Результат появится здесь после выполнения задания');
    displayResult('task4Result', 'Результат появится здесь после выполнения задания');
    displayResult('typesResult', 'Типы переменных появятся здесь после выполнения заданий');
    
    console.log("Все результаты очищены");
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log("Лабораторная работа 1 готова к выполнению!");
    console.log("Используйте отдельные кнопки для каждого задания или запустите все сразу");
});
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

// Функция для генерации случайного массива
function generateRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

// Функция для форматирования вывода массива
function formatArray(arr, highlightType = null) {
    return arr.map((num, index) => {
        let className = '';
        if (highlightType === 'positive' && num > 0) className = 'positive';
        if (highlightType === 'negative' && num < 0) className = 'negative';
        if (highlightType === 'zero' && num === 0) className = 'zero';
        
        return `<span class="${className}">${num}</span>`;
    }).join(', ');
}

// Задание 1: Среднее арифметическое положительных элементов
function runTask1() {
    showLoading('task1Result', 'Генерация массива и вычисления...');
    
    setTimeout(() => {
        try {
            // Генерируем массив из 15 чисел от -10 до 30
            const array = generateRandomArray(15, -10, 30);
            
            // Находим положительные элементы и их среднее арифметическое
            const positiveNumbers = array.filter(num => num > 0);
            const averagePositive = positiveNumbers.length > 0 
                ? (positiveNumbers.reduce((sum, num) => sum + num, 0) / positiveNumbers.length).toFixed(2)
                : 0;
            
            let result = `
                <div class="result-item"><strong>Сгенерированный массив (15 чисел от -10 до 30):</strong></div>
                <div class="array-display">${formatArray(array, 'positive')}</div>
                <div class="result-item"><strong>Положительные элементы:</strong> [${positiveNumbers.join(', ')}]</div>
                <div class="stat-item">
                    <strong>Среднее арифметическое положительных элементов:</strong> ${averagePositive}
                </div>
                <div class="result-item"><strong>Количество положительных элементов:</strong> ${positiveNumbers.length}</div>
                <div class="result-item"><strong>Сумма положительных элементов:</strong> ${positiveNumbers.reduce((sum, num) => sum + num, 0)}</div>
            `;
            
            displayResult('task1Result', result);
            taskData.task1 = { 
                array: array,
                positiveNumbers: positiveNumbers,
                average: parseFloat(averagePositive)
            };
            
        } catch (error) {
            showError('task1Result', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Задание 2: Замена отрицательных элементов их квадратами
function runTask2() {
    showLoading('task2Result', 'Генерация массива и замена отрицательных элементов...');
    
    setTimeout(() => {
        try {
            // Генерируем массив из 15 чисел (n > 10)
            const originalArray = generateRandomArray(15, -20, 20);
            const modifiedArray = [...originalArray]; // Создаем копию
            
            // Заменяем отрицательные элементы их квадратами
            for (let i = 0; i < modifiedArray.length; i++) {
                if (modifiedArray[i] < 0) {
                    modifiedArray[i] = modifiedArray[i] * modifiedArray[i];
                }
            }
            
            let result = `
                <div class="result-item"><strong>Исходный массив:</strong></div>
                <div class="array-display">${formatArray(originalArray, 'negative')}</div>
                <div class="result-item"><strong>Массив после замены отрицательных элементов их квадратами:</strong></div>
                <div class="array-display">${formatArray(modifiedArray)}</div>
                <div class="stat-item">
                    <strong>Измененные элементы:</strong><br>
                    ${originalArray.map((num, index) => {
                        if (num < 0) {
                            return `${num} → ${modifiedArray[index]} (квадрат)`;
                        }
                        return null;
                    }).filter(Boolean).join('<br>')}
                </div>
            `;
            
            displayResult('task2Result', result);
            taskData.task2 = {
                original: originalArray,
                modified: modifiedArray
            };
            
        } catch (error) {
            showError('task2Result', `Ошибка: ${error.message}`);
        }
    }, 500);
}

// Задание 3: Статистика по массиву
function runTask3() {
    showLoading('task3Result', 'Генерация массива и вычисление статистики...');
    
    setTimeout(() => {
        try {
            // Генерируем массив
            const array = generateRandomArray(20, -15, 15);
            
            // Вычисляем статистику
            const positiveNumbers = array.filter(num => num > 0);
            const negativeNumbers = array.filter(num => num < 0);
            const zeros = array.filter(num => num === 0);
            
            const averagePositive = positiveNumbers.length > 0 
                ? (positiveNumbers.reduce((sum, num) => sum + num, 0) / positiveNumbers.length).toFixed(2)
                : 0;
                
            const averageNegative = negativeNumbers.length > 0 
                ? (negativeNumbers.reduce((sum, num) => sum + num, 0) / negativeNumbers.length).toFixed(2)
                : 0;
            
            let result = `
                <div class="result-item"><strong>Сгенерированный массив:</strong></div>
                <div class="array-display">
                    ${array.map(num => {
                        if (num > 0) return `<span class="positive">${num}</span>`;
                        if (num < 0) return `<span class="negative">${num}</span>`;
                        return `<span class="zero">${num}</span>`;
                    }).join(', ')}
                </div>
                <div class="stat-item">
                    <strong>Статистика по массиву:</strong><br>
                    - Среднее арифметическое положительных чисел: ${averagePositive}<br>
                    - Среднее арифметическое отрицательных чисел: ${averageNegative}<br>
                    - Количество нулей: ${zeros.length}
                </div>
                <div class="result-item">
                    <strong>Детализация:</strong><br>
                    - Положительных чисел: ${positiveNumbers.length} [${positiveNumbers.join(', ')}]<br>
                    - Отрицательных чисел: ${negativeNumbers.length} [${negativeNumbers.join(', ')}]<br>
                    - Нулей: ${zeros.length}
                </div>
            `;
            
            displayResult('task3Result', result);
            taskData.task3 = {
                array: array,
                stats: {
                    positive: { count: positiveNumbers.length, average: parseFloat(averagePositive) },
                    negative: { count: negativeNumbers.length, average: parseFloat(averageNegative) },
                    zeros: zeros.length
                }
            };
            
        } catch (error) {
            showError('task3Result', `Error: ${error.message}`);
        }
    }, 500);
}

// Задание 4: Симулятор цветов
function runTask4() {
    showLoading('task4Result', 'Запуск симуляции 1,000,000 попыток... (это может занять несколько секунд)');
    
    setTimeout(() => {
        try {
            const totalAttempts = 1000000;
            const colors = ['красный', 'черный', 'белый'];
            const values = [0, 1, 2]; // 0-красный, 1-черный, 2-белый
            
            let results = [0, 0, 0]; // Счетчики для каждого цвета
            let maxRedSequence = 0;
            let currentRedSequence = 0;
            
            // Запускаем симуляцию
            for (let i = 0; i < totalAttempts; i++) {
                const randomValue = Math.floor(Math.random() * 3); // 0, 1 или 2
                results[randomValue]++;
                
                // Отслеживаем максимальную последовательность красных
                if (randomValue === 0) {
                    currentRedSequence++;
                    if (currentRedSequence > maxRedSequence) {
                        maxRedSequence = currentRedSequence;
                    }
                } else {
                    currentRedSequence = 0;
                }
            }
            
            // Вычисляем проценты
            const percentages = results.map(count => ((count / totalAttempts) * 100).toFixed(2));
            
            let result = `
                <div class="result-item"><strong>Результаты симуляции (${totalAttempts.toLocaleString()} попыток):</strong></div>
                <div class="stat-item">
                    <span class="color-red">Красный (0):</span> ${results[0].toLocaleString()} раз (${percentages[0]}%)<br>
                    <span class="color-black">Черный (1):</span> ${results[1].toLocaleString()} раз (${percentages[1]}%)<br>
                    <span class="color-white">Белый (2):</span> ${results[2].toLocaleString()} раз (${percentages[2]}%)
                </div>
                <div class="result-item">
                    <strong>Максимальное количество раз подряд выпадал красный:</strong> ${maxRedSequence}
                </div>
                <div class="result-item">
                    <strong>Общее количество красных:</strong> ${results[0].toLocaleString()} 
                    (в среднем 1 красный на ${(totalAttempts / results[0]).toFixed(0)} попыток)
                </div>
            `;
            
            displayResult('task4Result', result);
            taskData.task4 = {
                results: results,
                percentages: percentages,
                maxRedSequence: maxRedSequence,
                totalAttempts: totalAttempts
            };
            
        } catch (error) {
            showError('task4Result', `Ошибка: ${error.message}`);
        }
    }, 100);
}

// Дополнительное задание: Самая длинная последовательность
function runAdditionalTask() {
    showLoading('additionalTaskResult', 'Запуск симуляции для поиска самой длинной последовательности...');
    
    setTimeout(() => {
        try {
            const totalAttempts = 1000000;
            const colors = ['красный', 'черный', 'белый'];
            const colorNames = ['красный', 'черный', 'белый'];
            
            let maxSequences = [0, 0, 0]; // Максимальные последовательности для каждого цвета
            let currentSequences = [0, 0, 0]; // Текущие последовательности
            
            // Запускаем симуляцию
            for (let i = 0; i < totalAttempts; i++) {
                const randomValue = Math.floor(Math.random() * 3); // 0, 1 или 2
                
                // Обновляем последовательности для всех цветов
                for (let color = 0; color < 3; color++) {
                    if (randomValue === color) {
                        currentSequences[color]++;
                        if (currentSequences[color] > maxSequences[color]) {
                            maxSequences[color] = currentSequences[color];
                        }
                    } else {
                        currentSequences[color] = 0;
                    }
                }
            }
            
            // Находим самую длинную последовательность среди всех цветов
            const maxOverallSequence = Math.max(...maxSequences);
            const colorWithMaxSequence = maxSequences.indexOf(maxOverallSequence);
            
            let result = `
                <div class="result-item"><strong>Самая длинная последовательность (${totalAttempts.toLocaleString()} попыток):</strong></div>
                <div class="stat-item">
                    <span class="color-red">Красный:</span> ${maxSequences[0]} раз подряд<br>
                    <span class="color-black">Черный:</span> ${maxSequences[1]} раз подряд<br>
                    <span class="color-white">Белый:</span> ${maxSequences[2]} раз подряд
                </div>
                <div class="result-item">
                    <strong>Самая длинная последовательность вообще:</strong><br>
                    <span class="${colorNames[colorWithMaxSequence] === 'красный' ? 'color-red' : 
                                 colorNames[colorWithMaxSequence] === 'черный' ? 'color-black' : 'color-white'}">
                        ${colorNames[colorWithMaxSequence]}
                    </span> - ${maxOverallSequence} раз подряд
                </div>
                <div class="sequence">
                    <strong>Пример такой последовательности:</strong><br>
                    ${Array(maxOverallSequence).fill(colorNames[colorWithMaxSequence][0]).join(' ')}
                </div>
            `;
            
            displayResult('additionalTaskResult', result);
            taskData.additional = {
                maxSequences: maxSequences,
                maxOverall: maxOverallSequence,
                colorWithMax: colorWithMaxSequence
            };
            
        } catch (error) {
            showError('additionalTaskResult', `Ошибка: ${error.message}`);
        }
    }, 100);
}

// Функции для управления всеми заданиями
function runAllTasks() {
    const tasks = [
        runTask1, runTask2, runTask3, runTask4, runAdditionalTask
    ];
    
    tasks.forEach((task, index) => {
        setTimeout(() => {
            task();
        }, index * 2000);
    });
}

function clearAllResults() {
    const resultElements = [
        'task1Result', 'task2Result', 'task3Result', 'task4Result', 'additionalTaskResult'
    ];
    
    resultElements.forEach(elementId => {
        displayResult(elementId, 'Результат появится здесь после выполнения задания');
    });
    
    taskData = {};
    console.log("Все результаты очищены");
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log("Лабораторная работа 3 готова к выполнению!");
});
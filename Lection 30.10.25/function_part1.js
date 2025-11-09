function calculateSum() {
    // Получаем значения из полей ввода
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    
    // Вычисляем сумму
    const result = num1 + num2;
    
    // Показываем результат
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Результат: ${num1} + ${num2} = ${result}`;
    resultElement.style.display = 'block';
    
    // Также выводим в консоль
    console.log(`Сумма: ${num1} + ${num2} = ${result}`);
}
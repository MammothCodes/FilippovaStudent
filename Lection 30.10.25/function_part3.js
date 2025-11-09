// Функция для поиска простых чисел
function findPrimeNumbers(maxNumber) {
    const primes = [];
    
    // Функция проверки, является ли число простым
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // Проверяем все числа от 2 до maxNumber
    for (let i = 2; i <= maxNumber; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    return primes;
}

// Функция для проверки одного числа (простое ли оно)
function isPrimeNumber(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Дополнительная функция для вывода результата в консоль
function printPrimeNumbers(maxNumber) {
    const primes = findPrimeNumbers(maxNumber);
    console.log('Простые числа от 1 до ' + maxNumber + ': ' + primes);
    console.log('Всего найдено: ' + primes.length + ' простых чисел');
    return primes;
}

console.log('Функции для работы с простыми числами загружены');
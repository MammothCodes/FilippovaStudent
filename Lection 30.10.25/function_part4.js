let sum = (a, b) => a + b;
let result = sum(4, 4);
console.log(result);

//document.write(`Результат: 4 + 4 = ${result}`);
document.getElementById('output').innerHTML = `Результат: 4 + 4 = ${result}`;

// обычная функция
function sqrmy(a) {
    return Math.sqrt(a);
}

//стрелочная
let sqrmy2 = (a)=> Math.sqrt(a);

//class User {
//    constructor(a) {
//        this.a = a;
//        console.log(a);
//    }
//}

console.log(sum(4, 4)); // 8
console.log(sqrmy(16)); // 4
console.log(sqrmy2(25)); // 4

const output = document.getElementById('output');
output.innerHTML = `
    <p>Сумма 4 + 4 = ${sum(4, 4)}</p>
    <p>Квадратный корень из 16 = ${sqrmy(16)}</p>
    <p>Квадратный корень из 25 = ${sqrmy2(25)}</p>
`;

// Создание экземпляра класса
//let user = new User("Hello");
let a = [];

for (let i = 0; i < 11; i++) {  
    a[i] = i;  
}

// Более современный способ заполнения массива
//a = Array.from({length: 11}, (_, i) => i);

console.log(a);

let b = {  
    name: 'Mary',  
    phone: '+78908765',  
    age: 35
};  

console.log(b);

function mult(a,b){
    return a*b
}

console.log(typeof(mult));

//class User {
//    constructor(a) {
//        this.a = a;
//        console.log(a);
//    }
//}

//классы это синтаксический сахар
function user(a){
    return console.log('Это класс');
}

//let user=new User (5);
user(5);

//console.log(typeof(User));
console.log(typeof(user));
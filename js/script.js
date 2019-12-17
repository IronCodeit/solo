
//Задание 4.
var human = { name: 'Dima', lastName: 'Maluda', age: 31 };

function hello(human) {
    var result = human;
    return result;
}

let message = hello('Привет, меня зовут ' + human.name + ' ' + human.lastName + ' и мне ' + human.age);
console.log(message);
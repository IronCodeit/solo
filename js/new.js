//1. Типы данных и переменные: cтроки, цифры, bulleon, undefined, null.
var name = 'Dmitriy';
console.log(name);
var name = 'Dashka';
console.log(name);

//2. Условный оператор if.
var myAge = 31;
if (myAge >= 31) {
    console.log('молодой');
}
else {
    console.log('взрослый');
}
////////////////////////////
var age = 100;
if (age == 90) {
    console.log('true');
}
else {
    console.log('false');
}

//3. Циклический оператор for.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//4. Функции.
function sum(p1, p2, p3) {
    var a = p1 + p2 + p3;
    return a;
}
var result = sum(10, 20, 30);
console.log(result);
var result = sum(22, 33, 44);
console.log(result);
var result = sum(10, 100, 1000);
console.log(result);

//5.Массивы и объекты.

//Задание 1.
var learn = ['привет', 'loftschool'];
console.log(learn.length);
learn.push('я изучаю', 'javascript');
console.log(learn.length);
for (var i = 0; i < learn.length; i++) {
    console.log(learn[i]);
}

//Задание 2.
var group = [10, 22, 56, 121, 100, 2, 18, 117, 21, 144];
for (var i = 0; i < group.length; i++) {
    if (group[i] > 100) {
        console.log(group[i]);
    }
}

//Задание 3.
var father = { name: 'Dima', lastName: 'Maluda', age: 31 };
console.log(father.name);
console.log(father['lastName']);
console.log(father.age);
father.daughter = 'Dashka';
console.log(father.daughter);


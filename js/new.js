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

//Задание 4.
var human = { name: 'Dima', lastName: 'Maluda', age: 31 };
function hello(human) {
    var result = human;
    return result;
}
let message = hello('Привет, меня зовут ' + human.name + ' ' + human.lastName + ' и мне ' + human.age);
console.log(message);


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Задание 1-3.
const element = document.createElement('div');
const body = document.querySelector('body');
document.body.appendChild(element);
element.textContent = 'Этот элемент создан при помощи DOM API';

const element2 = document.createElement('div');
element2.className = 'inner';
element2.textContent = 'Этот элемент тоже создан при помощи DOM API';
element.appendChild(element2);
element2.style.color = 'red';

//Задание 4.
const element = document.createElement('div');
const body = document.querySelector('body');
document.body.appendChild(element);
element.textContent = 'Этот элемент создан при помощи DOM API';

element.addEventListener('click', function () {
    console.log('Этот текст говорит о том, что я всё сделал правильно');
});

//Задание 5.
const element3 = document.createElement('a');
element3.setAttribute('href', 'https://loftschool.com');
const body = document.querySelector('body');
element3.textContent = 'Сама ссылка';
document.body.appendChild(element3);
element3.style.textDecoration = 'none';
element3.style.fontSize = '40px';
element3.addEventListener('click', function (event) {
    console.log('Я кликнул на ссылку ' + 'https://loftschool.com');
    event.preventDefault();
});

//Задание 6.
const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Go';
const body = document.querySelector('body');
document.body.appendChild(input);
document.body.appendChild(button);
button.addEventListener('click', function () {
    console.log(input.value);
});

//Задание 7.
//1 способ реализации слайдера.
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const minRight = 0;
const maxRight = 600;
const step = 100;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = currentRight + "px";
    }
});

left.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = currentRight + "px";
    }
});

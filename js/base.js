/* console.log(17 / 7);
var age = 10;
var newAge = age + 19;
console.log(newAge);
var stepone = 'Hellow';
var steptwo = 'World!';
console.log(stepone + ', ' + steptwo); //Конкатенация
var stepone = 15;
var steptwo = 30;
steptwo += 20;
console.log(steptwo); */


/* var age = 35;
var string = 25;
if (age === string) {
    console.log('взрослый');
} else {
    console.log('молодой');
} */


/* var number = 18;
if (number == 15) {
    console.log('молодой');
} else if (number == 30) {
    console.log('взрослый');
} else if (number == 60) {
    console.log('пожилой');
} else if (number == 80) {
    console.log('старый');
}
 */


//сокращенный вариант сравнения выше указанных переменных
var age = 50;
var status = (age < 30) ? 'Взрослый' : 'Молодой';
console.log(status);

//ОбЪект
var person = { name: 'Dima', surname: 'Maluda', age: 31 };
console.log(person.surname); //первый способ обращения к объектам
console.log(person['name']); //второй способ обращения к объектам
person.name = 'Dashulka'; //перезаписывание свойства в объекте
console.log(person.name);
console.log(person.work);
person.work = 'pilot';
console.log(person.work);

//Массив
var fruits = ['apples', 'bananas', 'oranges'];
console.log(fruits[1]); //обращение к эл-ту №1

//Другой метод написания массива
var fruits = new Array('apples', 'bananas', 'oranges');
console.log(fruits.length);

//Узнать, сколько в массиве индексов
var fruits = ['apples', 'bananas', 'oranges'];
console.log(fruits.length);

//Добавить в массив
fruits.push('cherries');
console.log(fruits.length);
console.log(fruits[3]);

//Конструкция switch case(в последнем условии break не пишется, т.к. программа завершается)
var number = 1;
switch (number) {
    case 1:
        console.log('там 1');
        break;
    case 2:
        console.log('там 2');
        break;
    case 3:
        console.log('там 3');
}

//Ц-И-К-Л for

//var i; задаем переменную для счетчика

//for (i = 0; i < fruits.length) 1 условие-присваиваем этому счетчику значение 0, чтобы с 0 начинать. 2 условие-условие остановки. 3 условие-увеличение счетчика. Т.к. 3 не меньше 3, а у нас в массиве 3 значения - то условие останавливается.
var fruits = ['apples', 'bananas', 'oranges'];
var i;
for (i = 0; i < fruits.length; i++) {
    console.log('В корзине номер ' + i + ' лежат ' + fruits[i]);
}


//Ц-И-К-Л while
var fruits = ['apples', 'bananas', 'oranges'];
fruits.push('cheriess');
var i = 0;
while (i > fruits.length) {
    console.log('В корзине номер ' + i + ' лежат ' + fruits[i]);
    i++; //увеличение счетчика происходит именно в теле.
}

//Ф-У-Н-К-Ц-И-И
/* function mySum() {
    console.log('Это тело функции');
}
mySum(); - вызов функции.
mySum(); */

/* function sum(f, b) {
    var result = a + b;
    ruturn result
} */

function learn(a, b) {
    var summ = a + b;
    console.log(summ); //данные выводятся на экран.
}
learn(2, 4); //Означает 2+4, т.е мы вызвали ф-ию(покамись мы её не вызовем, она не будет работать).
var summ = learn(50, 30);
// mySum(2, 4); - 2 и 4 - это аргументы, т.е. то, что мы передаём в ф-ию.
// mySum(a, b) - а параметры, это то, как эти аргументы будут в будующем назыв-ся.

function mySum(a, b) {
    var summ = a + b; // За счет объявления переменной мы получаем доступ к результату и далее к ней обращаемся.
    return summ; //данные возвращаются.
}
console.log(mySum(2, 7));
console.log(mySum(5, 7));
console.log(mySum(2, 8));
console.log(mySum(2, 7));
console.log(mySum(20, 7));
console.log(mySum(2, 145));
console.log(mySum(85, 7));
console.log(mySum(2, 77));
var result = mySum(50, 61);
console.log(result);

if (10 > 100) {
    var a = 10;
}


console.log(w);
var w = 77;


if (10 > 1) {
    var x = 10;
}
console.log(x);

if (5 > 1) {
    let b = 5;
    console.log(b);
}

//let 
if (9 > 1) {
    let a = 9;
}
console.log(a);


// for
for (let i = 10; i < 13; i++) {
    console.log(i);
}
console.log(i); //За пределами {} перем-е, объявленные при помощи let не видны.

// for let
for (var i = 10; i < 13; i++) {
    console.log(i);
}
console.log(i); //За пределами {} перем-е, объявленные при помощи var видны.


// for let
for (var i = 10; i < 13; i++) {
    console.log(i);
}
console.log(i); //За пределами {} перем-е, объявленные при помощи var видны.


var f = 100;
console.log(f);
f = 77;
console.log(f);


var person = { name: 'Dima', surname: 'Maluda', age: '31' };
console.log(person.surname); //первый способ обращения к объектам
console.log(person['name']); //второй способ обращения к объектам
person.name = 'Dashulka'; //перезаписывание свойства в объекте
console.log(person.name);
console.log(person.work);
person.work = 'pilot';
console.log(person.work);

var fruits = ['apples', 'bananas', 'oranges']; //вместо строк в массиве также можно хранить числа, напр: = [10, 20, 30, 40, 50];
console.log(fruits[0]); //обращение к элементу под №0
fruits[0] = 'kiwi'; //перезаписывание свойства в массиве
console.log(fruits[0]); //обращение к элементу под №1
console.log(fruits.length); //определение кол-ва элементов в массиве
console.log(fruits[3]); //обращение к несущ-му элементу
fruits.push('cherries');


for (var i = 0; i < fruits.length; i++) {
    console.log(i); //перебираем все эл-ты массива и выводим в консоль их кол-во (т.е. значение переменной i)
}

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); //перебираем конкретные значения массива и выводим их в консоль
}

// В массиве можно хранить неск-о объектов
var people = [
    { name: 'Dima', surname: 'Maluda' },
    { name: 'Igor', surname: 'Smirnov' },
    { name: 'Roman', surname: 'Yamcov' }
];

for (var i = 0; i < people.length; i++) {
    console.log(people[i].surname);
}
//Аналог того, что было написано выше
for (let i = 0; i < people.length; i++) { //let задали, чтобы i не выходила за пределы цикла и не засоряла глобальную область видимости
    const rest = people[i].surname; // const присвоили потому что переменная rest не будет меняться
    console.log(rest);
}

//Если вместо let и const мы оставим var, то после цикла за счёт всплытия будут доступны и i и name, которые равны последним зафиксированным значениям
for (var i = 0; i < people.length; i++) {
    var rest = people[i].surname;
    console.log(rest);
}

console.log(i);
console.log(rest);


function mySum(a, b) {
    var summ = a + b; // За счет объявления переменной мы получаем доступ к результату и далее к ней обращаемся.
    return summ; //данные возвращаются.
}
console.log(mySum(2, 7));
///////////////////////////////////
function learn(a, b) {
    var summ = a + b;
    console.log(summ); //данные выводятся на экран.
}
learn(2, 4); //Означает 2+4, т.е мы вызвали ф-ию(покамись мы её не вызовем, она не будет работать).
var summ = learn(50, 30);

const element = document.querySelector('#container'); //принимает в качестве аргумента строку.
//document.querySelector - возвращает нам спец. объект, к-й описывает существующий элемент на странице. В данном случае мы искали эл-т с id container.

//изменим цвет
element.style.color = 'red'; //таким образом можно менять абсолютно любое св-во.

//querySelector - возвращает найденный элемент

element.style.fontSize = '40px';

const element = document.querySelector('.hello'); //обращ-ся к браузеру, чтобы он нашёл у себя в дом-дереве эл-т с классом hello и поместил его в переменную element.

element.textContent = 'Привет Дашка!';// textContent - меняет текстовое содержимое элемента

document.body.//самый короткий путь получения доступа к эл-ту body.
const body = document.querySelector('body');//более длинный путь получения доступа к эл-ту body.
document.body.appendChild(element);

const element = document.createElement('div'); //document.createElement - создаст новый Dom эл-т в памяти но не добавляет его на стр.
//Т.е. браузер создаст эл-т div и поместит его в перем-ю element.
const container = document.querySelector('#container');

container.appendChild(element);//добавляем куда-в container, добавляем что-аргумент element, добавляет в конец.
//appendChild - помещ-т один эл-т в др-й.

const element2 = document.createElement('span');
container.appendChild(element2);

const myButton = document.querySelector('#myButton');
const container = document.querySelector('#container');

//Добавление обработчика кликов
myButton.addEventListener('click', function () {
    console.log('клик по кнопке');
});

/* container.addEventListener('click', function () {
    console.log('клик по контейнеру');
}); */

myButton.addEventListener('click', function () {
    myButton.style.color = 'green';
    myButton.style.fontSize = '30px';
    myButton.style.outline = 'none';
    myButton.style.border = '2px solid blue';
    myButton.style.borderRadius = '10px';
});

/* const phone = document.querySelector('#phone');
phone.addEventListener('keydown', function (event) {
    console.log(event.type);//(event.type) - обращаемся к св-ву type данного объекта.
}); */
//function () - в эту ф-ю приходит 1 ед-й аргумент - event. Когда браузер вызывает ф-ю обработчик, он передает в эту ф-ю спец.объект - event первым аргументом и в этом объекте сод-ся инфа о событии, к-е в данный мом-т произошло.

/* const phone = document.querySelector('#phone');
phone.addEventListener('keydown', function (event) {
    console.log(event.key);//(event) - выведем в консоль cв-во key данного объекта.
}); */

//? Как проверить нажали мы цифру или букву
const phone = document.querySelector('#phone');
phone.addEventListener('keydown', function (event) {
    let isDigit = false;//isDigit - это флаг, перем-я где мы храним какое-то сост-е, по умолч-ю это = false.
    let isDash = false;
    let isControl = false;

    if (event.key >= 0 || event.key <= 9) {
        isDigit = true;
    }//true в эту перем-ю прийдёт в том случае, если клавиша, к-ю мы нажали от 0 до 9.

    if (event.key == '-') {
        isDash = true;
    }

    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
        isControl = true;
    }//true в эту перем-ю прийдёт в том случае, если клавиша, к-ю мы нажали от 0 до 9.

    //&& - добавление.
    if (!isDigit && !isDash && !isControl) {
        event.preventDefault();
    }

    console.log(event.key)
})

// (isDigit == false) можно заменить на (!isDigit). ! - приравнивается к НЕ.

/* //////////////////////////
if (isDigit == true) { //isDigit будет установлен в true только в том случае, если мы нажали клавишу от 0 до 9.
  console.log('цифра');

//////////////////////////
 Этот console.log('цифра') можно удалить, т.к. он нужен для того, чтобы выводить в консоль надпись цифра и никакой смысловой нагрузки не несёт.

//////////////////////////
else {
        event.preventDefault();//preventDefault - при щелчке по инпутовому полю клики буквенные игнорируются.
    }

//////////////////////////
else {
    console.log('буква');
}

//////////////////////////
console.log(event.preventDefault);
//preventDefault - это ф-я, к-я есть в любом объекте event, в любой инф-ии о любом событии. */

const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');
sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(myForm.elements);//elements - это св-во объекта (формы). Другими словами - хранилище всех полей. При отправке формы в консоли появится объект со св-ми, имена к-х соотв-ют атрибутам name.
    console.log(myForm.elements.lastName.value);//Получим доступ в консоли к значению поля формы с name="lastName".
    console.log(myForm.elements.name.value);
    console.log(myForm.elements.gender.value);
    console.log(myForm.elements.auto.checked);//Для checkbox вместо value пишем checked. Если галочка стоит - то в консоли высветит true, если нет - false.

    if (myForm.elements.auto.checked == true) {
        console.log('есть автомобиль!');
    } // Если галочка стоит - то в консоли высветит - есть автомобиль!

    if (myForm.elements.gender.value == 'm') {
        console.log('мужчина');
    }
    else {
        console.log('женщина');
    }
});
//myForm.elements - это спец. объект, ч/з к-й мы можем получать доступ к нужным нам полям.

const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

//myButton.addEventListener('click' - добавляем обработчик событий - click.
myButton.addEventListener('click', function () {
    const newItem = document.createElement('li');//Созд-м перем-ю newItem и в кач-ве знач-я передаем в неё li. Т.е. мы создаём новый эл-т с тэгом li и записываем его в переменную. При этом покамись не добавляем его в Dom-дерево.
    newItem.classList.add('item');//classList - св-во, к-е есть у каждого эл-та и оно добавляет/уд-т классы.
    //.add - это метод.
    newItem.textContent = nameInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'удалить';

    deleteButton.addEventListener('click', function () {
        list.removeChild(newItem);//Означает - из list удалим newItem.
    });

    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    nameInput.value = '';
});

//1 способ реал-ии слайдера
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = getComputedStyle(items);
//console.log(computed.right);
//getComputedStyle - переводит все в числа.

right.addEventListener('click', function (event) {
    event.preventDefault();
    let currentRight = parseInt(computed.right);//Текущ. знач. css св-ва right прогоняем ч/з parseInt и получаем число.
    if (!currentRight) {
        currentRight = 0;
    }
    //!currentRight - проверка, не обязательная. Т.е. если в !currentRight что-то не похожее на число, то мы в currentRight записываем 0.
    //В совр-х брауз-х можно обойтись и без проверки.
    if (currentRight < 500) {
        items.style.right = currentRight + 100 + "px";
    }
    //Это условие необх-0 для того, чтобы огранич-ь максимальные координаты нашего эл-та.
});

left.addEventListener('click', function (event) {
    event.preventDefault();
    let currentRight = parseInt(computed.right);

    if (!currentRight) {
        currentRight = 0;
    }

    if (currentRight > 0) {
        items.style.right = currentRight - 100 + "px";// - это аналог items.style.right = ${currentRight - 100}px;
    }
});

//2 способ реал-ии слайдера.
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

//3 способ реал-ии слайдера.

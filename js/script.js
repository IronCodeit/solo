//2 способ реал-ии слайдера.
/* const left = document.querySelector("#left");
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
}); */



//Обработка ошибок и отладка
/* function div(a, b) {
    if (b == 0) {
        console.log('На ноль делить нельзя!');//Если b равнялось бы 0, то в консоль бы вывелась данная зпись.
    }
    return a / b;
}
var result = div(15, 10);
console.log(result); */


/* function div(a, b) {
    if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else {
        return a / b;
    }
}
var result = div(120, 0);//В таком случае в консоль выведим На ноль ... + undefined(т.к. интерпритатор не дойдет до return).
console.log(result); */


/* function div(a, b) {
    if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else {
        return a / b;
    }
}
var result = div(70, 7);//В таком случае в консоль выведим result, т.е. 10.
if (result != undefined) {
    console.log(result);
} */


/* function div(a, b) {
    if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else {
        return a / b;
    }
}
var result = div(70, 0);//В таком случае в консоль выведим На ноль... Т.к. данная ф-ия ничего не возвращает, то по умолчанию она возвращает undefined.
if (result != undefined) {
    console.log(result);
} */


/* function div(a, b) {
    if (b != 0) {
        return a / b;
    }
}
var result = div(33, 3);//В таком случае в консоль выведим 11.
if (result != undefined) {
    console.log(result);
} else {
    console.log('На ноль делить нельзя!');
} */


/* function div(a, b) {
    if (b != 0) {
        return a / b;
    }
}
var result = div(33, 0);//В таком случае в консоль выведим На ноль... .
if (result != undefined) {
    console.log(result);
} else {
    console.log('На ноль делить нельзя!');
} */


/* function div(a, b) {
    if (b < 0) {
        console.log('b д/б положительным числом!');
    } else if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else if (b == undefined) {
        console.log('b д/б передан!');
    } else {
        return a / b;
    }
}

var result = div(15, 5);//В таком случае в консоль выведим 3.
if (result != undefined) {
    console.log(result);
} */

//else if - то с условием,
//else - то без условия.


/* function div(a, b) {
    if (b < 0) {
        console.log('b д/б положительным числом!');
    } else if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else if (b == undefined) {
        console.log('b д/б передан!');
    } else {
        return a / b;
    }
}

var result = div(75, 0);//В таком случае в консоль выведим На ноль... .
if (result != undefined) {
    console.log(result);
} */


/* function div(a, b) {
    if (b < 0) {
        console.log('b д/б положительным числом!');
    } else if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else if (b == undefined) {
        console.log('b д/б передан!');
    } else {
        return a / b;
    }
}

var result = div(5, -5);//В таком случае в консоль выведим - b д/б положит.
if (result != undefined) {
    console.log(result);
} */


/* function div(a, b) {
    if (b < 0) {
        console.log('b д/б положительным числом!');
    } else if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else if (b == undefined) {
        console.log('b д/б передан!');
    } else if (!isFinite(b)) {
        console.log('b д/б числом!');
    } else {
        return a / b;
    }
}

var result = div(5, 'привет');//В таком случае в консоль выведим - b д/б числом!.
if (result != undefined) {
    console.log(result);
} */


/* function div(a, b) {
    if (b < 0) {
        console.log('b д/б положительным числом!');
    } else if (b == 0) {
        console.log('На ноль делить нельзя!');
    } else if (b == undefined) {
        console.log('b д/б передан!');
    } else if (!isFinite(b)) {
        console.log('b д/б числом!');
    } else {
        return a / b;
    }
}

var result = div(5, 'привет');//В таком случае в консоль выведим - b д/б числом!.
if (result != undefined) {//undefined - это просто 1 значение, оно не говорит нам, что конкретно произошло, какая конкретно ошибка произошла. Т.е. сделав проверку на undefined мы точно не знаем, что произошло, мы знаем, что ф-я не вернула значение, а вот из-за чего мы не можем точно сказать. И для того, чтобы решать эту проблему множественных ошибок, сущ. искл-я. Искл. - это мех-м в js, к-й позволяет генерировать спец объекты, отлавливать такие сит-ии, когда такие объекты генерируются и эти сит-ии обраб-ь.
    console.log(result);
} */


/* try {
    console.log('до');
    throw new Error('Текст ошибки');
    console.log('после');
} catch (e) {
    console.log(e.message);
} */

//В следующих примерах try catch живёт внутри ф-ии деления.

/* function div(a, b) {
    try {
        if (b < 0) {
            throw new Error('b д/б положительным числом!');
        } else if (b == 0) {
            throw new Error('На ноль делить нельзя!');
        } else if (b == undefined) {
            throw new Error('b д/б передан!');
        } else if (!isFinite(b)) {
            throw new Error('b д/б числом!');
        }
        return a / b;
    } catch (e) {
        console.log(e.message);
    }
}

var result = div(10, 0);//В таком случае в консоль выведим - На ноль... .
if (result != undefined) {
    console.log(result);
} */


/* function div(a, b) {
    try {
        if (b < 0) {
            throw new Error('b д/б положительным числом!');
        } else if (b == 0) {
            throw new Error('На ноль делить нельзя!');
        } else if (b == undefined) {
            throw new Error('b д/б передан!');
        } else if (!isFinite(b)) {
            throw new Error('b д/б числом!');
        }
        return a / b;
    } catch (e) {
        console.log(e.message);
    }
}

var result = div(10, 2);//В таком случае в консоль выведим - 5.
if (result != undefined) {
    console.log(result);
} */


/* function div(a, b) {
    try {
        if (b < 0) {
            throw new Error('b д/б положительным числом!');
        } else if (b == 0) {
            throw new Error('На ноль делить нельзя!');
        } else if (b == undefined) {
            throw new Error('b д/б передан!');
        } else if (!isFinite(b)) {
            throw new Error('b д/б числом!');
        }
        return a / b;
    } catch (e) {
        console.log(e.message);
    }
}

var result = div(10);//В таком случае в консоль выведим - b д/б передан!.
if (result != undefined) {
    console.log(result);
} */


/* function div(a, b) {
    try {
        if (b < 0) {
            throw new Error('b д/б положительным числом!');
        } else if (b == 0) {
            throw new Error('На ноль делить нельзя!');
        } else if (b == undefined) {
            throw new Error('b д/б передан!');
        } else if (!isFinite(b)) {
            throw new Error('b д/б числом!');
        }
        return a / b;
    } catch (e) {
        console.log(e.message);
    }
}

var result = div(10, 'привет!');//В таком случае в консоль выведим - b д/б числом!.
if (result != undefined) {
    console.log(result);
} */



//Стэк вызова или кол стэк.
/* function fn1() {
    console.log('до вызова fn2');
    fn2();//вызываем fn2
    console.log('после вызова fn2');
}

function fn2() {
    console.log('до вызова fn3');
    fn3();//вызываем fn3
    console.log('после вызова fn3');
}

function fn3() {
    console.log('внутри fn3');
    throw new Error('Ошибка!!!');//Если внутри этой ф-ии не будет обрабатываться данная ошибка throw... , то интерпритатор(информация об этой ошибке) будет подниматься вверх по стэку вызова, пока не найдёт try catch.
}
//Оборачиваем в try не fn3(), а fn1(), т.е. ф-ию, к-я может в последствии повлечь за собой исключения.
try {
    console.log('до вызова fn1');
    fn1();
    console.log('после вызова fn1');
} catch (e) {
    console.log(e.message);
} */
//Итого: сначала интерпритатор с 325 стр пойдет сверху вниз, выведет в консоль текст и пойдет обратно снизу вверх, дойдет до самой верхней ф-ии и вернется в 325 стр.
//global
// -- fn1
// ---- fn2
// ------ fn3



/* function div(a, b) {
    if (b < 0) {
        throw new Error('b д/б положительным числом!');
    } else if (b == 0) {
        throw new Error('На ноль делить нельзя!');
    } else if (b == undefined) {
        throw new Error('b д/б передан!');
    } else if (!isFinite(b)) {
        throw new Error('b д/б числом!');
    }
    return a / b;
}//Эта ф-ия div - назыв. ф-ией деления.

//Теперь try catch живёт не внутри ф-ии деления, а оборачивает собой код, к-й вызывает ф-ию деления.
try {
    var result = div(10, 0);
    console.log(result);
} catch (e) {
    console.log(e.message);
} */



//ОТЛАДКА

var button = document.querySelector('#myButton');

button.addEventListener('click', function () {
    var a = ['привет', 'LoftSchool', '!!!'];
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
});



/* const loadButton = document.querySelector('#loadButton');
const result = document.querySelector('#result');

При клике на loadButton будет отправляться асинхронный запрос на сервер.
loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();//Создали объект.
    xhr.open('GET', 'content.txt'); //Подготовка(настройка) объекта для отправки асинхр-го запроса.
    xhr.send();//Отправка объекта.
    //'GET' - метод отправки(т.е. мы будем получать данные с сервера).
    //'content.txt' - путь к файлу на сервере(если файл будет лежать в папке, то пишем папка/имя файла).
    //Получение содержимого ответа.
    xhr.addEventListener('load', () => {
        console.log(xhr.responseText);//Получаем текстовое содержимое ответа.
    });
}); */



/* const loadButton = document.querySelector('#loadButton');
const result = document.querySelector('#result');

loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'content1.txt');//моделируем ситуация с несуществующим именем файла content1.txt.
    xhr.send();
    xhr.addEventListener('load', () => {
        //console.log(xhr); - обращ-ся к объекту xhr, но после того, как пришёл ответ из сервера, т.е. смотрим, что содержится в переменной xhr.
        if (xhr.status === 404) {//любые коды ответа < 400 - это нормальные, а выше - ошибка, поэтому можно писать >=400.
            console.log('Файл не найден');
        } else {
            console.log(xhr.responseText);
        }
    });
}); */



/* const loadButton = document.querySelector('#loadButton');
const result = document.querySelector('#result');

loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'content.txt');
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status === 404) {
            console.log('Файл не найден');
        } else {
            result.innerHTML = xhr.responseText;
        }//Если я в файле формата .txt хочу написать html код, то напишу не result.innerText, а result.innerHtml, чтобы html тэги превратились в Dom-дерево. Но так загружать html файлы не совсем корректно.
    });
}); */




/* const loadButton = document.querySelector('#loadButton');
const result = document.querySelector('#result');

loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'friends.json');
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status >= 400) {
            console.log('Файл не найден');
        } else {
            const friends = JSON.parse(xhr.responseText);//Содержимое json файла прогоняем ч/з метод parse.
            for (const friend of friends) {//будем перебирать friends - массив, к-й только что к нам пришёл и на каждой итерации будем делать следующее.
                const friendDom = createFriendDOM(friend);
                result.appendChild(friendDom);
            }
        }
    });
});

function createFriendDOM(friend) {//creatFriendDom принимает на вход объект, к-й описывает друга
    const div = document.createElement('div');
    div.classList.add('friend');
    div.textContent = `${friend.name} ${friend.lastName}`;
    return div;
} */
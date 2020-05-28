// ПЕРЕМЕННЫЕ
var message; // aA-zZ, 0-9, $, _
var myMessage;
myMessage = "Сообщение";
var myNumber = 10.484;
var myString = "Привет, Вася!";
var myBoolean = true; // false
var myNull = null;
var myUndefined = undefined;

// ЧИСЛА
var result1 = 40 + myNumber;
console.log(result1);
var result2 = 40 - myNumber;
console.log(result2);
var result3 = 40 * myNumber;
console.log(result3);
var result4 = 40 / myNumber;
console.log(result4);

myNumber += 10; // тоже самое, что и: myNumber = myNumber + 10;
console.log(myNumber);

myNumber++; // тоже самое, что и: myNumber = myNumber + 1;
console.log(myNumber);

console.log(Math.round(myNumber)); // математическое округление
console.log(Math.ceil(myNumber)); // округление в большую сторону
console.log(Math.floor(myNumber)); // округление в меньшую сторону

var newNumber = 2.437;
newNumber = newNumber.toFixed(1); // ограничиваем количество символов после запятой
console.log(newNumber);

// СТРОКИ
console.log("40" + newNumber); // конкатенация
console.log(myString + " Как дела?");
console.log(myString.toLowerCase()); // переводит в нижний регистр
console.log(myString.toUpperCase()); // переводит в верхний регистр

// МАССИВЫ
var names = ["Вася", "Петя", "Катя"];
console.log(names[1]); // Петя
console.log(names[2].toUpperCase()); // КАТЯ
names[0] = "Маша"; // заменили Васю на Машу
names.push("Света"); // добавили свету в конец массива
console.log(names); // Array(4) [ "Маша", "Петя", "Катя", "Света" ]

// УСЛОВИЯ
if ("Маша" !== "Света" || myNumber > 20) { // && - логический оператор "and", || - логический оператор "или"
    console.log("Условие выполнилось");
}

if (myNumber < 20) {
    console.log("Число меньше 20");
} else {
    console.log("Число больше 20");
}

// ЦИКЛЫ
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

for (var j = 0; j < names.length; j++) { // names - массив выше
    console.log(names[j]);
}

var f = 0;
while (f < 10) {
    console.log(f);
    f++;
}

// ЕЩЕ ЦИКЛЫ
let car = {
    cilor: 'red',
    maxSpeed: 250,
    audio: {
        brand: 'Sony',
        speakers: 12
    }
};
if(car.color == 'red') {
    console.log('Автомобиль красный');
} else if (car.color == 'green'){
    console.log('Автомобиль зеленый');
} else {
    console.log('Цвет не определен');
}

// ФУНКЦИИ
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 59));
console.log(sum(3, 167));
console.log(sum(22, 88));

// ЕЩЕ ФУНКЦИИ
let car = {
    color: 'red'
};
let car2 = {
    color: 'green'
};

colorChange(car); // вызываем функцию

function colorChange(theCar){ // принимаем на вход параметры
    theCar.color = 'yellow'; // изменяем параметр
};
console.log("Car: " + car.color);
console.log("Car2: " + car2.color);

// ОБЪЕКТЫ
var myObject = {
    name: "Вася",
    surname: "Пупкин",
    age: 25,
    getFullName: function() {
        return this.name + " " + this.surname;
    }
};
myObject.name = "Петя"; // меняем Васю на Петю
console.log(myObject.name);
console.log(myObject.getFullName());

// ЕЩЕ ОБЪЕКТЫ
var chevy = {
	make: "Chevy",
	model: "Aveo",
	year: 2011,
	color: "red",
	passengers: 4,
	convertible: false,
	mileage: 1021
	};

var cadi = {
	make: "Cadillac",
	model: "GM",
	year: 1955,
	color: "yellow",
	passengers: 2,
	convertible: true,
	mileage: 12821
};

var newObj = {};

delete cadi.passengers;

cadi.state = "normal";
console.log(cadi);

console.log(cadi.passengers);

// КЛАССЫ
class Hater {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayName() {
        console.log('Наш хейтер: ${this.firstName} ${this.lastName}')
    }
}

let hater = new Hater('Норман', 'Озборн');
hater1.sayName();

let hater = new Hater('Доктор', 'Дум');
hater2.sayName();

// ЕЩЕ КЛАССЫ
class Car {
  constructor(speed) {
    this.speed = speed;
  }
  viewSpeed() {
    return `Моя скорость ${this.speed} км/ч`;
  }
}

let audi = new Car(200);
document.querySelector("#car").innerHTML = audi.viewSpeed();

audi.speed = 300;

document.querySelector("#car2").innerHTML = audi.viewSpeed();

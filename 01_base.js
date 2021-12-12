// 1 Переменные

// camelCase
//const firstName = 'Svetlana'
//const lastName = 'Levkovskaya' // string
//let age = 42 // number
//const isProgrammer = true // boolean

//const _ = 'private' // const _private = 'private'
//const $ = 'some value'

// const if = 'skjh' // err - зарезервированное слово
//const withNumber5 = '5'
//const 5withNumber = '5' // err - не можем начинать название переменной с числа

//=======================================================================

// 2 Мутирование - как JS работает с разными типами данных

//const firstName = 'Svetlana'
//let age = 42 // number
//console.log('Имя человека: ' + firstName +', а возраст человека: ' + age) // string + используем конкотинирование + age привел в строке
//console.log(age) // number
//console.log(age.toString())

//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// cntrl+X // delete string

//prompt('Введите фамилию') // получаем окно в котором мы можем что-то вписывать

//const lastName = prompt ('Введите фамилию')
//alert(firstName + ' ' + lastName)

//========================================================================

// 3 Операторы - базовые операторы (+ оператор конкотинации)

//let currentYear = 2021
//let birthYear = 1979
//const age = currentYear - birthYear
//console.log(age)

//const a = 10
//const b = 5
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)

//console.log(currentYear) //2021 - оператор ++ инктементируем +1, также есть приоритеты
//console.log(++currentYear) //2022
//console.log(--currentYear) //2021
//console.log(++currentYear) //2022

//let a = 10
//let b = 5
//let c = 32
// c = c + a  равно  c += a
//c += a
//c -= a // c = c - a
//c *= a // c = c * a
//c /= a // c = c / a
//console.log(c)

//==========================================================================


//4 Типы данных - typeof выводит тип данных (5 примитивов: string, int, boolean, null, underfined) + (3 типа данных: массив, объект, функция)

//const isProgrammer = true
//const firstName = 'Svetlana'
//const age = 42
//let x

// примитивы в языке (5)
//console.log(typeof isProgrammer) // boolean
//console.log(typeof firstName) // string
//console.log(typeof age) // number
//console.log(typeof x) // undefined
//console.log(typeof null) //  возвращает object - баг в JS
//console.log(null)

//=========================================================================

// 5 Приоритет операторов //mdn - mozila developer network - документация по JS // 20 - самый высокий приоритет это (), 1 - самый низкий

//const fullAge = 42
//const birthYear = 1979
//const currentYear = 2021

// > < >= <= // операторы стравнения // сложение и вычитаение с приоритетом 13; больше или равно - приоритет 11.
//const isFullAge = (currentYear - birthYear) >= fullAge    // 42 >= 41 => true

//console.log(isFullAge)

//=========================================================================

//6 Условные операторы
//if () {}

/* const courseStatus = 'pending' // ready, fail, pending

if (courseStatus === 'ready') {
    console.log ('Курс готов и его можно проходить')
}
else if (courseStatus === 'pending') {
    console.log('Курс находится в процессе разработки')
}
else {console.log('Курс не получился')} */


//const num1 = 42 // number
//const num2 = '42' // string
//console.log(num1 == num2) // получаем true, так как == в JS приводит к одному типу данных (строка)
//console.log(num1 === num2) // false, проверяется тип данных


//const isReady = true
//if (isReady) {     //  = if (is ready === true)
    //console.log('Все готово!')
//} else {
    //console.log('Все не готово!')
//}

//Тернарное выражение
//const isReady = false
//isReady ? console.log('Все готово!') : console.log('Все не готово!')

//=========================================================================

// 7 Булевая логика

// && - логическое И;  Возвращает операнд expr1, если он может быть преобразован в false; в противном случае возвращает операнд expr2 
//(находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные). 
// true && true = true 
// true && false = false
// false && true = false
// false && false = false
// cat && dog = t && t = dog
// false && cat = f && t = false
// cat && false = t && f = false

// II - логическое ИЛИ;  Возвращает операнд expr1, если он может быть преобразован в true; в противном случае возвращает операнд expr2
// (находит и возвращает первое истинное значение).
// true || true = true 
// true || false = true
// false || true = true
// false || false = false
// cat || dog = t || t = cat
// false || cat = f || t = cat
// cat || false = t || f = cat

//! - логическое НЕ; Возвращает false, если операнд может быть преобразован в true; в противном случае возвращает true.
//true = true
//!true = false
//!!true  = true 
//!false = true
//!cat = !t = false

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Конвертирование И в ИЛИ

// a1 && a2 = !(!a1 || a2)

// Конвертирование ИЛИ в И

//

//=========================================================================


// 8  Функции (облегчает код, чтобы не дублировать)

/* function calculateAge(year) {
    return 2021 - year
}

const myAge = calculateAge(1979)

console.log(myAge)  */// console.log(calculateAge(1979)) */


/* function calculateAge(year) {
    return 2021 - year
} 

function logInfoAbout(name, year) {
    const age = calculateAge(year)

    if (age>0) {
    console.log('Человек по имени ' + name + ' имеет возраст ' + age)
} else {
    console.log('Это уже будущее')
}
}

logInfoAbout('Svetlana', 1979)
logInfoAbout('Svet', 2022) */
 

//=========================================================================

// 9 Массивы
//const cars  = ['mers', 'opel', 'ford']
//console.log(cars)
//console.log(cars[0])
//console.log(cars.length) // проверяем длину массивы получаем количество элементов внутри массива
//cars[0] = 'Porsche' // поменяли значение
//console.log(cars)
//сars[3] = 'Mazda' // [3] - статический индекс // добавили элемент в массив
//console.log(cars) // смотрим что находится в массиве

//cars[cars.length] = 'Mazda' // [cars.length] - динамический индекс - складывает в последний элемент новый элемент
//console.log(cars)

//=========================================================================


// 10 Циклы
//const cars  = ['mers', 'opel', 'ford'] // создание цикла через индекс i
//for (let i=0; i < cars.length; i++) {
    //console.log (i) // выводится список номеров элементов в массиве: 0,1,2
//}

//const cars  = ['mers', 'opel', 'ford'] // создание цикла через индекс i
//for (let i=0; i < cars.length; i++) {
    //const car = cars[i]
    //console.log (car) // выводится список наименований элементов в массиве: mers, opel, ford
//}

//const cars  = ['mers', 'opel', 'ford', 'porsche'] // создание цикла через индекс i
//for (let i=0; i < cars.length; i++) {
    //const car = cars[i]
    //console.log (car) // + добавили porsche
//}

//const cars  = ['mers', 'opel', 'ford', 'porsche'] // цикл для итерирования массивов, созданием переменную car, который является элементом массива cars без создания индекса
//for (let car of cars) {
    //console.log (car)
//} 

//=========================================================================

// 11 Объекты - в объекте создается группа значений

// создаем новый объект:
//const person = {
    //firstName: 'Svetlana',
    //lastName: 'Levkovskaya',
    //year: 1979,
    //languages: ['Russian' ,'English'],
    //hasChild: false,
    //greet: function(){
        //console.log('greet from person')
    //}
//}

//console.log(person) // полное описание объекта
//console.log(person.firstName) // выводит имя
//person.greet() // у персона вызываем метод грит
//console.log(person ['lastName']) // передаем строчку

//const key = 'languages'  // задали ключ
//console.log(person [key])

//const key = 'year' // поменяли ключ
//console.log(person [key])

//person.hasChild = true // изменили значение
//console.log(person)

//person.isProgrammer = true // добавили новый ключ
//console.log(person)
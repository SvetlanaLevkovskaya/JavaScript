// 6. Массивы - это объект

/* const cars =['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib =[1, 1, 2, 3, 5, 8, 13]
console.log(cars) */

//const cars =['Мазда', 'Форд', 'БМВ', 'Мерседес']
//cars.push('Рено')                         // push - это метод массива, с помощью которого добаляются элементы массива в конец массива
//console.log (cars)

//cars.unshift('Волга')                    // unshift - метод. Добавляет элемент в начало массива
//console.log (cars)

//cars.shift()                             // shift - удаляет первый элемент массива и не принимает параметров
//console.log (cars)

//const firstCar = cars.shift()            // если нам нужно удалить элемент из массива и поработать с ним
//const lastCar = cars.pop()               // удаляет последний элемент массива
//console.log (firstCar)
//console.log (lastCar)

//const cars =['Мазда', 'Форд', 'БМВ', 'Мерседес']
//console.log(cars.reverse())   // метод reverse - переварачивает массив 
//console.log(cars)              // и при этот его мутировал


// Задача 1
/* const text = 'Привет, мы изучаем JS'
const reverseText = text.split(',').reverse()                // метод split делит строчку и возвращает массив
const reverseText2 = text.split('').reverse() 
const reverseText3 = text.split('').reverse().join()         //  метод join превращает массив в строчку
const reverseText4 = text.split('').reverse().join(' ')      // без пробел
const reverseText5 = text.split('').reverse().join('')      // с пробел

console.log(reverseText)
console.log(reverseText2)
console.log(reverseText3)
console.log(reverseText4)
console.log(reverseText5) */


//const cars =['Мазда', 'Форд', 'БМВ', 'Мерседес']
//console.log(cars.indexOf('БМВ'))     // метод indexOf возвращает номер элемента в массиве

//const index = cars.indexOf('БМВ')   // получаем index
//console.log(cars[index])   // и обращаемся к этому индексу и выводим его в консоль // получили БМВ


/* const index = cars.indexOf('БМВ')   // получаем index // если вводим некорректное значение то получаем -1
cars[index] = 'Порше'   // и изменяет его на Порше
console.log(cars)  // смотрим на массив БМВ поменяли на Порше */


/* const people = [                                 // создаем объект
    {name: 'Svetlana', budget: 5000},
    {name: 'Victor', budget: 10000},
    {name: 'Serg', budget: 1000}
] */

/* const index = people.findIndex( function(person) {    // на анонимную функцию callbackа принимаем person
    console.log(person)    // на каждого person вызывается объект который находится в массиве
}) */


/* const index = people.findIndex( function(person) {    // на анонимную функцию callbackа принимаем person (передача callback функции)
    return person.budget === 5000   // мы должны вернуть условие 
})
console.log(index)    // и смотрим индекс
console.log(people[index]) // обратимся по этому индексу к массиву people */


/* const index = people.findIndex( function(person) {    
    return person.budget === 5000   
})
const person = people.find( function(person) {      // если нам не нужно искать индекс, можем обратиться сразу к person
    return person.budget === 5000   
})  
console.log(person)  */


// реализуем все через цикл
/* for (const person of people) {
    console.log(person)               // получаем всех person 
} */


/* let findedPerson  // person не определен
for (const person of people) {
       if(person.budget === 5000){
        findedPerson = person
    }
}
console.log(findedPerson) */


/* const person = people.find((person) => {                 // упрощаем передачу callback функции, обозначив ее как стрелочную
    return person.budget === 5000   
})  
console.log(person)  */


/* const person = people.find(person => person.budget === 5000)  // и еще упрощаем запись 
// этот подход называется лямбда функция // продвинутый код
console.log(person)  */


/* const cars =['Мазда', 'Форд', 'БМВ', 'Мерседес']
console.log(cars.includes('Мазда'))    // получаем true // проверяем наличие элемента 
// если ищем несуществующее условие, получаем underfined (тип данных) */

/* const cars =['Мазда', 'Форд', 'БМВ', 'Мерседес']
   const upperCasecars = cars.map(car => {            // метод map - преобразовывает данные и всегда возвращает новый массив
    return car.toUpperCase()
})
console.log(upperCasecars)
console.log(cars)  */



/* const fib =[1, 1, 2, 3, 5, 8, 13]
const pow2Fib = fib.map(num => num **2)   // возвели каждый элемент в квадрат
console.log(pow2Fib) */



/* const fib =[1, 1, 2, 3, 5, 8, 13]
const pow2 = num => num **2 // создадим переменную - и это будет функция принимающая число и возводящая в его квадрат
const pow2Fib = fib.map(pow2) // здесь мы не вызываем, а передаем функцию // так как это массив можем вызывать другие методы
console.log(pow2Fib) */



/* const fib =[1, 1, 2, 3, 5, 8, 13]
const pow2 = num => num **2 // создадим переменную - и это будет функция принимающая число и возводящая в его квадрат
const sqrt = num => Math.sqrt(num) // вычисляем корень кврадратный из каждого элемента массива
const pow2Fib = fib.map(pow2).map(sqrt) // здесь мы не вызываем, а передаем функцию // так как это массив можем вызывать другие методы
console.log(pow2Fib) */



/* const fib =[1, 1, 2, 3, 5, 8, 13]
const pow2 = num => num **2 // создадим переменную - и это будет функция принимающая число и возводящая в его квадрат
const sqrt = num => Math.sqrt(num) // вычисляем корень кврадратный из каждого элемента массива
const pow2Fib = fib.map(pow2).map(Math.sqrt) // здесь мы не вызываем, а передаем функцию // так как это массив можем вызывать другие методы
console.log(pow2Fib) */


/* const fib =[1, 1, 2, 3, 5, 8, 13]
const pow2 = num => num **2
const pow2Fib = fib.map(pow2)                          //метод map - преобразовывает данные и возвращает новый массив 
const filteredNumber = pow2Fib.filter(num => {         //метод filter - фильтрует данные и возвращает новый массив
    return num > 20                                    // задаем условие возвратить данные больше 20
})
console.log(pow2Fib) 
console.log(filteredNumber)    */


/*  const people = [                                 // создаем объект
    {name: 'Svetlana', budget: 5000},
    {name: 'Victor', budget: 10000},
    {name: 'Serg', budget: 1000}
] 
 */

/* const allBudget = people.reduce((acc, person) => {
    acc += person.budget                             // изменяем acc
    return acc                                       // возвращаем acc
}, 0) 
console.log(allBudget)    */                             // сумма всех бюджетов 



/*  const allBudget = people.reduce((acc, person) => {
    if (person.budget > 2000) {                        // не совсем правильный метод
        acc += person.budget
    }
    return acc      
}, 0) 
console.log(allBudget)                                // сумма всех бюджетов > 2000
 */



/* const allBudget = people                 // вызываем подряд несколько методов chening
    .filter(person => person.budget >2000) // фильтр возвращает новый массив
    .reduce ((acc, person) => {           // в новом массиве делаем reduce - объединение всех значений массива в одно значение
    acc += person.budget
    return acc      
}, 0) 
console.log(allBudget)     */ 



/* const displayItems = allItems.filter(item => item.name.consists('phone') !== -1) // пример реализации фильтра на сайте // consists = indexOf -  содержится ли массив в подмассиве
console.log (displayItems) */
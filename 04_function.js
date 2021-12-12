// 5. Функции - в JS присутствует несколько видов функций

// 5.1 - Function Declaration - можем обращаться когда хотим

/* function greet(name) {
    console.log('Привет - ', name)
}

greet('Лена')  */   // вызываем функцию greet с именем Лена
 


// 5.2 Function Expression - создаем функцию и вкладываем ее в переменную

/*  const greet2 = function greet2(name) {
    //console.log('Привет 2 - ', name)
}

greet2 ('Лена')   
console.log(typeof greet2) // с помощью typeof определяем тип */




/* const greet2 = function greet2(name) {
    
}
greet2 ('Лена')
console.dir(greet2) // можем раскрыть функцию // по сути в JS функция является объектом */


// 5.3 Анонимные функции
/* let counter = 0
const iterval = setInterval( function(){
    if (counter ===5){
        clearInterval(interval) //clearTimeout
    }
    else {
        console.log(++counter)
    }
}) */


// 5.4 Стрелочные функции

/* function greet(name) {  //  функция
    console.log('Привет - ', name)
}
greet('Лена')  */


/* const arrow = (name) => {       // стрелочная функция
    console.log('Привет - ', name)
}
arrow ('Svetlana') */



/* const arrow2 = (name) => console.log('Привет - ', name) // так как у нас один параметр можно не использовать {}
arrow2 ('Svetlana') */


/* const pow1 = num =>{
    return num **2
}
console.log(pow1(4)) */



/* const pow2 = num => num **2 // возведение в степень
console.log(pow2(5)) */

/* const arrow = (name, age) => {       // стрелочная функция
    console.log('Привет - ', name, age)
}
arrow('Svetlana', 42) */

// 5.5 Параметры по умолчанию
/* const sum = (a, b) => a + b
console.log(sum(42, 1))
console.log(sum(42)) */ // не передали одно значение, в результате получили NaN, так как 42 + underfined = NaN

/* const sum = (a, b = 1) => a + b //  задали значение по умолчанию b = 1 
console.log(sum(42)) */

/* const sum2 = (a = 40, b = a *2) => a + b //  задали значение по умолчанию b = 1 
console.log(sum2()) */

/* function sumAll(...all) {  // ... оператор rest, обозначается как три точки и в all собирает все числа
    console.log(all)
} 
sumAll(1, 2, 3, 4, 5) // получили массив, чтобы посчитать все числа создаем result  и спомощью цилка for  из массива all
к результату будем прибавлять это конкретное число */



/* function sumAll(...all) {  
    let result = 0
    for (let num of all){   // получили массив, чтобы посчитать все числа создаем result  и спомощью цилка for  из массива all
         result += num                           //к результату будем прибавлять это конкретное число
    }
    return result     // и на выходе получать result
} 

const res = sumAll(1, 2, 3, 4, 5)  // создаем переменную res
console.log(res)                   // которую можем посмотреть */

// 5.6 Замыкания   - из одной функуии получаем другую функцию // создание приватных переменных
/* function createMember(name){
    return function (lastName) {
       console.log(name + lastName) 
    }
}
const logWithLastName  = createMember('Svetlana')
console.log(logWithLastName('Levkovskaya'))
console.log(logWithLastName('Levk')) */
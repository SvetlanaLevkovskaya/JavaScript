// 1.Number - примитив, класс, сущность

//const num = 42
//const float = 42.42
//console.log(float)

//const pow = 10e3 //10000
//console.log(pow)

//console.log(Number.MAX_SAFE_INTEGER) // максимальное число (max interger) с которым можно происзодить к-л операции
//console.log(Math) // содержаться утилиты
//console.log(Math.pow(2, 53) - 1) // максимальный ing в js 2 в 53 степени минус 1
//console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)  // можем передавать несколько значений
//console.log('Max_Value', Number.MAX_VALUE) //максимальное число больше максимального iteger
//console.log('Min_Value', Number.MIN_VALUE)

//console.log('positive_infinity', Number.POSITIVE_INFINITY) // зарезервированные значения позитивная бесконечность
//console.log('negative_infinity', Number.NEGATIVE_INFINITY) / зарезервированные значения негативная бесконечность

//console.log('2/0', 2 / 0) // при делении получаем бесконечность // не будет ошибка, а будет бесконечность
//console.log(Number.NaN) // переводтится как Not a Number, но в консоли тип - number
//console.log(typeof NaN)

/* const weird = 2 / undefined // получим NaN
console.log(isNaN(weird)) // проверяем является ли это число NaNом // получим true  */
//console.log(Number.isNaN(weird))

//console.log(Number.isNaN(42)) // получим false, так как 42 есть число
//console.log(Number.isFinite(Infinity)) // получим false // получим объект, который присутствует в языке // проверяем конечна ли бесконечность
//console.log(Number.isFinite(42)) // получим true // конечно ли число 42

//const stringInt = '42' // строка (42 отвечает на все вопросы)
//const stringFloat = '42.42'// строка
//console.log(stringInt + 2) // получим 422 // строковое// к строке прибавляем 2 // конкотинируем

//const stringInt = '40'
//console.log(Number.parseInt(stringInt) + 2) // распарсили и получили числовое значение // получим 42
//console.log(parseInt(stringInt) + 2) // 2-ой способ преобразования в число
//console.log(Number(stringInt) + 2) // 3-ий способ
//console.log(+stringInt + 2) // 4-ый споспоб // + обозначает преобразование в число

//const stringFloat = '40.42'
//console.log(parseFloat(stringFloat) + 2) // получим 42.42
//console.log(+stringFloat + 2) // получим 42.42

//console.log(0.4+0.2) // ожидаем 0.6, но получаем 0.6000000000000001 // особенности хранения информации в JS
//console.log(2/5 + 1/5) // 0.6000000000000001
//console.log((0.4+0.2).toFixed (1)) // получим 0,6, но строковое // toFixed - это метод, который отсекаем окончание, но не округляет
//console.log(+(0.4+0.2).toFixed (1)) // 0,6 числовое
//либо
//console.log(parseFloat((0.4+0.2).toFixed (1))) // числовое

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. BigInt - ввели чтобы можно было работа с числами больше MAX_SAFE_INTEGER
//console.log(Number.MAX_SAFE_INTEGER) // получим 9007199254740991
//console.log(900719925474099199999)
//console.log(typeof 900719925474099199999n) // добавляем n чтобы получить bigInt
//console.log(900719925474099199999n - 90071992547409919999n)
//console.log(-900719925474099199999n) // отрицательный bigint
//console.log(-900719925474099199999/.000n) // error // не можем работать с десячичными, только bigint с bigint

//console.log(10n-4) // error bigint работает bigint
//console.log(parseInt(10n) - 4) // 6 // intenger
//console.log(10n - BigInt(4)) // 6n // тип BigInt
//console.log(5n/2n) // 2n // тип BigInt - дробная часть отсекается

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++(+к Bigint)

// 3. Math - объект JS позволяющий взаимодействовать с различными математическими операциями
//console.log(Math.E) // E - константа, экспонента
//console.log(Math.PI) // PI - константа, число Пи

//console.log(Math.sqrt(25))  // корень квадратный
//console.log(Math.pow(5,3)) // возведение в степень
//console.log(Math.abs(-42)) // Модуль

//console.log(Math.max(42,12,23,11,422)) // максимальное значение = 422
//console.log(Math.min(42,12,23,11,422)) // минимальнгое значение = 11
//console.log(Math.floor(4.9)) // округление всегда в меньшую сторону = 4
//console.log(Math.ceil(4.9)) // округление всегда в большую сторону = 5
//console.log(Math.round(4.9)) // округление к ближайшему целому = 5
//console.log(Math.trunc(4.9)) // возвращает целую часть числа = 4, отсекает дробную часть
//+ тригономестрические функции
//console.log(Math.random()) // рандомное число

// ПРИМЕРЫ с Math

/* function getRandomBetween(min, max) {
    return Math.random() * (max-min) + min // получаем число с дробной частью
}
console.log (getRandomBetween(10,42))  */ 



/* function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min) // получаем целое число
}
console.log (getRandomBetween(10,42)) */
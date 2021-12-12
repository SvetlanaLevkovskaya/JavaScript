// 4. Строки - примитивный тип данных. В строке большое количество методов
//const name = 'Svetlana'
//console.log(typeof name)

//const name = 'Svetlana'
//const age = 42
//const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age // не очень хороший вариант - много плюсов переменных
//console.log(output)


//const name = 'Svetlana'
//const age = 42
//const output = `Привет, меня зовут ${name} и мой возраст ${age}` // используем обратные кавычки + динамические выражение  
//console.log(output)


/*  function getAge () {
    return age
} 
const output = `Привет, меня зовут ${name} и мой возраст ${getAge()` //
console.log(output) */

//${} = в скобрах можно указывать переменную, функцию ${getAge()}, тернарные выражения ${age>20 ? 'A' : 'B' }


//const name = 'Svetlana'
//const age = 42
//const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A':'B'} лет.`  
//console.log(output)


/* const output = `
   <div>This is div</div> 
   <p>this is o</p>
`
console.log(output) */


//const name = 'Svetlana'
//console.log(name.length) // посмотреть количество символов в строчке // 8
//console.log(name.toUpperCase()) // привести все символы строки к верхнему регистру // SVETLANA
//console.log(name.toLowerCase()) // привести все символы строки к нижнему регистру // svetlana
//console.log(name.charAt(2)) // какой символ находится на 2ой позиции // е
//console.log(name.indexOf('lan'))// присутствует ли в строчке комбинация lan // начиная с 4го символа
//console.log(name.indexOf('a'))// присутствует ли в строчке а // получаем 5 
//console.log(name.indexOf('!')) // если укажим что-то, что не присутствует, то получим -1

//console.log(name.startsWith('svet')) // стартует ли строка с svet // false
//console.log(name.startsWith('Svet')) // стартует ли строка с Svet // true
//console.log(name.toLowerCase().startsWith('svet')) // привести с нижнему регистру+проверить начинается ли она с svet // true
//console.log(name.endsWith('ana')) // заканчивается ли строка символами ana // true
//console.log(name.endsWith('!')) // восклицательный знак отсутствует // false 

//console.log(name.repeat(3)) // повторить трижды

/* const string = '       password'
console.log(string) // символ пробела также включается
console.log(string.trimLeft()) // очищает все пробелы слева
console.log(string.trimRight()) // очищает все пробелы справа */

/* function logPerson (s, name, age) { // называть параметры можно как угодно
   console.log(s, name, age)
    return 'Info about person'
}

const personName = 'Svetlana'
const personAge = 42
const output = logPerson `Имя: ${personName}, возраст: ${personAge}!`
console.log(output) */



/* function logPerson (s, name, age) {
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Svetlana'
const personAge = 42
const output = logPerson `Имя: ${personName}, возраст: ${personAge}!` */
//console.log(output)


/* function logPerson (s, name, age) {
    if (age <0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}` 
} */

/* const personName = 'Svetlana'
const personName2 = 'Max'
const personAge = 42
const personAge2 = -42
const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2) */
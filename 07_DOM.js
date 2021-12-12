//9. DOM   - работа с браузерным API - поиск элеметов

//node = tag = узел

// document - глобальный объект
// window - глобальный объект

/* alert (1)
window.alert(1) */

/* prompt ('как тебя зовут')
window.prompt ('как тебя зовут') */

/* const heading = document.getElementById('hello')
/* console.log(heading) */

/* const heading = document.getElementById('hello')
console.dir(heading)                                        // dir - раскрывает объект */

/* const heading = document.getElementById('hello')
console.dir(heading.id)  */

/* const heading = document.getElementById('hello')
console.dir(heading.textContent) 
setTimeout(() => {
    heading.textContent = 'Chanched from JS'                       // программно изменили hezding
    heading.style.color = 'red'
    heading.style.textAlign = 'center'
    heading.style.backgroundColor = 'black'
    heading.style.padding = '2rem'
}, 1500) */


//const heading = document.getElementById('hello')
/* setTimeout(() => {
    addStylesTo(heading)
}, 1500)
function addStylesTo (node) {
    node.textContent = 'Chanched from JS'                       // программно изменили hezding
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
} */


/* const heading2 = document.getElementsByTagName('h2')[0]
console.log(heading2)
setTimeout(() => {
    addStylesTo(heading2)
}, 1500)
function addStylesTo (node) {
    node.textContent = 'Chanched from JS'                       // программно изменили hezding
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
}
 */

/* const heading2 = document.getElementsByClassName('h2-class')
console.log(heading2)
setTimeout(() => {
    addStylesTo(heading2)
}, 1500)
function addStylesTo (node) {
    node.textContent = 'Chanched from JS'                       // программно изменили hezding
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
} */


/* const heading2 = document.querySelector('h2')
console.log(heading2)
setTimeout(() => {
    addStylesTo(heading2)
}, 1500)
function addStylesTo (node) {
    node.textContent = 'Chanched from JS'                       // программно изменили hezding
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'

 */


/* const heading2 = document.querySelector('.h2-class')
console.log(heading2)
setTimeout(() => {
    addStylesTo(heading2)
}, 1500)
function addStylesTo (node) {
    node.textContent = 'Chanched from JS'                       // программно изменили hezding
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
} */



/* const heading2 = document.querySelector('#sub-hello')         //необходимо использовать querySelector для поиска элемента, выдает первый найденный элемент
console.log(heading2)
setTimeout(() => {
    addStylesTo(heading2)
}, 1500)
function addStylesTo (node) {
    node.textContent = 'Chanched from JS'                       // программно изменили hezding
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
}
 */

/* const heading = document.getElementById('hello')
const heading2 = document.querySelector('h2')         //необходимо использовать querySelector для поиска элемента, выдает первый найденный элемент
//console.dir(heading2)
//const heading3 = heading2.nextElementSibling
//console.log(heading3)
const h2list = document.querySelectorAll('h2')
console.log(h2list)
const heading3 = h2list[h2list.length -1]
console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'JS')
}, 1500)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on element', event)
})


setTimeout(() => {
    addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
}, 4000)

function addStylesTo (node, text, color = 'red', fontSize) {
    node.textContent = text                       // программно изменили hezding
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    //falsy = '', unrefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
} */

/* heading.onclick = () => {
    console.log('click')
} */


/* heading.onclick = () => {
    if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.backgroundColor = '#fff'
    } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
        } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
        }

})
 */


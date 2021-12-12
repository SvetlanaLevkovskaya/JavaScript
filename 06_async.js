// 8. Асинхронность

// Event loop

/* const timeOut = setTimeout(() => {
    console.log('After timeout')
}, 2500)
clearTimeout(timeOut)*/

/* const interval = setInterval(() => {
    console.log('After timeout')
}, 1000)
clearInterval(interval) */

/* const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay(() =>{
    console.log('After 2 sec')
}, 2000)
 */

/*  const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}


delay(2500)
    .then( () => {
        console.log('After 2 sec')
    })
    .catch( err => console.error(err))
    .finally( () => console.log('Finally'))

    const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
} */



/* const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}

delay(2500)
    .then( () => {
        console.log('After 2 sec')
    })
    .catch( err => console.error(err))
    .finally( () => console.log('Finally')) */


    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*     const delay = (wait = 1000) => {                                      // передача call-backов
        const promise = new Promise( (resolve, reject) => {
            setTimeout(() => {
                reject('Что-то пошло не так')
            }, wait)
        })
        return promise
    }
    
    delay(2500)
        .then( () => {
            console.log('After 2 sec')
        })
        .catch( err => console.error('Error:', err))
        .finally( () => console.log('Finally')) */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject('Что-то пошло не так')
        }, wait)
    })
    return promise
}

delay(2500)
    .then( () => {
        console.log('After 2 sec')
    })
    .catch( err => console.error('Error:', err))
    .finally( () => console.log('Finally'))

const getData = () => new Promise(resolve => resolve ([
    1, 1, 2, 3, 5, 8, 13
]))

getData().then(data => console.log(data)) */

//++++++++++++++++++++++++++++++++++++++++++++++

/* const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}

const getData = () => new Promise(resolve => resolve ([
    1, 1, 2, 3, 5, 8, 13
]))


async function asyncExample() {
    await delay(3000)
    const data = await getData()
    console.log('Data', data)
}
asyncExample()
 */


//++++++++++++++++++++++++++++++++++++++++++++++

/* const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject('Что-то пошло не так(')
        }, wait)
    })
    return promise
}

const getData = () => new Promise(resolve => resolve ([
    1, 1, 2, 3, 5, 8, 13
]))


async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)

    } catch (e) {
        console.log(e)
    }
    finally {
        console.log('Finally')
    }
}
asyncExample() */
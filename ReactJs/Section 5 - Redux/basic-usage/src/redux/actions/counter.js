const increment = () => {
    return { type: 'INCREMENT' }
}

const decrement = () => {
    return { type: 'DECREMENT' }
}

const add = () => {
    return { type: 'ADD', value: 5 }
}

const subtract = () => {
    return { type: 'SUBTRACT', value: 5 }
}

export {
    increment,
    decrement,
    add,
    subtract
}
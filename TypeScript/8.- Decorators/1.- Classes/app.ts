// A decorator is basically a function that we create, a decorator attached to a class will
// always get one argument from TypeScript, that is the constructor of the class.

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log('Hi!');
    }
}
// If we want to customize how a decorator is applied to a declaration, we can write
// a decorator factory. A Decorator Factory is simply a function that returns the
// expression that will be called by the decorator at runtime.

function logging(value: boolean) { // this is the decorator factory.
    return function logged(constructorFn: Function) { // this is the decorator.
        if(value) {
            console.log(constructorFn);
        }
    }
}

@logging(true)
class Car {
    
}
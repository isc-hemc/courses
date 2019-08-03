type myFunction = (a: number, b: number) => number;

const traditional: myFunction = function(a: number = 0, b: number = 0) {
    return a + b;
};

const arrow: myFunction = (a: number = 0, b: number = 0) => a + b;

console.log(traditional(10, 12));
console.log(arrow(10, 14));
namespace MyMath {
    // This constant is only contained in the namespace scope and not in the global scope,
    // so we can't access it from outside.
    const PI = Math.PI;

    export function getCircumference(diameter: number): number {
        return diameter * PI;
    }

    export function sum(...values: number[]):  number {
        return values.reduce((a: number, b: number): number => a + b);
    }
}

console.log(`The sum of '1, 2, 3, 4' is: ${MyMath.sum(1,2,3,4)}`);
console.log(`The circumference of a circle with diameter 3 is: ${MyMath.getCircumference(3)}`);
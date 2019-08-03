// Destructuring an array: The position of the variables must match with
// the position of the array element.
const myArray: any[] = ['David', 'Martinez', 24];
let [myName, myLastname, myAge] = myArray;

console.log(`My name is: ${myName}.`);
console.log(`My lastname is: ${myLastname}.`);
console.log(`My age is: ${myAge}.`);

// Destructuring an object: The variable names must match with the object keys.
type myType = { hasHobbies: boolean, hasPets: boolean };
const myObject: myType = { 
    hasHobbies: true,
    hasPets: true
};
let { hasHobbies, hasPets } = myObject;

console.log(`Has hobbies? ${hasHobbies}.`);
console.log(`Has pets? ${hasPets}.`);
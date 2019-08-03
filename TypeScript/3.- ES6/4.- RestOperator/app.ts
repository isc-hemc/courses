/*
 * This operator allows us to work with an array of data.
 */

type myType = (...args: number[]) => number[];

// If we pass a list of number, with the rest operator we can create that list
// into an array.
const createArray: myType = (...args: number[]) => args;

console.log(createArray(1, 2, 3, 4));
/*
 * This operator allows us to work with lists of data.
 */


// First, lets create an array of numbers.
const myArray: number[] = [22, 24, 51, 52, 17, 18];

// Second, lets try to calculate the max in that array, but there is an issue,
// Math.max works with a list of numbers, i.e., Math.max(1,2,3,4) so, we use
// the spread operator to pass an array to a list of elements by spreating the
// array into single values.
const myArrayMax: number = Math.max(...myArray);
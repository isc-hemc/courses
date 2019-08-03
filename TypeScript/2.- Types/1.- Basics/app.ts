/* 
 * The interesing part of TypeScript is that has static types and not dynamic types as JavaScript,
 * so for example, if we assign a variable let name = 'David' we can't then re-assign another value
 * that doesn't is a 'String' and so on.
 */

// Assigning types explicity.
let myName: string = 'David';
let myAge: number = 24;
let hasHobbies: boolean = true;

// Type 'Any': can be any type.
let myBirthYear: any;
myBirthYear = 1995;
myBirthYear = '1995';

// Arrays.
let myHobbies: string[] = ['Develop', 'Music']

// Tuples.
let myAddress: [string, number] = ['Canada', 10];

// Enums: Are used to encode numbers into user-friendly values that can be use during coding.
enum Numbers {
    Zero = 0,
    Ten = 10,
    Eleven
}
let myNumber: Numbers = Numbers.Eleven

console.log('My name is: ', myName);
console.log('My age is: ', myAge);
console.log('Has hobbies: ', hasHobbies);
console.log('My birth year: ', myBirthYear);
console.log('My hobbies: ', myHobbies[0], myHobbies[1]);
console.log('My address: ', myAddress[0], myAddress[1]);
console.log('My number: ', myNumber);

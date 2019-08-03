"use strict";
/*
 * The interesing part of TypeScript is that has static types and not dynamic types as JavaScript,
 * so for example, if we assign a variable let name = 'David' we can't then re-assign another value
 * that doesn't is a 'String' and so on.
 */
// Assigning types explicity.
var myName = 'David';
var myAge = 24;
var hasHobbies = true;
// Type 'Any': can be any type.
var myBirthYear;
myBirthYear = 1995;
myBirthYear = '1995';
// Arrays.
var myHobbies = ['Develop', 'Music'];
// Tuples.
var myAddress = ['Canada', 10];
// Enums: Are used to encode numbers into user-friendly values that can be use during coding.
var Numbers;
(function (Numbers) {
    Numbers[Numbers["Zero"] = 0] = "Zero";
    Numbers[Numbers["Ten"] = 10] = "Ten";
    Numbers[Numbers["Eleven"] = 11] = "Eleven";
})(Numbers || (Numbers = {}));
var myNumber = Numbers.Eleven;
console.log('My name is: ', myName);
console.log('My age is: ', myAge);
console.log('Has hobbies: ', hasHobbies);
console.log('My birth year: ', myBirthYear);
console.log('My hobbies: ', myHobbies[0], myHobbies[1]);
console.log('My address: ', myAddress[0], myAddress[1]);
console.log('My number: ', myNumber);

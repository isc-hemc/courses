"use strict";
// Return type.
function getMyName() {
    var myName = 'David';
    return myName;
}
// Argument type.
function sayMyAge(age) {
    console.log('My age is: ', age);
}
var myName = getMyName();
console.log('My name is: ', myName);
sayMyAge(24);

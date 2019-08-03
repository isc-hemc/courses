// Return type.
function getMyName(): string {
    let myName: string = 'David';
    return myName;
}

// Argument type.
function sayMyAge(age: number): void {
    console.log('My age is: ', age);
}

let myName: string = getMyName();
console.log('My name is: ', myName);
sayMyAge(24);
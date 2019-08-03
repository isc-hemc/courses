/*
 * Let: Creates a block scoped variable, which means that it's contained in the
 * block where you define this variables insted of var, var creates a global scoped
 * variable which means that sits on the global scope. 
 */

/*
 * Const: Creates a constant, this means that once you assign a value to that constant
 * you can never reassing it, (Used when you know a value never is going to change).
 */


/*
 * Block Scope means that the variable only exist in the scope in which is created.
 * A scope is delimited by {}.
 */
let myVariable: string = 'Non scoped value';
const myFunction: () => void = function blockScope() {
    let myVariable: string = 'Scoped value';
    console.log(myVariable);
};

myFunction();
console.log(myVariable);
// Generic function: We can create a generic function by adding the lower than and
// greater than signs and a character of our choice, for example T.

function echo<T>(data: T) {
    return data;
}

console.log(echo<string>('David'));
console.log(echo<number>(24));
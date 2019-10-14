const isPalidrome = str => {
    str = str.toLowerCase().replace(/\s/g, '');
    let len = str.length;
    return str.split('').every((char, i) => {
        return char === str[len - i - 1];
    });
}

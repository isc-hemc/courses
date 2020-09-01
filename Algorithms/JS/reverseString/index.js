export function iterative(str) {
  let newString = '';
  for (let char of str) {
    newString = `${char}${newString}`;
  }
  return newString;
}

export function recursion(str, index) {
  if((index - 1) == 0) {
    return str[index - 1];
  }
  return str[index - 1] + recursion(str, index - 1);
}

export function functional(str) {
  return str.split('').reduce((res, char) => `${char}${res}`, '');
}


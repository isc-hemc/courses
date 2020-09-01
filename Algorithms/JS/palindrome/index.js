import { recursion as reverse } from '../reverseString/index.js';

export function isPalindrome(str) {
  const formatted = str.toLowerCase().replace(/\s/g, '');
  return formatted === reverse(formatted, formatted.length);
}

import { isPalindrome } from './index.js';

// Validate if functions exists
test('isPalindrome function exists', () => {
  expect(isPalindrome).toBeDefined();
});

// Test functionallity
test('Is palindrome', () => {
  const str = 'No lemon, no melon';
  expect(isPalindrome(str)).toEqual(true);
});

test('Is not palindrome', () => {
  const str = 'Palindrome is not a Palindrome';
  expect(isPalindrome(str)).toEqual(false);
});

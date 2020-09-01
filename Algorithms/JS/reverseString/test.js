import { iterative, recursion, functional } from './index.js';

// Validate if functions exists
test('Reverse iterative function exists', () => {
  expect(iterative).toBeDefined();
});

test('Reverse recursion function exists', () => {
  expect(recursion).toBeDefined();
});

test('Reverse functional function exists', () => {
  expect(functional).toBeDefined();
});

// Test functionallity
test('Reverse iterative success', () => {
  const str = 'Hello, world!';
  expect(iterative(str)).toEqual('!dlrow ,olleH');
});

test('Reverse recursion success', () => {
  const str = 'Hello, world!';
  expect(recursion(str, str.length)).toEqual('!dlrow ,olleH');
});

test('Reverse functional success', () => {
  const str = 'Hello, world!';
  expect(functional(str)).toEqual('!dlrow ,olleH');
});
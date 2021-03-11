module.exports = {
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    'no-console': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'prefer-template': 2,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};

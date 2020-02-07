# App Template

React template that uses TypeScript and comes with an ESLint and Prettier configuration to develop beautiful code.

## Contents

- [Dependencies](#dependencies)
- [Run](#run)
- [Appendices](#Appendices)
- [Authors](#Authors)

---

## Dependencies

![React +16.10](https://img.shields.io/badge/React-+16.10-blue.svg)
![TypeScript +3.6](https://img.shields.io/badge/TypeScript-+3.6-lightgrey.svg)

---

## Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.

---

## Appendices

### Appendix A - ESLint and Prettier

ESLint and Prettier should be a default configuration for developing clean, understandable and beautiful code, below it's a short description of how to make work ESLint and Prettier.

### Prettier

To add code formatting **prettier** is a good option:

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

- **prettier**: the core prettier library.
- **eslint-config-prettier**: disables ESLint rules that might conflict with prettier.
- **eslint-plugin-prettier**: runs prettier as an ESLint rule.

In order to configure _prettier_ a _.prettierrc.js_ file is required at the root project directory:

```js
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
};
```

### ESLint

For linting TypeScript code we need to install the following development dependencies (there are already installed, take this description as little tutorial):

```bash
npm install --save-dev eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- **eslint**: the core ESLint linting library.
- **eslint-plugin-react**: rules for linting React.
- **@typescript-eslint/parser**: the parser that will allow ESLint to lint TypeScript code.
- **@typescript-eslint/eslint-plugin**: a plugin that contains a bunch of ESLint rules that are TypeScript specific.

In order to configure _eslint_ an _.eslintrc.js_ file is required at the root project directory with the following configuration (includes _prettier_):

```js
module.exports = {
  // Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin.
    'plugin:react/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from
    // @typescript-eslint/eslint-plugin that would conflict with prettier.
    'plugin:@typescript-eslint/recommended',
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint
    // errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features.
    ecmaVersion: 2018,
    // Allows for the use of imports.
    sourceType: 'module',
    ecmaFeatures: {
      // Allows for the parsing of JSX.
      jsx: true,
    },
  },
  rules: {
    // This rule checks all import declarations and verifies that all imports are
    // first sorted by the used member syntax and then alphabetically by the first
    // member or alias name, for more info https://eslint.org/docs/rules/sort-imports.
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'single', 'multiple', 'all'],
      },
    ],
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React.
      version: 'detect',
    },
  },
};
```

### Appendix B - Automatically Fixing Code

For a good developer experience, it's useful to setup your editor to automatically run ESLint's automatic fix command (i.e. eslint --fix) whenever a file is saved. Since i'm using VSCode, here is the config required in the _settings.json_ file in VSCode to get automatic fixing whenever saving a file:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

If you want that your files format on save then add the following configuration to the _settings.json_ file:

```json
"editor.formatOnSave": true,
"[javascript]": {
    "editor.formatOnSave": false,
},
"[javascriptreact]": {
    "editor.formatOnSave": false,
},
"[typescript]": {
    "editor.formatOnSave": false,
},
"[typescriptreact]": {
    "editor.formatOnSave": false,
}
```

And that's it, Happy Hacking!

---

## Authors

**\*David Martinez** - [Davestring](https://github.com/Davestring)

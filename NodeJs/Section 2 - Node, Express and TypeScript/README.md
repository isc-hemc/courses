# Section 2: Node, Express and TypeScript

This module will describe step by step how to create and set up a project that aims to be used as an API Server with **Node.js**, **Express.js** and **TypeScript**.

## Setting Up

First step: install globally TypeScript and TypeScript-Node:

```bash
npm install -g typescript ts-node
```

Second step: put the project under **npm's** controll:

```bash
npm init
```

Third step: install the dependencies needed:

```bash
npm install --save @types/express express body-parser nodemon
```

Fourth step: setup the TypeScript configuration file:

```bash
tsc --init
```

Fifth step: search and uncomment the following key pairs in the *tsconfig.json* file, you can use the configuration you want but this ones are needed:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "moduleResolution": "node",
    "baseUrl": "./src",
    "esModuleInterop": true
  },
  "include": [
      "src/**/*.ts"
  ],
  "exclude": [
      "node_modules"
  ]
}
```

Sixth step: in *package.json* set the following scripts:

```json
{
    "scripts": {
        "build": "tsc",
        "start": "nodemon ./dist/run.js",
        "dev": "ts-node ./src/run.ts",
        "prod": "npm run build && npm run start"
    }
}
```

Now, with **run.ts** as entrypoint and **app.ts** as our server configuration that you can find in **./src** we are ready to go:

> For development

```bash
npm run dev
```

> For production

```bash
npm run prod
```

## Authors

***David Martinez** - [Davestring](https://github.com/Davestring).

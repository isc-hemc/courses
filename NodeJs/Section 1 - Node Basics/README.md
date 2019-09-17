# Section 1: Node Basics

In this module is a simple application that meants to cover the basic concepts about how does Node.js works. Understanding that Node.js uses one single thread and to handle multiple requests there is something called **Event Loop** which is responsible of handling *Event Callbacks* and for operations that may take a lot of time there's the **Worker Pool** it's important for developing Node.js applications.

## Event Loop

This loop is aware of all the callbacks of the application and Node.js starts it for us when the application is running.

## Worker Pool

This pool is managed by Node.js, this is responsable for all the heavy lifting and is kind of totally detached from all your JavaScript code and it runs on different threads. When a worker finishes its job, triggers a callback to the Event Loop which Node.js will properly execute latter.

## Run

First, let's put this module under **npm's** control:

```bash
npm init
```

Then, install *nodemon* for development purposes:

```bash
npm install nodemon --save-dev
```

Add the following to *package.json* file:

```json
"scripts": {
    "start": "nodemon app.js",
}
```

Finally:

```bash
npm start
```

## Authors

***David Martinez** - [Davestring](https://github.com/Davestring).

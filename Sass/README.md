# Sass

Sass is a CSS pre-processor, an extension of CSS that adds power and elegance to the basic language. Sass give us some powerful features like:

* **Variables**: for reusable values such as colors, font-sizes, spacing, etc.
* **Nesting**: to nest selectors inside of one another, allowing us to write less code.
* **Operators**: for mathematical operations right inside of CSS.
* **Partials and Imports**: to write CSS in different files and importing them all into one single file.
* **Mixins**: to write reusable pieces of CSS code.
* **Functions**: similar to mixins with the difference that they produce a value that can be uses.
* **Extends**: to make different selectors inherit declarations that are common to all of them.
* **Control directives**: for write complex code using conditionals and loops.

## Content

- [Dependencies](#dependencies)
- [Overview](#Overview)
- [Installation](#installation)
- [Compilation](#compilation)
- [Projects](#projects)
- [Notes](#notes)
- [Authors](#authors)

## Dependencies

![Sass +3.7](https://img.shields.io/badge/Sass-+3.7-pink.svg)
![Node +12.16.1](https://img.shields.io/badge/Node-+12.16.1-yellow.svg)

## Overview

### Variables

In Sass we can create variables to store values that will be reusable in multiple parts of our code:

```scss
$color-primary: #b8395e;
```

Variables must start with a dolar sign, then the variable name and finally the value.

### Nesting

Sass give us a very fancy way of doing nesting, for example, in normal CSS we do this to apply styles on nested selectors:

```css
.element .nested-element {}
```

In Sass we replace the code above for this one:

```scss
.element {
    .nested-element {}
}
```

**The Sass Ampersand** comes in handy when you’re nesting and you want to create a more specific selector, this helps to write the path up until the specific selector, for example:

```scss
.parent {
    .child {}
    .child:hover {} 
}
```

With **The Sass Ampersand** we replace the code above with this one:

```scss
.parent {
    .child {
        &:hover {}
    }
}
```

That gives us the following CSS result:

```css
.parent .child {}
.parent .child:hover {} 
```

In other words, **The Sass Ampersand** value at the point when it was used was `.parent .child`.

### Mixins 

**Mixins** are reusable pieces of code, imagine it like a variable with multiple lines of code.

> This is how we declare a mixin in Sass:
```scss
@mixin clearfix {
    &::after {
        clear: both;
        content: "";
        display: table;
    }
}
```

> To use it, we use the `@include` statement inside a selector:
```scss
@include clearfix;
```

In mixins we can pass arguments, for example a color:

```scss
$color-primary: #b8395e;

@mixin custom-color($color) {
    color: $color;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
}

.example {
    @include custom-color($color-primary);
}
```

### Functions

Functions are basically mixins but with one great difference, functions return a value, **Sass** has built-in functions like *darken*, but we can build our own functions, for example:

```scss
@function dynamic-margin($a, $b, $unit) {
    @return ($a / $b) * $unit;
}

.example {
    margin: dynamic-margin(60, 20, 1px);
}
```

### Extends

Basically we can write a placeholder with a bunch of styles and have other selector that will extend from that placeholder, for example:

```scss
%btn-placeholder {
    border-radius: 100px;
    display: inline-block;
    padding: 10px;
    text-align: center;
}

.btn-main {
    $:link {
        @extend %btn-placeholder;
    }
}
```

The difference between mixins and extend is that **mixins inserts code in our selectors while extends will copy the selector into our placeholder, in other words, it does the other way around**.

## Installation

Assuming we have `NPM` or `Yarn` and `Node` installed in our machine we run the following commands.

> Using Yarn:
```bash
yarn init
```

> Install dependencies, the `E` flag is for exact version and `D` flag for dev-dependency:
```bash
yarn add -E -D node-sass
```

## Compilation

To compile Sass to CSS we use a script specified in our package.json:

```json
"scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css"
}
```

> To run:
```bash
yarn compile:sass
```

To reload browser on change we install live-server:

```bash
yarn add -E live-server
```

## Projects

This "repository" has 3 example projects built with Sass:

* Natours: Advanced CSS and Sass with Float Layout
* Trillo: Master Flexbox
* Nexter: Master CSS Grid

Designed and implemented by [Jonas Schmedtmann](https://github.com/jonasschmedtmann) for his Udemy Course [Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass/).

## Notes

### CSS

* float and clearfix: when you float an element it losses all of its properties including the *height*, so, in order to fix this problem we use a *clearfix* class, that will add a pseudo-element in the collapsed element.

```css
.clearfix::after {
    clear: both;
    content: "";
    display: table;
}
```

### Selectors

 * \> (direct child selector).
 * \* (universal selector).

### Pseudo-Classes

* first-child: apply styles only to the first nested child element.
* last-child: apply styles only to the last nested child element.
* link: represents a non-visited element.

## Authors

***David Martínez** - [Davestring](https://github.com/Davestring)
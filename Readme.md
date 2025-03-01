# Typescript Notes:

Difference between Typescript and Javascript:

## 1. Definition:

#### JavaScript (JS): #### 
Dynamic, interpreted programming language that powers the web.

#### TypeScript (TS): #### 
It is a Super set of JavaScript, that adds static typing and some extra features. It compiles down to plain JavaScript so it can run anywhere.

## 2. Typing:

#### Javascript: ####

Dynamically typed. No need to declare variable types, and they can change at runtime. This flexibility can lead to bugs if you’re not careful.

```javascript
let x = 5;
x = "Hello";
```

#### Typescript: ####

Statically typed (optional). You can specify types, and the compiler checks them before runtime, catching errors early.

``` typescript 
let x: number = 5;
x = "Hello"; 
```

## 3. Syntax and Features:

#### Javascript: ####

Follows ECMAScript standards (e.g., ES6, ES7). Features like classes, arrow functions, and modules are available, but it doesn’t have built-in type definitions or advanced constructs like interfaces.

```javascript
function add(a, b) {
    return a + b; 
}
console.log(add(5, "10")); 
```

#### Typescript: ####

Adds extra syntax like interfaces, enums, generics, and type annotations on top of JS. Everything valid in JS is valid in TS, but TS enhances it.

```typescript
function add(a: number, b: number): number {
    return a + b; // Type-safe
}
console.log(add(5, "10")); 
```


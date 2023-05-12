---
title: ES6 101 - const and let statements 
date: "2019-08-19T22:12:03.284Z"
description: "How and when to use the const and let statements"
---

ES2015 introduces two new variable statements for use in JavaScript applications: `const` and `let`. 

## const 

The `const` statement is used to declare **constant** bindings in a program, that is, a variable with a value that does not change

`const` declarations must be initialized; you cannot simply declare a `const`, it must be assigned a value on creation.

`const` declarations are affected by the [`temporal dead zone`](../temporal-dead-zone)

### **Scope**

`const` declarations can either be scoped globally, or local to its wrapping function or block.

### **Global Scope**

Constants can be declared in the global lexical environment;

```
const Dave = "David";
```

However they do not become members of the `window` object;

```
console.log(window.Dave); // undefined
```

### **Function Scope**

Any `const` declared in a function body are scoped to that function's lexical environment, and its descendant lexical environments;

```
function test() {
  const foo = "bar"
  console.log(foo);

  function test2() {
    console.log(foo);
  }

  test2();
}
test()

// bar
// bar
```

### **Block Scope**

Any `const` declared in a block are scoped to that particular block, and any child scopes;

```
{
  const Dave = "David";
}

console.log(Dave) Uncaught ReferenceError: Dave is not defined
```

Unlike `var` declarations, which do leak outside of blocks, `const` declarations are bound to the wrapping function lexical environment, or if there is no wrapping function, the global lexical environment;

```
{
  var Dave = "David";
}

console.log(Dave) // David

function test() {
  {
    var foo = "bar";
  }
  console.log(foo) // bar
}
console.log(foo) // Uncaught ReferenceError: foo is not defined
```

This provides a convenient way to shield bindings from the global scope, preventing global object pollution and potential binding collisions.

### **Reassignment and Redeclaration**

Constants cannot be reassigned or redeclared.

### **Reassignment**

```
const name = "David";

name = "David Jones"; // Uncaught TypeError: Assignment to constant variable.
```

### **Redeclaration**

```
const name = "David";

const name = "David Jones"; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

### **Mutations**

Constants cannot be reassigned or redeclared, however if they are initialized with a composite value, the contents of the composite, e.g. an array or object, can be mutated.

### **Objects**

The object can be modified in all the usual ways;

Modify property values

```
const testObj = {
  name: "David"
}

console.log(testObj.name) // David

testObj.name = "David Jones";

console.log(testObj.name) // David Jones
```

Add new members

```
testObj.age = 32;
console.log(testObj.age) // 32

```

Remove members

```

delete testObj.age;
console.log(testObj.age) // undefined

```

### **Arrays**

Arrays can be modified in all the usual ways;

```
const testArray = [1, 2, 3, 4]

console.log(testArray) // (4) [1, 2, 3, 4]

testArray.push(5);

console.log(testArray) // (5) [1, 2, 3, 4, 5]
```



## let
The `let` statement is used to declare local bindings in a program, and are mainly used when a binding will likely be initialized and/or reassigned at a later point in the program's lifecycle.

### **Reassignment and Redeclaration**

#### **Reassignment**

`let`s can be reassigned new values freely in a particular lexical environment;

```
let name = "David";
console.log(name); // David

name = "David Jones";
console.log(name); // David Jones
```

`let` declarations aren't required to be initialized upon declaration; a `let` binding can be created without a value.

```
let chosenPerson;
let people = ["David", "Dave", "Davy"];

chosenPerson = people.find(person => person.length > 4);

console.log(chosenPerson) // David
```

#### **Redeclaration**

`let`s cannot be declared more than once in a particular lexical environment;

```
let name = "David";
let name = "David Jones"; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

###### Shadowing

Bindings cannot be redeclared, but `let`s can be shadowed in nested/sibling blocks, i.e. you can declare a binding with the same identifier in nested/sibling blocks;

```
{
  let foo = "bar";
  {
    let foo = "baz";
    console.log(foo) // baz

    {
      let foo = "bazola";
      console.log(foo) // bazola
    }
  }

  {
    let foo = "quux";
    console.log(foo) // quux
  }
  console.log(foo) // bar
}
```

### **Scope**

`let` declarations can either be scoped globally, or local to its wrapping function or block.

#### **Global Scope**

`let`s can be declared in the global lexical environment;

```
let Dave = "David";
```

However they do not become members of the `window` object;

```
console.log(window.Dave); // undefined
```

#### **Function Scope**

Any `let` declared in a function body are scoped to that function's lexical environment, and its descendant lexical environments;

```
function test() {
  let foo = "bar"
  console.log(foo);

  function test2() {
    console.log(foo);

  }

  test2();
}
test()

// bar
// bar
```

#### **Block Scope**

Any `let` declared in a block are scope to that particular block;

```
{
  let Dave = "David";
}

console.log(Dave) Uncaught ReferenceError: Dave is not defined
```

This provides a convenient way to create privacy in our programs by using `let` bindings, opposed to running an `IIFE` to shield the program bindings from the global lexical environment.

#### Differences to `var`

When declared in the global lexical environment `let` statements will not be attached to the global object, whereas `var`s do become a member of the global object.

```
let foo = "bar";
console.log(window.foo); // undefined

var bar = "foo";
console.log(window.bar); // foo
```

`var` bindings can be accessed outside of their wrapping block`{}`, `let`s are scoped to the block, and any child blocks/functions.

```
function foo() {

  {
    let baz = "bar";
    var bar = "foo";
  }
  console.log(bar);
  console.log(baz);

}
foo();
// foo
// Uncaught ReferenceError: baz is not defined
```

This behaviour is useful when dealing with `for` loops;

When using `var` the tracking variable is leaked into the parent lexical environment; `var`s are not scoped to the block.

```
for(var i = 0 i < 10; i++) {
  // ...do sumfink
}
console.log(i); // 10
```

`let`s are block scoped, and the tracking variable does not leak into the parent lexical environment.

```
for(let k = 0; k < 10; k++) {
  // ...do sumfink
}
console.log(k); // Uncaught ReferenceError: k is not defined
```

A benefit of using `let` in a `for` loop is that the tracking variable is reassigned with every iteration; the binding does not leak into the parent scope.

Using `var` in a loop when performing an async action;

```
for(var i = 0; i < 10; i++) {
  // mimic async
  setTimeout(() => {
    console.log("iteration: ", i);
  } , 1000)
}
// iteration:  10 (x10)
```

The log prints `10` ten times, which is a result of the variable leaking into the parent scope; the tracker(`i`) is not re-initialized on each iteration, instead the loop is simply updating a static binding in the parent scope; the loop has finished iterating by the time the timeout performs the log, and the value of the tracker is always `10` as a result.

If the idea is to use the current iteration number to do a particular thing, once the timeout is complete, there are a couple of ways to 'fix' this;

**1. Stick with `var`, use an `IIFE`**

```
for(var i = 0; i < 10; i++) {
  (function(i) {
    // mimic async
    setTimeout(() => {
      console.log("iteration: ", i);
    } , 1000)
  })(i)
}

// iteration: 0
...
// iteration: 9
```

The `IIFE` takes the tracker binding as a parameter, thus capturing the current iteration number for each iteration, allowing the timeout to print the expected value.

**2. Use `let` instead of `var`**

```
for(let i = 0; i < 10; i++) {
  // mimic async
  setTimeout(() => {
    console.log("iteration: ", i);
  } , 1000)
}
// iteration: 0
...
// iteration: 9
```

The tracker(`i`) is reassigned with each iteration, thus the value printed in after the timeout is always that of the current iteration.


#### **Semantics**

`const` and `let` possess intrinsic semantic value when authoring applications; they provide clarity on what is likely to happen/not happen with the variable declarations, and the values inside of them;

```
const foo = "bar"
```

`foo` has a value which will not change later in the application's lifecycle.

```
let bar
```

`bar` does not yet hold a value, but will later in the application's lifecycle.

#### **Behaviour**

The semantics are backed-up by additional behaviour; `const` declarations cannot be reassigned, whereas `let` declarations signify the intent to reassign.


---

##### Does `var` have a future?

It depends on your stance, some use var for variables shared across many scopes, others simply don’t bother with it at all. I don’t use it, I don’t see a good reason to, but I’m not against it being used in a new build if it was made clear it was being utilized.


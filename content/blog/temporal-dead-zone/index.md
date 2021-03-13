---
title: ES6 101 - The Temporal Dead Zone
date: "2019-08-21T22:12:03.284Z"
description: "Getting to know the 'Temporal Dead Zone'..."
---

The TDZ is the 'space' between a reference to a particular `let` or `const` statement, and its actual declaration/initialization.

Any reference to a variable declared with `let` or `const` before it is initialised will result in a `referenceError`, take a look at the following:

```
console.log(bc);
/* ==========
* ===========
* === TDZ ===
* ===========
=========== */
let bc = "🦕 Dinosaurs 🦖";
```

This will throw an error:

```
Cannot access 'bc' before initialization
```

The `bc` variable is referenced before it is declared, which is not valid when using `const` or `let` statements; **the variable is in a `TDZ`**.

Prior to ES6 the above snippet would not result in an error; `var` statements are **hoisted** to the top of their respected lexical environments - the hoisted variables are essentially set with a starting value of `undefined` and for good or bad(bad) can be referenced before initialization, without throwing an error.

```
console.log(bc);
/* ==========
* ===========
* === TDZ ===
* ===========
=========== */
var bc = "🦕 Dinosaurs 🦖";
// undefined
```

**No error, here.**


### Let, Const and Hoisting

The above snippet, and many resources out there, suggest that `let` and `const` variables are not 'hoisted' to the top of their respective lexical environments, however this isn't entirely accurate in that both `let` and `const` are treated in the same way as `var` during the first pass of the program, the difference being how the engine deals with the early referencing of a binding.

> The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated. - ECMAScript Specification.

This paragraph does suggest that `let` and `const` are indeed 'hoisted':

> The variables are created when their containing Lexical Environment is instantiated...

but the engine prevents them from being accessed until the engine has evaluated the respective binding, i.e. the engine does not allow access to the variable until it performs a right-hand-side(execution) lookup on the variable.

> but may not be accessed in any way until the variable’s LexicalBinding is evaluated.

It is good to know that accessing a binding declared using let or const will now throw an error, and whether it is technically hoisted or not is academic.

The key take-away from the above is to make sure you **always declare your variables at the top of the respective scope**, no matter your statement flavor.
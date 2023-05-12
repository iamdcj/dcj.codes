---
title: ES6 101 - The Temporal Dead Zone
date: "2019-08-21T22:12:03.284Z"
description: "Getting to know the 'Temporal Dead Zone'..."
---

The Temporal Dead Zone(TDZ) might sound like a complex and scary thing, however, the main purpose of the temporal dead zone is to **defend against the referencing of variables before they've been declared** in the source code. 

```
{
	console.log(jj)
	===========
	===========
	=== TDZ ===
	===========
	===========
	let jj = "Okocha";
}
```

This snippet will produce a reference error...

```
Uncaught ReferenceError: Cannot access 'jj' before initialization
```

The `jj` variable is referenced before it is declared, which is not valid when using `const` or `let` statements; **the variable is in the temporal dead zone** - the space between the start of the scope and the variable declaration. It is the TDZ that prevents us from accessing the variable before the engine reaches the declaration the source code.

### Before `const` and `let`

Before ES6 all (local)variables were created using the `var` statement, and `var` bindings aren't subject to the TDZ, thus allowing variables to be referenced prior declaration.

```
console.log(youri);
===========
===========
===========
===========
===========
var youri = "Djorkaeff";
```

```
undefined
```

See, **no error**. This is a result of hoisting without the defensive mechanism of the temporal dead zone.


### What is hoisting again?

First off, the term 'hoisting' isn't something you're going to find in anywhere the ECMAScript spec, but hoisting is a conceptual process which results in variables in the source code being relocated to the top of their respective scope during the engine's first pass of the program. It is this process that allowed the variable in the above 👆 snippet to be accessed prior to it being declared and/or initialized, but this early access is pretty much always a mistake on the author's part, and is exclusive to variables declared using the `var` statement.

#### So, `let` and `const` don't hoist?

I've read a number of posts suggesting any binding declared with a `let` or `const` statement will hoist to the top of its respective scope, but this isn't the case; both `let` and `const` are treated in the same way as `var` during the engine's first pass of the code, the difference being `let` and `const` cannot be accessed before the engine reaches the actual declaration.

The following quotes are taken from the ECMAScript specification: 

> The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated.

The above paragraph does suggest that `let` and `const` variables are indeed 'hoisted' a la `var`.

> The variables are created when their containing Lexical Environment is instantiated

However, the engine prevents them from being accessed until the engine has evaluated the respective binding:

> but may not be accessed in any way until the variable’s LexicalBinding is evaluated

If you aren't convinced that `let` and `const` are indeed hoisted then pay mind to the error that was thrown in the first snippet:

```
Uncaught ReferenceError: Cannot access 'jj' before initialization
```

It's clear from the error message that the engine is fully aware of the `jj` binding, but because it has yet to reach the declaration in the code it throws an error. **This is the `TDZ` doing its thing...a good thing.**

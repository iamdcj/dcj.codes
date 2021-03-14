---
title: ES6 101 - The Temporal Dead Zone
date: "2019-08-21T22:12:03.284Z"
description: "Getting to know the 'Temporal Dead Zone'..."
---

The Temporal Dead Zone(TDZ) is the ‘space’ between the start of a particular block scope and a variable declaration declared with either the `let` or `const` statement.

```
{
	===========
	===========
	=== TDZ ===
	===========
	===========
	let jj = "Okocha";
}
```

Any reference to a variable declared with `let` or `const` before it is declared will result in a reference error.

```
{
	console.log(jj);
	===========
	===========
	=== TDZ ===
	===========
	===========
	let jj = "Okocha";
}
```

This will throw:

```
Uncaught ReferenceError: Cannot access 'jj' before initialization
```

The `jj` variable is referenced before it is declared, which is not valid when using `const` or `let` statements; **the variable is in a temporal dead zone**, preventing us from reaching it until we hit the actual declaration/initialization in the source code.

#### The old school

Before ES6 the only variable statement available to us was the `var` statement. If we replace the `let` statement in the above snippet with a `var` statement we won't be getting an error.

```
console.log(youri);
===========
===========
===========
===========
===========
var youri = "Djorkaeff";
```

See, **no error.**

```
undefined
```

The reason we don't get an error here is that `var` statements are '**hoisted**' to the top of their respected lexical environments and given a starting value of `undefined, which for good or bad(...bad) allows the binding to be referenced before its actual initialization in the source code.


### `let`, `const` and hoisting

The above snippet, as well as many resources out there, suggest that `let` and `const` variables are not 'hoisted', that is they aren't conceptually lifted to the top of their respective lexical environments, however, this isn't entirely accurate -- both `let` and `const` are treated in the same way as `var` during the engine's first pass of the code, the difference being `let` and `const` cannot be accessed before the engine reaches the actual declaration.

> The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated. - ECMAScript Specification.

This paragraph does suggest that `let` and `const` are indeed 'hoisted':

> The variables are created when their containing Lexical Environment is instantiated...

but the engine prevents them from being accessed until the engine has evaluated the respective binding, i.e. the engine does not allow access to the variable until it performs a right-hand-side(execution) lookup on the variable.

> but may not be accessed in any way until the variable’s LexicalBinding is evaluated.

If you aren't convinced then pay mind to the error that was thrown above 

```
Uncaught ReferenceError: Cannot access 'jj' before initialization
```

It's clear from the error message that the engine is fully aware of the `jj` binding, but because it has yet to reach the declaration in the code it throws an error. 

Rules are rules, and we should be glad that any attempt to access a binding before it was declarated will throw an error. 

Take the time to **declare your variables at the top of their respective scope**, or if you prefer to declare/initialize closer to the initial usage pay mind to the source order. 
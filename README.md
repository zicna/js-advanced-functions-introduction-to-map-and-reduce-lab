# JavaScript Advanced Functions: Introduction to Map and Reduce Lab

## Learning Goals

- Define `map`-like function
- Define `reduce`-like function

## Introduction

In this lab, we're going to practice building our own versions of the
collection-processing methods that do `map`-like and `reduce`-like work. In
coding these, we'll sense the non-DRY (Don't Repeat Yourself) quality of
writing `map`- and `reduce`-based functions and want a better way.

It's also a chance to know that if we ever go to a language that doesn't have
awesome collection-processing methods built-in, we could write a replacement
function easily.

For the next few lessons, we're only going to talk about collection-processing
in the context of `Array`s. Many of these ideas can be adapted to working with
`Object`s, though.

## Define `map`

As mentioned in the "Character of Collection Processing," we need to visit each
member of a collection. This is common to all collection-processing methods. In
the case of `map`, we're going to produce a _new_ `Array` after "transforming"
or applying "work" to each element. An example would be "multiply each number
in this `Array` by `-1`, returning a new `Array` of the input `Array`
"negative-ized."

> **Naming History** "Map" comes from mathematics where it means:
>
> 1. Taking an independent variable
> 2. Plugging it into an equation
> 3. Getting a result back
>
> Mathematicians would say you're **mapping** a value in the _domain_ to a
> value in the _range_.
>
> If this sounds vaguely familiar, you might have learned it in algebra when
> learning to graph on the Cartesian coordinate system.
>
> 1. Take a value on the _x_ axis
> 2. Plug it into a function like `y=mx + b`
> 3. Get a _y_ value
>
> Hopefully you're having an "Ah-hah!" moment from that and might be
> considering sending your algebra teachers a thank-you note.

## Define `reduce`

As mentioned in the "Character of Collection Processing," we need to visit
each member of a collection. This is common to all collection-processing
methods. In the case of `reduce`, we start with an initial value that we'll
call the "memo" or "aggregator." Then we do some "work" involving the element
and the `memo` and that work updates the `memo`.

This is complex language that describes something we do all the time: make a
running total. When we enter a grocery store, our `memo` is `0.00`. As we add
items to our cart, each item's value updates the running total (the `memo`)
thus changing it. Or imagine if someone "spells out" a word for you. Your
initial `memo` is an empty `String` of `""`, but as someone spells `["C",
"a", "t"]` you aggregate each letter to the `memo` and, at the end, its value
is `"Cat"`.

This updating an aggregator value and returning it at the end is the essence
of _reduce_.

The `reduce` function should be given a starting point as an argument.

> **Naming History** This idea of "reduce" comes from lots of places, but we
> like to think about it coming from the realm of cooking where we make a
> "reduction" by applying work (aka "heat") until what's left over is the thing
> we want.

## Lab

In this lab, we're going to write several `map`-like and `reduce`-like
methods and put them in `index.js`:

### `map`-like

- `mapToNegativize(sourceArray)`
- `mapToNoChange(sourceArray)`
- `mapToDouble(sourceArray)`
- `mapToSquare(sourceArray)`

Remember, all `map` methods return a new `Array`.

### `reduce`-like

- `reduceToTotal(sourceArray, startingPoint)`
- `reduceToAllTrue(sourceArray)`
- `reduceToAnyTrue(sourceArray)`

Remember, all `reduce` methods return a _value_.

Use the `learn` command to guide you until you get all the tests passing.

## Conclusion

In this lab, you've created your own implementation of methods that work like
two of the most powerful Enumerable methods: `map` and `reduce`. You've also
experienced some of the non-DRY code that this requires.

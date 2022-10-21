# Jevkalk

An experimental interpreter for a crazy little language called Jevkalk.

The language is similar in spirit to Lisps in that the written syntax mirrors abstract syntax, providing homoiconicity, and it is very minimal and flexible. Otherwise Jevkalk is peculiar and not compatible in any way with any Lisp or other language. It's an experiment to test some exciting (to me) programming language design ideas.

It is made for fun and to inspire other designers.

# Features

* Extremely minimal
* [Jevko](https://jevko.org)-based syntax, i.e. you program by writing jevkos
* Jevko is a native data type
* Evaluation order depends on the operation
* [Native identifiers with spaces!](#native-identifiers-with-spaces)

# Goals

* Extremely simple implementation -- easy to port, explain, hack on
* Explore original programming language design ideas
* Fun

# Examples

To better understand the examples, see [Explanation of syntax](#explanation-of-syntax) and [Operators](#operators).

## Fibonacci sequence

The following program:
* defines `fib` to be a one-argument function which computes the `n`-th Fibonacci number,
* computes the 10th Fibonacci number using `fib`

```clj
fib: fun [[n]
  ? [
    < [[n][2]] [n]
    + [
      fib [
        - [[n][1]]
      ]
      fib [
        - [[n][2]]
      ]
    ]
  ]
]

fib [10]
```

Note:

```clj
fib: fun [...]
```

is syntax sugar for:

```
let [[fib] fun [...]]
```

For now.

## Native identifiers with spaces

The following:

```
sum primes: fun [[[a][b]]
  accumulate [
    [+]
    [0]
    filter [
      [prime?]
      enumerate interval [[a][b]]
    ]
  ]
]
```

is a translation of this Scheme fragment:

```
(define (sum-primes a b)
  (accumulate +
              0
              (filter prime? (enumerate-interval a b))))
```

from [SICP 3.5.1](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/full-text/book/book-Z-H-24.html#%_sec_3.5.1), demonstrating identifiers with spaces.

Here `sum primes` and `enumerate interval` are two double-word identifiers.

# Explanation of syntax

An application of a procedure or a special form looks like this:

```
operator [...operands]
```

Where each operand has the same shape.

For example:

```
factorial [1]
```

Would apply `factorial` to `1`.

`operator` can be empty:

```
[5]
```

The [empty operator](#empty-operator) simply returns the value of its argument. In this case it's the number `5`.

Whether operands are evaluated at all, depends on the operator. For example:

```
+ [[a][b]]
```

Here we have the operator `+` called on 2 operands. `+` happens to evaluate its operands. In this case the operands are `[a]` and `[b]`. Both of these have empty operators. The empty operator called on an identifier returns the value assigned to that identifier. So if `a` and `b` were defined to be `1` and `2`, these values will be returned.

After evaluating its operands, `+` adds them together and returns the result. Which in this example would be `3`.

# Caveats

## Calling functions returned from functions

Suppose we have a function `make adder` which returns another (anonymous function) which takes in two numbers and returns their sum plus some secret number (unimportant).

We want to call it with `1` and `2` as arguments.

This would be written:

```
((make-adder) 1 2)
```

in an S-expression-based language.

In Jevkalk straight support for such a thing could look like:

```
make adder[][[1][2]]
```

However implementing this is unnecessarily complicated and it may seem a bit confusing to use.

Therefore it shall be implemented like this instead^[`ap` is a placeholder name, actual name TBD]:

```
ap [make adder[][[1][2]]]
```

i.e. the syntax is as above, but wrapped in `ap` to make it explicit what's going on as well as simple to implement (see [Goals](#goals)).

# Operators

## The empty operator

The empty operator evaluates its argument and returns the result.

The rules it uses for evaluation are as follows.

1. Whatever looks like a number evaluates to a number. E.g.:

```
[1]
```

evaluates to the number `1`.

2. Anything else is treated as an identifier. An identifier is evaluated by looking up its value in the current context and returning it. E.g. suppose we have defined `a` to be:

```
a: [5]
```

then evaluating:

```
[a]
```

will return `5`.
# Jevkalk

An experimental interpreter for a crazy little language called Jevkalk.

The language is similar in spirit to Lisps in that the written syntax mirrors abstract syntax, providing homoiconicity, and it is very minimal and flexible. Otherwise Jevkalk is peculiar and not compatible in any way with any Lisp or other language. It's an experiment to test some exciting (to me) programming language design ideas.

It is made for fun and to inspire other designers.

# Features

* Extremely minimal
* [Jevko](https://jevko.org)-based syntax, i.e. you program by writing jevkos
* Jevko is a native data type
* Evaluation order depends on the operation
* Native identifiers with spaces!

# Goals

* Extremely simple implementation -- easy to port, explain, hack on
* Explore original programming language design ideas
* Fun

# Examples

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
# Jevkalk

An experimental interpreter for a crazy little language called Jevkalk.

The language is similar in spirit to Lisps in that the written syntax mirrors abstract syntax, providing homoiconicity, and it is very minimal and flexible. Otherwise Jevkalk is peculiar and not compatible in any way with any Lisp or other language. It's an experiment to test some exciting (to me) programming language design ideas.

It is made for fun and to inspire other designers.

Features:

* Extremely minimal
* [Jevko](https://jevko.org)-based syntax, i.e. you program by writing jevkos
* Jevko is a native data type
* Evaluation order depends on the operation
* Native identifiers with spaces!

# Example

The following program:
* defines `fib` to be a one-argument function which computes the `n`-th Fibonacci number,
* computes the 10th Fibonacci number using `fib`

```clj
fib: fun [[n]
  ? [
    < [[n][3]] [1]
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
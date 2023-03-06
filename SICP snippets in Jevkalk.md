# SICP snippets in Jevkalk

## page 6

```
+ [[137][349]]
- [[1000][334]]
* [[5][99]]
/ [[10][5]]
+ [[2.7][10]]

+ [[21][35][2][7]]
* [[25][4][12]]

+ [* [[3][5]] - [[10][6]]]
```

## page 7

```
+ [* [[3] + [* [[2][4]] + [[3][5]]]] + [- [[10][7]] [6]]]

+ [
  * [
    [3] 
    + [
      * [[2][4]] 
      + [[3][5]]
    ]
  ] 
  + [
    - [[10][7]]
    [6]
  ]
]

bind [[size][2]]
```

## page 8

```
[size]

* [[5][size]]

bind [[pi][3.14159]]

bind [[radius][10]]

* [[pi] * [[radius][radius]]]

bind [[circumference] * [[2][pi][radius]]]

[circumference]
```

## page 9

```
* [
  + [[2] * [[4][6]]]
  + [[3][5][7]]
]
```

## page 12

```
bind [[square] fun [[x] * [[x][x]]]]
```

## page 13

```
square [21]

square [+ [[2][5]]]

square [square [3]]

+ [square [x] square [y]]

bind [[sum of squares] fun [[[x][y]]
  + [square [x] square [y]]
]]

sum of squares [[3][4]]

bind [[f] fun [[a]
  sum of squares [+ [[a][1]] * [[a][2]]]
]]

f [5]
```

## page 14

```
f [5]

sum of squares [+ [[a][1]] * [[a][2]]]

sum of squares [+ [[5][1]] * [[5][2]]]

+ [square [6] square [10]]

+ [* [[6][6]] * [[10][10]]]

+ [[36][100]]
```

## page 16

```
f [5]

sum of squares [+ [[5][1]] * [[5][2]]]

+ [square [+ [[5][1]]] square [* [[5][2]]]]

+ [* [+ [[5][1]] + [[5][1]]] * [* [[5][2]]] * [[5][2]]]]

+ [* [[6][6]] * [[10][10]]]

+ [[36][100]]

* [[x][x]]
```

## page 17

```
bind [[abs] fun [[x]
  ? [
    > [[x][0]] [x]
    = [[x][0]] [0]
    < [[x][0]] - [x]
  ]
]]
```

```
? [
  <p_1> <e_1>
  <p_2> <e_2>
  .
  .
  .
  <p_n> <e_n>
]
```

## page 18

```
bind [[abs] fun [[x]
  ? [
    < [[x][0]] - [x]
    [x]
  ]
]]
```

## page 19

```
and [[e_1] ... [e_n]]

or [[e_1] ... [e_n]]

not [e]

and [> [[x][5]] < [[x][10]]]
```

## page 20

```
bind [[>=] fun [[[x][y]]
  or [> [[x][y]] = [[x][y]]]
]]

bind [[>=] fun [[[x][y]]
  not [< [[x][y]]]
]]
```

<!-- exercise 1.1 -->

```
[10]

+ [[5][3][4]]

- [[9][1]]

/ [[6][2]]

+ [* [[2][4]] - [[4][6]]]

bind [[a][3]]

bind [[b] + [[a][1]]]

+ [[a][b] * [[a][b]]]

= [[a][b]]

? [
  and [> [[b][a]] < [[b] * [[a][b]]]] [b]
  [a]
]

? [
  = [[a][4]] [6]
  = [[b][4]] + [[6][7][a]]
  [25]
]

+ [[2] ? [> [[b][a]] [b] [a]]]

* [? [
  > [[a][b]] [a]
  < [[a][b]] [b]
  [-1]
] + [[a][1]]]
```

## page 21

<!-- ex. 1.4 -->

```
bind [[a plus abs b] fun [[[a][b]] 
  apply [
    ? [
      > [[b][0]] [+]
      [-]
    ]
    [a]
    [b]
  ]
]]
```

<!-- ex. 1.5 -->

```
bind [[p] p []]

bind [[test] fun [[[x][y]]
  ? [
    = [[x][0]] [0]
    [y]
  ]
]]

test [[0] p []]
```

## page 23

```
bind [[sqrt iter] fun [[[guess][x]]
  ? [
    good enough? [[guess][x]] [guess]
    sqrt iter [improve [[guess][x]] [x]]
  ]
]]

bind [[improve] fun [[[guess][x]]
  average [[guess] / [[x][guess]]]
]]

bind [[average] fun [[[x][y]]
  / [+ [[x][y]] [2]]
]]
```

## page 24

```
bind [[good enough?] fun [[[guess][x]]
  < [abs [- [square [guess] [x]]] [0.001]]
]]

bind [[sqrt] fun [[x]
  sqrt iter [[1.0][x]]
]]

sqrt [9]

sqrt [+ [[100][37]]]

sqrt [+ [sqrt [2] sqrt [3]]]

square [sqrt [1000]]
```

## page 25

```
bind [[new if] fun [[
  [predicate]
  [then clause]
  [else clause]
]
  ? [
    [predicate] [then clause]
    [else clause]
  ]
]]

new if [= [[2][3]] [0] [5]]

new if [= [[1][1]] [0] [5]]

bind [[sqrt iter] fun [[[guess][x]]
  new if [good enough? [[guess][x]]
    [guess]
    sqrt iter [improve [[guess][x]] [x]]
  ]
]]
```

## page 27

```
bind [[square] fun [[x]
  * [[x][x]]
]]

bind [[square] fun [[x]
  exp [double [log [x]]]
]]

bind [[double] fun [[x]
  + [[x][x]]
]]
```

## page 28

```
bind [[square] fun [[x]
  * [[x][x]]
]]

bind [[square] fun [[y]
  * [[y][y]]
]]

bind [[good enough?] fun [[[guess][x]]
  < [abs [- [square [guess] [x]]] [0.001]]
]]
```

## page 29

```
bind [[sqrt] fun [[x]
  sqrt iter [[1.0][x]]
]]
```

At this point I'll introduce `define` to make it easier to manually type. Defining `define` in Jevkalk is easy: `define` is easy to define.

```
define [sqrt iter [[guess][x]]
  ? [
    good enough? [[guess][x]] [guess]
    sqrt iter [improve [[guess][x]] [x]]
  ]
]

define [good enough? [[guess][x]]
  < [abs [- [square [guess] [x]]] [0.001]]
]

define [improve [[guess][x]]
  average [[guess] / [[x][guess]]]
]
```

## page 30

```
define [sqrt [x]
  define [good enough? [[guess][x]]
    < [abs [- [square [guess] [x]]] [0.001]]
  ]
  define [improve [[guess][x]]
    average [[guess] / [[x][guess]]]
  ]
  define [sqrt iter [[guess][x]]
    ? [
      good enough? [[guess][x]] [guess]
      sqrt iter [improve [[guess][x]] [x]]
    ]
  ]
  sqrt iter [[1.0][x]]
]

define [sqrt [x]
  define [good enough? [guess]
    < [abs [- [square [guess] [x]]] [0.001]]
  ]
  define [improve [guess]
    average [[guess] / [[x][guess]]]
  ]
  define [sqrt iter [guess]
    ? [
      good enough? [guess] [guess]
      sqrt iter [improve [guess]]
    ]
  ]
  sqrt iter [1.0]
]
```

## page 32

```
factorial [6]

* [[6] factorial [5]]

* [[6] * [[5] factorial [4]]]

* [[6] * [[5] * [[4] factorial [3]]]]

* [[6] * [[5] * [[4] * [[3] factorial [2]]]]]

* [[6] * [[5] * [[4] * [[3] * [[2] factorial [1]]]]]]

define [factorial [n]
  ? [
    = [[n][1]] [1]
    * [[n] factorial [- [[n][1]]]]
  ]
]
```

## 33

```
factorial [6]
fact iter [[1][1][6]]
fact iter [[1][2][6]]
fact iter [[2][3][6]]
fact iter [[6][4][6]]
fact iter [[24][5][6]]
fact iter [[120][6][6]]
fact iter [[720][7][6]]

define [factorial [n]
  define [iter [[product][counter]]
    ? [
      > [[counter][n]] [product]
      fact iter [
        * [[counter][product]]
        + [[counter][1]]
      ]
    ]
  ]
  iter [[1][1]]
]
```

## 34

```
define [factorial [n]
  fact iter [[1][1][n]]
]

define [fact iter [[product][counter][max count]]
  ? [
    > [[counter][max count]] [product]
    fact iter [
      * [[counter][product]]
      + [[counter][1]]
      [max count]
    ]
  ]
]
```

## 36

```
define [+ [[a][b]]
  ? [
    = [[a][0]] [b]
    inc [+ [dec [a] [b]]]
  ]
]

define [+ [[a][b]]
  ? [
    = [[a][0]] [b]
    + [dec [a] inc [b]]
  ]
]

define [A [[x][y]]
  ? [
    = [[y][0]] [0]
    = [[x][0]] * [[2][y]]
    = [[y][1]] [2]
    A [
      - [[x][1]] 
      A [[x] - [[y][1]]]
    ]
  ]
]

A [[1][10]]

A [[2][4]]

A [[3][3]]
```

## 37

```
define [f [n] A [[0][n]]]

define [g [n] A [[1][n]]]

define [h [n] A [[2][n]]]

define [k [n] * [[5][n][n]]]

define [fib [n]
  ? [
    = [[n][0]] [0]
    = [[n][1]] [1]
    + [
      fib [- [[n][1]]]
      fib [- [[n][2]]]
    ]
  ]
]
```

## 39

```
define [fib [n]
  fib iter [[1][0][n]]
]

define [fib iter [[a][b][count]]
  ? [
    = [[count][0]] [b]
    fib iter [+ [[a][b]] [a] - [[count][1]]]
  ]
]
```

## 40

```
define [count change [amount]
  cc [[amount][5]]
]
```

## 41

```
define [cc [[amount][kinds of coins]]
  ? [
    = [[amount][0]] [1]
    or [< [[amount][0]] = [[kinds of coins][0]]] [0]
    + [
      cc [
        [amount]
        - [[kinds of coins][1]]
      ]
      cc [
        - [
          [amount]
          first denomination [kinds of coins]
        ]
        [kinds of coins]
      ]
    ]
  ]
]

define [first denomination [kinds of coins]
  ? [
    = [[kinds of coins][1]] [1]
    = [[kinds of coins][2]] [5]
    = [[kinds of coins][3]] [10]
    = [[kinds of coins][4]] [25]
    = [[kinds of coins][5]] [50]
  ]
]

count change [100]
```

## 44

```
define [cube [x]
  * [[x][x][x]]
]

define [p [x]
  - [* [[3][x]] * [[4] cube [x]]]
]

define [sine [angle]
  ? [
    not [> [abs [angle] [0.1]]]
    [angle]
    p [sine [/ [[angle][3.0]]]]
  ]
]

define [expt [[b][n]]
  ? [
    = [[n][0]] [1]
    * [[b] expt [[b] - [[n][1]]]]
  ]
]
```
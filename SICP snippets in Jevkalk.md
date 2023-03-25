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

## 45

```
define [expt [[b][n]]
  expt iter [[b][n][1]]
]

define [expt iter [[b][counter][product]]
  ? [
    = [[counter][0]] [product]
    expt iter [
      [b]
      - [[counter][1]]
      * [[b][product]]
    ]
  ]
]

define [fast expt [[b][n]]
  ? [
    = [[n][0]] [1]
    even? [n] square [fast expt [[b] / [[n][2]]]]
    * [[b] fast expt [[b] - [[n][1]]]]
  ]
]

define [even? [n]
  = [remainder [[n][2]] [0]]
]
```

## 46

```
define [* [[a][b]]
  ? [
    = [[b][0]] [0]
    + [[a] * [[a] - [[b][1]]]]
  ]
]
```

## 47

```
define [fib [n]
  fib iter [[1][0][0][1][n]]
]

define [fib iter [[a][b][p][q][count]]
  ? [
    = [[count][0]] [b]
    even? [count] fib iter [
      [a]
      [b]
      [??]    compute p'
      [??]    compute q'
      / [[count][2]]
    ]
    fib iter [
      + [* [[b][q]] * [[a][q]] * [[a][p]]]
      + [* [[b][p]] * [[a][q]]]
      [p]
      [q]
      - [[count][1]]
    ]
  ]
]
```

## 49

```
define [gcd [[a][b]]
  ? [
    = [[b][0]] [a]
    gcd [[b] remainder [[a][b]]]
  ]
]
```

## 50

```
define [smallest divisor [n]
  find divisor [[n][2]]
]

define [find divisor [[n][test divisor]]
  ? [
    > [square [test divisor] [n]] [n]
    divides? [[test divisor] [n]] [test divisor]
    find divisor [[n] + [[test divisor] [1]]]
  ]
]

define [divides? [[a][b]]
  = [remainder [[b][a]] [0]]
]

define [prime? [n]
  = [[n] smallest divisor [n]]
]
```

## 51

```
define [expmod [[base][exp][m]]
  ? [
    = [[exp][0]] [1]
    even? [exp] remainder [
      square [expmod [[base] / [[exp][2]] [m]]]
      [m]
    ]
    remainder [
      * [[base] expmod [[base] - [[exp][1]] [m]]]
      [m]
    ]
  ]
]
```

## 52

```
define [fermat test [n]
  define [try it [a]
    = [expmod [[a][n][n]] [a]]
  ]
  try it [+ [[1] random [- [[n][1]]]]]
]

define [fast prime? [[n][times]]
  ? [
    = [[times][0]] [true]
    fermat test [n] fast prime? [[n] - [[times][1]]]
    [false]
  ]
]
```

## 54

Note: at this point I am introducing string syntax not implemented in current (2023-03-13) Jevkalk -- `` display [`***`] ``. This is based on Djevko. To implement that, Jevkalk would need to be ported into Djevko (perhaps resulting in Djevkalk).

As I am porting these snippets, likely more and more novel syntax will be introduced. I will try to always include a note when this happens.

At some point, if the gods decide it good, I shall implement all these noveltes into the language.

```
define [timed prime test [n]
  newline []
  display [n]
  start prime test [[n] runtime []]
]

define [start prime test [[n][start time]]
  ? [
    prime? [n] report prime [- [runtime [] [start time]]]
  ]
]

define [report prime [elapsed time]
  display [`***`]
  display [elapsed time]
]
```

## 55

```
define [expmod [[base][exp][m]]
  ? [
    = [[exp][0]] [1]
    even? [exp] remainder [
      * [
        expmod [[base] / [[exp][2]] [m]]
        expmod [[base] / [[exp][2]] [m]]
      ]
      [m]
    ]
    remainder [
      * [[base] expmod [[base] - [[exp][1]] [m]]]
      [m]
    ]
  ]
]
```

## 56

```
define [cube [x]
  * [[x][x][x]]
]

* [[3][3][3]]
* [[x][x][x]]
* [[y][y][y]]
```

## 57

```
define [sum integers [[a][b]]
  ? [
    > [[a][b]] [0]
    + [[a] sum integers [+ [[a][1]] [b]]]
  ]
]

define [sum cubes [[a][b]]
  ? [
    > [[a][b]] [0]
    + [cube [a] sum cubes [+ [[a][1]] [b]]]
  ]
]

define [pi sum [[a][b]]
  ? [
    > [[a][b]] [0]
    + [
      / [[1.0] * [[a] + [[a][2]]]]
      pi sum [+ [[a][4]] [b]]
    ]
  ]
]
```

## 58

```
define [<name> [[a][b]]
  ? [
    > [[a][b]] [0]
    + [
      <term> [a]
      <name> [<next> [a] [b]]
    ]
  ]
]

define [sum [[term][a][next][b]]
  ? [
    > [[a][b]] [0]
    + [term [a] sum [[term] next [a] [next] [b]]]
  ]
]

define [inc [n]
  + [[n][1]]
]
```

## 59

```
define [sum cubes [[a][b]]
  sum [[cube][a][inc][b]]
]

sum cubes [[1][10]]

define [identity [x] [x]]

define [sum integers [[a][b]]
  sum [[identity][a][inc][b]]
]

sum integers [[1][10]]

define [pi sum [[a][b]]
  define [pi term [x]
    / [[1.0] * [[x] + [[x][2]]]]
  ]
  define [pi next [x]
    + [[x][4]]
  ]
  sum [[pi term][a][pi next][b]]
]

* [[8] pi sum [[1][1000]]]
```

## 60

```
define [integral [[f][a][b][dx]]
  define [add dx [x] + [[x][dx]]]
  * [
    sum [[f] + [[a] / [[dx][2.0]]] [add dx] [b]]
    [dx]
  ]
]

integral [[cube][0][1][0.01]]

integral [[cube][0][1][0.001]]

define [sum [[term][a][next][b]]
  define [iter [[a][result]]
    ? [
      [??] [??]
      iter [[??][??]]
    ]
  ]
  iter [[??][??]]
]
```

## 61

```
accumulate [[combiner][null value][term][a][next][b]]
```

## 62

```
fun [[x] + [[x][4]]]

fun [[x] / [[1.0] * [[x] + [[x][2]]]]]

define [pi sum [[a][b]]
  sum [
    fun [[x] / [[1.0] * [[x] + [[x][2]]]]]
    [a]
    fun [[x] + [[x][4]]]
    [b]
  ]
]

define [integral [[f][a][b][dx]]
  * [
    sum [
      [f]
      + [[a] / [[dx][2.0]]]
      fun [[x] + [[x][dx]]]
      [b]
    ]
    [dx]
  ]
]

fun [[<formal parameters>] <body>]

define [plus4 [x] + [[x][4]]]
```

## 63

Note: this uses `.` to invoke the value of the previous expression which is a function.

```
define [[plus4] fun [[x] + [[x][4]]]]

fun [[x] + [[x][4]]]

fun [[[x][y][z]]
  + [[x][y] square [z]]
]
.[[1][2][3]]
```

## 64

Let's see what happens if I change the style a bit in terms of spaces.

```
define[f[[x] [y]]
  define[f helper[[a] [b]]
    +[
      *[[x] square[a]]
      *[[y] [b]]
      *[[a] [b]]
    ]
  ]
  f helper[
    +[[1] *[[x] [y]]]
    -[[1] [y]]
  ]
]

define[f[[x] [y]]
  fun[[[a] [b]]
    +[
      *[[x] square[a]]
      *[[y] [b]]
      *[[a] [b]]
    ]
  ]
  .[
    +[[1] *[[x] [y]]]
    -[[1] [y]]
  ]
]
```

Introducing `let` (not in Jevkalk as of 2023-03-22).

```
define[f[[x] [y]]
  let[
    [
      [a] +[[1] *[[x] [y]]]
      [b] -[[1] [y]]
    ]
    +[
      *[[x] square[a]]
      *[[y] [b]]
      *[[a] [b]]
    ]
  ]
]
```

Note: decided to remove the brackets around var-exp pairs from the original Scheme syntax.

```
let [
  [
    <var 1> <exp 1>
    <var 2> <exp 2>
    .
    .
    .
    <var n> <exp n>
  ]
  <body>
]
```

Note: this is not in SICP, but the above code could also be written as:

```
define[f[[x] [y]]
  define[[a] +[[1] *[[x] [y]]]]
  define[[b] -[[1] [y]]]
  +[
    *[[x] square[a]]
    *[[y] [b]]
    *[[a] [b]]
  ]
]
```

## 65

```
fun[
  [[<var 1>]...[<var n>]]
  <body>
]
.[
  [<exp 1>]
  .
  .
  .
  [<exp n>]
]

+[
  let[
    [[x] [3]]
    +[[x] *[[x] [10]]]
  ]
  [x]
]

let[
  [
    [x] [3]
    [y] +[[x] [2]]
  ]
  *[[x] [y]]
]
```

The first expression could also be written in Jevkalk using `ap`:

```
ap[
  fun[
    [[<var 1>]...[<var n>]]
    <body>
  ][
    [<exp 1>]
    .
    .
    .
    [<exp n>]
  ]
]
```

Perhaps there is a better name for that construct.

## 66

Turns out this is in SICP after all. :D

```
define[f[[x] [y]]
  define[[a] +[[1] *[[x] [y]]]]
  define[[b] -[[1] [y]]]
  +[
    *[[x] square[a]]
    *[[y] [b]]
    *[[a] [b]]
  ]
]
```

```
define[f[g]
  g[2]
]

f[square]

f[fun[[z] *[[z] +[[z][1]]]]]
```

## 67

```
define[
  search[
    [[f] [neg point] [pos point]]
    let[
      [
        [midpoint] average[[neg point] [pos point]]
      ]
      ?[
        close enough?[[neg point] [pos point]] [midpoint]
        let[
          [
            [test value] f[midpoint]
          ]
          ?[
            positive?[test value] search[[f] [neg point] [midpoint]]
            negative?[test value] search[[f] [midpoint] [pos point]]
            [midpoint]
          ]
        ]
      ]
    ]
  ]
]
```

## 68

```
define[close enough?[[x] [y]]
  <[abs[-[[x] [y]]] [0.001]]
]
```

Seeing what happens if I introduce more spacing inside brackets.

```
define[ half interval method[ [f] [a] [b] ]
  let[
    [
      [a value] f[a]
      [b value] f[b]
    ]
    ?[
      and[
        negative?[a value]
        positive?[b value]
      ] 
      search[ [f] [a] [b] ]
      
      and[
        negative?[b value]
        positive?[a value]
      ] 
      search[ [f] [b] [a] ]
      
      error[ ['Values are not of opposite sign'] [a] [b] ]
    ]
  ]
]

half interval method[ [sin] [2.0] [4.0] ]

half interval method[ 
  fun[ [x] -[ *[ [x] [x] [x] ] ] *[ [2] [x] ] [3] ]
  [1.0]
  [2.0]
]
```

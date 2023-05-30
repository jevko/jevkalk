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

## 69

A little more vertical and horizontal spacing.

```
define[ [tolerance] [0.00001] ]

define[ 
  fixed point[ [f] [first guess] ]
  define[ 
    close enough?[ [v1] [v2] ]
    <[   abs[  -[ [v1] [v2] ]  ]   [tolerance]   ]
  ]
  define[ 
    try[guess]
    let[
      [
        [next] f[guess]
      ]
      ?[
        close enough?[ [guess] [next] ]   [next]
        try[next]
      ]
    ]
  ]
  try[first guess]
]
```

```
fixed point[ [cos] [1.0] ]

fixed point[ 
  fun[  [y]  +[ sin[y] cos[y] ]  ]
  [1.0] 
]

define[
  sqrt[x]
  fixed point[
    fun[  [y]  /[ [x] [y] ]  ]
    [1.0]
  ]
]
```

## 70

```
define [
  sqrt[x]
  fixed point [
    fun [
      [x] 
      average[ 
        [y] 
        /[ [x] [y] ] 
      ] 
    ]
    [1.0]
  ]
]
```

## 71

```
cont frac[
  fun[ [i] [1.0] ]
  fun[ [i] [1.0] ]
  [k]
]
```

## 72

```
define[
  average damp[f]
  fun [
    [x]
    average[ [x] f[x] ]
  ]
]
```

## 73

```
ap[ average damp[square][10] ]

define[
  sqrt[x]
  fixed point[
    average damp[
      fun[  [y]  /[ [x] [y] ]  ]
    ]
    [1.0]
  ]
]

define[
  cube root[x]
  fixed point[
    average damp[
      fun[  [y]  /[ [x] square[y] ]  ]
    ]
    [1.0]
  ]
]
```

## 74

```
define[
  deriv[g]
  fun[
    [x]
    /[
      -[  g[+[ [x] [dx] ]]  g[x]  ]
      [dx]
    ]
  ]
]

define[ [dx] [0.00001] ]

define[
  cube[x]
  *[ [x] [x] [x] ]
]

ap[ deriv[cube][x] ]

define[
  newton transform[g]
  fun[
    [x]
    -[ 
      [x]
      /[ g[x] ap[deriv[g][x]] ]
    ]
  ]
]
```

## 75

```
define[
  newton's method[ [g] [guess] ]
  fixed point[ newton transform[g] [guess] ]
]

define [
  sqrt[x]
  newton's method[
    fun[  [y]  -[ square[y] [x] ]  ]
    [1.0]
  ]
]

define[
  fixed point of transform[ [g] [transform] [guess] ]
  fixed point[ transform[g] [guess] ]
]

define[
  sqrt[x]
  fixed point of transform[
    fun[  [y]  /[ [x] [y] ]  ]
    [average damp]
    [1.0]
  ]
]
```

Alternative syntax for lambdas I've been thinking about:

```
define[
  deriv[g]
  [
    fun[x]
    /[
      -[  g[+[ [x] [dx] ]]  g[x]  ]
      [dx]
    ]
  ]
]

define[
  newton transform[g]
  [
    fun[x]
    -[ 
      [x]
      /[ g[x] ap[deriv[g][x]] ]
    ]
  ]
]

define [
  sqrt[x]
  newton's method[
    [  fun[y]  -[ square[y] [x] ]  ]
    [1.0]
  ]
]

define[
  sqrt[x]
  fixed point of transform[
    [  fun[y]  /[ [x] [y] ]  ]
    [average damp]
    [1.0]
  ]
]
```

So:

```
fun[  [y]  -[ square[y] [x] ]  ]
```

would become:

```
[  fun[y]  -[ square[y] [x] ]  ]
```

this could technically become:

```
[  [y]  -[ square[y] [x] ]  ]
```

dropping the `fun` "keyword" completely.

Fun to think about.

## 76

Note: using the proposed new syntax for lambdas.

```
define[
  sqrt[x]
  fixed point of transform[
    [  fun[y]  -[ square[y] [x] ]  ]
    [newton transform]
    [1.0]
  ]
]
```

## 77

```
newton's method[  cubic[ [a] [b] [c] ]  [1]  ]

ap[ double[double[double]][inc][5] ]

ap[  compose[ [square] [inc] ][5]  ]

ap[  repeated[ [square] [2] ][5]  ]
```

Technically, could get rid of the `ap` "keyword" as well:

```
[ double[double[double]][inc][5] ]

[  compose[ [square] [inc] ][5]  ]

[  repeated[ [square] [2] ][5]  ]
```

But that feels like going too far.

## 81

```
define[
  linear combination[ [a] [b] [x] [y] ]
  +[  *[ [a] [x] ]  *[ [b] [y] ]  ]
]

define[
  linear combination[ [a] [b] [x] [y] ]
  add[  mul[ [a] [x] ]  mul[ [b] [y] ]  ]
]
```

## 84

```
define[
  add rat[ [x] [y] ]
  make rat[
    +[
      *[ numer[x] denom[y] ]
      *[ numer[y] denom[x] ]
    ]
    *[ denom[x] denom[y] ]
  ]
]

define[
  sub rat[ [x] [y] ]
  make rat[
    -[
      *[ numer[x] denom[y] ]
      *[ numer[y] denom[x] ]
    ]
    *[ denom[x] denom[y] ]
  ]
]

define[
  mul rat[ [x] [y] ]
  make rat[
    *[ numer[x] numer[y] ]
    *[ denom[x] denom[y] ]
  ]
]

define[
  div rat[ [x] [y] ]
  make rat[
    *[ numer[x] denom[y] ]
    *[ denom[x] numer[y] ]
  ]
]

define[
  equal rat?[ [x] [y] ]
  =[
    *[ numer[x] denom[y] ]
    *[ numer[y] denom[x] ]
  ]
]
```

## 85

Classic Lisp pairs (cons, car, cdr).

```
define[  [x]  cons[ [1] [2] ]  ]

car[x]

cdr[x]

define[  [x]  cons[ [1] [2] ]  ]

define[  [y]  cons[ [3] [4] ]  ]

define[  [z]  cons[ [x] [y] ]  ]

car[ car[z] ]

car[ cdr[z] ]
```

Less classic aliases (pair, fst, snd).

```
define[  [x]  pair[ [1] [2] ]  ]

fst[x]

snd[x]

define[  [x]  pair[ [1] [2] ]  ]

define[  [y]  pair[ [3] [4] ]  ]

define[  [z]  pair[ [x] [y] ]  ]

fst[ fst[z] ]

snd[ snd[z] ]
```

## 86

```
define[
  make rat[ [n] [d] ]
  cons[ [n] [d] ]
]

define[ numer[x] car[x] ]

define[ denom[x] cdr[x] ]

define[
  print rat[x]
  newline[]
  display[ numer[x] ]
  display['/']
  display[ denom[x] ]
]

define[  [one half]  make rat[ [1] [2] ]  ]

print rat[one half]

define[  [one third]  make rat[ [1] [3] ]  ]

define[ [make rat] [cons] ]
define[ [numer] [car] ]
define[ [denom] [cdr] ]
```

## 87

```
print rat[  add rat[ [one half] [one third] ]  ]

print rat[  mul rat[ [one half] [one third] ]  ]

print rat[  add rat[ [one third] [one third] ]  ]

define[
  make rat[ [n] [d] ]
  let[
    [  [g]  gcd[ [n] [d] ]  ]
    cons[  /[ [n] [g] ]  /[ [d] [g] ]  ]
  ]
]

print rat[  add rat[ [one thrid] [one third] ]  ]
```

## 89

```
define[
  make rat[ [n] [d] ]
  cons[ [n] [d] ]
]

define[
  numer[x]
  let[
    [  [g]  gcd[ car[x] cdr[x] ]  ]
    /[ car[x] [g] ]
  ]
]

define[
  denom[x]
  let[
    [  [g]  gcd[ car[x] cdr[x] ]  ]
    /[ cdr[x] [g] ]
  ]
]
```

## 90

```
define[
  print point[p]
  newline[]
  display['(']
  display[ x point[p] ]
  display[',']
  display[ y point[p] ]
  display[')']
]
```

## 91

```
define[
  cons[ [x] [y] ]
  define[
    dispatch[m]
    ?[
      =[ [m] [0] ] [x]
      =[ [m] [1] ] [y]
      error[ ['Argument not 0 or 1 -- CONS'] [m] ]
    ]
  ]
  [dispatch]
]

define[ car[z] z[0] ]

define[ cdr[z] z[1] ]
```

## 92

```
define[
  cons[ [x] [y] ]
  fun[  [m]  m[ [x] [y] ]  ]
]

define[
  car[z]
  z[
    fun[  [ [p] [q] ]  [p]  ]
  ]
]
```

## 93

```
define[  [zero]  fun[ [f] fun[ [x] [x] ] ]  ]

define [ 
  add 1[n]
  fun[  [f]  fun[ [x] f[ ap[n[f][x]] ] ]  ]
]
```

## 94

```
define[
  add interval[ [x] [y] ]
  make interval[
    +[ lower bound[x] lower bound[y] ]
    +[ upper bound[x] upper bound[y] ]
  ]
]
```

Another take on `let`. Losing a pair of brackets in exchange for only one expression in body.

```
define[
  mul interval[ [x] [y] ]
  let[
    [p1]  *[ lower bound[x] lower bound[y] ]
    [p2]  *[ lower bound[x] upper bound[y] ]
    [p3]  *[ upper bound[x] lower bound[y] ]
    [p4]  *[ upper bound[x] upper bound[y] ]
    make interval[
      min[ [p1] [p2] [p3] [p4] ]
      max[ [p1] [p2] [p3] [p4] ]
    ]
  ]
]

define[
  div interval[ [x] [y] ]
  mul interval[
    [x]
    make interval[
      /[ [1.0] upper bound[y] ]
      /[ [1.0] lower bound[y] ]
    ]
  ]
]

define[
  make interval[ [a] [b] ]
  cons[ [a] [b] ]
]
```

## 95

```
define[
  make center width[ [c] [w] ]
  make interval[
    -[ [c] [w] ]
    +[ [c] [w] ]
  ]
]

define[
  center[i]
  /[  +[ lower bound[i] upper bound[i] ]  [2]  ]
]

define[
  width[i]
  /[  -[ upper bound[i] lower bound[i] ]  [2]  ]
]
```

## 96

```
define[
  par1[ [r1] [r2] ]
  div interval[
    mul interval[ [r1] [r2] ]
    add interval[ [r1] [r2] ]
  ]
]

define[
  par2[ [r1] [r2] ]
  let[
    [one]  make interval[ [1] [1] ]
    div interval[
      [one]
      add interval[
        div interval[ [one] [r1] ]
        div interval[ [one] [r2] ]
      ]
    ]
  ]
]
```

## 98

```
cons[
  cons[ [1] [2] ]
  cons[ [3] [4] ]
]

cons[
  cons[
    [1]
    cons[ [2] [3] ]
  ]
  [4]
]
```

## 99

```
cons[
  [1]
  cons[
    [2]
    cons[
      [3]
      cons[ [4] [nil] ]
    ]
  ]
]
```

## 100

```
list[ [<a_1>] [<a_2>] ... [<a_n>] ]

cons[
  [<a_1>]
  cons[
    [<a_2>]
    cons[
      ...
      cons[
        [<a_n>]
        [nil]
      ]
      ...
    ]
  ]
]

define[
  [one through four]
  list[ [1] [2] [3] [4] ]
]

[one through four]

car[one through four]

cdr[one through four]
```

```
cadr[<arg>] = car[ cdr[<arg>] ]
```

## 101

```
car[ cdr[one through four] ]

cons[ [10] [one through four] ]

cons[ [5] [one through four] ]

define[
  list ref[ [items] [n] ]
  ?[
    =[ [n] [0] ]  car[items]
    list ref[
      cdr[items]
      -[ [n] [1] ]
    ]
  ]
]

define[
  [squares]
  list[ [1] [4] [9] [16] [25] ]
]

list ref[ [squares] [3] ]
```

## 102

```
define[
  length[items]
  ?[
    null?[items] [0]
    +[  [1]  length[ cdr[items] ]  ]
  ]
]

define[
  [odds]
  list[ [1] [3] [5] [7] ]
]

length[odds]

define[
  length[items]
  define[
    length iter[ [a] [count] ]
    ?[
      null?[a] [count]
      length iter[
        cdr[a]
        +[ [1] [count] ]
      ]
    ]
  ]
  length iter[ [items] [0] ]
]

append[ [squares] [odds] ]

append[ [odds] [squares] ]
```

## 103

```
define[
  append[ [list1] [list2] ]
  ?[
    null?[list1] [list2]
    cons[
      car[list1]
      append[ cdr[list1] [list2] ]
    ]
  ]
]

last pair[  list[ [23] [72] [149] [34] ]  ]

reverse[  list[ [1] [4] [9] [16] [25] ] ]

define[
  [us coins]
  list[ [50] [25] [10] [5] [1] ]
]

define[
  [uk coins]
  list[ [100] [50] [20] [10] [5] [2] [1] [0.5] ]
]

cc[ [100] [us coins] ]
```

## 104

```
define[
  cc[ [amount] [coin value] ]
  ?[
    =[ [amount] [0] ]  [1]
    or[  <[ [amount] [0] ]  no more?[coin values]  ]   [0]
    +[
      cc[
        [amount]
        except first denomination[coin values]
      ]
      cc[
        -[
          [amount]
          first denomination[coin values]
        ]
        [coin values]
      ]
    ]
  ]
]
```

Figuring out the equivalent of the dotted-tail notation. Using a JavaScript-style rest parameter syntax.

```
define[
  f[ [x] [y] ...[z] ]
  <body>
]

f[ [1] [2] [3] [4] [5] [6] ]

define[
  g[ ...[w] ]
  <body>
]

g[ [1] [2] [3] [4] [5] [6] ]

same parity[ [1] [2] [3] [4] [5] [6] [7] ]

same parity[ [2] [3] [4] [5] [6] [7] ]

define[
  [f]
  fun[
    [ [x] [y] ...[z] ]
    <body>
  ]
]

define[
  [g]
  fun[
    [ ...[w] ]
    <body>
  ]
]
```

## 105

```
define[
  scale list[ [items] [factor] ]
  ?[
    null?[items] [nil]
    cons[
      *[ car[items] [factor] ]
      scale list[ cdr[items] [factor] ]
    ]
  ]
]

scale list[
  list[ [1] [2] [3] [4] [5] [6] ]
  [10]
]

define[
  map[ [proc] [items] ]
  ?[
    null?[items] [nil]
    cons[
      proc[ car[items] ]
      map[ [proc] cdr[items] ]
    ]
  ]
]

map[  [abs]  list[ [-10] [2.5] [-11.6] [17] ]  ]

map[
  fun[  [x]  *[ [x] [x] ]  ]
  list[ [1] [2] [3] [4] ]
]

map[
  [+]
  list[ [1] [2] [3] ]
  list[ [40] [50] [60] ]
  list[ [700] [800] [900] ]
]

map[
  fun[
    [ [x] [y] ]
    +[  [x]  *[ [2] [y] ]  ]
  ]
  list[ [1] [2] [3] ]
  list[ [4] [5] [6] ]
]
```

## 106

```
define[
  scale list[ [items] [factor] ]
  map[
    fun[  [x]  *[ [x] [factor] ]  ]
    [items]
  ]
]

square list[  list[ [1] [2] [3] [4] ]  ]

define[
  square list[items]
  ?[
    null?[items] [nil]
    cons[ [??] [??] ]
  ]
]

define[
  square list[items]
  map[ [??] [??] ]
]
```

## 107

```
define[
  square list[items]
  define[
    iter[ [things] [answer] ]
    ?[
      null?[things] [answer]
      iter[
        cdr[things]
        cons[
          square[ car[things] ]
          [answer]
        ]
      ]
    ]
  ]
  iter[ [items] [nil] ]
]

define[
  square list[items]
  define[
    iter[ [things] [answer] ]
    ?[
      null?[things] [answer]
      iter[
        cdr[things]
        cons[
          [answer]
          square[ car[things] ]
        ]
      ]
    ]
  ]
  iter[ [items] [nil] ]
]

for each[
  fun[ [x] newline[] display[x] ]
  list[ [57] [321] [88] ]
]

cons[
  list[ [1] [2] ]
  list[ [3] [4] ]
]
```

## 108

```
define[
  [x]
  cons[
    list[ [1] [2] ]
    list[ [3] [4] ]
  ]
]

length[x]
```

## 109

```
count leaves[x]

list[ [x] [x] ]

length[
  list[ [x] [x] ]
]

count leaves[
  list[ [x] [x] ]
]

define[
  count leaves[x]
  ?[
    null?[x] [0]
    not[ pair?[x] ]  [1]
    +[
      count leaves[ car[x] ]
      count leaves[ cdr[x] ]
    ]
  ]
]
```

## 110

I'm thinking maybe representations of lists/jevkos as data should have `'` in front, to be valid also as code.

```
'[  [1]  [3]  [ [5] [7] ]  [9]  ]

'[ [7] ]

'[[1] [[2] [[3] [[4] [[5] [[6] [7]]]]]]]
```

```
define[
  [x]
  list[ [1] [2] [3] ]
]

define[
  [y]
  list[ [4] [5] [6] ]
]

append[ [x] [y] ]

cons[ [x] [y] ]

list[ [x] [y] ]

define[
  [x]
  list[  list[ [1] [2] ]  list[ [3] [4] ]  ]
]

[x]

reverse[x]

deep reverse[x]
```

NB there should be native functions like:

```
jevko[ [subjevkos] [suffix] ]
subjevko[ [prefix] [jevko] ]
```

where `subjevkos` is a list, not necessarily a linked list (TBD).

## 111

```
define[
  [x]
  list[  list[ [1] [2] ]  list[ [3] [4] ]  ]
]

fringe[x]

fringe[  list[ [x] [x] ]  ]

define[
  make mobile[ [left] [right] ]
  list[ [left] [right] ]
]

define[
  make branch[ [length] [structure] ]
  list[ [length] [structure] ]
]

define[
  make mobile[ [left] [right] ]
  cons[ [left] [right] ]
]

define[
  make branch[ [length] [structure] ]
  cons[ [length] [structure] ]
]
```

## 112

Going a little wild with the formatting.

```
define[
  scale tree[ [tree] [factor] ]
  ?[
    null?[tree] [nil]
    not[pair?[tree]]  *[ [tree] [factor] ]
    cons[
      scale tree[ car[tree] [factor] ]
      scale tree[ cdr[tree] [factor] ]
    ]
  ]
]

scale tree[
  list[
    [1] list[
      [2] list[
        [3] [4]
      ]
      [5]
    ] list[
      [6] [7]
    ]
  ]
  [10]
]

define[
  scale tree[ [tree] [factor] ]
  map[
    fun[ [sub tree]
      ?[
        pair?[sub tree]  scale tree[ [sub tree] [factor] ]
        *[ [sub tree] [factor] ]
      ]
    ]
    [tree]
  ]
]

square tree[
  list[ [1]
    list[ [2]
      list[ [3] [4] ]
      [5]
    ] list[
      [6] [7]
    ]
  ]
]
```

## 113

```
define[  square tree[tree]  tree map[ [square] [tree] ]  ]

define[
  subsets[s]
  ?[
    null?[s]  list[nil]
    let[
      [rest]  subsets[cdr[s]]
      append[
        [rest]
        map[ [??] [rest] ]
      ]
    ]
  ]
]

define[
  sum odd squares[tree]
  ?[
    null?[tree]  [0]
    not[pair?[tree]] ?[
      odd?[tree] square[tree]
      [0]
    ]
    +[
      sum odd squares[ car[tree] ]
      sum odd squares[ cdr[tree] ]
    ]
  ]
]
```

## 114

```
define[
  even fibs[n]
  define[
    next[k]
    ?[
      >[ [k] [n] ]  [nil]
      let[
        [f]  fib[k]
        ?[
          even?[f]  cons[
            [f]
            next[  +[ [k] [1] ]  ]
          ]
          next[  +[ [k] [1] ]  ]
        ]
      ]
    ]
  ]
  next[0]
]
```

## 115

```
map[
  [square]
  list[ [1] [2] [3] [4] [5] ]
]

define[
  filter[ [predicate] [sequence] ]
  ?[
    null?[sequence] [nil]
    predicate[ car[sequence] ]  cons[
      car[sequence]
      filter[
        [predicate]
        cdr[sequence]
      ]
    ]
    filter[
      [predicate]
      cdr[sequence]
    ]
  ]
]
```

## 116

```
filter[
  [odd?]
  list[ [1] [2] [3] [4] ]
]

define[
  accumulate[ [op] [initial] [sequence] ]
  ?[
    null?[sequence] [initial]
    op[
      car[sequence]
      accumulate[
        [op]
        [initial]
        cdr[sequence]
      ]
    ]
  ]
]

accumulate[
  [+]
  [0]
  list[ [1] [2] [3] [4] [5] ]
]

accumulate[
  [*]
  [1]
  list[ [1] [2] [3] [4] [5] ]
]

accumulate[
  [cons]
  [nil]
  list[ [1] [2] [3] [4] [5] ]
]

define[
  enumerate interval[ [low] [high] ]
  ?[
    >[ [low] [high] ]  [nil]
    cons[
      [low]
      enumerate interval[
        +[ [low] [1] ]
        [high]
      ]
    ]
  ]
]

enumerate interval[ [2] [7] ]

define[
  enumerate tree[tree]
  ?[
    null?[tree] [nil]
    not[pair?[tree]]  list[tree]
    append[
      enumerate tree[ car[tree] ]
      enumerate tree[ cdr[tree] ]
    ]
  ]
]

enumerate tree[
  list[ [1] list[ [2] list[ [3] [4] ]] [5] ]
]
```

## 117

```
define[
  sum odd squares[tree]
  accumulate[
    [+]
    [0]
    map[
      [square]
      filter[
        [odd?]
        enumerate tree[tree]
      ]
    ]
  ]
]

define[
  even fibs[n]
  accumulate[
    [cons]
    [nil]
    filter[
      [even?]
      map[
        [fib]
        enumerate interval[ [0] [n] ]
      ]
    ]
  ]
]

define[
  list fib squares[n]
  accumulate[
    [cons]
    [nil]
    map[
      [square]
      map[
        [fib]
        enumerate interval[ [0] [n] ]
      ]
    ]
  ]
]

list fib squares[10]
```

## 118

```
define[
  product of squares of odd elements[sequence]
  accumulate[
    [*]
    [1]
    map[
      [square]
      filter[ [odd?] [sequence] ]
    ]
  ]
]

product of squares of odd elements[
  list[ [1] [2] [3] [4] [5] ]
]

define[
  salary of highest paid programmer[records]
  accumulate[
    [max]
    [0]
    map[
      [salary]
      filter[
        [programmer?]
        [records]
      ]
    ]
  ]
]
```

## 119

```
define[
  map[ [p] [sequence] ]
  accumulate[
    fun[  [ [x] [y] ]  [??]  ]
    [nil]
    [sequence]
  ]
]

define[
  append[ [seq1] [seq2] ]
  accumulate[ [cons] [??] [??] ]
]

define[
  length[sequence]
  accumulate[ [??] [0] [sequence] ]
]

define[
  horner eval[ [x] [coefficient sequence] ]
  accumulate[
    fun[  [ [this coeff] [higher terms] ]  [??]  ]
    [0]
    [coefficient sequence]
  ]
]

horner eval[
  [2]
  list[ [1] [3] [0] [5] [0] [1] ]
]
```

## 120

```
define[
  count leaves[t]
  accumulate[
    [??]
    [??]
    map[ [??] [??] ]
  ]
]

define[
  accumulate n[ [op] [init] [seqs] ]
  ?[
    null?[car[seqs]]  [nil]
    cons[
      accumulate[ [op] [init] [??] ]
      accumulate n[ [op] [init] [??] ]
    ]
  ]
]

dot product[ [v] [w] ]

matrix * vector[ [m] [v] ]

matrix * matrix[ [m] [n] ]

transpose[m]
```

## 121

```
define[
  dot product[ [v] [w] ]
  accumulate[  [+]  [0]  map[ [*] [v] [w] ]  ]
]

define[
  matrix * vector[ [m] [v] ]
  map[ [??] [m] ]
]

define[
  transpose[mat]
  accumulate n[ [??] [??] [mat] ]
]

define[
  matrix * matrix[ [m] [n] ]
  let[
    [cols] transpose[n]
    map[ [??] [m] ]
  ]
]

define[
  fold left[ [op] [initial] [sequence] ]
  define[
    iter[ [result] [rest] ]
    ?[
      null?[rest]  [result]
      iter[
        op[ [result] car[rest] ]
        cdr[rest]
      ]
    ]
  ]
  iter[ [initial] [sequence] ]
]

fold right[  [/]  [1]  list[ [1] [2] [3] ]  ]

fold left[  [/]  [1]  list[ [1] [2] [3] ]  ]

fold right[  [list]  [nil]  list[ [1] [2] [3] ]  ]

fold left[  [list]  [nil]  list[ [1] [2] [3] ]  ]
```

## 122

```
define[
  reverse[sequence]
  fold right[
    fun[
      [ [x] [y] ]
      [??]
    ]
    [nil]
    [sequence]
  ]
]

define[
  reverse[sequence]
  fold left[
    fun[
      [ [x] [y] ]
      [??]
    ]
    [nil]
    [sequence]
  ]
]
```

## 123

```
accumulate[
  [append]
  [nil]
  map[
    fun[ [i]
      map[
        fun[ [j]
          list[ [i] [j] ]
        ]
        enumerate interval[  [1]  -[ [i] [1] ]  ]
      ]
    ]
    enumerate interval[ [1] [n] ]
  ]
]

define[
  flatmap[ [proc] [seq] ]
  accumulate[  [append]  [nil]  map[ [proc] [seq] ]  ]
]

define[
  prime sum?[pair]
  prime?[
    +[ car[pair] cadr[pair] ]
  ]
]

define[
  make pair sum[pair]
  list[
    car[pair]
    cadr[pair]
    +[
      car[pair]
      cadr[pair]
    ]
  ]
]

define[
  prime sum pairs[n]
  map[
    [make pair sum]
    filter[
      [prime sum?]
      flatmap[
        fun[ [i]
          map[
            fun[ [j]
              list[ [i] [j] ]
            ]
            enumerate interval[ [1] -[[i][1]] ]
          ]
        ]
        enumerate interval[ [1] [n] ]
      ]
    ]
  ]
]
```

## 124

```
define[
  permutations[s]
  ?[
    null?[s] list[nil]
    flatmap[
      fun[ [x]
        map[
          fun[ [p]
            cons[ [x] [p] ]
          ]
          permutations[
            remove[ [x] [s] ]
          ]
        ]
      ]
      [s]
    ]
  ]
]

define[
  remove[ [item] [sequence] ]
  filter[
    fun[ [x]
      not[=[ [x] [item] ]]
    ]
    [sequence]
  ]
]
```

## 125

```
define[
  queens[board size]
  define[
    queen cols[k]
    ?[
      =[ [k] [0] ]  list[empty board]
      filter[
        fun[ [positions]
          safe?[ [k] [positions] ]
        ]
        flatmap[
          fun[ [rest of queens]
            map[
              fun[ [new row]
                adjoin position[ [new row] [k] [rest of queens] ]
              ]
              enumerate interval[ [1] [board size] ]
            ]
          ]
          queen cols[-[ [k] [1] ]]
        ]
      ]
    ]
  ]
  queen cols[board size]
]
```

## 126

```
flatmap[
  fun[ [new row]
    map[
      fun[ [rest of queens]
        adjoin position[ [new row] [k] [rest of queens] ]
      ]
      queen cols[-[ [k] [1] ]]
    ]
  ]
  enumerate interval[ [1] [board size] ]
]
```

## 128

```
define[ [wave2]
  beside[ [wave] flip vert[wave] ]
]

define[ [wave4]
  below[ [wave2] [wave2] ]
]
```

## 130

```
define[
  flipped pairs[painter]
  let[
    [painter2]  beside[ [painter] flip vert[painter] ]
    below[ [painter2] [painter2] ]
  ]
]

define[ [wave4] flipped pairs[wave] ]
```

## 131

```
define[  right split[ [painter] [n] ]
  ?[
    =[ [n] [0] ]  [painter]
    let[
      [smaller]
        right split[  [painter]  -[ [n] [1] ]  ]
      beside[  [painter]  below[ [smaller] [smaller] ]  ]
    ]
  ]
]
```

## 132

```
define[
  corner split[ [painter] [n] ]
  ?[
    =[ [n] [0] ]  [painter]
    let[
      [up]  up split[ [painter] -[[n][1]] ]
      [right]  right split[ [painter] -[[n][1]] ]
      let[
        [top left]  beside[ [up] [up] ]
        [bottom right]  below[ [right] [right] ]
        [corner]  corner split[ [painter] -[[n][1]] ]
        beside[
          below[ [painter] [top left] ]
          below[ [bottom right] [corner] ]
        ]
      ]
    ]
  ]
]

define[
  square limit[ [painter] [n] ]
  let[
    [quarter]  corner split[ [painter] [n] ]
    let[
      [half]  beside[ flip horiz[quarter] [quarter] ]
      below[ flip vert[half] [half] ]
    ]
  ]
]

define[
  square of four[ [tl] [tr] [bl] [br] ]
  fun[ [painter] 
    let[
      [top]  beside[ tl[painter] tr[painter] ]
      [bottom]  beside[ bl[painter] br[painter] ]
      below[ [bottom] [top] ]
    ]
  ]
]
```

## 133

```
right split[ [wave] [4] ]

right split[ [rogers] [4] ]

corner split[ [wave] [4] ]

corner split[ [rogers] [4] ]

define[ [flipped pairs]
  square of four[ [identity] [flip vert] [identity] [flip vert] ]
]
```

## 134

```
define[ flipped pairs[painter]
  let[
    [combine4]  square of four[ [identity] [flip vert] [identity] [flip vert] ]
    combine4[painter]
  ]
]

define[  square limit[ [painter] [n] ]
  let[
    [combine4]  square of four[ [flip horiz] [identity] [rotate180] [flip vert] ]
    combine4[corner split[ [painter] [n] ]]
  ]
]

define[  [right split]  split[ [beside] [below] ]  ]
define[  [up split]  split[ [below] [beside] ]  ]
```

## 135

```
define[  frame coord map[frame]
  fun[ [v]
    add vect[
      origin frame[frame]
      add vect[  
        scale vect[ xcor vect[v] edge1 frame[frame] ]
        scale vect[ ycor vect[v] edge2 frame[frame] ]
      ]
    ]
  ]
]
```

## 136

```
ap[
  frame coord map[a frame]
  [  make vect[ [0] [0] ]  ]
]

origin frame[a frame]

define[  make frame[ [origin] [edge1] [edge2] ]
  list[ [origin] [edge1] [edge2] ]
]

define[  make frame[ [origin] [edge1] [edge2] ]
  cons[  [origin]  cons[ [edge1] [edge2] ]  ]
]
```

## 137

```
define[
  segments->painter[segment list]
  fun[ [frame]
    for each[
      fun[ [segment]
        draw line[
          ap[ frame coord map[frame][start segment[segment]] ]
          ap[ frame coord map[frame][end segment[segment]] ]
        ]
      ]
      [segment list]
    ]
  ]
]
```

## 138

```
define[
  transform painter[ [painter] [origin] [corner1] [corner2] ]
  fun[ [frame]
    let[
      [m]  frame coord map[frame]
      let[
        [new origin]  m[origin]
        painter[
          make frame[
            [new origin]
            sub vect[ m[corner1] [new origin] ]
            sub vect[ m[corner2] [new origin] ]
          ]
        ]
      ]
    ]
  ]
]

define[
  flip vert[painter]
  transform painter[
    [painter]
    make vect[ [0.0] [1.0] ]   new origin
    make vect[ [1.0] [1.0] ]   new end of edge1
    make vect[ [0.0] [0.0] ]   new end of edge2 
  ]
]

define[
  shrink to upper right[painter]
  transform painter[
    [painter]
    make vect[ [0.5] [0.5] ]
    make vect[ [1.0] [0.5] ]
    make vect[ [0.5] [1.0] ]
  ]
]
```

## 139

```
define[
  rotate90[painter]
  transform painter[
    [painter]
    make vect[ [1.0] [0.0] ]
    make vect[ [1.0] [1.0] ]
    make vect[ [0.0] [0.0] ]
  ]
]

define[
  squash inwards[painter]
  transform painter[
    [painter]
    make vect[ [0.0] [0.0] ]
    make vect[ [0.65] [0.35] ]
    make vect[ [0.35] [0.65] ]
  ]
]

define[
  beside[ [painter1] [painter2] ]
  let[
    [split point]  make vect[ [0.5] [0.0] ]
    let[
      [paint left]  transform painter[
        [painter1]
        make vect[ [0.0] [0.0] ]
        [split point]
        make vect[ [0.0] [1.0] ]
      ]
      [paint right]  transform painter[
        [painter2]
        [split point]
        make vect[ [1.0] [0.0] ]
        make vect[ [0.5] [1.0] ]
      ]
      fun[ [frame]
        paint left[frame]
        paint right[frame]
      ]
    ]
  ]
]
```

## 142

### Introducing Quotation!

So here we're using S-expressions not to write MIT Scheme, but to encode some lists. Similarly, the first two lists could be sensibly translated to Jevko (as opposed to Jevkalk) as:

```
[ [a] [b] [c] [d] ]

[ [23] [45] [17] ]
```

The third list could be:

```
[  [ [Norah] [12] ]  [ [Molly] [9] ]  [ [Anna] [7] ]  [ [Lauren] [6] ]  [ [Charlotte] [4] ]  ]
```

or, more succinctly:

```
[ Norah[12] Molly[9] Anna[7] Lauren[6] Charlotte[4] ]
```

Now the following two S-expressions are also meant to be just S-expressions (and not code), but happen to look like Scheme. So our translation will look like Jevkalk (but is meant to be just Jevko):

```
*[  +[ [23] [45] ]  +[ [x] [9] ]  ]

define[ fact[n]
  ?[
    =[ [n] [1] ]  [1]
    *[  [n]  fact[ -[[n][1]] ]  ]
  ]
]
```

## 143

```
define[ [a] [1] ]

define[ [b] [2] ]

list[ [a] [b] ]

list[ '[a] '[b] ]

list[ '[a] [b] ]
```

Note: we don't need separate `quote[...]`.

## 144

Now, a somewhat naive translation of the code at the top of the page would be:

```
car[  '[ [a] [b] [c] ]  ]

cdr[  '[ [a] [b] [c] ]  ]
```

But this creates a problem. `car` and `cdr` are well-defined for lists, but not really for arbitrary jevkos.

So here we are forced to continue to flesh out the thread from page [110](#110).

One way to proceed would be to define `car` and `cdr` only for lists. So this would be valid:

```
car[  list[ [a] [b] [c] ]  ]

cdr[  list[ [a] [b] [c] ]  ]
```

While the above wouldn't. `'` would actually mean `quote` rather than `list`, like I imagined previously.

Now for quoted jevkos we would need a separate set for primitive functions for analysis.

Let's imagine how could such functions look like.

I'll leave proper naming for later. First let's make up a function `f1`, which would be somewhat like `car` and could be applied like so:

```
f1[  '[ [a] [b] [c] ]  ]
```

and for this application it would return:

```
[a]
```

Or should that be:

```
'[a]
```

? Not sure yet, let's not commit to either for the time being. Let's say it returns:

```
?[a]
```

where `?` represents the prefix being empty or equal to `'` (or maybe something else).

Now what should `f1` return for something like:

```
f1[  '[ x1[x2] y1[y2] ]  ]
```

Here I will take my reasoning process offline. I am leaving it to serve as an example of how one might go about designing something like this.

***

Upon some reflection, we may imagine the following useful functions:

```
fsj[jevko]

fsp[jevko]
```

`fsj` takes a `jevko` and returns its first subjevko's jevko, e.g.:

```
fsj[ '[x1[x2] y1[y2]] ]
```

would return

```
'[x2]
```

`fsp` takes a `jevko` and returns its first subjevko's prefix, e.g.:

```
fsp[ '[x1[x2] y1[y2]] ]
```

would return

```
'[x1]
```

Note: the prefix is returned as a jevko (perhaps it should be a string instead -- or there should be a separate function or conversion for that).

Another useful function would be `rss`:

```
rss[jevko]
```

`rss` takes a `jevko` and returns it sans the first subjevko, e.g.:

```
rss[ '[x1[x2] y1[y2]] ]
```

would return

```
'[ y1[y2]]
```

### Homoiconic output

A provisional name for a concept I've been thinking about on and off for a long time, can be defined something like:

> Homoiconic output/representation of a piece of data is the code that when executed would construct an equivalent piece of data.

Rephrased:

> A homoiconic text representation of data refers to the code that, when executed, can construct an identical replica of the original data using the smallest possible amount of code.

Something like that.

It's important to note here that most if not all languages, including MIT Scheme don't adhere to this. E.g. `(list 1 2 3)` is displayed as `(1 2 3)`. `(1 2 3)` can't be then executed to obtain the same list.

### Jevkalk-specific alternatives to `memq`

This is the original definition of `memq` translated to Jevkalk:

```
define[  memq[ [item] [x] ]
  ?[
    null?[x]  [false]
    eq?[ [item] car[x] ]  [x]
    memq[
      [item]
      cdr[x]
    ]
  ]
]
```

This won't do. We would be better served by a tailor-made equivalent or equivalents, e.g. `memj` which would use `fsj` and `rss` instead of `car` and `cdr`, `memp` which would use `fsp` and `rss`, maybe `memjp` which would use an alternative of both. Perhaps we could write a generalized `member` function in Jevkalk which would look something like this:

```
define[  member[ [item] [x] ]
  ?[
    null?[x]  [false]
    or[
      equal?[ [item] fsj[x] ]
      equal?[ [item] fsp[x] ]
    ]  [x]
    member[ [item] rss[x] ]
  ]
]
```

where `equal?` would signify generalized structural equality.

Let's translate the rest of the code with that in mind.

***

So instead of:

```
memq[  '[apple]  '[ [pear] [banana] [prune] ]  ]

memq[  '[apple]  '[ [x] apple[sauce] [y] [apple] [pear] ]  ]
```

we'd have something like:

```
memj[  '[apple]  '[ [pear] [banana] [prune] ]  ]

memj[  '[apple]  '[ [x] apple[sauce] [y] [apple] [pear] ]  ]
```

Then we have this (which is rather uncontroversial):

```
list[ '[a] '[b] '[c] ]

list[ list['[george]] ]
```

Then instead of this:

```
cdr[  '[ x1[x2] y1[y2] ]  ]
```

we'd have

```
rss[  '[ x1[x2] y1[y2] ]  ]
```

***

Now this naive translation:

```
cadr[  '[ x1[x2] y1[y2] ]  ]
```

should be this instead:

```
fsj[  '[ x1[x2] y1[y2] ]  ]
```

## 145

Just riffing here...

```
pair?[
  fsp[  '[ a[[short][list]] ]  ]
]

memj[
  '[red]
  '[ red[shoes] blue[socks] ]
]

memp[
  '[red]
  '[  red[ [shoes] [blue] [socks] ]  ]
]

equal?[
  '[  this[ [is] [a] [jevko] ]  ]
  '[  this[ [is] [a] [jevko] ]  ]
]

equal?[
  '[  this[ [is] [a] [jevko] ]  ]
  '[  this[ is[a] [jevko] ]  ]
]

fsp[ '['[abracadabra]] ]
```

## 147

```
variable?[e]

same variable?[ [v1] [v2] ]

sum?[e]

addend[e]

augend[e]

make sum[ [a1] [a2] ]

product?[e]

multiplier[e]

make product[ [m1] [m2] ]

define[  deriv[ [exp] [var] ]
  ?[
    number?[exp]  [0]
    variable?[exp]  ?[
      same variable?[ [exp] [var] ]  [1]
      [0]
    ]
    sum?[exp]  make sum[
      deriv[ addend[exp] [var] ]
      deriv[ augend[exp] [var] ]
    ]
    product?[exp]  make sum[
      make product[
        multiplier[exp]
        deriv[ multiplicand[exp] [var] ]
      ]
      make product[
        deriv[ multiplier[exp] [var] ]
        multiplicand[exp]
      ]
    ]
    error[
      [`unknown expression type -- DERIV`]
      [exp]
    ]
  ]
]
```

## 148

Note: we are assuming our expressions are lists, rather than jevkos, e.g.:

```
list[ '[+] [2] [3] ]
```

rather than

```
'[  +[ [2] [3] ]  ]
```

With that in mind, we proceed.

Now, we shall introduce the `pj?` predicate which will be used in place of `symbol?` in the definition of `variable?`:

```
define[  variable?[x]  pj?[x]  ]
```

`pj?` takes a jevko and returns `true` if it is primitive. A primitive jevko is one which does not have any subjevkos. E.g.:

```
pj?[ '[x] ]  true
pj?[ '[[a][b]] ]  false
pj?[ '[] ]  not sure; let's say true for now
```

Now we continue translating.

```
define[  same variable?[ [v1] [v2] ]
  and[
    variable?[v1]
    variable?[v2]
    eq?[ [v1] [v2] ]
  ]
]

define[  make sum[ [a1] [a2] ]  list[ '[+] [a1] [a2] ]  ]

define[  make product[ [m1] [m2] ]  list[ '[*] [m1] [m2] ]  ]

define[  sum?[x]
  and[
    pair?[x]
    eq?[ car[x] '[+] ]
  ]
]
```

Note: `cadr`, `caddr`, etc. can be defined for `list`s.

```
define[ addend[s] cadr[s] ]

define[ augend[s] caddr[s] ]

define[ product?[s]
  and[
    pair?[x]
    eq?[ car[x] '[*] ]
  ]
]

define[  multiplier[p]  cadr[p]  ]
```

### Alternative definitions

Here I introduce some functions to manipulate jevkos and make the whole thing based around jevkos rather than lists.

`'number?` checks if a jevko can be evaluated to a number (looks like a number literal).

The apostrophes in the signature of `deriv[ '[exp] '[var] ]` supress evaluation of the arguments (they are interpreted verbatim, as jevkos).

```
define[  deriv[ '[exp] '[var] ]
  ?[
    'number?[exp]  [0]
    variable?[exp]  ?[
      same variable?[ [exp] [var] ]  [1]
      [0]
    ]
    sum?[exp]  make sum[
      deriv[ addend[exp] [var] ]
      deriv[ augend[exp] [var] ]
    ]
    product?[exp]  make sum[
      make product[
        multiplier[exp]
        deriv[ multiplicand[exp] [var] ]
      ]
      make product[
        deriv[ multiplier[exp] [var] ]
        multiplicand[exp]
      ]
    ]
    error[
      [`unknown expression type -- DERIV`]
      [exp]
    ]
  ]
]
```

`name?` checks if a jevko looks like an identifier.

```
define[  variable?['[x]]  'name?[x]  ]
```

`'$` constructs jevkos and allows splicing in various parts from variables.

```
define[  make sum[ '[a1] '[a2] ]
  '$[ +[$[a1]$[a2]] ]
]

define[  make product[ '[m1] '[m2] ]
  '$[ *[$[m1]$[m2]] ]
]
```

`'nonempty?` checks if a jevko has at least one subjevko. Maybe there is a better name for this one.

`subs[jevko]` returns the list of the `jevko`'s subjevkos.

`at[list]` returns a function to select elements from the `list`. The function accepts 0-based indices. It should also work for negative indices, to select elements backwards from the end of the list (`-1` is the last element).

`prefix[subjevko]` returns the `subjevko`'s prefix as text.

`.` is a placeholder variable that always holds the value of the previous expression.

```
define[  sum?['[x]]
  and[
    'nonempty?[x]
    equals?[
      [[x] subs[.] at[.].[0] prefix[.]]
      ['+']
    ]
  ]
]
```

`as jevko[subjevko]` wraps the `subjevko` in a jevko.

```
define[ addend['[s]] 
  [s]
  subs[.]
  at[.].[0]
  jevko[.]
  subs[.]
  at[.].[0]
  as jevko[.] 
]

define[ augend['[s]] 
  [s]
  subs[.]
  at[.].[0]
  jevko[.]
  subs[.]
  at[.].[1]
  as jevko[.] 
]
```

## 149

```
define[  multiplicand[p]  caddr[p]  ]
```

Note: we shall translate `'(+ x 3)` into `list[ '[x] [3] ]`, etc.

```
deriv[  list[ '[+] '[x] [3] ]  '[x]  ]

deriv[  list[ '[*] '[x] [y] ]  '[x]  ]

deriv[  list[ '[*] list['[*]'[x]'[y]] list['[+]'[x][3]] ]  '[x]  ]

define[  make sum[ [a1] [a2] ]
  ?[
    =number?[ [a1] [0] ]  [a2]
    =number?[ [a2] [0] ]  [a1]
    and[
      number?[a1]
      number?[a2]
    ]  +[ [a1] [a2] ]
    list[ '[+] [a1] [a2] ]
  ]
]
```

## 150

```
define[  =number?[ [exp] [num] ]
  and[
    number?[exp]
    =[ [exp] [num] ]
  ]
]

define[  make product[ [m1] [m2] ]
  ?[
    or[
      =number?[ [m1] [0] ]
      =number?[ [m2] [0] ]
    ]  [0]
    =number?[ [m1] [1] ]  [m2]
    =number?[ [m2] [1] ]  [m1]
    and[
      number?[m1]
      number?[m2]
    ]  *[ [m1] [m2] ]
    list[ '[*] [m1] [m2] ]
  ]
]

deriv[  list[ '[+] '[x] [3] ]  '[x]  ]

deriv[  list[ '[*] '[x] '[y] ]  '[x]  ]

deriv[  list[ '[*] list['[*]'[x]'[y]] list['[+]'[x][3]] ]  '[x]  ]
```

## 151

```
deriv[
  list[ '[*] '[x] '[y] list['[+]'[x][3]] ]
  '[x]
]
```

## 152

```
define[
  element of set?[ [x] [set] ]
  ?[
    null?[set]  [false]
    equal?[ [x] car[set] ]  [true]
    element of set?[ [x] cdr[set] ]
  ]
]

define[
  adjoin set[ [x] [set] ]
  ?[
    element of set?[ [x] [set] ]  [set]
    cons[ [x] [set] ]
  ]
]
```

## 153

```
define[
  intersection set[ [set1] [set2] ]
  ?[
    or[ null?[set1] null?[set2] ]  [nil]
    element of set?[ car[set1] [set2] ]  cons[
      car[set1]
      intersection set[ cdr[set1] [set2] ]
    ]
    intersection set[ cdr[set1] [set2] ]
  ]
]
```

Or using `head`, `tail`, and `pair` instead of `car`, `cdr`, and `cons`.

```
define[
  intersection set[ [set1] [set2] ]
  ?[
    or[ null?[set1] null?[set2] ]  [nil]
    element of set?[ head[set1] [set2] ]  pair[
      head[set1]
      intersection set[ tail[set1] [set2] ]
    ]
    intersection set[ tail[set1] [set2] ]
  ]
]
```

## 154

```
define[
  element of set?[ [x] [set] ]
  ?[
    null?[set]  [false]
    =[ [x] car[set] ]  [true]
    <[ [x] car[set] ]  [false]
    element of set?[ [x] cdr[set] ]
  ]
]
```

## 155

```
define[
  intersection set[ [set1] [set2] ]
  ?[
    or[ null?[set1] null?[set2] ]  [nil]
    let[
      [x1]  car[set1]
      [x2]  car[set2]
      ?[
        =[ [x1] [x2] ]  cons[
          [x1]
          intersection set[
            cdr[set1]
            cdr[set2]
          ]
        ]
        <[ [x1] [x2] ]  intersection set[
          cdr[set1]
          [set2]
        ]
        <[ [x2] [x1] ]  intersection set[
          [set1]
          cdr[set2]
        ]
      ]
    ]
  ]
]
```

## 156

```
define[  entry[tree]  car[tree]  ]

define[  left branch[tree]  cadr[tree]  ]
```

## 157

```
define[  right branch[tree]  caddr[tree]  ]

define[  make tree[ [entry] [left] [right] ]
  list[ [entry] [left] [right] ]
]

define[  element of set?[ [x] [set] ]
  ?[
    null?[set]  [false]
    =[ [x] entry[set] ]  [true]
    <[ [x] entry[set] ]  element of set?[
      [x]
      left branch[set]
    ]
    >[ [x] entry[set] ]  element of set?[
      [x]
      right branch[set]
    ]
  ]
]

define[  adjoin set[ [x] [set] ]
  ?[
    null?[set]  make tree[ [x] [nil] [nil] ]
    =[ [x] entry[set] ]  [set]
    <[ [x] entry[set] ]  make tree[
      entry[set]
      adjoin set[ [x] left branch[set] ]
      right branch[set]
    ]
    >[ [x] entry[set] ]  make tree[
      entry[set]
      left branch[set]
      adjoin set[ [x] right branch[set] ]
    ]
  ]
]
```

## 158

```
define[
  tree->list 1[tree]
  ?[
    null?[tree]  [nil]
    append[
      tree->list 1[ left branch[tree] ]
      cons[
        entry[tree]
        tree->list 1[ right branch[tree] ]
      ]
    ]
  ]
]
```

## 159

```
define[  tree->list 2[tree]
  define[  copy to list[ [tree] [result list] ]
    ?[
      null?[tree]  [result list]
      copy to list[
        left branch[tree]
        cons[
          entry[tree]
          copy to list[
            right branch[tree]
            [result list]
          ]
        ]
      ]
    ]
  ]
  copy to list[ [tree] [nil] ]
]

define[  list->tree[elements]
  car[
    partial tree[ [elements] length[elements] ]
  ]
]

define[  partial tree[ [elts] [n] ]
  ?[
    =[ [n] [0] ]  cons[ [nil] [elts] ]
    let[
      [left size]  quotient[ -[[n][1]] [2] ]
      let[
        [left result]  partial tree[ [elts] [left size] ]
        let[
          [left tree]  car[left result]
          [non left elts]  cdr[left result]
          [right size]  -[ [n] +[[left size][1]] ]
          let[
            [this entry]  car[non left elts]
            [right result]  partial tree[
              cdr[non left elts]
              [right size]
            ]
            let[
              [right tree]  car[right result]
              [remaining elts]  cdr[right result]
              cons[
                make tree[ [this entry] [left tree] [right tree] ]
                [remaining elts]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
]
```

## 160

```
define[
  lookup[ [given key] [set of records] ]
  ?[
    null?[set of records]  [false]
    equal?[ [given key] key[car[set of records]] ]  car[set of records]
    lookup[ [given key] cdr[set of records] ]
  ]
]
```

## 165

```
define[  make leaf[ [symbol] [weight] ]
  list[ '[leaf] [symbol] [weight] ]
]

define[  leaf?[object]
  eq?[ car[object] '[leaf] ]
]

define[  symbol leaf[x]  cadr[x]  ]
define[  weight leaf[x]  caddr[x]  ]

define[  make code tree[ [left] [right] ]
  list[
    [left]
    [right]
    append[ symbols[left] symbols[right] ]
    +[ weight[left] weight[right] ]
  ]
]

define[  left branch[tree]  car[tree]  ]

define[  right branch[tree]  cadr[tree]  ]

define[  symbols[tree]
  ?[
    leaf?[tree]  list[symbol leaf[tree]]
    caddr[tree]
  ]
]

define[  weight[tree]
  ?[
    leaf?[tree]  weight leaf[tree]
    cadddr[tree]
  ]
]
```

## 166

```
define[  decode[ [bits] [tree] ]
  define[  decode 1[ [bits] [current branch] ]
    ?[
      null?[bits]  [nil]
      let[
        [next branch]  choose branch[
          car[bits]
          [current branch]
        ]
        ?[
          leaf?[next branch]  cons[
            symbol leaf[next branch]
            decode 1[ cdr[bits] [tree] ]
          ]
          decode 1[ cdr[bits] [next branch] ]
        ]
      ]
    ]
  ]
  decode 1[ [bits] [tree] ]
]

define[  choose branch[ [bit] [branch] ]
  ?[
    =[ [bit] [0] ]  left branch[branch]
    =[ [bit] [1] ]  right branch[branch]
    error[ ['bad bit -- CHOOSE-BRANCH'] [bit] ]
  ]
]
```

## 167

```
define[  adjoin set[ [x] [set] ]
  ?[
    null?[set]  list[x]
    <[ weight[x] weight[car[set]] ]  cons[ [x] [set] ]
    cons[
      car[set]
      adjoin set[ [x] cdr[set] ]
    ]
  ]
]

define[  make leaf set[pairs]
  ?[
    null?[pairs]  [nil]
    let[
      [pair]  car[pair]
      adjoin set[
        make leaf[ car[pair] cadr[pair] ]
        make leaf set[ cdr[pairs] ]
      ]
    ]
  ]
]

define[  [sample tree]
  make code tree[
    make leaf[ '[A] [4] ]
    make code tree[
      make leaf[ '[B] [2] ]
      make code tree[
        make leaf[ '[D] [1] ]
        make leaf[ '[C] [1] ]
      ]
    ]
  ]
]

define[  [sample message]  '[[0][1][1][0][0][1][0][1][0][1][1][1][0]]  ]

define[  encode[ [message] [tree] ]
  ?[  null?[message] [nil]
    append[
      encode symbol[ car[message] [tree] ]
      encode[ cdr[message] [tree] ]
    ]
  ]
]
```

## 168

```
define[  generate huffman tree[pairs]
  successive merge[ make leaf set[pairs] ]
]
```

## 173

```
make from real imag[ real part[z] imag part[z] ]

make from mag ang[ magnitude[z] angle[z] ]

define[  add complex[ [z1] [z2] ]
  make from real imag[
    +[ real part[z1] real part[z2] ]
    +[ imag part[z1] imag part[z2] ]
  ]
]

define[  sub complex[ [z1] [z2] ]
  make from real imag[
    -[ real part[z1] real part[z2] ]
    -[ imag part[z1] imag part[z2] ]
  ]
]

define[  mul complex[ [z1] [z2] ]
  make from mag ang[
    *[ magnitude[z1] magnitude[z2] ]
    +[ angle[z1] angle[z2] ]
  ]
]

define[  div complex[ [z1] [z2] ]
  make from mag ang[
    /[ magnitude[z1] magnitude[z2] ]
    -[ angle[z1] angle[z2] ]
  ]
]
```

## 174

```
define[  real part[z]  car[z]  ]

define[  imag part[z]  cdr[z]  ]

define[  magnitude[z]
  sqrt[+[ square[real part[z]] square[imag part[z]] ]]
]

define[  angle[z]
  atan[ imag part[z] real part[z] ]
]

define[  make from real imag[ [x] [y] ]  cons[ [x] [y] ]  ]

define[  make from mag ang[ [r] [a] ]
  cons[  *[ [r] cos[a] ]  *[ [r] sin[a] ]  ]
]

define[  real part[z]
  *[ magnitude[z] cos[angle[z]] ]
]
```

## 175

```
define[  imag part[z]
  *[ magnitude[z] sin[angle[z]] ]
]

define[  magnitude[z]  car[z]  ]

define[  angle[z]  cdr[z]  ]

define[  make from real imag[ [x] [y] ]
  cons[
    sqrt[+[ square[x] square[y] ]]
    atan[ [y] [x] ]
  ]
]

define[  make from mag ang[ [r] [a] ]  cons[ [r] [a] ]  ]
```

## 176

```
define[  attach tag[ [type tag] [contents] ]
  cons[ [type tag] [contents] ]
]

define[  type tag[datum]
  ?[
    pair?[datum]  car[datum]
    error[ ['Bad tagged datum -- TYPE-TAG'] [datum] ]
  ]
]

define[  contents[datum]
  ?[
    pair?[datum]  cdr[datum]
    error[ ['Bad tagged datum -- CONTENTS'] [datum] ]
  ]
]

define[  rectangular?[z]
  eq?[ type tag[z] '[rectangular] ]
]

define[  polar?[z]
  eq?[ type tag[z] '[polar] ]
]

define[  real part rectangular[z]  car[z]  ]

define[  imag part rectangular[z]  cdr[z]  ]

define[  magnitude rectangular[z]
  sqrt[+[
    square[real part rectangular[z]]
    square[imag part rectangular[z]]
  ]]
]

define[  angle rectangular[z]
  atan[
    imag part rectangular[z]
    real part rectangular[z]
  ]
]
```

## 177

```
define[  make from real imag rectangular[ [x] [y] ]
  attach tag[  '[rectangular]  cons[ [x] [y] ]  ]
]

define[  make from mag ang rectangular[ [r] [a] ]
  attach tag[
    '[rectangular]
    cons[
      *[ [r] cos[a] ]
      *[ [r] sin[a] ]
    ]
  ]
]

define[  real part polar[z]
  *[  magnitude polar[z]  cos[angle polar[z]]  ]
]

define[  imag part polar[z]
  *[  magnitude polar[z] sin[angle polar[z]] ]
]

define[  magnitude polar[z]  car[z]  ]

define[  angle polar[z]  cdr[z]  ]

define[  make from real imag polar[ [x] [y] ]
  attach tag[
    '[polar]
    cons[
      sqrt[+[ square[x] square[y] ]]
      atan[ [y] [x] ]
    ]
  ]
]

define[  make from mag ang polar[ [r] [a] ]
  attach tag[  '[polar]  cons[ [r] [a] ]  ]
]

define[  real part[z]
  ?[
    rectangular?[z]  real part rectangular[contents[z]]
    polar?[z]  real part polar[contents[z]]
    error[ ['Unknown type -- REAL-PART'] [z] ]
  ]
]

define[  imag part[z]
  ?[
    rectangular?[z]  imag part rectangular[contents[z]]
    polar?[z]  imag part polar[contents[z]]
    error[ ['Unknown type -- IMAG-PART'] [z] ]
  ]
]
```

## 178

```
define[  magnitude[z]
  ?[
    rectangular?[z]  magnitude rectangular[contents[z]]
    polar?[z]  magnitude polar[contents[z]]
    error[ ['Unknown type -- MAGNITUDE'] [z] ]
  ]
]

define[  angle[z]
  ?[
    rectangular?[z]  angle rectangular[contents[z]]
    polar?[z]  angle polar[contents[z]]
    error[ ['Unknown type -- ANGLE'] [z] ]
  ]
]

define[  add complex[ [z1] [z2] ]
  make from real imag[
    +[ real part[z1] real part[z2] ]
    +[ imag part[z1] imag part[z2] ]
  ]
]

define[  make from real imag[ [x] [y] ]
  make from real imag rectangular[ [x] [y] ]
]

define[  make from mag ang[ [r] [a] ]
  make from mag ang polar[ [r] [a] ]
]
```

## 181

```
put[ [op] [type] [item] ]

get[ [op] [type] ]
```

## 182

```
define[  install rectangular package[]
  internal procedures:
  define[  real part[z]  car[z]  ]
  define[  imag part[z]  cdr[z]  ]
  define[  magnitude[z]
    sqrt[+[ square[real part[z]] square[imag part[z]] ]]
  ]
  define[  angle[z]
    atan[ imag part[z] real part[z] ]
  ]
  define[  make from real imag[ [x] [y] ]  cons[ [x] [y] ]  ]
  define[  make from mag ang[ [r] [a] ]
    cons[  *[ [r] cos[a] ]  *[ [r] sin[a] ]  ]
  ]

  interface to the rest of the system:
  define[  tag[x]  attach tag[ '[rectangular] [x] ]  ]
  put[ '[real part] '[[rectangular]] [real part]]
  put[ '[imag part] '[[rectangular]] [imag part]]
  put[ '[magnitude] '[[rectangular]] [magnitude]]
  put[ '[angle] '[[rectangular]] [angle]]

  put[ '[make from real imag] '[rectangular] fun[
    [ [x] [y] ]
    tag[ make from real imag[ [x] [y] ]]
  ]]
  put[ '[make from mag ang] '[rectangular] fun[
    [ [r] [a] ]
    tag[ make from mag ang[ [r] [a] ]]
  ]]

  '[done]
]
```

## 183

```
define[  install polar package[]
  internal procedures:
  define[  magnitude[z]  car[z]  ]
  define[  angle[z]  cdr[z]  ]
  define[  make from mag ang[ [r] [a] ]
    cons[ [r] [a] ]
  ]
  define[  real part[z]
    *[ magnitude[z] cos[angle[z]] ]
  ]
  define[  imag part[z]
    *[ magnitude[z] sin[angle[z]] ]
  ]
  define[  make from real imag[ [x] [y] ]
    cons[
      sqrt[+[ square[x] square[y] ]]
      atan[ [y] [x] ]
    ]
  ]

  interface to the rest of the system:
  define[  tag[x]  attach tag[ '[polar] [x] ]  ]
  put[ '[real part] '[[polar]] [real part]]
  put[ '[imag part] '[[polar]] [imag part]]
  put[ '[magnitude] '[[polar]] [magnitude]]
  put[ '[angle] '[[polar]] [angle]]

  put[ '[make from real imag] '[polar] fun[
    [ [x] [y] ]
    tag[ make from real imag[ [x] [y] ]]
  ]]
  put[ '[make from mag ang] '[polar] fun[
    [ [r] [a] ]
    tag[ make from mag ang[ [r] [a] ]]
  ]]

  '[done]
]

apply[ [+] list[[1][2][3][4]] ]
```

## 184

```
define[  apply generic[ [op] ...[args] ]
  let[
    [type tags] map[ [type tag] [args] ]
    let[
      [proc] get[ [op] [type tags] ]
      ?[
        [proc]  apply[  [proc]  map[ [contents] [args] ]  ]
        error[
          ['No method for these types -- APPLY-GENERIC']
          list[ [op] [type tags] ]
        ]
      ]
    ]
  ]
]

define[  real part[z]  apply generic[ '[real part] [z] ]  ]

define[  imag part[z]  apply generic[ '[imag part] [z] ]  ]

define[  magnitude[z]  apply generic[ '[magnitude] [z] ]  ]

define[  angle[z]  apply generic[ '[angle] [z] ]  ]

define[  make from real imag[ [x] [y] ]
  [  get[ '[make from real imag] '[rectangular] ] .[ [x] [y] ] ]
]

define[  make from mag ang[ [r] [a] ]
  [  get[ '[make from mag ang] '[polar] ] .[ [r] [a] ] ]
]

define[  deriv[ [exp] [var] ]
  ?[
    number?[exp]  [0]
    variable?[exp]  ?[ same variable?[[exp][var]] [1] [0] ]
    sum?[exp] make sum[
      deriv[ addend[exp] [var] ]
      deriv[ augend[exp] [var] ]
    ]
    product?[exp]  make sum[
      make product[
        multiplier[exp]
        deriv[ multiplicand[exp] [var] ]
      ]
      make product[
        deriv[ multiplier[exp] [var] ]
        multiplicand[exp]
      ]
    ]
  ]
  <more rules can be added here>
  error[ ['unknown expression type -- DERIV'] [exp] ]
]
```

## 185

```
define[  deriv[ [exp] [var] ]
  ?[
    number?[exp]  [0]
    variable?[exp]  ?[ same variable?[[exp][var]] [1] [0] ]
    [
      get[ '[deriv] operator[exp] ]
      .[ operands[exp] [var] ]
    ]
  ]
]

define[  operator[exp]  car[exp]  ]

define[  operands[exp]  cdr[exp]  ]

[  get[ operator[exp] '[deriv] ]  .[ operands[exp] [var] ]  ]
```

## 186

```
define[  make from real imag[ [x] [y] ]
  define[  dispatch[op]
    ?[
      eq?[ [op] '[real part] ]  [x]
      eq?[ [op] '[imag part] ]  [y]
      eq?[ [op] '[magnitude] ]  sqrt[+[ square[x] square[y] ]]
      eq?[ [op] '[angle] ]  atan[ [y] [x] ]
      error[ ['Unknown op -- MAKE-FROM-REAL-IMAG'] [op] ]
    ]
  ]
  [dispatch]
]
```

## 187

```
define[  apply generic[ [op] [arg] ]  arg[op]  ]
```

## 189

```
define[  add[ [x] [y] ]  apply generic[ '[add] [x] [y] ]  ]

define[  sub[ [x] [y] ]  apply generic[ '[sub] [x] [y] ]  ]

define[  mul[ [x] [y] ]  apply generic[ '[mul] [x] [y] ]  ]

define[  div[ [x] [y] ]  apply generic[ '[div] [x] [y] ]  ]

define[  install scheme number package[]
  define[  tag[x]
    attach tag[ '[scheme number] [x] ]
  ]
  put[  '[add]  '[ [scheme number] [scheme number] ]
    fun[  [ [x] [y] ]  tag[ +[[x][y]] ]  ]
  ]
  put[  '[sub]  '[ [scheme number] [scheme number] ]
    fun[  [ [x] [y] ]  tag[ -[[x][y]] ]  ]
  ]
  put[  '[mul]  '[ [scheme number] [scheme number] ]
    fun[  [ [x] [y] ]  tag[ *[[x][y]] ]  ]
  ]
  put[  '[div]  '[ [scheme number] [scheme number] ]
    fun[  [ [x] [y] ]  tag[ /[[x][y]] ]  ]
  ]
  put[  '[make]  '[scheme number]
    fun[  [x]  tag[x]  ]
  ]
  '[done]
]

define[  make scheme number[n]
  get[ '[make] '[scheme number] ].[n]
]
```

## 190

```
define[  install rational package[]
  internal procedures:
  define[  numer[x]  car[x]  ]
  define[  denom[x]  cdr[x]  ]
  define[  make rat[ [n] [d] ]
    let[
      [g]  gcd[ [n] [d] ]
      cons[  /[ [n] [g] ]  /[ [d] [g] ]  ]
    ]
  ]
  define[  add rat[ [x] [y] ]
    make rat[
      +[
        *[ numer[x] denom[y] ]
        *[ numer[y] denom[x] ]
      ]
      *[ denom[x] denom[y] ]
    ]
  ]
  define[  sub rat[ [x] [y] ]
    make rat[
      -[
        *[ numer[x] denom[y] ]
        *[ numer[y] denom[x] ]
      ]
      *[ denom[x] denom[y] ]
    ]
  ]
  define[  mul rat[ [x] [y] ]
    make rat[
      *[ numer[x] numer[y] ]
      *[ denom[x] denom[y] ]
    ]
  ]
  define[  div rat[ [x] [y] ]
    make rat[
      *[ numer[x] denom[y] ]
      *[ denom[x] numer[y] ]
    ]
  ]

  interface to the rest of the system:
  define[  tag[x]  attach tag[ '[rational] [x] ]  ]
  put[  '[add]  '[ [rational] [rational] ]
    fun[  [ [x] [y] ]  tag[ add rat[[x][y]] ]  ]
  ]
  put[  '[sub]  '[ [rational] [rational] ]
    fun[  [ [x] [y] ]  tag[ sub rat[[x][y]] ]  ]
  ]
  put[  '[mul]  '[ [rational] [rational] ]
    fun[  [ [x] [y] ]  tag[ mul rat[[x][y]] ]  ]
  ]
  put[  '[div]  '[ [rational] [rational] ]
    fun[  [ [x] [y] ]  tag[ div rat[[x][y]] ]  ]
  ]

  put[  '[make]  '[rational]
    fun[  [ [n] [d] ]  tag[ make rat[[n][d]] ]  ]
  ]
  '[done]
]

define[  make rational[ [n] [d] ]
  get[ '[make] '[rational] ].[ [n] [d] ]
]
```

## 191

```
define[  install complex package[]
  imported procedures from rectangular and polar packages:
  define[  make from real imag[ [x] [y] ]
    get[ '[make from real imag] '[rectangular] ].[ [x] [y] ]
  ]
  define[  make from mag ang[ [r] [a] ]
    get[ '[make from mag ang] '[polar] ].[ [r] [a] ]
  ]

  internal procedures:
  define[  add complex[ [z1] [z2] ]
    make from real imag[
      +[ real part[z1] real part[z2] ]
      +[ imag part[z1] imag part[z2] ]
    ]
  ]
  define[  sub complex[ [z1] [z2] ]
    make from real imag[
      -[ real part[z1] real part[z2] ]
      -[ imag part[z1] imag part[z2] ]
    ]
  ]
  define[  mul complex[ [z1] [z2] ]
    make from mag ang[
      *[ magnitude[z1] magnitude[z2] ]
      +[ angle[z1] angle[z2] ]
    ]
  ]
  define[  div complex[ [z1] [z2] ]
    make from mag ang[
      /[ magnitude[z1] magnitude[z2] ]
      -[ angle[z1] angle[z2] ]
    ]
  ]

  interface to the rest of the system:
  define[  tag[z]  attach tag[ '[complex] [z] ]  ]
  put[  '[add]  '[ [complex] [complex] ]
    fun[  [ [z1] [z2] ]  tag[ add complex[[z1][z2]] ]  ]
  ]
  put[  '[sub]  '[ [complex] [complex] ]
    fun[  [ [z1] [z2] ]  tag[ sub complex[[z1][z2]] ]  ]
  ]
  put[  '[mul]  '[ [complex] [complex] ]
    fun[  [ [z1] [z2] ]  tag[ mul complex[[z1][z2]] ]  ]
  ]
  put[  '[div]  '[ [complex] [complex] ]
    fun[  [ [z1] [z2] ]  tag[ div complex[[z1][z2]] ]  ]
  ]

  put[  '[make from real imag]  '[complex]
    fun[  [ [x] [y] ]  tag[ make from real imag[[x][y]] ]  ]
  ]
  put[  '[make from mag ang]  '[complex]
    fun[  [ [r] [a] ]  tag[ make from mag ang[[r][a]] ]  ]
  ]
  '[done]
]
```

## 192

```
define[  make complex from real imag[ [x] [y] ]
  get[ '[make from real imag] '[complex] ].[ [x] [y] ]
]
define[  make complex from mag ang[ [r] [a] ]
  get[ '[make from mag ang] '[complex] ].[ [r] [a] ]
]
```

## 193

```
put[  '[real part]  '[[complex]]  [real part]  ]
put[  '[real part]  '[[complex]]  [real part]  ]
put[  '[magnitude]  '[[complex]]  [magnitude]  ]
put[  '[angle]  '[[complex]]  [angle]  ]
```

## 194

```
to be included in the complex package:
define[  add complex to schemenum[ [z] [x] ]
  make from real imag[
    +[ real part[z] [x] ]
    imag part[z]
  ]
]

put[  '[add]  '[ [complex] [scheme number] ]
  fun[  [ [z] [x] ]  tag[add complex to schemenum[ [z] [x] ]]  ]
]
```

## 195

```
define[  scheme number->complex[n]
  make complex from real imag[ contents[n] [0] ]
]

put coerction[  '[scheme number]  '[complex]  scheme number->complex  ]
```

## 196

```
define[  apply generic[ [op] ...[args] ]
  let[
    [type tags]  map[ [type tag] [args] ]
    let[
      [proc]  get[ [op] [type tags] ]
      ?[
        [proc]  apply[ [proc] map[[contents][args]] ]
        ?[
          =[ length[args] [2] ]  let[
            [type1]  car[type tags]
            [type2]  cadr[type tags]
            [a1]  car[args]
            [a2]  cadr[args]
            let[
              [t1->t2]  get coercion[ [type1] [type2] ]
              [t2->t1]  get coercion[ [type2] [type1] ]
              ?[
                [t1->t2]  apply generic[ [op] t1->t2[a1] [a2] ]
                [t2->t1]  apply generic[ [op] [a1] t2->t1[a2] ]
                error[
                  ['No method for these types']
                  list[ [op] [type tags] ]
                ]
              ]
            ]
          ]
          error[
            ['No method for these types']
            list[ [op] [type tags] ]
          ]
        ]
      ]
    ]
  ]
]
```

Note: for `apply generic` to work properly, `get` needs to accept the following forms as interchangeable:

```
list[ '[a] '[b] '[c] ]
'[ [a] [b] [c] ]
```

`get` is thus far not defined in the book, but we should take that into account later.

Anyway, to accept these forms as interchangeable, we shall define conversion functions:

```
define[  list of jevkos->jevko[l]
  jevko[
    map[ 
      fun[  [j]  subjevko[ [''] [j] ]  ]
      [l]
    ]
    ['']
  ]
]

define[  jevko->list of jevkos[j]
  map[
    fun[  [s]  get jevko[s]  ]
    subs[j]
  ]
]
```

where `get jevko[subjevko]` extracts the `subjevko's` `jevko`.

The same functions with added type checking:

```
define[  list of jevkos->jevko[l]
  ?[
    list?[l]  jevko[
      map[ 
        fun[  [j]
          ?[
            jevko?[j]  subjevko[ [''] [j] ]
            error[ ['Expected jevko, got '] [j] ]
          ]
        ]
        [l]
      ]
      ['']
    ]
    error[ ['Expected list, got '] [l] ]
  ]
]

define[  jevko->list of jevkos[j]
  ?[
    jevko?[j]  map[
      fun[  [s]  get jevko[s]  ]
      subs[j]
    ]
    error[ ['Expected jevko, got '] [j] ]
  ]
]
```

Where `jevko?[value]` checks whether a value is a `jevko`.

Perhaps it would be sensible to specify a more organized naming convention(s) for selector and constructor functions, e.g.:

```
selectors start with 'get'
get subs[jevko]
get jevko[subjevko]

constructors start with 'make'
make jevko[ [subs] [suffix] ]
make sub[ [prefix] [jevko] ]
```

[certain?] selectors could also be invokable something like:

```
at[jevko].['subs']
at[subjevko].['jevko']
```

i.e. as "fields". The generalized `at` would check the type of its argument and return a function which accepts the name of a selector. An editor could autocomplete the names.

## 200

```
define[  scheme number->scheme number[n]  [n]  ]

define[  complex->complex[z]  [z]  ]

put coercion[  '[scheme number] '[scheme number]  scheme number->scheme number  ]

put coercion[  '[complex] '[complex]  complex->complex  ]

define[  exp[ [x] [y] ]  apply generic[ '[exp] [x] [y] ]  ]

put[  '[exp]  '[ [scheme number] [scheme number] ]
  fun[  [ [x] [y] ]  tag[expt[ [x] [y] ]]  using primitive expt  ]
]
```

## 204

```
define[  add poly[ [p1] [p2] ]
  ?[
    same variable?[ variable[p1] variable[p2] ]  make poly[
      variable[p1]
      add terms[
        term list[p1]
        term list[p2]
      ]
    ]
    error[
      [`Polys not in same var -- ADD-POLY`]
      list[ [p1] [p2] ]
    ]
  ]
]

define[  mul poly[ [p1] [p2] ]
  ?[
    same variable?[ variable[p1] variable[p2] ]  make poly[
      variable[p1]
      mul terms[
        term list[p1]
        term list[p2]
      ]
    ]
    error[
      [`Polys not in same var -- MUL-POLY`]
      list[ [p1] [p2] ]
    ]
  ]
]

define[  install polynomial package[]
  internal procedures
  representation of poly
  define[  make poly[ [variable] [term list] ]
    cons[ [variable] [term list] ]
  ]
  define[  variable[p]  car[p]  ]
  define[  term list[p]  cdr[p]  ]
  <procedures 'same variable?' and 'variable?' from section 2.3.2>

  representation of terms and term lists
  <procedures 'adjoin term' ... 'coeff' from text below>

  continued on next page
```

## 205

```
  define[  add poly[ [p1] [p2] ]  ...  ]
  <procedures used by 'add poly'>
  define[  mul poly[ [p1] [p2] ]  ...  ]
  <procedures used by 'mul poly'>

  interface to the rest of the system
  define[  tag[p]  attach tag[ '[polynomial] [p] ]  ]
  put[  '[add]  '[ [polynomial] [polynomial] ]
    fun[  [ [p1] [p2] ]  tag[add poly[ [p1] [p2] ]]  ]
  ]
  put[  '[mul]  '[ [polynomial] [polynomial] ]
    fun[  [ [p1] [p2] ]  tag[mul poly[ [p1] [p2] ]]  ]
  ]
  put[  '[make]  '[polynomial]
    fun[  [ [var] [terms] ]  tag[make poly[ [var] [terms] ]]  ]
  ]
  '[done]
]
```

An idea for a leaner lambda variant:

```
fun1[  [p1] [p2]  tag[mul poly[ [p1] [p2] ]]  ]
```

The syntax here is:

```
fun1[ [arg1] ... [argN] [body] ]
```

The brackets around the args are discarded in exchange for single-expression body. The body could always be made into a block however.

## 206

```
define[  add terms[ [L1] [L2] ]
  ?[
    empty termlist?[L1]  [L2]
    empty termlist?[L2]  [L1]
    let[
      [t1]  first term[L1]
      [t2]  first term[L2]
      ?[
        >[ order[t1] order[t2] ]  adjoin term[
          [t1]
          add terms[ rest terms[L1] [L2] ]
        ]
        <[ order[t1] order[t2] ]  adjoin term[
          [t2]
          add terms[ [L1] rest terms[L2] ]
        ]
        adjoin term[
          make term[
            order[t1]
            add[ coeff[t1] coeff[t2] ]
          ]
          add terms[
            rest terms[L1]
            rest terms[L2]
          ]
        ]
      ]
    ]
  ]
]

define[  mul terms[ [L1] [L2] ]
  ?[
    empty termlist?[L1]  the empty termlist[]
    add terms[
      mul term by all terms[ first term[L1] [L2] ]
      mul terms[ rest terms[L1] [L2] ]
    ]
  ]
]

define[  mul term by all terms[ [t1] [L] ]
  ?[
    empty termlist?[L]  the empty termlist[]
    let[
      [t2]  first term[L]
      adjoin term[
        make term[
          +[ order[t1] order[t2] ]
          mul[ coeff[t1] coeff[t2] ]
        ]
        mul term by all terms[ [t1] rest terms[L] ]
      ]
    ]
  ]
]
```

## 209

```
define[  adjoin term[ [term] [term list] ]
  ?[
    =zero?[coeff[term]]  [term list]
    cons[ [term] [term list] ]
  ]
]

define[  the empty termlist[]  [nil]  ]

define[  first term[term list]  car[term list]  ]

define[  rest terms[term list]  cdr[term list]  ]

define[  empty termlist?[term list]  null?[term list]  ]

define[  make term[ [order] [coeff] ]  list[ [order] [coeff] ]  ]

define[  order[term]  car[term]  ]

define[  coeff[term]  cadr[term]  ]

define[  make polynomial[ [var] [terms] ]
  get[ '[make] '[polynomial] ].[ [var] [terms] ]
]
```

An idea: a `list'` function that works much like Scheme's quote applied to a list: it returns a list of unevaluated jevkos. That's in contrast to `'` which returns a jevko.

```
list'[ [a] [b] ]

would be equivalent to

list[ '[a] '[b] ]
```

## 210

```
define[  div terms[ [L1] [L2] ]
  ?[
    empty termlist?[L1]  list[ the empty termlist[] the empty termlist[] ]
    let[
      [t1]  first term[L1]
      [t2]  first term[L2]
      ?[
        >[ order[t2] order[t1] ]  list[ the empty termlist[] [L1] ]
        let[
          [new c]  div[ coeff[t1] coeff[t2] ]
          [new o]  -[ order[t1] order[t2] ]
          let[
            [rest of result]  <compute rest of result recursively>
            <form complete result>
          ]
        ]
      ]
    ]
  ]
]
```

## 212

```
define[  [p1]  
  make polynomial[ 
    '[x] 
    list'[ [[2][1]] [[0][1]] ] 
  ]
]

define[  [p2]  
  make polynomial[ 
    '[x] 
    list'[ [[3][1]] [[0][1]] ] 
  ]
]

define[  [rf]
  make rational[ [p2] [p1] ]
]

define[  gcd[ [a] [b] ]
  ?[
    =[ [b] [0] ]  [a]
    gcd[ [b] remainder[[a][b]] ]
  ]
]
```

Note: `list'` should then interpret things like:

```
list'[ [[2][1]] [[0][1]] ] 
```

as

```
list[ list['[2]'[1]] list['[0]'[1]] ] 
```

## 213

```
define[  gcd terms[ [a] [b] ]
  ?[
    empty termlist?[b]  [a]
    gcd terms[ [b] remainder terms[[a][b]] ]
  ]
]

define[  [p1]
  make polynomial[
    '[x]
    list'[ [[4][1]] [[3][-1]] [[2][-2]] [[1][2]] ]
  ]
]

define[  [p2]
  make polynomial[
    '[x]
    list'[ [[3][1]] [[1][-1]] ]
  ]
]

greatest common divisor[ [p1] [p2] ]
```

## 215

```
define[  reduce integers[ [n] [d] ]
  let[
    [g]  gcd[[n][d]]
    list[ /[[n][g]] /[[d][g]] ]
  ]
]

define[  [p1]
  make polynomial[
    '[x]
    list'[ [[1][1]] [[0][1]] ]
  ]
]
define[  [p2]
  make polynomial[
    '[x]
    list'[ [[3][1]] [[0][-1]] ]
  ]
]
define[  [p3]
  make polynomial[
    '[x]
    list'[ [[1][1]] ]
  ]
]
define[  [p4]
  make polynomial[
    '[x]
    list'[ [[2][1]] [[0][-1]] ]
  ]
]

define[  [rf1]  make rational[ [p1] [p2] ]  ]
define[  [rf2]  make rational[ [p3] [p4] ]  ]

add[ [rf1] [rf2] ]
```

## Chapter 3

## 219

```
withdraw[25]

withdraw[25]

withdraw[60]

withdraw[15]
```


## 220

```
define[  [balance]  [100]  ]

define[  withdraw[amount]
  ?[
    >=[ [balance] [amount] ]  [
      set![ [balance] -[[balance][amount]] ]
      [balance]
    ]
    [`Insufficient funds`]
  ]
]

set![ [balance] -[[balance][amount]] ]

set![ [name] [new value] ]
```

## 221

The equivalent of `begin` in Jevkalk is simply:

```
[ [exp_1] [exp_2] ... [exp_k] ]
```

```
define[  [new withdraw]
  let[
    [balance]  [100]
    ?[
      >=[ [balance] [amount] ]  [
        set![ [balance] -[[balance][amount]] ]
        [balance]
      ]
      [`Insufficient funds`]
    ]
  ]
]
```

An Unified Call Syntax I've been developing would also allow this:

```
[balance].set![-[[balance][amount]]]
```

or even:

```
[balance].set![[balance].-[amount]]
```

More on that later.


## 222

```
define[  make withdraw[balance]
  fun[ [amount]
    ?[
      >=[ [balance] [amount] ]  [
        set![ [balance] -[[balance][amount]] ]
        [balance]
      ]
      [`Insufficient funds`]
    ]
  ]
]

define[  [W1]  make withdraw[100]  ]
define[  [W2]  make withdraw[100]  ]

W1[50]

W2[70]
```

## 223

```
W2[40]

W1[40]

define[  make account[balance]
  define[  withdraw[amount]
    ?[
      >=[ [balance] [amount] ] [
        set![ [balance] -[[balance][amount]] ]
        [balance]
      ]
      [`Insufficient funds`]
    ]
  ]
  define[  deposit[amount]
    set![ [balance] +[[balance][amount]] ]
    [balance]
  ]
  define[  dispatch[m]
    ?[
      eq?[ [m] '[withdraw] ]  [withdraw]
      eq?[ [m] '[deposit] ]  [deposit]
      error[
        [`Unknown request -- MAKE-ACCOUNT`]
        [m]
      ]
    ]
  ]
  [dispatch]
]

define[  [acc]  make account[100]  ]

acc[ '[withdraw] ].[50]
```

## 224

```
acc[ '[withdraw] ].[60]

acc[ '[deposit] ].[40]

acc[ '[withdraw] ].[60]

define[  [acc2]  make account[100]  ]

define[  [A]  make accumulator[5]  ]

A[10]

A[10]
```

If we redefine `make account`'s `dispatch` as:

```
define[  dispatch[m]
  ?[
    eq?[ [m] [`withdraw`] ]  [withdraw]
    eq?[ [m] [`deposit`] ]  [deposit]
    error[
      [`Unknown request -- MAKE-ACCOUNT`]
      [m]
    ]
  ]
]
```

i.e. we accept strings instead of "symbols", the above code will look nicer:

```
acc[`withdraw`].[60]

acc[`deposit`].[40]

acc[`withdraw`].[60]
```

## 225

```
define[  [s]  make monitored[sqrt]  ]

s[100]

s[ '[how many calls] ]

define[  [acc]  make account[ [100] '[secret password] ]  ]

acc[ '[secret password] '[withdraw] ].[40]

acc[ '[some other password] '[deposit] ].[50]

x_2 = rand update[x_1]
x_3 = rand update[x_2]
```

## 226

```
define[  [rand]
  let[
    [x]  [random init]
    fun[ []
      set![ [x] rand update[x] ]
      [x]
    ]
  ]
]
```

## 227

```
define[  estimate pi[trials]
  sqrt[/[ [6] monte carlo[[trials][cesaro test]] ]]
]

define[  cesaro test[]
  =[ gcd[rand[]rand[]] [1] ]
]

define[  monte carlo[ [trials] [experiment] ]
  define[  iter[ [trials remaining] [trials passed] ]
    ?[
      =[ [trials remaining] [0] ]  /[ [trials passed] [trials] ]
      [experiment]  iter[ -[[trials remaining][1]] +[[trials passed][1]] ]
      iter[ -[[trials remaining][1]] [trials passed] ]
    ]
  ]
  iter[ [trials] [0] ]
]

define[  estimate pi[trials]
  sqrt[/[ [6] random gcd test[[trials][random init]] ]]
]

define[  random gcd test[ [trials] [initial x] ]
  define[  iter[ [trials remaining] [trials passed] [x] ]
    let[
      [x1]  rand update[x]
      let[
        [x2]  rand update[x1]
        ?[
          =[ [trials remaining] [0] ]  /[ [trials passed] [trials] ]
          =[ gcd[[x1][x2]] [1] ]  iter[
            -[ [trials remaining] [1] ]
            +[ [trials passed] [1] ]
            [x2]
          ]
          iter[
            -[ [trials remaining] [1] ]
            [trials passed]
            [x2]
          ]
        ]
      ]
    ]
  ]
  iter[ [trials] [0] [initial x] ]
]
```

## 229

```
define[  random in range[ [low] [high] ]
  let[
    [range]  -[ [high] [low] ]
    +[ [low] random[range] ]
  ]
]
```

## 230

```
define[  make simplified withdraw[balance]
  fun[ [amount]
    set![ [balance] -[[balance][amount]] ]
    [balance]
  ]
]

define[  [W]  make simplified withdraw[25]  ]

W[20]

W[10]

define[  make decrementer[balance]
  fun[ [amount]
    -[ [balance] [amount] ] 
  ]
]

define[  [D]  make decrementer[25]  ]

D[20]

D[10]

make decrementer[25].[20]
```

## 231

```
fun[ [amount] -[[25][amount]] ].[20]

-[ [25] [20] ]

make simplified withdraw[25].[20]

fun[  [amount]  set![ [balance] -[[25][amount]] ]  [25]  ].[20]

set![ [balance] -[[25][20]] ] [25]
```

## 232

```
define[  [D1]  make decrementer[25]  ]

define[  [D2]  make decrementer[25]  ]

define[  [W1]  make simplified withdraw[25]  ]

define[  [W2]  make simplified withdraw[25]  ]

W1[20]

W1[20]

W2[20]
```

## 233

```
define[  [peter acc]  make account[100]  ]

define[  [paul acc]  make account[100]  ]

define[  [peter acc]  make account[100]  ]

define[  [paul acc]  [peter acc]  ]
```

## 234

```
define[  factorial[n]
  define[  iter[ [product] [counter] ]
    ?[
      >[ [counter] [n] ]  [product]
      iter[
        *[ [counter] [product] ]
        +[ [counter] [1] ]
      ]
    ]
  ]
  iter[ [1] [1] ]
]
```

## 235

```
define[  factorial[n]
  let[
    [product]  [1]
    [counter]  [1]
    [
      define[  iter[]
        ?[
          >[ [counter] [n] ]  [product]
          [
            set![ [product] *[[counter][product]] ]
            set![ [counter] +[[counter][1]] ]
            iter[]
          ]
        ]
      ]
      iter[]
    ]
  ]
]

set![ [counter] +[[counter][1]] ]
set![ [product] *[[counter][product]] ]
```

## 236

```
define[  [paul acc]
  make joint[ [peter acc] '[open sesame] '[rosebud] ]
]
```

## 238

```
define[  square[x]
  *[ [x] [x] ]
]
```

## 239

```
define[  [square]
  fun[  [x]  *[ [x] [x] ]  ]
]
```

## 241

```
define[  square[x]
  *[ [x] [x] ]
]

define[  sum of squares[ [x] [y] ]
  +[ square[x] square[y] ]
]

define[  f[a]
  sum of squares[ +[[a][1]] *[[a][2]] ]
]
```

## 242

```
sum of squares[ +[[a][1]] *[[a][2]] ]
```

## 243

```
define[  factorial[n]
  ?[
    =[ [n] [1] ]  [1]
    *[ [n] factorial[-[[n][1]]] ]
  ]
]

define[  factorial[n]
  fact iter[ [1] [1] [n] ]
]
```

## 244

```
define[  fact iter[ [product] [counter] [max count] ]
  ?[
    >[ [counter] [max count] ]  [product]
    fact iter[
      *[ [counter] [product] ]
      +[ [counter] [1] ]
      [max count]
    ]
  ]
]

define[  make withdraw[balance]
  fun[  [amount]
    ?[
      >=[ [balance] [amount] ]  [
        set![ [balance] -[[balance][amount]] ]
        [balance]
      ]
      [`Insufficient funds`]
    ]
  ]
]

define[  [W1]  make withdraw[100]  ]

W1[50]

define[  [W1]  make withdraw[100]  ]
```

## 245

```
W1[50]

?[
  >=[ [balance] [amount] ] [
    set![ [balance] -[[balance][amount]] ]
    [balance]
  ]
  [`Insufficient funds`]
]
```

## 246

```
define[  [W2]  make withdraw[100]  ]
```

## 248

```
define[  make withdraw[initial amount]
  let[
    [balance]  [initial amount]
    fun[  [amount]
      ?[
        >=[ [balance] [amount] ]  [
          set![ [balance] -[[balance][amount]] ]
          [balance]
        ]
        [`Insufficient funds`]
      ]
    ]
  ]
]

define[  [W1]  make withdraw[100]  ]

W1[50]

define[  [W2]  make withdraw[100]  ]
```

## 249

```
define[  sqrt[x]
  define[  good enough?[guess]
    <[  abs[-[ square[guess] [x] ]]  [0.001]  ]
  ]
  define[  improve[guess]
    average[ [guess] /[[x][guess]] ]
  ]
  define[  sqrt iter[guess]
    ?[
      good enough?[guess]  [guess]
      sqrt iter[ improve[guess] ]
    ]
  ]
  sqrt iter[1.0]
]
```

## 250

```
define[  good enough?[guess]
  <[  abs[-[ square[guess] [x] ]]  [0.001]  ]
]
```

## 251

```
define[  make account[balance]
  define[  withdraw[amount]
    ?[
      >=[ [balance] [amount] ]  [
        set![ [balance] -[[balance][amount]] ]
        [balance]
      ]
      ['Insufficient funds']
    ]
  ]
  define[  deposit[amount]
    set![ [balance] +[[balance][amount]] ]
    [balance]
  ]
  define[  dispatch[m]
    ?[
      eq?[ [m] ['withdraw'] ]  [withdraw]
      eq?[ [m] ['deposit'] ]  [deposit]
      error[
        ['Unknown request -- MAKE-ACCOUNT']
        [m]
      ]
    ]
  ]
  [dispatch]
]

define[  [acc]  make account[50]  ]

acc['deposit'].[40]

acc['withdraw'].[60]

define[  [acc2]  make account[100] ]
```

## 252

```
set balance![ [<account>] [<new value>] ]
```

## 255

```
define[  cons[ [x] [y] ]
  let[
    [new]  get new pair[]
    [
      set car![ [new] [x] ]
      set cdr![ [new] [y] ]
      [new]
    ]
  ]
]

define[  append[ [x] [y] ]
  ?[
    null?[x]  [y]
    cons[  car[x]  append[ cdr[x] [y] ]  ]
  ]
]

define[  append![ [x] [y] ]
  set cdr![ last pair[x] [y] ]
  [x]
]

define[  last pair[x]
  ?[
    null?[cdr[x]]  [x]
    last pair[cdr[x]]
  ]
]

define[  [x]  list[ ['a'] ['b'] ]  ]

define[  [y]  list[ ['c'] ['d'] ]  ]

define[  [z]  append[ [x] [y] ]  ]
```

## 256

```
[z]

cdr[x]

define[  [w]  append![ [x] [y] ]  ]

[w]

cdr[x]

define[  make cycle[x]
  set cdr![ last pair[x] [x] ]
  [x]
]

define[  [z]  make cycle[ list[['a']['b']['c']] ]  ]

define[  mystery[x]
  define[  loop[ [x] [y] ]
    ?[
      null?[x]  [y]
      let[
        [temp]  cdr[x]
        [
          set cdr![ [x] [y] ]
          loop[ [temp] [x] ]
        ]
      ]
    ]
  ]
  loop[ [x] [nil] ]
]
```

## 257

Experimenting here with using strings instead of symbols.

`['a]` is the string `a`. It is equivalent to `['a']` and `` [`a`] ``.

```
define[  [x]  list[ ['a] ['b] ]  ]

define[  [z1]  cons[ [x] [x] ]  ]

define[  [z2]  cons[ list[['a]['b]] list[['a]['b]] ]  ]
```

## 258

```
define[  set to wow![x]
  set car![ car[x] ['wow] ]
  [x]
]

[z1]

set to wow![z1]

[z2]

set to wow![z2]
```

## 259

```
define[  count pairs[x]
  ?[
    not[pair?[x]]  [0]
    +[
      count pairs[car[x]]
      count pairs[cdr[x]]
      [1]
    ]
  ]
]
```

## 260

```
define[  cons[ [x] [y] ]
  define[  dispatch[m]
    ?[
      eq?[ [m] ['car] ]  [x]
      eq?[ [m] ['cdr] ]  [y]
      error[ ['Undefined operation -- CONS] [m] ]
    ]
  ]
  [dispatch]
]

define[  car[z]  z['car]  ]

define[  cdr[z]  z['cdr]  ]

define[  cons[ [x] [y] ]
  define[  set x![v]  set![ [x] [v] ]  ]
  define[  set y![v]  set![ [y] [v] ]  ]
  define[  dispatch[m]
    ?[
      eq?[ [m] ['car] ]  [x]
      eq?[ [m] ['cdr] ]  [y]
      eq?[ [m] ['set car!] ]  [set x!]
      eq?[ [m] ['set cdr!] ]  [set y!]
      error[ ['Undefined operation -- CONS] [m] ]
    ]
  ]
  [dispatch]
]

define[  car[z]  z['car]  ]
define[  cdr[z]  z['cdr]  ]
```

## 261

```
define[  set car![ [z] [new value] ]
  z['set car!].[new value]
  [z]
]

define[  set cdr![ [z] [new value] ]
  z['set cdr!].[new value]
  [z]
]

define[  [z]  cons[ [1] [2] ]  ]

define[  [z]  cons[ [x] [x] ]  ]

set car![ cdr[z] [17] ]

car[x]
```

## 262

```
define[  [q]  make queue[]  ]

insert queue![ [q] ['a] ]    a

insert queue![ [q] ['b] ]    a b

delete queue![q]             b

insert queue![ [q] ['c] ]    b c

insert queue![ [q] ['d] ]    b c d

delete queue![q]             c d

make queue[]

empty queue?[<queue>]

front queue[<queue>]

insert queue![ [<queue>] [<item>] ]

delete queue![<queue>]
```

## 263

```
define[  front ptr[queue]  car[queue]  ]

define[  rear ptr[queue]  cdr[queue]  ]

define[  set front ptr![ [queue] [item] ]  set car![ [queue] [item] ]  ]

define[  set rear ptr![ [queue] [item] ]  set cdr![ [queue] [item] ]  ]
```

## 264

```
define[  make queue[]  cons[ [nil] [nil] ]  ]

define[  front queue[queue]
  ?[
    empty queue?[queue]  error[ [`FRONT called with an empty queue`] [queue] ]
    car[front ptr[queue]]
  ]
]

define[  insert queue![ [queue] [item] ]
  let[
    [new pair]  cons[ [item] [nil] ]
    ?[
      empty queue?[queue]  [
        set front ptr![ [queue] [new pair] ]
        set rear ptr![ [queue] [new pair] ]
        [queue]
      ]
      [
        set cdr![ rear ptr[queue] [new pair] ]
        set rear ptr![ [queue] [new pair] ]
        [queue]
      ]
    ]
  ]
]
```

## 265

```
define[  delete queue![queue]
  ?[
    empty queue?[queue]  error[
      [`DELETE! called with an empty queue`]
      [queue]
    ]
    [
      set front ptr![ [queue] cdr[front ptr[queue]] ]
      [queue]
    ]
  ]
]

define[  [q1]  make queue[]  ]

insert queue![ [q1] ['a] ]

insert queue![ [q1] ['b] ]

delete queue![q1]

delete queue![q1]
```

## 266

```
define[  make queue[]
  let[
    [front ptr]  [...]
    [rear ptr]  [...]
    [
      <definitions of internal procedures>
      define[  dispatch[m]  [...]  ]
      [dispatch]
    ]
  ]
]
```

## 268

```
define[  lookup[ [key] [table] ]
  let[
    [record]  assoc[ [key] cdr[table] ]
    ?[
      [record]  cdr[record]
      [false]
    ]
  ]
]

define[  assoc[ [key] [records] ]
  ?[
    null?[records]  [false]
    equal?[ [key] caar[records] ]  car[records]
    assoc[ [key] cdr[records] ]
  ]
]

define[  insert![ [key] [value] [table] ]
  let[
    [record]  assoc[ [key] cdr[table] ]
    ?[
      [record]  set cdr![ [record] [value] ]
      set cdr![
        [table]
        cons[  cons[ [key] [value] ]  cdr[table]  ]
      ]
    ]
  ]
  ['ok]
]

define[  make table[]
  list[ ['*table*] ]
]
```

## 270

```
define[  lookup[ [key 1] [key 2] [table] ]
  let[
    [subtable]  assoc[ [key 1] cdr[table] ]
    ?[
      [subtable]  let[
        [record]  assoc[ [key 2] cdr[subtable] ]
        ?[
          [record]  cdr[record]
          [false]
        ]
      ]
      [false]
    ]
  ]
]

define[  insert![ [key 1] [key 2] [value] [table] ]
  let[
    [subtable]  assoc[ [key 1] cdr[table] ]
    ?[
      [subtable]  let[
        [record]  assoc[ [key 2] cdr[subtable] ]
        ?[
          [record]  set cdr![ [record] [value] ]
          set cdr![
            [subtable]
            cons[
              cons[ [key 2] [value] ]
              cdr[subtable]
            ]
          ]
        ]
      ]
      set cdr![
        [table]
        cons[
          list[  [key 1]  cons[ [key 2] [value] ]  ]
          cdr[table]
        ]
      ]
    ]
  ]
  ['ok]
]
```

## 271

```
define[  make table[]
  let[
    [local table]  list['*table*]
    [
      define[  lookup[ [key 1] [key 2] ]
        let[
          [subtable]  assoc[ [key 1] cdr[local table] ]
          ?[
            [subtable]  let[
              [record]  assoc[ [key 2] cdr[subtable] ]
              ?[
                [record]  cdr[record]
                [false]
              ]
            ]
            [false]
          ]
        ]
      ]
      define[  insert![ [key 1] [key 2] [value] ]
        let[
          [subtable]  assoc[ [key 1] cdr[local table] ]
          ?[
            [subtable]  let[
              [record]  assoc[ [key 2] cdr[subtable] ]
              ?[
                [record]  set cdr![ [record] [value] ]
                set cdr![
                  [subtable]
                  cons[
                    cons[ [key 2] [value] ]
                    cdr[subtable]
                  ]
                ]
              ]
            ]
            set cdr![
              [local table]
              cons[
                list[  [key 1]  cons[ [key 2] [value] ]  ]
                cdr[local table]
              ]
            ]
          ]
        ]
        ['ok]
      ]
      define[  dispatch[m]
        ?[
          eq?[ [m] ['lookup proc] ]  [lookup]
          eq?[ [m] ['insert proc!] ]  [insert!]
          error[ [`Unknown operation -- TABLE`] [m] ]
        ]
      ]
      [dispatch]
    ]
  ]
]

define[  [operation table]  make table[]  ]
define[  [get]  operation table['lookup proc]  ]
define[  [set]  operation table['insert proc!]  ]
```

Note that the above definition uses strings instead of "symbols", so it's inconsistent with the previous code that assumed the existence of `get` and `put` operations. That would need to be adjusted accordingly. Perhaps at a later time. For now the purpose of this translation is to explore different language features, learn about them, apply the spirit of minimalism, come up with new ideas in the process, filter and solidify these ideas.

As I get to the end of the book or sufficiently far, I may do a round of editing that will make things neat.

BTW I'm thinking that the `let` construct may be entirely done away with in favor of (generalized?) `define`. Also I may want to replace `cons`, `cdr`, `car` with higher-level modern equivalents. In fact I am forming an idea for a language codenamed `JevoScript` which would be compiled to JavaScript and highly-interoperable with it. It would be a thin Jevko-based syntactic layer that generalizes certain language constructs, streamlining and simplifying JavaScript, fixing some design errors, making the language fully expression oriented. It would take the best from Scheme (which after all, is the root of JavaScript) and JavaScript, combining the simplicity of the former with the modern feeling and ease of use of the latter. We shall see how this develops.

## 272

```
define[  fib[n]
  ?[
    =[ [n] [0] ]  [0]
    =[ [n] [1] ]  [1]
    +[
      fib[-[ [n] [1] ]]
      fib[-[ [n] [2] ]]
    ]
  ]
]

define[  [memo fib]
  memoize[fun[  [n]
    ?[
      =[ [n] [0] ]  [0]
      =[ [n] [1] ]  [1]
      +[
        memo fib[-[ [n] [1] ]]
        memo fib[-[ [n] [2] ]]
      ]
    ]
  ]]
]
```

## 273

```
define[  memoize[f]
  let[
    [table]  make table[]
    fun[  [x]
      let[
        [previously computed result]  lookup[ [x] [table] ]
        or[
          [previously computed result]
          let[
            [result]  f[x]
            [
              insert![ [x] [result] [table] ]
              [result]
            ]
          ]
        ]
      ]
    ]
  ]
]
```

## 274

```
define[  [a]  make wire[]  ]
define[  [b]  make wire[]  ]
define[  [c]  make wire[]  ]
```

## 275

```
define[  [d]  make wire[]  ]
define[  [e]  make wire[]  ]
define[  [s]  make wire[]  ]

or gate[ [a] [b] [d] ]

and gate[ [a] [b] [c] ]

inverter[ [c] [e] ]

and gate[ [d] [e] [s] ]

define[  half adder[ [a] [b] [s] [c] ]
  let[
    [d]  make wire[]
    [e]  make wire[]
    [
      or gate[ [a] [b] [d] ]
      and gate[ [a] [b] [c] ]
      inverter[ [c] [e] ]
      and gate[ [d] [e] [s] ]
      ['ok]
    ]
  ]
]
```

## 276

```
define[  full adder[ [a] [b] [c in] [sum] [c out] ]
  let[
    [s]  make wire[]
    [c1]  make wire[]
    [c2]  make wire[]
    [
      half adder[ [b] [c in] [s] [c1] ]
      half adder[ [a] [s] [sum] [c2] ]
      or gate[ [c1] [c2] [c out] ]
      ['ok]
    ]
  ]
]

get signal[<wire>]

set signal![ [<wire>] [<new value>] ]

add action![ [<wire>] [<procedure of no arguments>] ]
```

## 277

```
define[  inverter[ [input] [inverter] ]
  define[  invert input[]
    let[
      [new value]  logical not[get signal[input]]
      after delay[
        [inverter delay]
        fun[  []
          set signal![ [output] [new value] ]
        ]
      ]
    ]
  ]
  add action![ [input] [invert input] ]
  ['ok]
]

define[  logical not[s]
  ?[
    =[ [s] [0] ]  [1]
    =[ [s] [1] ]  [0]
    error[ ['Invalid signal] [s] ]
  ]
]

define[  and gate[ [a1] [a2] [output] ]
  define[  and action procedure[]
    let[
      [new value]  logical and[ get signal[a1] get signal[a2] ]
      after delay[
        [and gate delay]
        fun[ []
          set signal![ [output] [new value] ]
        ]
      ]
    ]
  ]
  add action![ [a1] [and action procedure] ]
  add action![ [a2] [and action procedure] ]
  ['ok]
]
```

## 279

```
define[  make wire[]
  let[
    [signal value]  [0]
    [action procedues]  [nil]
    [
      define[  set my signal![new value]
        ?[
          not[=[ [signal value] [new value] ]]  [
            set![ [signal value] [new value] ]
            call each[action procedures]
          ]
          ['done]
        ]
      ]
      
      define[  accept action procedure![proc]
        set![ [action procedures] cons[[proc][action procedures]] ]
        proc[]
      ]

      define[  dispatch[m]
        ?[
          eq?[ [m] ['get signal] ]  [signal value]
          eq?[ [m] ['set signal!] ]  [set my signal!]
          eq?[ [m] ['add action!] ]  [accept action procedure]
          error[ ['Unknown operation -- WIRE] [m] ]
        ]
      ]
      [dispatch]
    ]
  ]
]

define[  call each[procedures]
  ?[
    null?[procedures]  ['done]
    [
      car[procedures].[]
      call each[cdr[procedures]]
    ]
  ]
]
```

## 280

```
define[  get signal[wire]
  wire['get signal]
]

define[  set signal![ [wire] [new value] ]
  wire['set signal!].[new value]
]

define[  add action![ [wire] [action procedure] ]
  wire['add action!].[action procedure]
]

make agenda[]

empty agenda?[<agenda>]

first agenda item[<agenda>]

remove first agenda item![<agenda>]

add to agenda![ [<time>] [<action>] [<agenda>] ]

current time[<agenda>]
```

## 281

```
define[  after delay[ [delay] [action] ]
  add to agenda![
    +[ [delay] current time[the agenda] ]
    [action]
    [the agenda]
  ]
]

define[ propagate[]
  ?[
    empty agenda?[the agenda]  ['done]
    let[
      [first item]  first agenda item[the agenda]
      [
        first item[]
        remove first agenda item![the agenda]
        propagate[]
      ]
    ]
  ]
]

define[  probe[ [name] [wire] ]
  add action![
    [wire]
    fun[  []
      newline[]
      display[name]
      display[' ']
      display[ current time[the agenda] ]
      display['  New value = ']
      display[ get signal[wire] ]
    ]
  ]
]

define[  [the agenda]  make agenda[]  ]
define[  [inverter delay]  [2]  ]
define[  [and gate delay]  [3]  ]
define[  [or gate delay]  [5]  ]
```

## 282

```
define[  [input 1]  make wire[]  ]
define[  [input 2]  make wire[]  ]
define[  [sum]  make wire[]  ]
define[  [carry]  make wire[]  ]

probe[ ['sum] [sum] ]

probe[ ['carry] [carry] ]

half adder[ [input 1] [input 2] [sum] [carry] ]

set signal![ [input 1] [1] ]

propagate[]

set signal![ [input 2] [1] ]

propagate[]

define[  accept action procedure![proc]
  set![ [action procedures] cons[[proc][action procedures]] ]
]
```

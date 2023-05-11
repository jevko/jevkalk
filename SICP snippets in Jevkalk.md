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

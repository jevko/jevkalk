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

# page 18

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
  
]
```
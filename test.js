import { interpret } from "./interpret.js";
import {parseJevko} from 'https://cdn.jsdelivr.net/gh/jevko/parsejevko.js@0.1.3/mod.js'

console.log(interpret(parseJevko(`
let [
  [a]
  [10]
]
let [
  [incr]
  fun [
    [[n]]
    +[[n][1]]
  ]
]
let [
  [fact]
  fun [
    [[n]]
    ? [
      < [
        [n]
        [2]
      ]
      [1]
      * [[n] fact[-[[n][1]]]]
    ]
  ]
]
let [
  [fib]
  fun [
    [[n]]
    ? [
      < [
        [n]
        [3]
      ]
      [1]
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
]
+ [
  [1]
  / [
    ? [
      < [
        [a]
        [4]
      ]
      [33]
      [10]
    ]
    [3]
  ]
  [5]
]
incr [
  / [
    ? [
      < [
        [a]
        [4]
      ]
      [33]
      [10]
    ]
    [3]
  ]
]
fact [[9]]
fib [[9]]
`)))
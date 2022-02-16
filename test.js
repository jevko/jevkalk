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
`)))
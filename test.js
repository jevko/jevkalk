import { interpret } from "./interpret.js";
import { parse } from "./parse.js";

console.log(interpret(parse(`
let [
  [a]
  [10]
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
`)))
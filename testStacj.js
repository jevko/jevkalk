import { exec } from "./interpretStack.js";
import {parseJevko} from 'https://cdn.jsdelivr.net/gh/jevko/parsejevko.js@0.1.3/mod.js'

console.log(exec(parseJevko(`
[2]+[3]
`)))

`
let [a][10]
let [incr] fn [n] [[n]+[1]]
let [fact] fn [n] [
  if [[n]<[2]] [1]
  else [
    fact[[n]-[1]]*[n]
  ]
]
let [fib] fn [n] [
  if [[n]<[3]] [1]
  else [
    fib[[n]-[1]]
    fib[[n]-[2]]
    +
  ]
]
[1][if[[a]<[4]][33]else[10]/[3]]+[5]
incr[if [[a]<[4]] [33] else [10] / [3]]
fact[9]
fib[9]
`
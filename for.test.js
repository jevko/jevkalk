import { interpret } from "./interpret.js";
import {parseJevko} from 'https://cdn.jsdelivr.net/gh/jevko/parsejevko.js@0.1.3/mod.js'

const code = `
plop [
  [j] ;[]
]
for [
  plop [[i][0]]
  < [[i][10]]
  set! [[i] +[[i][1]]]

  push! [[j] fun [[] log [i]]]
]
for [
  plop [[i][0]]
  < [[i][10]]
  set! [[i] +[[i][1]]]

  ap [pop! [j][]]
]
`

const ret = interpret(parseJevko(code))
console.log(JSON.stringify(ret, null, 2))
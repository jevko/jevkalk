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

  push! [[j] fun [[_] log [i]]]
]
for [
  plop [[i][0]]
  < [[i][10]]
  set! [[i] +[[i][1]]]

  bind [
    [fn] pop! [j]
  ]

  fn[]
]
`

const ret = interpret(parseJevko(code))
console.log(JSON.stringify(ret, null, 2))
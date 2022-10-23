import { interpret } from "./interpret.js";
import {parseJevko, assertEquals} from './devDeps.js'

const code = `
plop [
  [funs] li []
  [nums] li []
]
for [
  plop [[i][0]]
  < [[i][10]]
  set! [[i] +[[i][1]]]

  li push! [[funs] fun [[] [i]]]
]
for [
  plop [
    [i][0]
  ]
  < [[i][10]]
  set! [[i] +[[i][1]]]

  li push! [[nums] ap [li pop! [funs][]]]
]
[nums]
`

Deno.test('for', () => {
  const actual = interpret(parseJevko(code))
  const expected = [9,8,7,6,5,4,3,2,1,0]
  assertEquals(actual, expected)
})
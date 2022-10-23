import { interpret } from "./interpret.js";
import {parseJevko, assertEquals} from './devDeps.js'

const code = `
plop [
  [j] li []
  [coll] li []
]
for [
  plop [[i][0]]
  < [[i][10]]
  set! [[i] +[[i][1]]]

  li push! [[j] fun [[] [i]]]
]
for [
  plop [
    [i][0]
  ]
  < [[i][10]]
  set! [[i] +[[i][1]]]

  li push! [[coll] ap [li pop! [j][]]]
]
[coll]
`

Deno.test('for', () => {
  const actual = interpret(parseJevko(code))
  const expected = [9,8,7,6,5,4,3,2,1,0]
  assertEquals(actual, expected)
})
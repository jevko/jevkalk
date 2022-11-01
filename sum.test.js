import { interpret } from "./interpret.js";
import {parseJevko, assertEquals} from './devDeps.js'

const code = `
-- [todo: move map and reduce to stdlib or sth]
bind [
  [text] read text file ['[sum.test.txt]]
  [numstrs] str split [[text]'[ ]]

  [map] fun [[[coll][fn]]
    bind [[ret] li []]
    for [
      plop [[i][0]]
      < [[i] li length [coll]]
      set! [[i] +[[i][1]]]
    
      li push! [[ret] fn [li at [[coll][i]]]]
    ]
    [ret]
  ]
  [reduce] fun [[[coll][fn][init]]
    plop [[ret] [init]]
    for [
      plop [[i][0]]
      < [[i] li length [coll]]
      set! [[i] +[[i][1]]]

      set! [[ret] fn [[ret] li at [[coll][i]]]]
    ]
    [ret]
  ]

  [nums] map [[numstrs] fun [[n] str to num [n]]]
  [sum] reduce [[nums] fun [[[acc][n]] 
    +[[acc][n]]
  ][0]]
]
`

Deno.test('sums', () => {
  const actual = interpret(parseJevko(code))
  
  assertEquals(actual, 36)
})
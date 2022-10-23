import { interpret } from "./interpret.js";
import {assertEquals, parseJevko} from './devDeps.js'

const i = `first name [John]
last name [Smith]
is alive [true]
age [27]
address [
  street address [21 2nd Street]
  city [New York]
  state [NY]
  postal code [10021-3100]
]
phone numbers [
  [
    type [home]
    number [212 555-1234]
  ]
  [
    type [office]
    number [646 555-4567]
  ]
]
children []
spouse []
`

const j = i.replace(/(\[|\]|`)/g, '`$1')

const code = `
bind [
  [escaper] '[\`\`]
  [opener] '[\`[]
  [closer] '[\`]]

  [parse jevko] fun [[str]
    plop [
      [parents] li []
      [parent] je []
      [prefix] '[]
      [h] [0]
      [escaped?] [false]

      [line] [1]
      [column] [1]
    ]

    for [
      plop [[i][0]] 
      < [[i] str length [str]] 
      set! [[i] +[[i][1]]]

      bind [
        [c] char at [[str][i]]
      ]

      ? [
        [escaped?] ? [
          either [
            =[[c][escaper]] 
            =[[c][opener]] 
            =[[c][closer]]
          ] set! [escaped? [false]]
          error [1]
        ]
        =[[c][escaper]] do [
          set! [
            [prefix] str concat [
              [prefix] 
              str slice [[str][h][i]]
            ]
            [h] +[[i][1]]
            [escaped?] [true]
          ]
        ]
        =[[c][opener]] do [
          plop [[jevko] je []]
          je push! [[parent]
            str concat [
              [prefix]
              str slice [[str][h][i]]
            ]
            [jevko]
          ]
          li push! [[parents][parent]]
          set! [
            [prefix] '[]
            [h] +[[i][1]]
            [parent] [jevko]
          ]
        ]
        =[[c][closer]] do [
          je suffix! [
            [parent]
            str concat [
              [prefix] 
              str slice [[str][h][i]]
            ]
          ]
          set! [
            [prefix] '[]
            [h] +[[i][1]]
          ]
          ? [
            < [li length [parents] [1]] error[2]
          ]
          set! [[parent] li pop! [parents]]
        ]
      ]

      ? [
        =[[c]'e[\\n]] do [
          set! [
            [line] +[[line][1]]
            [column] [1]
          ]
        ]
        set! [[column] +[[column][1]]]
      ]
    ]

    ? [
      [escaped?] error[3]
      >[li length [parents] [0]] do [
        log [li length [parents]]
        error[4]
      ]
    ]

    je suffix! [
      [parent] 
      str concat [
        [prefix] 
        str slice [[str][h] str length [str]]
      ]
    ]

    [parent]
  ]
]

parse jevko ['[${j}]]
`

Deno.test('parseJevko', () => {
  const actual = interpret(parseJevko(code))
  
  const expected = parseJevko(i)
  delete expected.opener
  delete expected.closer
  delete expected.escaper

  assertEquals(actual, expected)
})
import { interpret } from "./interpret.js";
import {parseJevko} from 'https://cdn.jsdelivr.net/gh/jevko/parsejevko.js@0.1.3/mod.js'

const j = `first name [John]
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
`.replace(/(\[|\]|`)/g, '`$1')

const code = `
let [
  [escaper] '[\`\`]
  [opener] '[\`[]
  [closer] '[\`]]

  [parse jevko] fun [[str]
    plop [
      [parents] ;[]
      [parent] ;[]
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

      let [
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
          plop [[jevko] ;[]]
          push! [[parent]
            str concat [
              [prefix]
              str slice [[str][h][i]]
            ]
            [jevko]
          ]
          push! [[parents][parent]]
          set! [
            [prefix] '[]
            [h] +[[i][1]]
            [parent] [jevko]
          ]
        ]
        =[[c][closer]] do [
          suffix! [
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
            < [length [parents] [1]] error[2]
          ]
          set! [[parent] pop! [parents]]
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
      >[length [parents] [0]] do [
        log [length [parents]]
        error[4]
      ]
    ]

    suffix! [
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

const ret = interpret(parseJevko(code))
console.log(ret, ret.subjevkos[4])
console.log(JSON.stringify(ret, null, 2))
const bracketize = (jevko) => {
  const {subjevkos, suffix} = jevko
  if (subjevkos.length < 2) return jevko
  const parents = []
  let prev = subjevkos.shift()
  let prevPrio = getPrio(prev)
  let parent = {subjevkos: [prev]}
  while (subjevkos.length > 0) {
    const sub = subjevkos.shift()
    const prio = getPrio(sub)
    const m = prio
    const pm = prevPrio
    if (m < pm) {
      // console.log('mpfp')
      while (parents.length > 0) {
        parent.suffix = ''
        // alternatively store prevPrio with parent and do this:
        const [parent1, prevPrio1] = parents.pop()
        parent = parent1
        prevPrio = prevPrio1
        if (m >= prevPrio) break 
        // parent = parents.pop()
      }
    }
    else if (m > pm || (m === pm && isRightAssoc(sub))) {
      prev.jevko = {subjevkos: [{prefix: '', jevko: prev.jevko}]}
      parents.push([parent, prevPrio])
      parent = prev.jevko
    }
    parent.subjevkos.push(sub)
    prevPrio = prio
    prev = sub
  }
  // todo? perhaps suffix should end up grouped with sub of matching priority instead of top-level
  while (parents.length > 0) {
    parent.suffix = ''
    const [parent1] = parents.pop()
    parent = parent1
  }
  parent.suffix = suffix
  return parent
}

const getPrio = (sub) => {
  return prioMap.get(sub.prefix.trim()) || prioMap.get('(default)') // [-1, 'L']
}
const isRightAssoc = (sub) => {
  return rightAssoc.has(sub.prefix.trim())
}

const jevkoToMap = (str) => {
  const map = new Map()
  for (const {prefix, jevko} of parseJevko(str).subjevkos) {
    if (prefix.includes('#omit') === false) map.set(prefix.trim(), +jevko.suffix)
  }
  return map
}

const jevkoToSet = (str) => {
  const set = new Set()
  for (const {prefix, jevko} of parseJevko(str).subjevkos) {
    if (prefix.includes('#omit') === false) set.add(jevko.suffix)
  }
  return set
}

const prioMap = jevkoToMap(`
  , [1]

  := [2]

  #omit ?: [3]
  ? [3]
  : [3]

  ?? [4]
  || [4]

  && [5]

  | [6]

  ^ [7]

  & [8]
  
  = [9]
  != [9]
  
  < [10]
  <= [10]
  > [10]
  >= [10]
  
  << [11]
  >> [11]
  >>> [11]

  + [12]
  - [12]
  
  * [13]
  / [13]
  % [13]

  ** [14]

  fn [20]
  => [20]

  then [15]
  elif [15]
  else [15]
  
  if [-1]

  [1]
  #omit [1]

  (default) [18]
  #omit (default) [18]
`)

const rightAssoc = jevkoToSet(`
  [:=]
  #omit [?:]
  [?]
  [:]
  [**]
  [fn]
  [=>]

  #omit [then]
`)

const prios = new Map([
  [',', [1, 'L']],

  [':=', [2, 'R']],

  // ['?:', [3, 'R']],

  ['??', [4, 'L']],
  ['||', [4, 'L']],

  ['&&', [5, 'L']],

  ['|', [6, 'L']],

  ['^', [7, 'L']],

  ['&', [8, 'L']],

  ['=', [9, 'L']],
  ['!=', [9, 'L']],

  ['<', [10, 'L']],
  ['<=', [10, 'L']],
  ['>', [10, 'L']],
  ['>=', [10, 'L']],

  ['<<', [11, 'L']],
  ['>>', [11, 'L']],
  ['>>>', [11, 'L']],

  ['+', [12, 'L']],
  ['-', [12, 'L']],

  ['*', [13, 'L']],
  ['/', [13, 'L']],
  ['%', [13, 'L']],

  ['**', [14, 'R']],

  ['fn', [15, 'R']],
  ['=>', [15, 'R']],
  ['then', [15, 'R']],
  ['elif', [15, 'L']],
  ['else', [15, 'L']],
  ['if', [-1, 'L']],
  ['', [Infinity, 'L']],
])

import {parseJevko} from 'https://cdn.jsdelivr.net/gh/jevko/parsejevko.js@0.1.3/mod.js'
import {jevkoToString} from 'https://cdn.jsdelivr.net/gh/jevko/jevkoutils.js@v0.1.6/mod.js'

console.log(jevkoToString(bracketize(parseJevko(`[1]-[2]*[3]/[5]**[10]**[2]+[4]*[5]*[6]`))))
console.log(jevkoToString(bracketize(parseJevko(`[1]-[2]*[3]/[5]**[10]**[2]*[3]+[4]*[5]*[6]`))))
console.log(jevkoToString(bracketize(parseJevko(`[1]-[2]*[3]/[5]**[10]**[2]*[3]/[4]*[5]*[6]`))))


console.log(jevkoToString(bracketize(parseJevko(`let [f] fn [n] fn [m] fn [o] => [...] f [1][2][3]`))))

console.log(jevkoToString(bracketize(parseJevko(`if [a] then [b] elif [d] then [x] else [c]`))))
console.log(jevkoToString(bracketize(parseJevko(`if [a][b] [c][d] [e] fib[1]`))))
console.log(jevkoToString(bracketize(parseJevko(`[3]+[2]*[fib[[n]-[1]]]`))))
console.log(jevkoToString(bracketize(parseJevko(`fib[[n]-[1]]+[3]*[[8].[fact]]`))))
console.log(jevkoToString(bracketize(parseJevko(`[2][1].[+]`))))
console.log(jevkoToString(bracketize(parseJevko(`[.]? [.]: [.]? [.]: [.]`))))
console.log(jevkoToString(bracketize(parseJevko(`
[2] + [3] < [5] + [2] ? [print[less]] : [print[more or equal]]
[]
fib [5] 
fact [9]`))))

console.log(jevkoToString(bracketize(parseJevko(`
fib [n] - [1] fib [n] - [2]
`))))
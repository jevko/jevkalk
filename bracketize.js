const bracketize = (jevko) => {
  const {subjevkos, suffix} = jevko
  const parts = []
  let part
  while (subjevkos.length > 0) {
    const first = subjevkos.shift()
    const firstPrio = getPrio(first)
    part = bracketizeSubjevkos([], first, firstPrio, subjevkos, suffix, 0)
    parts.push(...part.subjevkos)
    // parts.push({prefix: '', jevko: part})
  }
  return {subjevkos: parts, suffix: part.suffix}
}

// init = [], prev, prevPrio, subs, suffix
const bracketizeSubjevkos = (init, first, firstPrio, subs, suffix, pfp) => {
  let prev = first
  let prevPrio = firstPrio // prios.get(prev.prefix.trim()) || Infinity
  init.push(prev)
  const jevko = {subjevkos: init}
  while (subs.length > 0) {
    const sub = subs[0] //.shift()
    const prio = getPrio(sub)
    const [m, a] = prio
    const [pm, pa] = prevPrio
    if (m < pm) {
      console.log('mpfp')
      jevko.suffix = ''
      return jevko
    }
    if (m > pm || (m === pm && a == 'R')) {
      prev.jevko = bracketizeSubjevkos([{prefix: '', jevko: prev.jevko}], subs.shift(), prio, subs, suffix, firstPrio)
      if (subs.length > 0) {
        // prevPrio = prio
        // prev = sub
        continue
      }
      jevko.suffix = ''
      return jevko
    }
    jevko.subjevkos.push(subs.shift())
    // jevko.subjevkos.push(sub)
    prevPrio = prio
    prev = sub
  }
  jevko.suffix = suffix
  return jevko
}

const getPrio = (sub) => {
  return prios.get(sub.prefix.trim()) || [-1, 'L']
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

  [Infinity]
`)

const rightAssoc = jevkoToSet(`
  [:=]
  #omit [?:]
  [**]
  [fn]
  [=>]
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

console.log(jevkoToString(bracketize(parseJevko(`[1]-[2]*[3]/[5]**[10]**[2]+[4]*[5]*[6]`)), null, 2))
console.log(jevkoToString(bracketize(parseJevko(`[1]-[2]*[3]/[5]**[10]**[2]*[3]+[4]*[5]*[6]`))))


console.log(jevkoToString(bracketize(parseJevko(`let [f] fn [n] fn [m] fn [o] => [...] f [1][2][3]`)), null, 2))

console.log(jevkoToString(bracketize(parseJevko(`if [a] then [b] elif [d] then [x] else [c]`)), null, 2))
console.log(jevkoToString(bracketize(parseJevko(`if [a][b] [c][d] [e] fib[1]`)), null, 2))
console.log(jevkoToString(bracketize(parseJevko(`[3]+[2]*[fib[[n]-[1]]]`))))
console.log(jevkoToString(bracketize(parseJevko(`fib[[n]-[1]]+[3]*[[8].[fact]]`))))
console.log(jevkoToString(bracketize(parseJevko(`[2][1].[+]`))))

console.log(jevkoToString(bracketize(parseJevko(`[2] + [3] < [5] + [2] ? [print[less]] : [print[more or equal]] fib [5] fact [9]`))))
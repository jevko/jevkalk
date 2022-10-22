/**
 * wrapper for interpretToArray which returns only the last value;
 * assumption: interpretToArray returns at least one value
 */
export const interpret = (jevko, context = topContext) => {
  return interpretToArray(jevko, context).at(-1)
}

/**
 * evaluates all subjevkos in a Jevko and returns an array of values;
 * @param {*} jevko 
 * @param {*} context 
 * @returns 
 */
const interpretToArray = (jevko, context = topContext) => {
  const {subjevkos, suffix} = jevko

  // sugar for 1-arg fn invocations
  if (subjevkos.length === 0) {
    return [_(jevko, context)]
  }

  if (suffix.trim() !== '') throw Error(`Unexpected suffix: ${suffix}`)

  return subjevkos.map(s => interpretSubjevko(s, context))
}

export const interpretSubjevko = ({prefix, jevko}, context) => {
  const operator = prefix.trim()
  const operation = findValueInContext(context, operator)
  if (operation === undefined) throw Error(`Unknown operator: ${operator}`)

  return operation(jevko, context)
}

const findValueInContext = (context, name) => {
  let ctx = context
  while (true) {
    if (ctx.has(name)) return ctx.get(name)
    if (ctx.has(parentSym)) ctx = ctx.get(parentSym)
    else return undefined
  }
}
const findParentContext = (context, name) => {
  let ctx = context
  while (true) {
    if (ctx.has(name)) return ctx
    if (ctx.has(parentSym)) ctx = ctx.get(parentSym)
    else return undefined
  }
}

const interpretName = (subjevko) => {
  const {prefix, jevko} = subjevko
  if (prefix.trim() !== '') throw Error('name prefix')
  const {subjevkos, suffix} = jevko
  if (subjevkos.length > 0) throw Error('complex name')
  return suffixToNonEmptyName(suffix)
}

const suffixToNonEmptyName = (suffix) => {
  const name = suffix.trim()
  if (name === '') throw Error('empty name')
  return name
}

const _let = (jevko, context, type = 'bind') => {
  const {subjevkos, suffix} = jevko
  if (suffix.trim() !== '') throw Error(`Unexpected suffix: ${suffix}`)
  
  const {length} = subjevkos
  if (length % 2 !== 0) throw Error(`<${type}> expected even number of arguments, got ${length}`)

  const plop = context.get(plopSym)
  const isPlop = type === 'plop'
  
  let value
  for (let i = 0; i < length; i += 2) {
    const nameSub = subjevkos[i]
    const valueSub = subjevkos[i + 1]
    const name = interpretName(nameSub, context)
    value = interpretSubjevko(valueSub, context)

    if (type === 'set!') {
      setHelp(context, name, value)
    } else {
      // note: this will shadow same name in parent contexts
      if (context.has(name)) throw Error(`Name ${name} already defined!`)
      context.set(name, value)
  
      if (isPlop) plop.add(name)
    }
  }

  return value
}

const setHelp = (context, name, value) => {
  const ctx = findParentContext(context, name)
  if (ctx === undefined) throw Error(`Name ${name} not defined!`)

  if (ctx.get(plopSym).has(name)) {
    ctx.set(name, value)
  } else {
    throw Error(`Name ${name} is not settable!`)
  }
}

const plop = (jevko, context) => {
  return _let(jevko, context, 'plop')
}
const set = (jevko, context) => {
  return _let(jevko, context, 'set!')
}

const _ = (jevko, context) => {
  const {suffix, subjevkos} = jevko

  if (subjevkos.length > 0) throw Error('Complex _ evaluation not supported!')

  const name = suffix.trim()

  if (name === '') return suffix

  const num = +name
  if (Number.isNaN(num) === false) return num
  // const name = suffix.trim()

  const value = findValueInContext(context, name)
  if (value !== undefined) return value
  throw Error(`unknown name: ${name}`)
}

// each context except top has a parent context under [parentSym]
const parentSym = Symbol.for('parent')

// each context holds ids of the mutable variables in a set under [plopSym]
const plopSym = Symbol.for('plop')

const makeContext = (parent) => new Map([
  [parentSym, parent],
  [plopSym, new Set()],
])

const copyContext = (ctx) => {
  return new Map(ctx.entries())
}

const isJevko = (val) => {
  if (typeof val !== 'object') return false
  if (val === null) return false
  if (Array.isArray(val)) return false

  if (Object.hasOwn(val, 'subjevkos') && Object.hasOwn(val, 'suffix')) return true
}

const topContext = new Map([
  [plopSym, new Set()],
  ['true', true],
  ['false', false],
  ['', _],
  ['bind', _let],
  ['plop', plop],
  ['set!', set],
  ['fun', (jevko, defineContext) => {
    const {subjevkos, suffix} = jevko
    // assert suffix empty or treat as extra [subjevko]

    if (subjevkos.length < 2) throw Error('params and body required')

    const params = subjevkos[0]
    if (params.prefix.trim() !== '') throw Error('params prefix nonempty')

    // todo: only support named params, no positional?
    const names = []
    {
      const {jevko} = params
      const {subjevkos, suffix} = jevko

      // sugar for 1-arg functions
      if (subjevkos.length === 0) {
        names.push(suffixToNonEmptyName(suffix))
      } else {
        // assert suffix empty or [sub]
        for (const subjevko of subjevkos) {
          const name = interpretName(subjevko)
          if (names.includes(name)) throw Error('duplicate param name')
          names.push(name)
        }
      }
    }

    const body = {subjevkos: subjevkos.slice(1), suffix: ''}

    return (jevko, callContext) => {
      const localContext = makeContext(defineContext)

      const values = interpretToArray(jevko, callContext)
      if (values.length !== names.length) throw Error('arity error')
      for (let i = 0; i < names.length; ++i) {
        localContext.set(names[i], values[i])
      }

      return interpretToArray(body, localContext).at(-1)
    }
  }],
  ['error', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (subjevkos.length > 0) throw Error('Complex jevkos as errors not supported!')

    throw Error(suffix)
  }],
  ['\'', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (subjevkos.length > 0) throw Error('Complex jevkos as strings not supported!')

    return suffix
  }],
  ['\'e', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (subjevkos.length > 0) throw Error('Complex jevkos as strings not supported!')

    return JSON.parse(`"${suffix}"`)
  }],
  ['char at', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (subjevkos.length !== 2) throw Error(`Expected 2 subjevkos, got ${subjevkos.length}`)

    const [str, i] = interpretToArray(jevko, context)

    if (typeof str !== 'string') throw Error('expected string as first arg')
    if (typeof i !== 'number') throw Error('expected number as second arg')

    return str.at(i)
  }],
  ['str slice', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (subjevkos.length !== 3) throw Error(`Expected 3 subjevkos, got ${subjevkos.length}`)

    const [str, i, j] = interpretToArray(jevko, context)

    if (typeof str !== 'string') throw Error('expected string as first arg')
    if (typeof i !== 'number') throw Error(`expected number as second arg, got ${typeof i}`)
    if (typeof j !== 'number') throw Error('expected number as third arg')

    return str.slice(i, j)
  }],
  ['str concat', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (subjevkos.length < 2) throw Error(`Expected at least 2 subjevkos, got ${subjevkos.length}`)

    const strs = interpretToArray(jevko, context)

    for (const [i, str] of strs.entries()) {
      if (typeof str !== 'string') throw Error(`expected string as arg #${i}, got ${typeof str}`)
    }

    return ''.concat(...strs)
  }],
  ['str length', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    
    let str
    if (subjevkos.length === 0) {
      str = _(jevko, context)
    } else if (subjevkos.length === 1) {
      ;[str] = interpretToArray(jevko, context)
    } else throw Error(`Expected 1 subjevko, got ${subjevkos.length}`)

    if (typeof str !== 'string') throw Error('expected string as arg')

    return str.length
  }],
  ['length', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    
    let j
    if (subjevkos.length === 0) {
      j = _(jevko, context)
    } else if (subjevkos.length === 1) {
      ;[j] = interpretToArray(jevko, context)
    } else throw Error(`Expected 1 subjevko, got ${subjevkos.length}`)

    if (isJevko(j) === false) throw Error('expected a jevko')

    return j.subjevkos.length
  }],
  // todo: elaborate
  ['log', (jevko, context) => {
    const values = interpretToArray(jevko, context)
    
    console.log(...values)

    return ''
  }],
  ['suffix!', (jevko, context) => {
    const {subjevkos, suffix} = jevko

    if (subjevkos.length !== 2) throw Error(`Expected 2 subjevkos, got ${subjevkos.length}`)

    const value = interpretSubjevko(subjevkos[1], context)

    const nameSub = subjevkos[0]

    console.assert(nameSub.prefix.trim() === '', 'suffix! name prefix must be empty')

    const j = nameSub.jevko

    console.assert(j.subjevkos.length === 0, 'suffix! name subjevkos must be empty')

    const name = j.suffix.trim()

    console.assert(name !== '', 'suffix! name must not be empty')

    const ctx = findParentContext(context, name)
    if (ctx === undefined) throw Error(`Name ${name} not defined!`)
  
    if (ctx.get(plopSym).has(name)) {
      const jevko = ctx.get(name)
      
      if (isJevko(jevko) === false) throw Error('expected a jevko')

      jevko.suffix = value
    } else {
      throw Error(`Name ${name} is not settable!`)
    }
    
    return value
  }],
  ['push!', (jevko, context) => {
    const {subjevkos, suffix} = jevko

    const {length} = subjevkos

    const nameSub = subjevkos[0]

    console.assert(nameSub.prefix.trim() === '', 'push! name prefix must be empty')

    const j = nameSub.jevko

    console.assert(j.subjevkos.length === 0, 'push! name subjevkos must be empty')

    const name = j.suffix.trim()

    console.assert(name !== '', 'push! name must not be empty')

    const ctx = findParentContext(context, name)
    if (ctx === undefined) throw Error(`Name ${name} not defined!`)
  
    if (ctx.get(plopSym).has(name)) {
      const jevko = ctx.get(name)
      
      if (isJevko(jevko) === false) throw Error('expected a jevko')

      let value, prefix = ''
      if (length === 2) {
        value = interpretSubjevko(subjevkos[1], context)
      } else if (length === 3) {
        prefix = interpretSubjevko(subjevkos[1], context)
        value = interpretSubjevko(subjevkos[2], context)
      } else throw Error(`Expected 2 or 3 subjevkos, got ${subjevkos.length}`)

      jevko.subjevkos.push({prefix, jevko: value})
    } else {
      throw Error(`Name ${name} is not settable!`)
    }

    // todo: maybe return sth else
    return ''
  }],
  ['pop!', (jevko, context) => {
    const {subjevkos, suffix} = jevko

    const {length} = subjevkos

    let name
    if (length === 0) {
      name = suffix.trim()
    }
    else if (length !== 1) throw Error(`Expected 1 subjevko, got ${subjevkos.length}`)
    else {
      const nameSub = subjevkos[0]

      console.assert(nameSub.prefix.trim() === '', 'push! name prefix must be empty')

      const j = nameSub.jevko

      console.assert(j.subjevkos.length === 0, 'push! name subjevkos must be empty')

      name = j.suffix.trim()
    }

    console.assert(name !== '', 'push! name must not be empty')

    const ctx = findParentContext(context, name)
    if (ctx === undefined) throw Error(`Name ${name} not defined!`)
  
    if (ctx.get(plopSym).has(name)) {
      const jevko = ctx.get(name)
      
      if (isJevko(jevko) === false) throw Error('expected a jevko')

      if (jevko.subjevkos.length === 0) throw Error(`Can't pop empty subjevkos!`)

      return jevko.subjevkos.pop().jevko
    } else {
      throw Error(`Name ${name} is not settable!`)
    }
  }],
  // todo: elaborate
  // right now this creates an empty jevko
  [';', (jevko, context) => {
    return {subjevkos: [], suffix: ''}
  }],
  ['do', (jevko, context) => {
    // create local block context -- bindings created within it will be invisible outside
    const blockContext = makeContext(context)
    const values = interpretToArray(jevko, blockContext)
    return values.at(-1)
  }],
  ['for', (jevko, context) => {
    const [declarations, condition, updates, ...body] = jevko.subjevkos

    // create initial context for loop variable declarations
    const declContext = makeContext(context)
    
    // evaluate declarations in the initial context 
    interpretSubjevko(declarations, declContext)

    // the declaration context will be copied before applying updates at the end of the loop; updates will be applied to the copy rather than to the original, so as to preserve each iteration's binding values which may be closed over and referenced outside the loop
    let declContextCopy = declContext
    while (true) {
      // evaluate the loop condition in the current copy of the declaration context
      const condVal = interpretSubjevko(condition, declContextCopy)

      // check condition and break if false
      if (condVal === false) break
      else if (condVal !== true) throw Error('nonboolean cond value in for')

      // create a separate iteration context for bindings which will be created inside the loop body -- every iteration this context is created anew
      const iterContext = makeContext(declContextCopy)

      // evaluate the body of the loop in the iteration context
      body.map(s => interpretSubjevko(s, iterContext))

      // the new declaration context becomes the copy the current declaration context
      declContextCopy = copyContext(declContextCopy)

      // apply loop updates to the newly created declaration context -- the previous context is preserved
      interpretSubjevko(updates, declContextCopy)
    }

    // todo: maybe return last value
    return ''
  }],
  ['?', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (suffix.trim() !== '') throw Error(`Unexpected suffix: ${suffix}`)
    if (subjevkos.length < 2) throw Error(`Expected at least 2, got ${subjevkos.length}`)

    const {length} = subjevkos

    const hasAlt = length % 2 === 1

    const len = hasAlt?
      length - 1:
      length

    for (let i = 0; i < len; i += 2) {
      const condSub = subjevkos[i]
      const conseqSub = subjevkos[i + 1]

      const condValue = interpretSubjevko(condSub, context)
      if (condValue === true) return interpretSubjevko(conseqSub, context)

      if (condValue !== false) throw Error(`Non-boolean condition value: ${condValue}`)
    }

    if (hasAlt) {
      const altSub = subjevkos.at(-1)

      return interpretSubjevko(altSub, context)
    }

    return ''
  }],
  ['+', (jevko, context) => {
    const values = interpretToArray(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let sum = values[0]
    for (let i = 1; i < values.length; ++i) sum += values[i]
    return sum
  }],
  ['-', (jevko, context) => {
    const values = interpretToArray(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let diff = values[0]
    for (let i = 1; i < values.length; ++i) diff -= values[i]
    return diff
  }],
  ['*', (jevko, context) => {
    const values = interpretToArray(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let prod = values[0]
    for (let i = 1; i < values.length; ++i) prod *= values[i]
    return prod
  }],
  ['/', (jevko, context) => {
    const values = interpretToArray(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let quot = values[0]
    for (let i = 1; i < values.length; ++i) quot /= values[i]
    return quot
  }],
  ['<', (jevko, context) => {
    const values = interpretToArray(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let val = values[0]
    for (let i = 1; i < values.length; ++i) {
      if (val >= values[i]) return false
      val = values[i]
    }
    return true
  }],
  ['>', (jevko, context) => {
    const values = interpretToArray(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let val = values[0]
    for (let i = 1; i < values.length; ++i) {
      if (val <= values[i]) return false
      val = values[i]
    }
    return true
  }],
  ['=', (jevko, context) => {
    const values = interpretToArray(jevko, context)
    let val = values[0]
    for (let i = 1; i < values.length; ++i) {
      if (val !== values[i]) return false
      val = values[i]
    }
    return true
  }],
])
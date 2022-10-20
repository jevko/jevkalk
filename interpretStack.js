export const exec = (jevko, ctx = topContext, stack = []) => {
  const {subjevkos, suffix} = jevko

  while (subjevkos.length > 0) {
    // if (typeof stack.at(-1) === 'function') {
    //   // null signifies the fn was called from stack
    //   stack.pop()(null, subjevkos, ctx, stack)
    // } 
    // else {
    execSubjevko(subjevkos.shift(), subjevkos, ctx, stack)
    // }
  }
  // todo: treat suffix-only Jevkos differently
  execSuffix(suffix, ctx, stack)

  return stack
}

// note: can safely inline this; it's a fn purely for clarity
const execSubjevko = ({prefix, jevko}, subjevkos, context, stack) => {
  console.log(prefix, jevko)
  const operator = prefix.trim()

  let ctx = context

  // note: could extract lookup and factor out of execSuffix
  while (true) {
    if (ctx.has(operator)) break
    if (ctx.has(parentSym)) ctx = context.get(parentSym)
    else throw Error(`Unknown operator: ${operator}`)
  }

  const operation = ctx.get(operator)

  operation(jevko, subjevkos, ctx, stack)
}

const execSuffix = (suffix, context, stack) => {
  const id = suffix.trim()

  // note: empty suffix does nothing?
  if (id === '') return

  const num = +id
  if (Number.isNaN(num) === false) {
    console.log(num, id)
    stack.push(num)
    return
  }

  let ctx = context

  while (true) {
    if (ctx.has(id)) break
    if (ctx.has(parentSym)) ctx = context.get(parentSym)
    else throw Error(`Unknown id: ${id}`)
  }

  const value = ctx.get(id)
  stack.push(value)
}


const interpretName = (subjevko) => {
  const {prefix, jevko} = subjevko
  if (prefix.trim() !== '') throw Error('name prefix')
  const {subjevkos, suffix} = jevko
  if (subjevkos.length > 0) throw Error('complex name')
  const name = suffix.trim()
  if (name === '') throw Error('empty name')
  return name
}

const _let = (jevko, context) => {
  const {subjevkos, suffix} = jevko
  if (suffix.trim() !== '') throw Error(`Unexpected suffix: ${suffix}`)
  if (subjevkos.length !== 2) throw Error(`Expected 2, got ${subjevkos.length}`)
  const [nameSub, valueSub] = subjevkos
  const name = interpretName(nameSub, context)
  const value = interpretSubjevko(valueSub, context)
  if (context.has(name)) throw Error(`Name ${name} already defined!`)
  context.set(name, value)
  return value
}

const parentSym = Symbol.for('parent')
const topContext = new Map([
  // todo: redefine with new semantics in mind
  // perhaps remove altogether
  // then partial application will be:
  // define '' to be the partially applied fn, invoke that on next jevko
  // where the invocation undefines ''
  ['', (jevko, subjevkos, ctx, stack) => {
    console.log('"', jevko)
    // alt: stack.push(exec(jevko, ctx)) -- to isolate evaluation of jevko
    exec(jevko, ctx, stack)
  }],
  ['let', _let],
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
      // assert suffix empty or [sub]
      for (const subjevko of subjevkos) {
        const name = interpretName(subjevko)
        if (names.includes(name)) throw Error('duplicate param name')
        names.push(name)
      }
    }

    const body = {subjevkos: subjevkos.slice(1), suffix: ''}

    return (jevko, callContext) => {
      const localContext = new Map([[parentSym, defineContext]])

      const values = interpret(jevko, callContext)
      if (values.length !== names.length) throw Error('arity error')
      for (let i = 0; i < names.length; ++i) {
        localContext.set(names[i], values[i])
      }

      return interpret(body, localContext).at(-1)
    }
  }],
  ['?', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (suffix.trim() !== '') throw Error(`Unexpected suffix: ${suffix}`)
    if (subjevkos.length !== 3) throw Error(`Expected 3, got ${subjevkos.length}`)
    const [condSub, conseqSub, altSub] = subjevkos
    const condValue = interpretSubjevko(condSub, context)
    if (condValue === true) return interpretSubjevko(conseqSub, context)
    if (condValue === false) return interpretSubjevko(altSub, context)
    throw Error(`Non-boolean condition value: ${condValue}`)
  }],
  ['+', (jevko, subjevkos, ctx, stack) => {
    // alt: b = exec(jevko, ctx) -- this way b's evaluation is isolated
    exec(jevko, ctx, stack)

    if (stack.length < 2) {
      console.log(stack)
      throw Error('+ has arity 2')
    }
    const a = stack.pop()
    const b = stack.pop()
    if (typeof a !== 'number') {
      console.log(stack)
      throw Error('left arg must be number')
    }
    if (typeof b !== 'number') throw Error('right arg must be number')
    stack.push(a + b)
  }],
  ['-', (jevko, context) => {
    const values = interpret(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let diff = values[0]
    for (let i = 1; i < values.length; ++i) diff -= values[i]
    return diff
  }],
  ['*', (jevko, context) => {
    const values = interpret(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let prod = values[0]
    for (let i = 1; i < values.length; ++i) prod *= values[i]
    return prod
  }],
  ['/', (jevko, context) => {
    const values = interpret(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let quot = values[0]
    for (let i = 1; i < values.length; ++i) quot /= values[i]
    return quot
  }],
  ['<', (jevko, context) => {
    const values = interpret(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let val = values[0]
    for (let i = 1; i < values.length; ++i) {
      if (val >= values[i]) return false
      val = values[i]
    }
    return true
  }],
])
export const interpret = (jevko, context = topContext) => {
  const {subjevkos, suffix} = jevko
  if (suffix.trim() !== '') throw Error(`Unexpected suffix: ${suffix}`)

  return subjevkos.map(s => interpretSubjevko(s, context))
}

export const interpretSubjevko = ({prefix, jevko}, context) => {
  const operator = prefix.trim()

  let ctx = context

  while (true) {
    if (ctx.has(operator)) break
    if (ctx.has(parentSym)) ctx = context.get(parentSym)
    else throw Error(`Unknown operator: ${operator}`)
  }

  // if (context.has(operator) === false) throw Error(`Unknown operator: ${operator}`)

  const operation = ctx.get(operator)

  return operation(jevko, context)
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
  ['', (jevko, context) => {
    const {suffix} = jevko
    const num = +suffix
    if (Number.isNaN(num) === false) return num
    const name = suffix.trim()
    if (context.has(name)) return context.get(name)
    throw Error(`unknown name: ${name}`)
  }],
  ['let', _let],
  ['fun', (jevko, defineContext) => {
    const {subjevkos, suffix} = jevko
    // assert suffix empty or treat as extra [subjevko]

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
  ['+', (jevko, context) => {
    const values = interpret(jevko, context)
    if (values.some(v => typeof v !== 'number')) throw Error('only numbers allowed')
    let sum = values[0]
    for (let i = 1; i < values.length; ++i) sum += values[i]
    return sum
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
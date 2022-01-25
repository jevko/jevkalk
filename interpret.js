export const interpret = (jevko, context = topContext) => {
  const {subjevkos, suffix} = jevko
  if (suffix.trim() !== '') throw Error(`Unexpected suffix: ${suffix}`)

  return subjevkos.map(s => interpretSubjevko(s, context))
}

export const interpretSubjevko = ({prefix, jevko}, context) => {
  const operator = prefix.trim()

  if (context.has(operator) === false) throw Error(`Unknown operator: ${operator}`)

  const operation = context.get(operator)

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

const topContext = new Map([
  ['', (jevko, context) => {
    const {suffix} = jevko
    const num = +suffix
    if (Number.isNaN(num) === false) return num
    const name = suffix.trim()
    if (context.has(name)) return context.get(name)
    throw Error(`unknown name: ${name}`)
  }],
  ['let', (jevko, context) => {
    const {subjevkos, suffix} = jevko
    if (suffix.trim() !== '') throw Error(`Unexpected suffix: ${suffix}`)
    if (subjevkos.length !== 2) throw Error(`Expected 2, got ${subjevkos.length}`)
    const [nameSub, valueSub] = subjevkos
    const name = interpretName(nameSub, context)
    const value = interpretSubjevko(valueSub, context)
    if (context.has(name)) throw Error(`Name ${name} already defined!`)
    context.set(name, value)
    return value
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
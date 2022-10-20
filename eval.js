
const evalJ = (jevko, context = topContext, ret = []) => {
  if (jevko === '') return ret
  if (typeof jevko === 'string') throw Error('not implemented')

  const {car, cdr} = jevko

  const operator = car.trim()

  let ctx = context

  while (true) {
    if (ctx.has(operator)) break
    if (ctx.has(parentSym)) ctx = context.get(parentSym)
    else throw Error(`Unknown operator: ${operator}`)
  }

  const operation = ctx.get(operator)

  const {
    // always even number
    exp: nexp = cdr.cdr, 
    ctx: nctx = ctx, 
    ret: nret = ret
  } = operation(cdr, context, ret)

  return evalJ(nexp, nctx, nret)
}
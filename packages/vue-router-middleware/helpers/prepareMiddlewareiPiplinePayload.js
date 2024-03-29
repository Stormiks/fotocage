import { NotAMiddleware } from '../lib/Exceptions/NotAMiddleware'

export const prepareMiddlewarePipelinePayload = (
  x,
  arr = []
) => {
  if (!Array.isArray(arr)) {
    throw new NotAMiddleware()
  } else {
    const allMiddlewares = arr.every(a => typeof a === 'function')
    if (!allMiddlewares)
      throw new NotAMiddleware()
  }

  if (Array.isArray(x)) {
    if (x.length < 1)
      return [...arr]

    const allMiddlewares = x.every(_x => typeof _x === 'function')
    if (allMiddlewares)
      return [...arr, ...x]

    throw new NotAMiddleware()
  }

  if (typeof x === 'function')
    arr.push(x)
  else
    throw new NotAMiddleware()

  return arr
}

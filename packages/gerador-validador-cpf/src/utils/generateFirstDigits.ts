import { allDigitsAreEqual } from './allDigitsAreEqual.js'

export const generateFirstDigits = () => {
  let digits = ''

  do {
    for (let i = 0; i < 9; ++i) {
      // eslint-disable-next-line sonarjs/pseudo-random
      digits += String(Math.floor(Math.random() * 10))
    }
  } while (allDigitsAreEqual(digits))

  return digits
}

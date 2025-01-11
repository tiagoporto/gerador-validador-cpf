import { allDigitsAreEqual } from './allDigitsAreEqual.js'

export const generateFirstDigits = () => {
  let digits = ''

  do {
    if (digits.length === 9) {
      digits = ''
    }

    for (let i = 0; i < 9; ++i) {
      digits += String(Math.floor(Math.random() * 10))
    }
  } while (allDigitsAreEqual(digits))

  return digits
}

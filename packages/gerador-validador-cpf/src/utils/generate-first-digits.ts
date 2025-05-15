import { allSameCharacters } from './all-same-characters.js'

export const generateFirstDigits = () => {
  let digits = ''

  do {
    if (digits.length === 9) {
      digits = ''
    }

    for (let i = 0; i < 9; ++i) {
      digits += String(Math.floor(Math.random() * 10))
    }
  } while (allSameCharacters(digits))

  return digits
}

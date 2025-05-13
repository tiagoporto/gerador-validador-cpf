import { calcFirstChecker, calcSecondChecker } from './utils/index.js'
/**
 * Validates a given CPF (Cadastro de Pessoas Físicas) number.
 * @param value  - The CPF number as a string
 * @returns      true = valid || false = invalid
 */
export const validate = (value: string): boolean => {
  if (typeof value !== 'string') {
    return false
  }

  const cleanCNPJ = value.toUpperCase().replaceAll(/[/\s.-]/g, '')
  const firstTwelveDigits = cleanCNPJ.slice(0, 12)
  const checker = cleanCNPJ.slice(12, 14)
  // if (!hasCPFLength(cleanCNPJ) || allDigitsAreEqual(cleanCNPJ)) {
  //   return false
  // }
  const checker1 = calcFirstChecker(firstTwelveDigits)
  const checker2 = calcSecondChecker(`${firstTwelveDigits}${checker1}`)
  return checker === `${checker1}${checker2}`
}

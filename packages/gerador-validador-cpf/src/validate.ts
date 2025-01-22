import {
  allDigitsAreEqual,
  calcFirstChecker,
  calcSecondChecker,
  hasCPFLength,
} from './utils/index.js'

/**
 * Validates a given CPF (Cadastro de Pessoas Físicas) number.
 * @param value  - The CPF number as a string
 * @returns      true = valid || false = invalid
 */
export const validate = (value: string): boolean => {
  if (typeof value !== 'string') {
    return false
  }

  const cleanCPF = String(value).replaceAll(/[\s.-]/g, '')
  const firstNineDigits = cleanCPF.slice(0, 9)
  const checker = cleanCPF.slice(9, 11)

  if (!hasCPFLength(cleanCPF) || allDigitsAreEqual(cleanCPF)) {
    return false
  }

  const checker1 = calcFirstChecker(firstNineDigits)
  const checker2 = calcSecondChecker(`${firstNineDigits}${checker1}`)

  return checker === `${checker1}${checker2}`
}

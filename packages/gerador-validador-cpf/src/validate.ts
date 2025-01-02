import {
  calcFirstChecker,
  calcSecondChecker,
  allDigitsAreEqual,
  hasCPFLength,
} from './utils'

/**
 * Validates a given CPF (Cadastro de Pessoas Físicas) number.
 * @param  {string} value  - The CPF number as a string
 * @returns {boolean}      true = valid || false = invalid
 */
export const validate = (value: string) => {
  if (typeof value !== 'string') {
    return false
  }

  const cleanCPF = String(value).replace(/[\s.-]/g, '')
  const firstNineDigits = cleanCPF.slice(0, 9)
  const checker = cleanCPF.slice(9, 11)

  if (!hasCPFLength(cleanCPF) || allDigitsAreEqual(cleanCPF)) {
    return false
  }

  const checker1 = calcFirstChecker(firstNineDigits)
  const checker2 = calcSecondChecker(`${firstNineDigits}${checker1}`)

  return checker === `${checker1}${checker2}`
}

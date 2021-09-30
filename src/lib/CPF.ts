import { calcFirstChecker, calcSecondChecker } from './calcChecker'
import {
  allDigitsAreEqual,
  hasCPFLength,
  generateFirstDigits,
  formatCPF,
} from './utils'

/**
 * @function Generate
 * @param  {string} [formatOption="default"] - 'digits' | 'checker' | 'default'
 *
 * @returns {string}                  Valid and formatted CPF
 */
export const generate = ({ format }: { format?: boolean } = {}): string => {
  let firstNineDigits = ''

  do {
    firstNineDigits = generateFirstDigits()
  } while (allDigitsAreEqual(firstNineDigits))

  const firstChecker = calcFirstChecker(firstNineDigits)
  const secondChecker = calcSecondChecker(firstNineDigits + firstChecker)
  const generatedCPF = `${firstNineDigits}${firstChecker}${secondChecker}`

  return formatCPF(generatedCPF, format)
}

/**
 * @function Validate
 * @param  {string} value  CPF number
 *
 * @returns {boolean}                true = valid || false = invalid
 */
export const validate = (value: string): boolean => {
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

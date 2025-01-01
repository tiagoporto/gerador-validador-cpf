import { calcFirstChecker, calcSecondChecker } from './calcChecker'
import {
  allDigitsAreEqual,
  hasCPFLength,
  generateFirstDigits,
  formatCPF,
} from './utils'

/**
 * Generates a valid CPF (Cadastro de Pessoas Físicas) number.
 *
 * @param {object} [options]         - Options for CPF generation.
 * @param {boolean} [options.format] - If true, the generated CPF will be formatted with dots and a dash (e.g., 123.456.789-09).
 * @returns {string}                 The generated CPF number, optionally formatted.
 */
export const generate = ({ format }: { format?: boolean } = {}) => {
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
 * Validates a given CPF (Cadastro de Pessoas Físicas) number.
 *
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

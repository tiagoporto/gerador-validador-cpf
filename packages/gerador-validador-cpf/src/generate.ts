import {
  allDigitsAreEqual,
  calcFirstChecker,
  calcSecondChecker,
  formatCPF,
  generateFirstDigits,
} from './utils/index.js'

/**
 * Generates a valid CPF (Cadastro de Pessoas Físicas) number.
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

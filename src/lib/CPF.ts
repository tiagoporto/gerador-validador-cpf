import { calcFirstChecker, calcSecondChecker } from './calcChecker'
import {
  allDigitsAreEqual,
  hasCPFLength,
  generateFirstDigits,
  formatCPF,
} from './utils'

/**
 * [Gerador e Validador de CPF](https://tiagoporto.github.io/gerador-validador-cpf)
 * @author Tiago Porto
 *
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
 *
 * [Gerador e Validador de CPF](https://tiagoporto.github.io/gerador-validador-cpf)
 * @author Tiago Porto
 *
 * @function Validate
 * @param  {string} value  CPF number
 *
 * @returns {boolean}                true = valid || false = invalid
 */
export const validate = (value: string): boolean => {
  if (typeof value !== 'string') {
    return false
  }

  const cleanCPF = String(value).replace(/\.|-|\s/g, '')
  const firstNineDigits = cleanCPF.substring(0, 9)
  const checker = cleanCPF.substring(9, 11)

  if (!hasCPFLength(cleanCPF) || allDigitsAreEqual(cleanCPF)) {
    return false
  }

  const checker1 = calcFirstChecker(firstNineDigits)
  const checker2 = calcSecondChecker(`${firstNineDigits}${checker1}`)

  return checker === `${checker1}${checker2}`
}

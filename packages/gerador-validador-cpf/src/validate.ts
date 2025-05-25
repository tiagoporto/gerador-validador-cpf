import {
  allSameCharacters,
  calcCheckDigit,
  hasCPFLength,
  IMPORTANCE_FIRST_DIGIT,
  IMPORTANCE_SECOND_DIGIT,
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

  if (!hasCPFLength(cleanCPF) || allSameCharacters(cleanCPF)) {
    return false
  }

  const firstNineDigits = cleanCPF.slice(0, 9)
  const checkDigits = cleanCPF.slice(9, 11)
  const firstCheckDigit = calcCheckDigit(
    firstNineDigits,
    IMPORTANCE_FIRST_DIGIT,
  )
  const secondCheckDigit = calcCheckDigit(
    `${firstNineDigits}${firstCheckDigit}`,
    IMPORTANCE_SECOND_DIGIT,
  )

  return checkDigits === `${firstCheckDigit}${secondCheckDigit}`
}

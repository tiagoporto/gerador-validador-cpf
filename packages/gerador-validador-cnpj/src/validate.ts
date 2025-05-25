import {
  allSameCharacters,
  calcCheckDigit,
  isAlphanumerichHasCNPJLength,
  IMPORTANCE_FIRST_DIGIT,
  IMPORTANCE_SECOND_DIGIT,
} from './utils/index.js'

/**
 * Validates a given CNPJ (Cadastro Nacional da Pessoa Jurídica) number.
 * @param value  - The CNPJ number as a string
 * @returns      true = valid || false = invalid
 */
export const validate = (value: string): boolean => {
  if (typeof value !== 'string') {
    return false
  }

  const cleanCNPJ = value.toUpperCase().replaceAll(/[/\s.-]/g, '')
  if (
    !isAlphanumerichHasCNPJLength(cleanCNPJ) ||
    allSameCharacters(cleanCNPJ)
  ) {
    return false
  }

  const firstTwelveDigits = cleanCNPJ.slice(0, 12)
  const checkDigits = cleanCNPJ.slice(12, 14)

  const firstCheckDigit = calcCheckDigit(
    firstTwelveDigits,
    IMPORTANCE_FIRST_DIGIT,
  )
  const secondCheckDigit = calcCheckDigit(
    `${firstTwelveDigits}${firstCheckDigit}`,
    IMPORTANCE_SECOND_DIGIT,
  )

  return checkDigits === `${firstCheckDigit}${secondCheckDigit}`
}

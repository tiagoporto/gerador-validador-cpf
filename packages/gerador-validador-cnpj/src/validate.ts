import {
  calcFirstCheckDigit,
  calcSecondCheckDigit,
  isAlphanumerichHasCNPJLength,
} from './utils/index.js'
import { allSameCharacters } from '../../../utils/all-same-characters.js'

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

  const firstCheckDigit = calcFirstCheckDigit(firstTwelveDigits)
  const secondCheckDigit = calcSecondCheckDigit(
    `${firstTwelveDigits}${firstCheckDigit}`,
  )

  return checkDigits === `${firstCheckDigit}${secondCheckDigit}`
}

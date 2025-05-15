import {
  calcFirstCheckDigit,
  calcSecondCheckDigit,
  hasCPFLength,
} from './utils/index.js'
import { allSameCharacters } from '../../../utils/all-same-characters.js'

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
  const firstCheckDigit = calcFirstCheckDigit(firstNineDigits)
  const secondCheckDigit = calcSecondCheckDigit(
    `${firstNineDigits}${firstCheckDigit}`,
  )

  return checkDigits === `${firstCheckDigit}${secondCheckDigit}`
}

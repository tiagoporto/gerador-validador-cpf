import { allSameCharacters, calcCheckDigits } from './utils/index.js'

/**
 * Validates a given CPF (Cadastro de Pessoas Físicas) number.
 * @param value  - The CPF number as a string
 * @returns      true = valid || false = invalid
 */
export const validate = (value: string): boolean => {
  const NOT_ALLOWED_SYMBOLS = /[^0-9.-]/i

  if (typeof value !== 'string' || NOT_ALLOWED_SYMBOLS.test(value)) {
    return false
  }

  const cleanCPF = value.replaceAll(/[.-]/g, '')

  if (!/^([0-9]){11}$/.test(cleanCPF) || allSameCharacters(cleanCPF)) {
    return false
  }

  const checkDigits = cleanCPF.slice(9)

  return checkDigits === calcCheckDigits(cleanCPF.slice(0, 9))
}

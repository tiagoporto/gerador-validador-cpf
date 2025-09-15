import { calcCheckDigits, isAlphanumericCNPJ } from './utils/index.js'

/**
 * Validates a given CNPJ (Cadastro Nacional da Pessoa Jurídica) number.
 * @param value  - The CNPJ number as a string
 * @returns      true = valid || false = invalid
 */
export const validate = (value: string): boolean => {
  const NOT_ALLOWED_SYMBOLS = /[^A-Z\d./-]/i

  if (typeof value !== 'string' || NOT_ALLOWED_SYMBOLS.test(value)) {
    return false
  }

  const replaceRegex = /[./-]/g
  const cleanCNPJ = value.replaceAll(replaceRegex, '')

  if (!isAlphanumericCNPJ(cleanCNPJ) || cleanCNPJ === '00000000000000') {
    return false
  }

  const checkDigits = cleanCNPJ.slice(12)

  return checkDigits === calcCheckDigits(cleanCNPJ.slice(0, 12))
}

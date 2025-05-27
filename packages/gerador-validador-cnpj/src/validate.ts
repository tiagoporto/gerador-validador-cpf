import { calcCheckDigits, isAlphanumericCNPJ } from './utils/index.js'

/**
 * Validates a given CNPJ (Cadastro Nacional da Pessoa Jurídica) number.
 * @param value  - The CNPJ number as a string
 * @param options - options for CNPJ validation
 * @param options.validateAlphanumeric - If true, will validate an alphanumeric CNPJ
 * @returns      true = valid || false = invalid
 */
export const validate = (
  value: string,
  { validateAlphanumeric = false }: { validateAlphanumeric?: boolean } = {},
): boolean => {
  const NOT_ALLOWED_SYMBOLS = /[^A-Z\d./-]/i

  if (typeof value !== 'string' || NOT_ALLOWED_SYMBOLS.test(value)) {
    return false
  }

  const replaceRegex = validateAlphanumeric ? /[./-]/g : /[A-Z./-]/g
  const cleanCNPJ = value.replaceAll(replaceRegex, '')

  if (!isAlphanumericCNPJ(cleanCNPJ) || cleanCNPJ === '00000000000000') {
    return false
  }

  const checkDigits = cleanCNPJ.slice(12)

  return checkDigits === calcCheckDigits(cleanCNPJ.slice(0, 12))
}

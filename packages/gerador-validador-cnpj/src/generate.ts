import {
  calcFirstCheckDigit,
  calcSecondCheckDigit,
  formatCNPJ,
  generateFirstDigits,
} from './utils/index.js'

/**
 * Generates a valid CNPJ (Cadastro Nacional da Pessoa Jurídica) number.
 * @param [params]         - Options for CNPJ generation.
 * @param [params.format] - If true, the generated CNPJ will be formatted (e.g., 00.000.000/0000-00).
 * @returns                 The generated CNPJ number, optionally formatted.
 */
export const generate = (params?: { format: boolean }): string => {
  const firstNineDigits = generateFirstDigits()

  const firstCheckDigit = calcFirstCheckDigit(firstNineDigits)
  const secondCheckDigit = calcSecondCheckDigit(
    `${firstNineDigits}${firstCheckDigit}`,
  )
  const generatedCNPJ = `${firstNineDigits}${firstCheckDigit}${secondCheckDigit}`

  return params?.format ? formatCNPJ(generatedCNPJ) : generatedCNPJ
}

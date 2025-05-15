import {
  calcFirstCheckDigit,
  calcSecondCheckDigit,
  formatCNPJ,
  generateCharacters,
} from './utils/index.js'

/**
 * Generates a valid CNPJ (Cadastro Nacional da Pessoa Jurídica) number.
 * @param [params]         - Options for CNPJ generation.
 * @param [params.format] - If true, the generated CNPJ will be formatted (e.g., 00.000.000/0000-00).
 * @param [params.alphanumeric] - If true, will generated an alphanumeric CNPJ.
 * @returns                 The generated CNPJ number, optionally formatted.
 */
export const generate = ({
  format,
  alphanumeric = false,
}: {
  format?: boolean
  alphanumeric?: boolean
} = {}): string => {
  const firstNineDigits = generateCharacters(alphanumeric)

  const firstCheckDigit = calcFirstCheckDigit(firstNineDigits)
  const secondCheckDigit = calcSecondCheckDigit(
    `${firstNineDigits}${firstCheckDigit}`,
  )
  const generatedCNPJ = `${firstNineDigits}${firstCheckDigit}${secondCheckDigit}`

  return format ? formatCNPJ(generatedCNPJ) : generatedCNPJ
}

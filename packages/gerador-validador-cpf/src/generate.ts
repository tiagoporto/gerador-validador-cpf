import {
  calcCheckDigit,
  formatCPF,
  generateDigits,
  IMPORTANCE_FIRST_DIGIT,
  IMPORTANCE_SECOND_DIGIT,
} from './utils/index.js'

/**
 * Generates a valid CPF (Cadastro de Pessoas Físicas) number.
 * @param [params]         - Options for CPF generation.
 * @param [params.format] - If true, the generated CPF will be formatted with dots and a dash (e.g., 123.456.789-09).
 * @returns                 The generated CPF number, optionally formatted.
 */
export const generate = (params?: { format: boolean }): string => {
  const firstNineDigits = generateDigits()

  const firstCheckDigit = calcCheckDigit(
    firstNineDigits,
    IMPORTANCE_FIRST_DIGIT,
  )
  const secondCheckDigit = calcCheckDigit(
    `${firstNineDigits}${firstCheckDigit}`,
    IMPORTANCE_SECOND_DIGIT,
  )
  const generatedCPF = `${firstNineDigits}${firstCheckDigit}${secondCheckDigit}`

  return params?.format ? formatCPF(generatedCPF) : generatedCPF
}

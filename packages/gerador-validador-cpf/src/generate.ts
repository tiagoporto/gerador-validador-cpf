import {
  calcFirstCheckDigit,
  calcSecondCheckDigit,
  formatCPF,
  generateFirstDigits,
} from './utils/index.js'

/**
 * Generates a valid CPF (Cadastro de Pessoas Físicas) number.
 * @param [params]         - Options for CPF generation.
 * @param [params.format] - If true, the generated CPF will be formatted with dots and a dash (e.g., 123.456.789-09).
 * @returns                 The generated CPF number, optionally formatted.
 */
export const generate = (params?: { format: boolean }): string => {
  const firstNineDigits = generateFirstDigits()

  const firstCheckDigit = calcFirstCheckDigit(firstNineDigits)
  const secondCheckDigit = calcSecondCheckDigit(
    `${firstNineDigits}${firstCheckDigit}`,
  )
  const generatedCPF = `${firstNineDigits}${firstCheckDigit}${secondCheckDigit}`

  return params?.format ? formatCPF(generatedCPF) : generatedCPF
}

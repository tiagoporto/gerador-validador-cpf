import {
  calcFirstChecker,
  calcSecondChecker,
  formatCNPJ,
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
  const firstChecker = calcFirstChecker(firstNineDigits)
  const secondChecker = calcSecondChecker(firstNineDigits + firstChecker)
  const generatedCPF = `${firstNineDigits}${firstChecker}${secondChecker}`
  return params?.format ? formatCNPJ(generatedCPF) : generatedCPF
}

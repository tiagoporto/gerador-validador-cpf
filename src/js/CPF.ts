/* eslint no-console: ["error", { allow: ["error", "warn"] }] */
export enum formatOptions {
  digits = 'digits',
  checker = 'checker'
}

const calcFirstChecker = (firstNineDigits: number): number => {
  let sum: number | null = null

  for (let j = 0; j < 9; ++j) {
    sum += Number(firstNineDigits.toString().charAt(j)) * (10 - j)
  }

  const lastSumChecker1 = sum % 11
  const checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1

  return checker1
}

const calcSecondChecker = (cpfWithChecker1: number): number => {
  let sum: null | number = null

  for (let k = 0; k < 10; ++k) {
    sum += Number(cpfWithChecker1.toString().charAt(k)) * (11 - k)
  }

  const lastSumChecker2 = sum % 11
  const checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2

  return checker2
}

const formatCPF = (value: string, formatter?: formatOptions): string | void => {
  let digitsSeparator = '.'
  let checkersSeparator = '-'

  if (formatter === 'digits') {
    digitsSeparator = ''
    checkersSeparator = ''
  } else if (formatter === 'checker') {
    digitsSeparator = ''
    checkersSeparator = '-'
  }

  if (value.length > 11) {
    return console.error('The value contains error. Has more than 11 digits.')
  } else if (value.length < 11) {
    return console.error('The value contains error. Has fewer than 11 digits.')
  } else {
    return (
      value.slice(0, 3) +
      digitsSeparator +
      value.slice(3, 6) +
      digitsSeparator +
      value.slice(6, 9) +
      checkersSeparator +
      value.slice(9, 11)
    )
  }
}

/**
 * generate a valid CPF number
 * @param  {string} [formatOption]   Formatting option
 * @return {string}                  Valid and formatted CPF
 */
export const generate = (formatOption?: formatOptions): string => {
  let firstNineDigits = ''

  // Generating the first CPF's 9 digits
  for (let i = 0; i < 9; ++i) {
    firstNineDigits += String(Math.floor(Math.random() * 9))
  }

  const checker1 = calcFirstChecker(Number(firstNineDigits))
  const generatedCPF =
    firstNineDigits +
    checker1 +
    calcSecondChecker(Number(firstNineDigits + checker1))

  return formatCPF(generatedCPF, formatOption) as string
}

/**
 * validate CPF numbers
 * @param  {(string|number)} value  CPF for validation
 * @return {boolean}                True = valid || False = invalid
 */
export const validate = (value: string | number): boolean => {
  if (typeof value !== 'string' && typeof value !== 'number') {
    console.warn('Unsupported value')
    return false
  }

  const cleanCPF = String(value).replace(/\.|-|\s/g, '')
  const firstNineDigits = cleanCPF.substring(0, 9)
  const checker = cleanCPF.substring(9, 11)

  if (cleanCPF.length !== 11) {
    return false
  }

  // Checking if all digits are equal
  for (let i = 0; i < 10; i++) {
    if (`${firstNineDigits}${checker}` === Array(12).join(String(i))) {
      return false
    }
  }

  const checker1 = calcFirstChecker(Number(firstNineDigits))
  const checker2 = calcSecondChecker(Number(`${firstNineDigits}${checker1}`))

  return checker.toString() === checker1.toString() + checker2.toString()
}

/**
 * format CPF numbers
 * @param  {(string|number)} value  Formatting value
 * @param  {string} [formatOption]  Formatting option
 *
 * @return {string}                 Formatted CPF || error message
 */
export const format = (
  value: string | number,
  formatOption?: formatOptions
): string | void => {
  if (!value) {
    return
  }

  const getCPF = String(value).replace(/[^\d]/g, '')

  return formatCPF(getCPF, formatOption)
}

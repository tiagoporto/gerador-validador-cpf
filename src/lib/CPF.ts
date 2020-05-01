export type formatOptions = 'digits' | 'checker' | 'default'

const calcFirstChecker = (firstNineDigits: string): number => {
  let sum = 0

  for (let j = 0; j < 9; ++j) {
    sum += Number(firstNineDigits.charAt(j)) * (10 - j)
  }

  const lastSumChecker1 = sum % 11
  const checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1

  return checker1
}

const calcSecondChecker = (cpfWithChecker1: string): number => {
  let sum = 0

  for (let k = 0; k < 10; ++k) {
    sum += Number(cpfWithChecker1.charAt(k)) * (11 - k)
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

const allDigitsAreEqual = (digits: string): boolean => {
  for (let i = 1; i < digits.length; ++i) {
    if (digits[i] !== digits[0]) {
      return false
    }
  }

  return true
}

/**
 * [Gerador e Validador de CPF](https://tiagoporto.github.io/gerador-validador-cpf)
 * @author Tiago Porto
 *
 * @function Generate
 * @param  {string} [formatOption="default"] - 'digits' | 'checker' | 'default'
 *
 * @returns {string}                  Valid and formatted CPF
 */
export const generate = (formatOption?: formatOptions): string => {
  let firstNineDigits: string

  // Generating the first CPF's 9 digits
  do {
    firstNineDigits = ''

    for (let i = 0; i < 9; ++i) {
      firstNineDigits += String(Math.floor(Math.random() * 10))
    }
  } while (allDigitsAreEqual(firstNineDigits))

  const checker1 = calcFirstChecker(firstNineDigits)
  const generatedCPF =
    firstNineDigits + checker1 + calcSecondChecker(firstNineDigits + checker1)

  return formatCPF(generatedCPF, formatOption) as string
}

/**
 *
 * [Gerador e Validador de CPF](https://tiagoporto.github.io/gerador-validador-cpf)
 * @author Tiago Porto
 *
 * @function Validate
 * @param  {(string|number)} value  CPF number
 *
 * @returns {boolean}                true = valid || false = invalid
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
  if (allDigitsAreEqual(`${firstNineDigits}${checker}`)) {
    return false
  }

  const checker1 = calcFirstChecker(firstNineDigits)
  const checker2 = calcSecondChecker(`${firstNineDigits}${checker1}`)

  return checker.toString() === checker1.toString() + checker2.toString()
}

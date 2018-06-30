const calcFirstChecker = firstNineDigits => {
  let sum = null

  for (let j = 0; j < 9; ++j) {
    sum += firstNineDigits.toString().charAt(j) * (10 - j)
  }

  const lastSumChecker1 = sum % 11
  const checker1 = (lastSumChecker1 < 2) ? 0 : 11 - lastSumChecker1

  return checker1
}

const calcSecondChecker = cpfWithChecker1 => {
  let sum = null

  for (let k = 0; k < 10; ++k) {
    sum += cpfWithChecker1.toString().charAt(k) * (11 - k)
  }

  const lastSumChecker2 = sum % 11
  const checker2 = (lastSumChecker2 < 2) ? 0 : 11 - lastSumChecker2

  return checker2
}

const formatCPF = (value, formatter) => {
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
    return 'The value contains error. Has more than 11 digits.'
  } else if (value.length < 11) {
    return 'The value contains error. Has fewer than 11 digits.'
  } else {
    return value.slice(0, 3) + digitsSeparator + value.slice(3, 6) + digitsSeparator + value.slice(6, 9) + checkersSeparator + value.slice(9, 11)
  }
}

/**
 * generate a valide CPF number
 * @param  {string} param      Formatting option
 * @return {string}            Valid and formatted CPF
 */
export const generate = param => {
  let firstNineDigits = ''

  // Generating the first 9 digits of the CPF
  for (let i = 0; i < 9; ++i) {
    firstNineDigits += String(Math.floor(Math.random() * 9))
  }

  const checker1 = calcFirstChecker(firstNineDigits)
  const generatedCPF = firstNineDigits + checker1 + calcSecondChecker(firstNineDigits + checker1)

  return formatCPF(generatedCPF, param)
}

/**
 * validate function
 * @param  {{string|number}} value      The value for validation
 * @return {boolean}           True = valid || False = invalid
 */
export const validate = value => {
  if (!value || value === true) {
    return
  }

  if (typeof value === 'number') {
    value = String(value)
  }

  const cleanCPF = value.replace(/\.|-|\s/g, '')
  const firstNineDigits = cleanCPF.substring(0, 9)
  const checker = cleanCPF.substring(9, 11)

  if (cleanCPF.length !== 11) {
    return false
  }

  // Checking if all digits are equal
  for (let i = 0; i < 10; i++) {
    if (`${firstNineDigits}${checker}` === Array(12).join(i)) {
      return false
    }
  }

  const checker1 = calcFirstChecker(firstNineDigits)
  const checker2 = calcSecondChecker(`${firstNineDigits}${checker1}`)

  if (checker.toString() === checker1.toString() + checker2.toString()) {
    return true
  } else {
    return false
  }
}

/**
 * format function
 * @param  {string} value      The value for formatting
 * @param  {string} param      Formatting option
 *
 * @return {string}            Formatted CPF || error message
 */
export const format = (value, param) => {
  if (!value) {
    return
  }

  const getCPF = value.replace(/[^\d]/g, '')

  return formatCPF(getCPF, param)
}

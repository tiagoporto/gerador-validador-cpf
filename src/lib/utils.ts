export const generateFirstDigits = (): string => {
  let digits = ''
  for (let i = 0; i < 9; ++i) {
    digits += String(Math.floor(Math.random() * 10))
  }

  return digits
}

export const hasCPFLength = (cpf: string): void | boolean => cpf.length === 11

// format option
// true   return 000.000.000-00
// false  return 00000000000
export const formatCPF = (cpf: string, format?: boolean): string => {
  let digitsSeparator = ''
  let checkersSeparator = ''

  if (format) {
    digitsSeparator = '.'
    checkersSeparator = '-'
  }

  return (
    cpf.slice(0, 3) +
    digitsSeparator +
    cpf.slice(3, 6) +
    digitsSeparator +
    cpf.slice(6, 9) +
    checkersSeparator +
    cpf.slice(9, 11)
  )
}

export const allDigitsAreEqual = (digits: string): boolean => {
  for (let i = 0; i < 10; i++) {
    if (digits === Array.from({ length: digits.length + 1 }).join(String(i))) {
      return true
    }
  }

  return false
}

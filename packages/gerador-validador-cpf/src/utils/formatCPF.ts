// format option
// true  - 000.000.000-00
// false - 00000000000
export const formatCPF = (cpf: string, format?: boolean) => {
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

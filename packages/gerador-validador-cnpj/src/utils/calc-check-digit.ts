export const calcCheckDigit = (cnpj: string, importanceArray: number[]) => {
  const DIFFERENCE_FROM_ASII_TO_VALUE = 48
  let sum = 0

  for (let i = 0; i < cnpj.length; i++) {
    const ascii = cnpj.codePointAt(i) ?? -1
    const calcValue = ascii - DIFFERENCE_FROM_ASII_TO_VALUE

    sum += calcValue * importanceArray[i]
  }

  const remainder = sum % 11

  return remainder < 2 ? 0 : 11 - remainder
}
